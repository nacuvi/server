import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsString } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class User extends CoreEntity {
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
