import { Component } from '@angular/core';
import { Article } from './article/article.mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  articles:Article[];

  addArticle(title: HTMLInputElement,link:HTMLInputElement):boolean{
    console.log(`Adding article title : ${title.value} and link : ${link.value}`);
    this.articles.push(new Article(title.value,link.value,0));
    title.value='';
    link.value='';
    return false;
  }

  sortedArticles():Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
  
  constructor() {
    //The constructor is mainly used to import services
    this.articles = [
      new Article('Angular 2','http://angular.io', 3),
    ];
  }

}
