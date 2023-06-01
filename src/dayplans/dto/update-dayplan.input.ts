import { CreateDayplanInput } from './create-dayplan.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDayplanInput extends PartialType(CreateDayplanInput) {
  @Field(() => Int)
  id: number;

  @Field()
  task_name: string;
  @Field()
  task_details: string;
  @Field()
  task_status: string;
  @Field()
  remarks: string;

  @Field()
  userId?: string;

  @Field()
  assignedBy?: string;
}
