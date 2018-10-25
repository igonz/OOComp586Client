import { Component, OnInit } from '@angular/core';
import {Author} from "../models/author";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authorList:Author[];
  selectedAuthor: Author;

  constructor() { }

  ngOnInit() {
    // this.authorList = AUTHORS;
  }

  onAuthorClicked(author:Author) {
    this.selectedAuthor = author;
  }
}
