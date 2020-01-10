import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class FactoryService {
    constructor(private logService: LogService, private isFactory: boolean) {

    }

    public log() {
        this.logService.info(`factory`);
    }
}
