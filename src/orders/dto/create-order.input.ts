import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => Number)
  retailer_id: number;

  @Field(() => String)
  user_id: string;

  @Field(() => Number)
  order_amount: number;

  @Field(() => Number)
  productId: number;
}
