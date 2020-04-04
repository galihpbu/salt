import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  articles;
  mainData: any = [];
  filtersLoaded: Promise<boolean>;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    if (this.mainData.length == 0) { 
    } else { return; }
    this.apiService.getNews().subscribe((data) => { 
      this.articles = data['articles'];
      this.mainData = data; 
      this.filtersLoaded = Promise.resolve(true); 

    });
  }


}
