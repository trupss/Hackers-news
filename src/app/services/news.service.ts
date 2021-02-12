import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
const BACKEND_URL = environment.apiUrl;
const GET_ITEM = 'item/';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  //Story detail API called by passing story ID's to getStory function
  getNews(newsType, pageSize, pageNumb) {
    return this.listStories(newsType, pageSize, pageNumb).pipe(
      mergeMap((ids) => forkJoin(ids.map((id) => this.getStory(id))))
    );
  }


  //Story detail will return based on the ID passed by getNews function
  getStory(id) {
    return this.http.get(`${BACKEND_URL + GET_ITEM + id}.json`);
  }

  //Story list being called, this API will return the ID's of all Stories 
  listStories(newsType, pageSize, pageNumb): Observable<any> {
    return this.http.get(BACKEND_URL + newsType + '.json').pipe(
      map((response: Response[]) => {
        return response.slice(0, pageNumb * pageSize); // Pagination Logic
      })
    );
  }
}
