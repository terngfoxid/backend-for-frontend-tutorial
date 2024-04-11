import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from 'src/models/book.entity';

@Controller('books')
export class BooksController {
    constructor(private readonly bookService: BooksService) { }

    @Post()
    async create(@Body() data: Book): Promise<Book> {
        return await this.bookService.create(data);
    }

    @Put()
    async update(@Body() data: Book): Promise<Book> {
        return await this.bookService.update(data);
    }

    @Get()
    async readAll(): Promise<Book[]> {
        return await this.bookService.readAll();
    }

    @Get(':id')
    async readOne(@Param('id') id: number): Promise<Book> {
        return await this.bookService.readOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<Book> {
        return await this.bookService.delete(id);
    }
}
