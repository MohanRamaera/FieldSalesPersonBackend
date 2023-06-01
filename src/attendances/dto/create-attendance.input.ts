import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAttendanceInput {
  @Field()
  user_id: string;

  @Field()
  time_in: string;

  @Field()
  time_out: string;

  @Field()
  picture: string;

  @Field(() => String)
  attendance_date: string;
}
