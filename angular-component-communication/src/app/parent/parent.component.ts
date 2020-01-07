import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() age = 10;
  @Output() plus = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  send() {
    this.plus.emit();
  }

}
