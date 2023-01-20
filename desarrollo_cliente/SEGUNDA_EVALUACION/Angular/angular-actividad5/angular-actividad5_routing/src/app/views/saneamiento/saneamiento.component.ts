import { Component } from '@angular/core';

@Component({
  selector: 'app-saneamiento',
  templateUrl: './saneamiento.component.html',
  styleUrls: ['./saneamiento.component.css']
})
export class SaneamientoComponent {
  public contador: number = 0;
  public onclick(): void {
    contador++;
    if (contador === 0) {
      
    } else {
      
    }
  }
}
