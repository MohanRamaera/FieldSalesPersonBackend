import { Injectable } from '@nestjs/common';
import { CreateCustomerInput } from './dto/create-customer.input';
import { UpdateCustomerInput } from './dto/update-customer.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  create(userId, data: CreateCustomerInput) {
    return this.prisma.customer.create({
      data: {
        ...data,
        createdBy: userId,
      },
    });
  }

  findAll() {
    return this.prisma.customer.findMany({});
  }

  findOne(id: number) {
    return this.prisma.customer.findFirst({
      where: { id },
    });
  }

  update(id: number, data: UpdateCustomerInput) {
    return this.prisma.customer.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.customer.delete({
      where: {
        id,
      },
    });
  }
}
