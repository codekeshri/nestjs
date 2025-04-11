import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import {v4 as uuidv4} from "uuid"


@Injectable()
export class BookService {
    public books: Book[]=[]

    addBookService(book: Book): string {
        // id generate
        book.id = uuidv4()
        this.books.push(book)
        return `book has been successfully added`
    }

    updateBookService(book: Book): string{
        let index = this.books.findIndex(currentBook=>currentBook.id === book.id)
        this.books[index]=book
        return `book has been successfully updated`
    }

    deleteBookService(bookId: string): string{
        this.books = this.books.filter((currentBook)=>currentBook.id !== bookId)
        return `book has been deleted successfully`
    }

    findAllBooks(): Book[]{
        return this.books
    }
}