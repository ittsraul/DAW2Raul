import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Response} from 'src/app/interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public url: string = 'https://api.github.com/search/users?q=David';
  /* http://api.thecatapi.com/v1/images/search */

  public getResponse(): Observable<Response[]> {
    return this.http.get<Response[]>(this.url);
  }
}
