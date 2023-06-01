import { CreateCustomerInput } from './create-customer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCustomerInput extends PartialType(CreateCustomerInput) {
  @Field(() => Int)
  id: number;

  @Field()
  name?: string;
  @Field()
  type?: string;
  @Field()
  createdBy?: string;
  @Field()
  contact_number?: string;
  @Field()
  address?: string;
}
