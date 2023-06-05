import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Customer {
  @Field()
  name?: string;
  @Field()
  id?: number;
  @Field()
  type?: string;
  @Field()
  createdBy?: string;
  @Field()
  contact_number?: string;
  @Field()
  address?: string;
}
