import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { JobEntity } from './entities/job.entity';
import { Job, scheduleJob } from 'node-schedule';
import { parseExpression } from 'cron-parser';
import { JobDto } from './dto/jonDto';

@Injectable()
export class JobService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(JobEntity)
    private readonly jobRepository: Repository<JobEntity>,
  ) {}
  async onApplicationBootstrap() {
    const jobs = await this.jobRepository.find();
    for (const job of jobs) {
      this.scheduleJobs(job);
    }
  }
  async createJob(jobData: JobDto): Promise<JobEntity> {
    try {
      console.log('createJob request body', jobData);
      const jobAttributes = JSON.parse(jobData.attributes);
      const interval = parseExpression(jobData.cronExpression);
      const jobEntity = this.jobRepository.create(jobData);
      const savedJob = await this.jobRepository.save(jobEntity);
      await this.scheduleJobs(savedJob);
      console.log('createJob success', savedJob);
      return savedJob;
    } catch (err) {
      console.error('ERR in saving job', err);
      throw err;
    }
  }
  async scheduleJobs(savedJob: DeepPartial<JobEntity>) {
    try {
      console.log('Starting for job', savedJob);
      const cronExpression = savedJob.cronExpression;
      const jobAttributes = JSON.parse(savedJob.attributes);
      const jobName = savedJob.name;
      const interval = parseExpression(savedJob.cronExpression);
      let nextRun = interval.next();
      scheduleJob(savedJob.id.toString(), cronExpression, async () => {
        console.log(`Running job: ${savedJob.name}`);
        const result = this.numberCrunching(jobAttributes);
        console.log(`Result of number crunching for job ${jobName}: ${result}`);
        const updatedJob = await this.jobRepository.preload({
          id: savedJob.id,
          nextRun,
        });
        await this.jobRepository.save(updatedJob);
        nextRun = interval.next();
      });
    } catch (err) {
      console.error('Error in running jon', savedJob, err);
    }
  }

  async findAllJobs(): Promise<JobEntity[]> {
    return this.jobRepository.find({});
  }

  async findJobById(id: number): Promise<JobEntity | undefined> {
    return this.jobRepository.findOneBy({ id });
  }
  private numberCrunching(jobAttributes: any): number {
    const limit = jobAttributes.limit || 100000;
    console.log('numberCrunching limit', limit, jobAttributes);
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
      sum += i;
    }
    return sum;
  }
}
