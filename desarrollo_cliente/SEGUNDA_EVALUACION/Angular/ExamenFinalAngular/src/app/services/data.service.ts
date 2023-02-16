import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarWars } from 'src/app/interfaces/star-wars';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public linkApiStarW: string = "https://swapi.dev/api/";

  public getResponse(Luke: string): Observable<Response>{
    return this.http.get<Response>(this.linkApiStarW + `$(nombre)`);
  }
}
