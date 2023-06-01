import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDayplanInput {
  @Field()
  task_name?: string;
  @Field()
  task_details?: string;
  @Field()
  task_status?: string;
  @Field()
  remarks?: string;
  @Field()
  assignedBy?: string;

  @Field()
  userId?: string;
}
