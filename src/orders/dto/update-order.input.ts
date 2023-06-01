import { CreateOrderInput } from './create-order.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {
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
