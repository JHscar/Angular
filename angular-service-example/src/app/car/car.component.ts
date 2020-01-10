import { Component, OnInit } from '@angular/core';

class EnginService {
  public start() {
    console.log('엔진 스타트');
  }
}

class WheelService {
  public start() {
    console.log('바퀴 스타트');
  }
}

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  private engin = new EnginService();
  private wheel = new WheelService();

  constructor() { }

  ngOnInit() {
    this.engin.start();
    this.wheel.start();
  }

}
