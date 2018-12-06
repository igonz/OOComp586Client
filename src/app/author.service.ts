import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Author} from "./models/author";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthor(id:string) :Observable<Author> {
    return this.http.get<Author>("http://localhost:8080/getAuthor?id=" + id);
  }

  getAllAuthors() :Observable<Author[]> {
    return this.http.get<Author[]>("http://localhost:8080/getAllAuthors");
  }
}
