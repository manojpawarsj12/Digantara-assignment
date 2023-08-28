import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { JobEntity } from './entities/job.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [JobController],
  providers: [JobService],
  imports: [TypeOrmModule.forFeature([JobEntity])],
})
export class JobModule {}
