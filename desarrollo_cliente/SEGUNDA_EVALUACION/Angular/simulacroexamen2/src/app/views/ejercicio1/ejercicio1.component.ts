import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AppComponent } from 'src/app/app.component';
import { Result } from 'src/app/interfaces/response';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component {
  public constructor(public service: DataService, public app: AppComponent){}

  public content = Result[]= []
  public ContenidoApi :string = "";
  public onSubmit(){
    alert("this.ContenidoApi")

  } 

  public avatar: string = "https://rickandmortyapi.com/api/character/avatar";

  public getResponse() :void{
    this.service.getResponse1(this.ContenidoApi).subscribe(response=>{console.log(response);
  })
  }


  public ngOnInit() :void{
    this.getResponse();
  }


}
