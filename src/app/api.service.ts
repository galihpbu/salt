import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'a3f530def21549d4afae19f4da4f067e';
  constructor(private httpClient: HttpClient) { }

  public getNews() {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a3f530def21549d4afae19f4da4f067e');
  }
}

