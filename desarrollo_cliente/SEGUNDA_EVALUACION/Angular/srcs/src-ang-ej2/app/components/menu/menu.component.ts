import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  
  public onClick(event: MouseEvent) :void{
    const nav: HTMLElement = <HTMLElement>event.target;
    if (event.type === 'onClick') {
      nav.style.display = 'visible';
    } else {
      nav.style.display = 'none';
    }
  }
}
