import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  ngOnInit(): void {}
  // bookFormAdd: FormGroup;
  // authorsForm: FormArray;
  // constructor(private fb: FormBuilder) {
  //   this.bookFormAdd = this.fb.group({
  //     name: new FormControl('KEKW'),
  //     authors: this.fb.array([
  //       new FormControl('daisy'),
  //       new FormControl('syete'),
  //     ]),
  //     isbn: new FormControl('1234123'),
  //   });
  //   this.authorsForm = this.bookFormAdd.get('authors') as FormArray;
  // }
  // ngOnInit(): void {
  //   this.authorsForm.valueChanges.subscribe((data) => {
  //     console.log(data);
  //   });
  // }
  // onSubmit = () => {
  //   const theBook:Book = this.bookForm.getRawValue() as Book;
  //   console.log(theBook);
  //   // this.submitted.emit(this.bookForm);
  // }
}
