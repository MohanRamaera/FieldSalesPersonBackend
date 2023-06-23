import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Order {
  @Field()
  id?: number;

  @Field()
  customer_id?: number;

  @Field(() => String)
  order_date: string;

  @Field(() => String)
  delivery_date: string;

  @Field(() => [Int])
  productId: number[];

  @Field(() => [Int])
  quantity: number[];
}
