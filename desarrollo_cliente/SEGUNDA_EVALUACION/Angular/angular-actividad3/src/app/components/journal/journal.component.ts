import { Component } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {
content:string[] = ["primero","segundo","tercer","cuatro"];

public counter:number = 0;
public onclick(): void{
  this.counter++;
  if (this.counter === this.content.length - 1) {
    this.counter = 0;
  } else {
    this.counter++;
  }
}


}
