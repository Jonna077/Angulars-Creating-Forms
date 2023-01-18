import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Blog } from '../models/blog';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogChanged = new Subject<Blog[]>();

  private blogs: Blog[] = [
    new Blog(
      1,
      'How to cook an egg',
      'This is blog on how to cook an egg',
      'Daisy Taichou',
      [new Comment('That was so easy!'), new Comment('I love eggs!')]
    ),

    new Blog(
      2,
      'How to cook an adobo',
      'This is blog on how to cook an egg',
      'Euphytaichou',
      [
        new Comment('That is the Filipino food!'),
        new Comment('Adobe is the best!'),
      ]
    ),
  ];

  constructor() {}

  getBlogs() {
    return this.blogs.slice();
    // return this.https.get('http://localhost:3000/books');
  }

  getBlog(index: number) {
    return this.blogs[index];
  }

  addBlog(book: Blog) {
    this.blogs.push(book);
    this.blogChanged.next(this.blogs.slice());
  }

  updateBlog(index: number, newBlog: Blog) {
    this.blogs[index] = newBlog;
    this.blogChanged.next(this.blogs.slice());
  }

  deleteBlog(index: number) {
    this.blogs.splice(index, 1);
    this.blogChanged.next(this.blogs.slice());
  }
}
