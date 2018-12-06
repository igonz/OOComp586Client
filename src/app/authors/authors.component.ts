import { Component, OnInit } from '@angular/core';
import {Author} from "../models/author";
import {AuthorService} from "../author.service";
import {ActivatedRoute} from "@angular/router";
import {OktaAuthService} from "@okta/okta-angular";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authorList:Author[];
  isAuthenticated: boolean;

  constructor(private authorService:AuthorService, private route:ActivatedRoute, private oktaAuth: OktaAuthService) { }

  async ngOnInit() {
    this.authorService.getAllAuthors()
      .subscribe((authorList) => {
        this.authorList = authorList;
      });

    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

  onAuthorClicked(author:Author) {

  }
}
