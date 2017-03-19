import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class StatusService {

    constructor(private http: Http) {
        console.log(http); // proof that Http was provided by angular injector
    }

    public getAppStatus() {
        return {
            status: 'up',
        };
    }
}