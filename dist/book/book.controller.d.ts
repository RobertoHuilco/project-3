import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(createBookDto: CreateBookDto): Promise<import("./entities/book.entity").Book>;
    findAll(): Promise<import("./entities/book.entity").Book[]>;
    findOne(id: string): Promise<import("./entities/book.entity").Book>;
    update(id: string, updateBookDto: UpdateBookDto): string;
    remove(id: string): string;
}
