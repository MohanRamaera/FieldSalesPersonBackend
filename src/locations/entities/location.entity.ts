import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Location {
  @Field()
  user_id: string;

  @Field(() => String, { nullable: true })
  location_latitude: string;

  @Field(() => String, { nullable: true })
  location_longitude: string;
}
