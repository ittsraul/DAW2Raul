import { Component } from '@angular/core';

@Component({
  selector: 'app-raul2',
  templateUrl: './raul2.component.html',
  styleUrls: ['./raul2.component.css']
})
export class Raul2Component {

  public title: string = 'Raul Sales';

  public onClick(){
    this.title = 'Titulo cambiado';
  }

  public changeColor(event: MouseEvent){
    const h3: HTMLElement = <HTMLElement>event.target;
    if (event.type === 'mouseover') {
      h3.style.color = "cornflowerblue";
    } else if(event.type === 'mouseout'){
      h3.style.color = "red";
    }
  }

}
