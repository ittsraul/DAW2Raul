import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public contador: number = 0;
  public onclick(){
    this.contador++;
    if (this.contador > 0) {
      
    }else{
      this.contador = 0;
    }
  }
}
