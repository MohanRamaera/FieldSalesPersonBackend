import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DayplansService } from './dayplans.service';
import { Dayplan } from './entities/dayplan.entity';
import { CreateDayplanInput } from './dto/create-dayplan.input';
import { UpdateDayplanInput } from './dto/update-dayplan.input';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { User } from '@prisma/client';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';

@Resolver(() => Dayplan)
export class DayplansResolver {
  constructor(private readonly dayplansService: DayplansService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Dayplan)
  createDayplan(
    @UserEntity() user: User,
    @Args('data') createDayplanInput: CreateDayplanInput
  ) {
    return this.dayplansService.create(user.id, createDayplanInput);
  }

  @Query(() => [Dayplan], { name: 'dayplans' })
  findAll(@UserEntity() user: User) {
    return this.dayplansService.findAll(user.id);
  }

  @Query(() => Dayplan, { name: 'dayplan' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.dayplansService.findOne(id);
  }

  @Mutation(() => Dayplan)
  updateDayplan(@Args('data') updateDayplanInput: UpdateDayplanInput) {
    return this.dayplansService.update(
      updateDayplanInput.id,
      updateDayplanInput
    );
  }

  @Mutation(() => Dayplan)
  removeDayplan(@Args('id', { type: () => Int }) id: number) {
    return this.dayplansService.remove(id);
  }
}
