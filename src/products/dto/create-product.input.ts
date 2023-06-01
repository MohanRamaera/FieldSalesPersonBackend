import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  product_name: string;

  @Field()
  product_weight: string;

  @Field()
  category: string;

  @Field()
  product_price: number;

  @Field()
  mfgDate: string;

  @Field()
  expDate: string;
}
