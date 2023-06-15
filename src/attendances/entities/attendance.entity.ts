import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Attendance {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  attendance_date: string;

  @Field({ nullable: true })
  time_in: string;

  @Field({ nullable: true })
  time_out: string;

  @Field({ nullable: true })
  picture: string;

  @Field({ nullable: true })
  user_id: string;
}
