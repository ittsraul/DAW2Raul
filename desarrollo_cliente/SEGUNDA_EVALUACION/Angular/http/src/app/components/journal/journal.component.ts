import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {
 /*  public img: string ="http://api.thecatapi.com/v1/images/search"; */
  public img: string ="https://api.github.com/search/users?q=David";
  public constructor(public service: DataService) {}

  public getResponse(): void{
    this.service.getResponse().subscribe(response =>{
      console.log(response);
      /* this.img = response[0].url; */
      this.img = response[].items;
  })
  }    
  public ngOnInit(): void{
    this.getResponse();
  }
  
}
