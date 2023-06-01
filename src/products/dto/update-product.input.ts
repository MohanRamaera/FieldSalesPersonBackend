import { CreateProductInput } from './create-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field()
  id: number;

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
