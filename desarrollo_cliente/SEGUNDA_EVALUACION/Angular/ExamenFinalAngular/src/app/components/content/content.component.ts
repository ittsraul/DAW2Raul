import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  /* @Output() contador: new EventEmitter<number>(); */

  public contador: number = 0;
  public onclick(){
    this.contador++;
    if (this.contador > 0) {
      
    }else if(this.contador > 1){

    }else{
      this.contador = 0;
  } 
}
}
