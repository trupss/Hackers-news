import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-top-posts',
  templateUrl: './top-posts.component.html',
  styleUrls: ['./top-posts.component.css']
})
export class TopPostsComponent implements OnInit {

  public storyList:any=[]; 
  isLoading:boolean=false;
  showMoreClicked:boolean=false
  postType="topstories"
  pageSize=20;
  pageNumb=1;

  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
    //Onload data will be loaded, by default new stories API being called
    this.getPost(this.postType); 
  }

  //news service (new stories and top stories) API being called based on click 
  getPost(postType){
    this.isLoading = true;
    this.postType=postType;
    this.pageNumb=1;
    this.newsService.getNews(this.postType,this.pageSize,this.pageNumb).subscribe((response)=>{
      this.isLoading = false;
      response.length>0 ? this.storyList=response : this.storyList=[];
       });
  }

  //Pagination 
  showMore(){
    this.isLoading = true;
    this.pageNumb++;
    this.newsService.getNews(this.postType,this.pageSize,this.pageNumb).subscribe((response)=>{
      this.isLoading = false;
      response.length>0 ? this.storyList=response : this.storyList=[];
       });
  }

}
