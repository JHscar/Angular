import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-directive-example';
  isVisible = false;
  list: { title: string }[] = [
    { title: 'Tour of Heroes' },
    { title: 'CLI Documentation' },
    { title: 'Angular blog' }
  ];
  style = {
    color: 'green',
  };
}
