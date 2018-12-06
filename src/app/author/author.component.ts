import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthorService} from "../author.service";
import {Author} from "../models/author";
import {OktaAuthService} from "@okta/okta-angular";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author:Author;
  isAuthenticated: boolean;
  accessDenied: boolean;

  constructor(private authorService:AuthorService, private route:ActivatedRoute, private oktaAuth: OktaAuthService) { }

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.authorService.getAuthor(id)
      .subscribe((author) => {
        this.accessDenied = false;
        this.author = author;

      }, (error) => {
        this.accessDenied = true;
        console.log(error);
      });


    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

}
