import { Injectable } from '@angular/core';
import { JsonController, Get } from 'routing-controllers';
import { StatusService } from './status.service';

@Injectable()
@JsonController('/status')
export class StatusController {

    constructor(private statusSvc: StatusService) { }

    @Get('/')
    public getAppStatus() {
        return this.statusSvc.getAppStatus();
    }
}