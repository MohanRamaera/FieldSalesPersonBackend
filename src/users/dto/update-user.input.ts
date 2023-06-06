import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  name?: string;
  @Field({ nullable: true })
  mobile_number?: string;

  @Field({ nullable: true })
  user_profile_photo?: string;
}
