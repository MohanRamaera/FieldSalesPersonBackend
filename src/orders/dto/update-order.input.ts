import { CreateOrderInput } from './create-order.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrderInput extends PartialType(CreateOrderInput) {
  @Field(() => Number)
  retailer_id?: number;

  @Field(() => Number)
  id?: number;

  @Field(() => Number)
  order_amount?: number;
}
