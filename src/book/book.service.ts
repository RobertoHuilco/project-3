import { Injectable, Body } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity';
import { Repository } from 'typeorm';
import { Pagination } from './dto/bookpagination';

@Injectable()
export class BookService {

  constructor(@InjectRepository(BookEntity) private readonly bookRepository: Repository<BookEntity>,
  ) { }
  //
  async create(createBookDto: CreateBookDto) {
    const book = this.bookRepository.create(createBookDto);
    await this.bookRepository.save(book);
    return book;
  }
  //
  async findAll(paginacionDto:Pagination) {
    const{limit=10, offset=1}=paginacionDto;
  
    return await this.bookRepository.find({
      take:limit,
      skip:offset
    });
  }
  //
  async findOne(id: number) {
    const book = await this.bookRepository.findOne({
      where: { id }
    });
    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const book = await this.bookRepository.findOne({
      where: { id }
    });
    if (!book) {
      throw new Error(`Book with id ${id} not found`);
    }
    Object.assign(book, updateBookDto);
    await this.bookRepository.save(book);
    return book;
  }

  async remove(id: number) {
    const book = await this.bookRepository.findOne({
      where: { id }
    });
    if (!book) {
      throw new Error(`Book with id ${id} not found`);
    }
    await this.bookRepository.remove(book);
    return book;
  }
}
