import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from "./books/books.component";
import {AuthorsComponent} from "./authors/authors.component";
import {AuthorComponent} from "./author/author.component";
import {OktaCallbackComponent} from "@okta/okta-angular";

const routes: Routes = [
  {path: '', redirectTo: '/viewBookList', pathMatch: 'full'},
  {path: 'viewBookList', component: BooksComponent},
  {path: 'viewAuthorList', component: AuthorsComponent},
  { path: 'author/:id',      component: AuthorComponent },
  { path: 'implicit/callback', component: OktaCallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
