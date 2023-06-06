import { InputType, Int, Field, GraphQLISODateTime } from '@nestjs/graphql';

@InputType()
export class FindLocationInput {
  @Field()
  user_id?: string;

  @Field(() => GraphQLISODateTime)
  locationStartDate?: Date;

  @Field(() => GraphQLISODateTime)
  locationEndDate?: Date;
}
