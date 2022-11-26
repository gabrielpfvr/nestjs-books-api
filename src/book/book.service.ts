import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
    private books: Book[] = [
        {
            id: 1,
            name: "Fellowship of The Ring",
            author: "J. R. R. Tolkien",
            tags: ["fantasy", "english", "adventure"]
        },
    ];

    findAll() {
        return this.books;
    }

    findOne(id: Number) {
        return this.books.find(book => book.id === id);
    }

    create(request: any) {
        this.books.push(request);
    }

    update(id: string, updateRequest: any) {
        const index = this.books.findIndex(book => book.id === Number(id));
        this.books[index] = updateRequest;
    }

    delete(id: string) {
        const index = this.books.findIndex(book => book.id === Number(id));
        
        if (index >= 0) {
            this.books.splice(index, 1);
        }
    }
}
