import { CreateAttendanceInput } from './create-attendance.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAttendanceInput extends PartialType(CreateAttendanceInput) {
  @Field(() => Int)
  id: number;

  @Field()
  attendance_date: string;

  @Field()
  time_in: string;
  @Field()
  time_out: string;
  @Field()
  picture: string;
}
