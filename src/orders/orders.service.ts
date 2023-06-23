import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(data1: CreateOrderInput) {
    // const productIds = [];
    // data1.productId.map(async (productid) => {
    //   const orderProducts = [];
    //   const products = await this.prisma.product.findUnique({
    //     where: {
    //       id: productid,
    //     },
    //   });
    //   if (products) {
    //     orderProducts.push(products);
    //     productIds.push(products.id);
    //   }
    //   console.log(orderProducts);
    //   console.log(productIds);
    // });

    const order = await this.prisma.order.create({
      data: {
        productId: data1.productId,
        quantity: data1.quantity,
      },
    });
    return order;
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

  // update(id: number, updateOrderInput: UpdateOrderInput) {
  //   return this.prisma.order.update({
  //     where: {
  //       id,
  //     },
  //     data: updateOrderInput,
  //   });
  // }

  remove(id: number) {
    return this.prisma.order.delete({
      where: {
        id,
      },
    });
  }
}
