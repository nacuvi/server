import { Field, ObjectType } from '@nestjs/graphql';
import { IsDate, IsInt } from 'class-validator';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
export class CoreEntity {
  @PrimaryGeneratedColumn({ comment: 'Primary key' })
  @Field(() => Number)
  @IsInt()
  id: number;

  @CreateDateColumn({ comment: 'Create date' })
  @Field(() => Date)
  @IsDate()
  createAt: Date;

  @UpdateDateColumn({ comment: 'Update date' })
  @Field(() => Date)
  @IsDate()
  updateDate: Date;
}
