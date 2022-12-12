import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  public changeVision(event: MouseEvent){
    const h1: HTMLElement = <HTMLElement>event.target;
    if (event.type === "mouseover") {
      h1.style.backgroundImage = "url('https://images3.memedroid.com/images/UPLOADED741/62a7679e0128d.webp')";
      h1.style.backgroundRepeat = "no-repeat";
      h1.textContent = "";
    } else if (event.type === "mouseout") {
      h1.style.backgroundImage ="url('https://www.lovevalencia.com/wp-content/uploads/2010/10/ciudad.jpg')"
      h1.textContent = "LA CIUDAD DE LAS ARTES Y DE LAS CIENCIAS";
    }
  }

  public changeColor(event: MouseEvent){
    const p: HTMLElement = <HTMLElement>event.target;
    if (event.type === "mouseover") {
      p.style.color = "blueviolet";
    } else if (event.type === "mouseout") {
      p.style.color ="black";
    }
  }
  }
