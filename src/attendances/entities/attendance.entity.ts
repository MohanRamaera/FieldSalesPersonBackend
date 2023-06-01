import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Attendance {
  @Field()
  user_id: string;

  @Field()
  attendance_dat: string;

  @Field()
  time_in: string;

  @Field()
  time_out: string;

  @Field()
  picture: string;
}
