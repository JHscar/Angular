import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
    public info(message: string) {
        console.log('info', message);
    }
}