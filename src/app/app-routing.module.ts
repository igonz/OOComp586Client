import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from "./books/books.component";
import {AuthorsComponent} from "./authors/authors.component";
import {AuthorComponent} from "./author/author.component";

const routes: Routes = [
  {path: '', redirectTo: '/viewBookList', pathMatch: 'full'},
  {path: 'viewBookList', component: BooksComponent},
  {path: 'viewAuthorList', component: AuthorsComponent},
  { path: 'author/:id',      component: AuthorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
