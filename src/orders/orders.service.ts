import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  create(userId, data: CreateOrderInput) {
    const orderDetals = this.prisma.order.create({
      data: {
        ...data,
        user_id: userId,
      },
    });
    return orderDetals;
  }

  findAll() {
    return this.prisma.order.findMany({});
  }

  findOne(id: number) {
    return this.prisma.order.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: number, updateOrderInput: UpdateOrderInput) {
    return this.prisma.order.update({
      where: {
        id,
      },
      data: updateOrderInput,
    });
  }

  remove(id: number) {
    return this.prisma.order.delete({
      where: {
        id,
      },
    });
  }
}
