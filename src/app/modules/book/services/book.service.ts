import { HttpClient } from '@angular/common/http';
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
      1,
      '境界の彼方',
      [new Author('Taichi Ishidate'), new Author('Arisa Takigawa')],
      '978-0062315007'
    ),
    new Book(
      2,
      'あそびあそばせ',
      [new Author('Seiji Kishi'), new Author('Inori Minase')],
      '978-0743273567'
    ),
    new Book(
      3,
      '四月は君の嘘',
      [new Author('Takehiko Shinjō'), new Author('Yukari Hashimoto')],
      '978-0446310789'
    ),
  ];
  // {
  //   id: 1,
  //   name: '境界の彼方',
  //   authors: 'Taichi Ishidate, Arisa Takigawa',
  //   isbn: '978-0062315007',
  // },
  // {
  //   id: 2,
  //   name: 'あそびあそばせ',
  //   authors: 'Seiji Kishi, Inori Minase',
  //   isbn: '978-0743273567',
  // },
  // {
  //   id: 3,
  //   name: '四月は君の嘘',
  //   authors: 'Takehiko Shinjō, Yukari Hashimoto',
  //   isbn: '978-0446310789',
  // },

  constructor() {}

  setBooks(books: Book[]) {
    this.books = books;
    this.bookChanged.next(this.books.slice());
  }

  getBooks() {
    return this.books.slice();
    // return this.https.get('http://localhost:3000/books');
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
