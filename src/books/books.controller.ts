import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookRequest, UpdateBookLoanStatusRequest } from './models';

@Controller('books')
export class BooksController {

    constructor(private service: BooksService) { }

    @Get()
    async getAllBooks() {
        return {
            data: await this.service.getAll()
        }
    }

    @Post()
    async addBook(@Body() book: CreateBookRequest) {
        const addedBook = await this.service.addOne(book);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(addedBook)
            }, 3000)
        })
    }


    @Patch()
    async updateSongLoanStatusInLibrary(@Body() book: UpdateBookLoanStatusRequest) {
        const updatedBook = await this.service.updateBookLoanStatus(book);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(updatedBook)
            }, 3000)
        })
    }
}
