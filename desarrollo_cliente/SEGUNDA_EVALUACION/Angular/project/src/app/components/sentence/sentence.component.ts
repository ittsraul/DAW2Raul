import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent {
  @Input()sentence :string="";
  
}
