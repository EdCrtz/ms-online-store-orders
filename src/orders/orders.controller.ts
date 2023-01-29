import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Response,
  HttpStatus,
} from '@nestjs/common';

import { OrdersService } from './orders.service';
import { Orders } from './orders';
@Controller('api/v1/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() Orders: Orders, @Response() res) {
    const user = res.locals.user;
    Orders.userId = user.id;
    const response = await this.ordersService.create(Orders);
    return res.status(HttpStatus.OK).send(response);
  }

  @Get()
  async findAll(@Response() res) {
    const user = res.locals.user;
    const result = await this.ordersService.findAll(user.id);
    return res.status(HttpStatus.OK).send(result);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Orders> {
    return this.ordersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() Orders: Orders) {
    return this.ordersService.update(id, Orders);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.ordersService.remove(id);
  }
}
