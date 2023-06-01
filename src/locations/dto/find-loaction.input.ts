import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class FindLocationInput {
  @Field()
  id: number;

  @Field()
  locationStartDate: Date;

  @Field()
  locationEndDate: Date;
}
