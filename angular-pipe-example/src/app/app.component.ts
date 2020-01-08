import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipe-example';

  data = new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello');
    }, 2000);
  });
}
