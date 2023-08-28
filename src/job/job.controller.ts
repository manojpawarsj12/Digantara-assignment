import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { JobService } from './job.service';
import { JobEntity } from './entities/job.entity';
import { JobDto } from './dto/jonDto';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  findAllJobs(): Promise<JobEntity[]> {
    return this.jobService.findAllJobs();
  }

  @Get(':id')
  findJobById(@Param('id') id: number): Promise<JobEntity | undefined> {
    return this.jobService.findJobById(id);
  }

  @Post()
  createJob(@Body() jobData: JobDto): Promise<JobEntity> {
    return this.jobService.createJob(jobData);
  }
}
