import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { BabyComponent } from '../views/baby/baby.component';
import { SayonaraComponent } from '../views/sayonara/sayonara.component';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {
  private peticion = "https://api.chucknorris.io/jokes/random";
  constructor( private http:) { }
}
