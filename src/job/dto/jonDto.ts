import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class JobDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'job1' })
  name: string;

  @IsString()
  @IsNotEmpty()
  // eslint-disable-next-line prettier/prettier
  @ApiProperty({ example: "{\"limit\":50}" })
  attributes: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '*/10 * * * * *' })
  cronExpression: string;
}
