import { Component } from '@angular/core';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent {
  public type:string="";
  public title:string="";
  public date:string="";
  public sentence:string="";
  public post:string="";
}
