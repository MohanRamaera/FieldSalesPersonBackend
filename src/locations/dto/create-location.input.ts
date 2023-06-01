import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLocationInput {
  @Field()
  location_latitude: string;

  @Field()
  location_longitude: string;
}
