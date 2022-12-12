import { Component } from '@angular/core';

@Component({
  selector: 'app-raul4',
  templateUrl: './raul4.component.html',
  styleUrls: ['./raul4.component.css']
})
export class Raul4Component {
  public paragraphs: boolean = true;
  public color: string = "white";

  public onClick(): void{
    this.paragraphs = !this.paragraphs;
    this.color = "red";
  }
}
