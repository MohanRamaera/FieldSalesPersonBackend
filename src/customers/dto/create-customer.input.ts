import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
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
