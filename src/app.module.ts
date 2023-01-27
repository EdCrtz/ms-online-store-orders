import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { OrdersModule } from './orders/Orders.module';

@Module({
  imports: [OrdersModule],
  providers: [AppService],
})
export class AppModule {}
