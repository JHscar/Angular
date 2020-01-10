import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [LogService]
})
export class AboutComponent implements OnInit {

  constructor(
    private log: LogService
  ) { }

  ngOnInit() {
    this.log.info('About');
  }

}
