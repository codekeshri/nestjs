import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BookController } from './app.controller';
import { BookService } from './book.service';
import { BookModule } from './book/book.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [BookModule, OrdersModule],
  controllers: [],
  providers: [],
  exports: []
})
export class RootModule {
  constructor(){
    console.log("RootModule")
  }
}
