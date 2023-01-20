import { Component } from '@angular/core';

@Component({
  selector: 'app-largoplazo',
  templateUrl: './largoplazo.component.html',
  styleUrls: ['./largoplazo.component.css']
})
export class LargoplazoComponent {
  public images: string[] = ["https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/1369847707_4085_memory-1.jpg?itok=aZRKeJXR","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8a2YKUyrUrEEkYxECnP4zI3LXpfEhhEZhg&usqp=CAU","https://easyscienceforkids.com/wp-content/uploads/2018/04/Memory-facts-18-4-1-758x635.jpg"];
  public paragraphs: string = "";
  public photos: string = "one";
  public contador: number = 0;
  public image: string = this.images[0];
  public casos: string[] = [ "dos", "tres", "cuatro" ];
  public parraf: string = this.casos[0];
  
  
  ngOnInit(){
    setInterval(() => {
      if(this.contador === 2){
      this.contador = 0;
    } else{
      this.contador++;
    }
    this.image = this.images[this.contador];
    this.parraf = this.casos[this.contador]
    }, 2500);
  }
}
