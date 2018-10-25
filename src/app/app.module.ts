import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AppRoutingModule } from './app-routing.module';
import { MainContentComponent } from './main-content/main-content.component';
import { AuthorsComponent } from './authors/authors.component';
import { HttpClientModule }    from '@angular/common/http';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    MainContentComponent,
    AuthorsComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
