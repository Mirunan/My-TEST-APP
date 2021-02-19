import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from 'src/superHero';



@Injectable({
  providedIn: 'root'
})
export class GetSuperHeroService {

  url:string="https://www.superheroapi.com/api.php/421999145702185/70/powerstats"

  constructor(private http:HttpClient) { }


  superHero():Observable<Hero[]>{
    return this.http.get<Hero[]>(this.url);
  }
}
