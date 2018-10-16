import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'academy';
  public clickCount : number;
  constructor(){
    this.clickCount = 0;
  }

  public fire(): void{
    this.clickCount++;
  }
}
