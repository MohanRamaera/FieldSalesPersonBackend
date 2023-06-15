import 'reflect-metadata';
import { ObjectType, HideField, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class User extends BaseModel {
  @Field()
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  mobile_number?: string;

  @Field(() => String, { nullable: true })
  role: string;

  @Field(() => String, { nullable: true })
  user_profile_photo: string;

  @HideField()
  password: string;
}
