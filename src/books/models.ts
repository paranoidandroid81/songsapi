export interface BookListItem {
    id: string;
    title: string;
    author: string;
    format: string;
    onLoan: boolean;
}

export class CreateBookRequest {
    title: string;
    author: string;
    format: string;
    onLoan: boolean;
}

export class UpdateBookLoanStatusRequest {
    id: string;
    onLoan: boolean;
}

export enum BookFormats {
    PAPERBACK = "Paperback",
    HARDCOVER = "Hardcover",
    EBOOK = "E-Book"
}