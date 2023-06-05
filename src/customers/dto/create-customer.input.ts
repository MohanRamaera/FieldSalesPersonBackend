import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field()
  name?: string;
  @Field()
  type?: string;
  @Field()
  createdBy?: string;
  @Field({ nullable: true })
  contact_number?: string;
  @Field({ nullable: true })
  address?: string;
}
