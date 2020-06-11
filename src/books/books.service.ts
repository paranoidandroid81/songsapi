import { Injectable } from '@nestjs/common';
import { BookListItem, CreateBookRequest, BookFormats, UpdateBookLoanStatusRequest } from './models';
import * as cuid from 'cuid';
@Injectable()
export class BooksService {

    private books: BookListItem[] = [
        { id: '1', title: 'Dubliners', author: 'James Joyce', format: BookFormats.PAPERBACK, onLoan: false },
        { id: '2', title: 'A Clash of Kings', author: 'George RR Martin', format: BookFormats.HARDCOVER, onLoan: false },
        { id: '3', title: 'Do Androids Dream of Electric Sheep?', author: 'Philip K. Dick', format: BookFormats.EBOOK, onLoan: false }
    ];


    async getAll() {
        return this.books;
    }

    async addOne(book: CreateBookRequest) {
        const bookToAdd: BookListItem = {
            ...book,
            id: cuid(),
        };
        this.books = [bookToAdd, ...this.books];
        return bookToAdd;
    }

    async updateBookLoanStatus(book: UpdateBookLoanStatusRequest) {
        const bookToUpdate: BookListItem = this.books.filter(curr => curr.id === book.id)[0];
        bookToUpdate.onLoan = book.onLoan;
        return bookToUpdate;
    }
}
