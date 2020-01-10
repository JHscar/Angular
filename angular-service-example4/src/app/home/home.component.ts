import { Component, OnInit, Inject } from '@angular/core';
import { LogService } from '../log.service';
import { FactoryService } from '../factory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LogService, { provide: 'another', useClass: LogService }, {
    provide: 'same',
    useExisting: LogService
  },
    {
      provide: 'githubUrl',
      useValue: 'https://github.com'
    },
    {
      provide: 'factory',
      useFactory: (logService) => {
        return new FactoryService(logService, true);
      },
      deps: [LogService]
    }
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    private log: LogService,
    @Inject('another') private another,
    @Inject('same') private same,
    @Inject('githubUrl') private url,
    @Inject('factory') private factory
  ) {
    console.log(this.log === this.another);
    console.log(this.log === this.same);
    console.log(this.url);
  }

  ngOnInit() {
    this.log.info('LogService');
    this.factory.log();
  }

}
