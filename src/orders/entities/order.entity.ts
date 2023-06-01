import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Order {
  @Field(() => Number)
  retailer_id: number;

  @Field(() => String)
  user_id: string;

  @Field(() => String)
  order_date: string;

  @Field(() => Number)
  order_amount: number;

  @Field(() => Number)
  productId: number;
}
