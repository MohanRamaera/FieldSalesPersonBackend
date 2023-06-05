import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Dayplan {
  @Field()
  task_name: string;
  @Field()
  task_details: string;
  @Field()
  task_status: string;
  @Field()
  remarks: string;
  @Field()
  id?: number;
  @Field()
  assignedBy?: string;
}
