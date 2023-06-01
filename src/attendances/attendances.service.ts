import { Injectable } from '@nestjs/common';
import { CreateAttendanceInput } from './dto/create-attendance.input';
import { UpdateAttendanceInput } from './dto/update-attendance.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AttendancesService {
  constructor(private prisma: PrismaService) {}

  create(userId, data: CreateAttendanceInput) {
    return this.prisma.attendance.create({
      data: {
        attendance_date: data.attendance_date,
        time_in: data.time_in,
        time_out: data.time_out,
        picture: data.picture,
        user_id: userId,
      },
    });
  }

  findAll() {
    return this.prisma.attendance.findMany({});
  }

  findOne(id: number) {
    return this.prisma.attendance.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: number, data: UpdateAttendanceInput) {
    return this.prisma.attendance.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.attendance.delete({
      where: {
        id,
      },
    });
  }
}
