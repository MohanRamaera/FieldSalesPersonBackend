import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LocationsService } from './locations.service';
import { Location } from './entities/location.entity';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { User } from '@prisma/client';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { FindLocationInput } from './dto/find-loaction.input';

@Resolver(() => Location)
export class LocationsResolver {
  constructor(private readonly locationsService: LocationsService) {}

  @Mutation(() => Location)
  createLocation(
    @UserEntity() user: User,
    @Args('data') createLocationInput: CreateLocationInput
  ) {
    return this.locationsService.create(user.id, createLocationInput);
  }

  @Query(() => [Location], { name: 'locations' })
  findAll() {
    return this.locationsService.findAll();
  }

  @Query(() => Location, { name: 'location' })
  findLocationByDay(@Args('data') findlocationinput: FindLocationInput) {
    return this.locationsService.findLocationByDay(findlocationinput);
  }

  @Mutation(() => Location)
  updateLocation(
    @Args('updateLocationInput') updateLocationInput: UpdateLocationInput
  ) {
    return this.locationsService.update(
      updateLocationInput.id,
      updateLocationInput
    );
  }

  @Mutation(() => Location)
  removeLocation(@Args('id', { type: () => Int }) id: number) {
    return this.locationsService.remove(id);
  }
}
