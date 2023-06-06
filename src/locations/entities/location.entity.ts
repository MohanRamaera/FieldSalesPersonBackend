import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Location {
  @Field()
  user_id: string;

  @Field(() => Number, { nullable: true })
  location_latitude: number;

  @Field(() => Number, { nullable: true })
  location_longitude: number;
}
