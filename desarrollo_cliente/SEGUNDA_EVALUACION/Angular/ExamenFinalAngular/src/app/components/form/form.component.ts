import { Component } from '@angular/core';
import { StarWars } from 'src/app/interfaces/star-wars';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  /* constructor(public service: DataService){}
  
  public starWars: StarWars[] = [];
  public onSubmit(type: string): void{

  }

  public getNames(nombres: string): void{
    this.service.getNames(nombres).subscribe((response))
    
  }

  public getTitle(titles: string): void{
    this.service.getTitle(titles).subscribe((response)) =>{

    }
  } */
}

