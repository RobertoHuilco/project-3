import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { Book } from './book/entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BookModule,
    TypeOrmModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'project-3-bdd', //Aqui va el nombre de la BDD
      autoLoadEntities: true, //Actualiza automáticamente
      synchronize: true, //
      dropSchema: false,// Borra el squema y la data
      entities: [__dirname + '/**/*.entity{.ts,.js}']
    }),
    TypeOrmModule.forFeature([Book])
  ],
  controllers: [
    AppController,
    BookController
  ],
  providers: [
    AppService,
    BookService,
  ],
})
export class AppModule { }
