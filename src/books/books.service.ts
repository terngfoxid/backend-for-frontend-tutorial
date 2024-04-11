import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/models/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
    ) { }

    async create(book: Book): Promise<Book> {
        const newBook = new Book();
        newBook.create(book)
        return await this.bookRepository.save(newBook);
    }

    async update(book: Book): Promise<Book> {
        const update = await this.bookRepository.findOneBy({ id: book.id });
        update.update(book);
        return await this.bookRepository.save(update);
    }

    async readOne(id: number): Promise<Book> {
        return await this.bookRepository.findOneBy({ id: id });
    }

    async readAll(): Promise<Book[]> {
        return await this.bookRepository.findBy({isDelete : false});
    }

    async delete(id: number): Promise<Book> {
        const update = await this.bookRepository.findOneBy({ id: id });
        update.delete();
        return await this.bookRepository.save(update);
    }
}
