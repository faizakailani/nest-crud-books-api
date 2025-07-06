import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // sesuaikan kalau ada password
      database: 'nest_books_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    BooksModule,
  ],
})
export class AppModule {}
