import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignupInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  name?: string;

  @Field()
  mobile_number?: string;

  @Field()
  role: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
