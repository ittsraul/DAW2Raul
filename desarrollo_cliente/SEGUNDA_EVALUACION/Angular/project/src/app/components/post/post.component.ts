import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  public type: string = 'Society';
  public date: string = '24/01/2032';
  public title: string = 'Juan Veloz';
  public sentence: string = 'no se';
}
