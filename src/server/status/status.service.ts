import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class StatusService {
    public getAppStatus() {
        return {
            status: 'up',
        };
    }
}