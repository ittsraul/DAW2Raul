import { Component } from '@angular/core';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent {
  public type:string="";
  public title:string="";
  public date:string="";
  public sentence:string="";
  public post:string="";
}
