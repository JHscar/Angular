import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() age;
  @Output() plus = new EventEmitter();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.plus.emit();
    }, 2000);
  }

}
