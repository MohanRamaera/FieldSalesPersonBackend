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
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderInput: UpdateOrderInput) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
