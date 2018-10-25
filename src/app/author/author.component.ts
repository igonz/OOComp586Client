import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthorService} from "../author.service";
import {Author} from "../models/author";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author:Author;

  constructor(private authorService:AuthorService, private route:ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.authorService.getAuthor(id)
      .subscribe((author) => {
        this.author = author;
      });
  }

}
