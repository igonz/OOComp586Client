import {Component, OnInit} from '@angular/core';
import {Book} from "../models/book";
import {BookService} from "../book.service";
import {Router} from "@angular/router";
import {OktaAuthService} from "@okta/okta-angular";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookList: Book[];
  isAuthenticated: boolean;

  constructor(private bookService: BookService, private router: Router, private oktaAuth: OktaAuthService) {
  }

  async ngOnInit() {
    this.bookService.getAllBooks()
      .subscribe((books) => {
        this.bookList = books;
      })

    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }
}
