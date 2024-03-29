import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles:['']
})
export class AppComponent {
  name = 'Piper'
  imgURL = 'https://picsum.photos/id/237/500/500'
  getName(){
    return this.name
  }

  changeImage(e:KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }
  // title = 'my-app';
}
