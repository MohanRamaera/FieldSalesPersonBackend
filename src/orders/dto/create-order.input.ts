import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => Int)
  customer_id: number;

  @Field(() => String)
  delivery_date: string;

  @Field(() => [Int])
  productId: number[];

  @Field(() => [Int])
  quantity: number[];
}
