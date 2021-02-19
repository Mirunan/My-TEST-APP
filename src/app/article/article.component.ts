import { HostBinding, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Article } from './article.mode';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass ='vote';
  @Input() article: Article;


  constructor() {
    
  }

  voteUp():boolean{
    this.article.voteUp();
    return false;
  }
  voteDown():boolean{
    this.article.voteDown();
    return false;
  }

  

  
  ngOnInit(): void {
  }

}
