import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AttendancesService } from './attendances.service';
import { Attendance } from './entities/attendance.entity';
import { CreateAttendanceInput } from './dto/create-attendance.input';
import { UpdateAttendanceInput } from './dto/update-attendance.input';
import { UserEntity } from 'src/common/decorators/user.decorator';
import { User } from '@prisma/client';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';

@Resolver(() => Attendance)
export class AttendancesResolver {
  constructor(private readonly attendancesService: AttendancesService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Attendance)
  createAttendance(
    @UserEntity() user: User,

    @Args('data') createAttendanceInput: CreateAttendanceInput
  ) {
    return this.attendancesService.create(user.id, createAttendanceInput);
  }

  @Query(() => [Attendance], { name: 'attendances' })
  findAll() {
    return this.attendancesService.findAll();
  }

  @Query(() => Attendance, { name: 'attendance' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attendancesService.findOne(id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Attendance)
  updateAttendance(
    @UserEntity() user: User,
    @Args('data')
    data: UpdateAttendanceInput
  ) {
    return this.attendancesService.update(user.id, data);
  }

  @Mutation(() => Attendance)
  removeAttendance(@Args('id', { type: () => Int }) id: number) {
    return this.attendancesService.remove(id);
  }
}
