import { Injectable } from '@angular/core';
import {Book} from "./models/book";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks() :Observable<Book[]> {
    return this.http.get<Book[]>("http://localhost:8080/getAllBooks");
  }
}
