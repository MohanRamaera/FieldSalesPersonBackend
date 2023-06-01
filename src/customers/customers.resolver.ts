import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { Customer } from './entities/customer.entity';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { User } from '@prisma/client';

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}

  @Mutation(() => Customer)
  createCustomer(
    @UserEntity() user: User,
    @Args('data') createCustomerInput: CreateCustomerInput
  ) {
    return this.customersService.create(user.id, createCustomerInput);
  }

  @Query(() => [Customer], { name: 'customers' })
  findAll() {
    return this.customersService.findAll();
  }

  @Query(() => Customer, { name: 'customer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.customersService.findOne(id);
  }

  @Mutation(() => Customer)
  updateCustomer(@Args('data') updateCustomerInput: UpdateCustomerInput) {
    return this.customersService.update(
      updateCustomerInput.id,
      updateCustomerInput
    );
  }

  @Mutation(() => Customer)
  removeCustomer(@Args('id', { type: () => Int }) id: number) {
    return this.customersService.remove(id);
  }
}
