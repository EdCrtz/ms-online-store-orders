import { Injectable } from '@nestjs/common';
import { Orders } from './orders';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class OrdersService {
  prisma = new PrismaClient();

  async create(order: Orders): Promise<Orders> {
    return this.prisma.order.create({ data: order });
  }

  async findAll(userId: string): Promise<Orders[]> {
    const x = await this.prisma.order.findMany({
      where: {
        user: {
          id: {
            equals: userId,
          },
        },
      },
    });
    return x;
  }

  async findOne(id: string): Promise<Orders> {
    return this.prisma.order.findFirst({ where: { id } });
  }

  async update(id: string, Orders: Orders): Promise<Orders> {
    console.log(Orders);
    return this.prisma.order.update({ where: { id }, data: Orders });
  }

  async remove(id: string): Promise<Orders> {
    return this.prisma.order.delete({ where: { id } });
  }
}
