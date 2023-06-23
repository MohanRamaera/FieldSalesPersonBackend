import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateProductInput) {
    const productCreated = this.prisma.product.create({
      data,
    });
    return productCreated;
  }

  findAll() {
    return this.prisma.product.findMany({});
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, data: UpdateProductInput) {
    return this.prisma.product.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
