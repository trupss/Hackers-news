import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import {NewPostsComponent} from './news/new-posts/new-posts.component';
import {TopPostsComponent} from './news/top-posts/top-posts.component'



const routes: Routes = [
  { path: "",  redirectTo:"/new-post",pathMatch: 'full'},
  {path:'new-post',component: NewPostsComponent},
  { path: "top-post", component: TopPostsComponent} 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
