import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  product_name: string;

  @Field(() => String)
  product_weight: string;

  @Field(() => String)
  category: string;

  @Field(() => Number)
  product_price: number;

  @Field(() => String)
  mfgDate: String;

  @Field(() => String)
  expDate: String;
}
