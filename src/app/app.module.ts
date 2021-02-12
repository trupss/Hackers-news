import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { NewPostsComponent } from './news/new-posts/new-posts.component';
import { TopPostsComponent } from './news/top-posts/top-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewPostsComponent,
    TopPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
