import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsString } from 'class-validator';
import { BaseEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType()
@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({ length: 20, comment: 'username', nullable: false })
  @Field(() => String)
  @IsString()
  username: string;

  @Column({ comment: 'active user', nullable: false })
  @Field(() => Boolean)
  @IsBoolean()
  isActive: boolean;

  @Column({ length: 806, comment: 'rsa private key', nullable: false })
  @Field(() => String)
  @IsString()
  rsaPrivateKey: string;
}
