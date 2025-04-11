import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";

@Controller("book")
export class BookController {

    // NestJS provided the object
    constructor(private bookService: BookService){}


    @Post("/add")
    addBook(): string{
        return this.bookService.addBook()
    }

    @Delete("/delete")
    deleteBook():string{
        return this.bookService.deleteBook()
    }

    @Put("/update")
    updateBook(): string{
        return this.bookService.updateBook()
    }

    @Get("/findall")
    findAllBooks(): string{
        return this.bookService.findBooks()
    }

    @Get("findBookById/:bookId")
    findOne(@Param() params): any{
        console.log(params.bookId)
        return `This is a book of ${params.bookId} id`
    }

}