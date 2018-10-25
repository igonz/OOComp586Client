import { Component, OnInit } from '@angular/core';
import {Book} from "../models/book";
import {BookService} from "../book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookList:Book[];

  constructor(private bookService:BookService, private router:Router) {
  }

  ngOnInit() {
    this.bookService.getAllBooks()
      .subscribe((books) =>{
        this.bookList = books;
      })
  }
}
