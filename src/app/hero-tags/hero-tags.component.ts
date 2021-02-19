import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-tags',
  templateUrl: './hero-tags.component.html',
  styleUrls: ['./hero-tags.component.css']
})
export class HeroTagsComponent implements OnInit {

  @Input() tags?:string;


  constructor() { }

  ngOnInit(): void {
  }

}
