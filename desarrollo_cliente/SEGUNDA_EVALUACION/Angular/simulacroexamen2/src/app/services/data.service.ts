import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/app/interfaces/response' 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //Constructor que inicializa el cliente http
  constructor(public http: HttpClient) { }

  //variable que contiene la url de la api y lo que queremos
  public linkApicharacter: string = "https://rickandmortyapi.com/api/character"
  public linkApilocation: string = "https://rickandmortyapi.com/api/location"
  public linkApiepisodes: string = "https://rickandmortyapi.com/api/episodes"

  //Guarda la respuesta de la api
  public getResponse1(rick: string): Observable<Response>{
    return this.http.get<Response>(this.linkApicharacter + rick)
  }

  public getResponse2(rick: string): Observable<Response>{
    return this.http.get<Response>(this.linkApilocation + rick)
  }

  public getResponse3(rick: string): Observable<Response>{
    return this.http.get<Response>(this.linkApiepisodes + rick)
  }
}
