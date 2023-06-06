import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class FindLocationInput {
  @Field()
  user_id: string;

  @Field()
  locationStartDate: Date;

  @Field()
  locationEndDate: Date;
}
