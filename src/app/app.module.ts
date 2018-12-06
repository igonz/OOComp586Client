import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BooksComponent} from './books/books.component';
import {AppRoutingModule} from './app-routing.module';
import {MainContentComponent} from './main-content/main-content.component';
import {AuthorsComponent} from './authors/authors.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthorComponent} from './author/author.component';
import {OktaAuthModule} from "@okta/okta-angular";
import {AuthInterceptor} from "./auth.interceptors";

const config = {
  issuer: '',
  redirectUri: '',
  clientId: ''
};

@NgModule({
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
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
    HttpClientModule,
    OktaAuthModule.initAuth(config)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
