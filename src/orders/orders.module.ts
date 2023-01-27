import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthMiddleware } from '../auth/auth.middleware';
@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('api/v1/Orderss');
  }
}
