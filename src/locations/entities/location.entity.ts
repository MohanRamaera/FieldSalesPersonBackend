import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Location {
  @Field()
  user_id: string;

  @Field()
  id?: number;

  @Field()
  location_latitude: string;

  @Field()
  location_longitude: string;
}
