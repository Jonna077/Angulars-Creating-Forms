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
      1101,
      'Noli Me Tangere',
      'Filipino Novel',
      'Dr. Jose Rizal',
      [new Comment('Great Story'), new Comment('Nice Novel')]
    ),

    new Blog(
      1102,
      'The Great Gatsby',
      'English Novel',
      'F. Scott Fitzgerald',
      [
        new Comment('uUtimately unattainable'),
        new Comment('Great Love Story'),
      ]
    ),
  ];

  constructor() { }

  getBlogs() {
    return this.blogs.slice();
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
