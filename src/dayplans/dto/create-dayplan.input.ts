import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDayplanInput {
  @Field({ nullable: true })
  task_name?: string;
  @Field({ nullable: true })
  task_details?: string;
  @Field({ nullable: true })
  task_status?: string;
  @Field({ nullable: true })
  remarks?: string;
  @Field()
  user_id?: string;
}
