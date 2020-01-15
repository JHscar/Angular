import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ts-button',
  templateUrl: './ts-button.component.html',
  styleUrls: ['./ts-button.component.css']
})
export class TsButtonComponent implements OnInit {

  message = '버튼이 눌리지 않았다.';
  disabled = false;

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.message = '버튼이 방금 눌렸다.';
    this.disabled = true;
    setTimeout(() => {
      this.message = '버튼이 눌리지 않았다.';
      this.disabled = false;
    }, 5000);
  }

}
