import { Injectable } from '@nestjs/common';
import { CreateDayplanInput } from './dto/create-dayplan.input';
import { UpdateDayplanInput } from './dto/update-dayplan.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class DayplansService {
  constructor(private prisma: PrismaService) {}
  create(userId, data: CreateDayplanInput) {
    return this.prisma.dayPlan.create({
      data: {
        ...data,
        assigned_by: userId,
        user_id: data.user_id,
      },
    });
  }

  findAll(userId: string) {
    return this.prisma.dayPlan.findMany({
      where: {
        user_id: userId,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.dayPlan.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: number, data: UpdateDayplanInput) {
    return this.prisma.dayPlan.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.dayPlan.delete({
      where: {
        id,
      },
    });
  }
}
