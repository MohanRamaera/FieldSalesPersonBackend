import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Dayplan {
  @Field({ nullable: true })
  task_name: string;
  @Field({ nullable: true })
  task_details: string;
  @Field({ nullable: true })
  task_status: string;
  @Field({ nullable: true })
  remarks: string;
  @Field()
  id?: number;
  @Field({ nullable: true })
  assignedBy?: string;
}
