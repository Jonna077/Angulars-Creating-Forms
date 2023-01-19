import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Author } from '../models/author';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  bookChanged = new Subject<Book[]>();

  private books: Book[] = [
    new Book(
      101,
      'Noli Me Tangere',
      [new Author('Dr. Jose P. RizaL'), new Author('Jose Rizal')],
      '1225896487'
    ),
    new Book(
      102,
      'The Great Gatsby',
      [new Author('F. Scott Fitzgerald'), new Author('Scott Fitzgerald')],
      '2658745210'
    ),
    new Book(
      103,
      'Invisible Man',
      [new Author('Ralph Ellison'), new Author('Raplh')],
      '8954256301'
    ),
  ];


  constructor() { }

  setBooks(books: Book[]) {
    this.books = books;
    this.bookChanged.next(this.books.slice());
  }

  getBooks() {
    return this.books.slice();

  }

  getBook(index: number) {
    return this.books[index];
  }

  addBook(book: Book) {
    this.books.push(book);
    this.bookChanged.next(this.books.slice());
  }

  updateBook(index: number, newBook: Book) {
    this.books[index] = newBook;
    this.bookChanged.next(this.books.slice());
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
    this.bookChanged.next(this.books.slice());
  }

  deleteAllBooks() {
    this.books = [];
    this.bookChanged.next(this.books.slice());
  }
}
