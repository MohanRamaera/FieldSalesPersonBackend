import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Order {
  @Field()
  id?: number;

  @Field(() => String)
  order_date: string;

  @Field(() => Number)
  order_amount: number;

  @Field(() => [Number])
  productId: number[];

  @Field(() => [Number])
  quantity: number[];
}
