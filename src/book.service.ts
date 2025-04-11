import { Injectable } from "@nestjs/common"

@Injectable()
export class BookService {
    addBook(): string {
        return `This will add book`
    }

    updateBook(): string {
        return `This will update book`
    }

    deleteBook(): string{
        return `This will delete book`
    }

    findBooks(): string {
        return `This will find all books`
    }
}