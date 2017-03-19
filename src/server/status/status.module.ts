import { NgModule } from '@angular/core';
import { StatusController, StatusService } from './';

export const statusProviders = [
    StatusService,
    StatusController,
];

@NgModule({
    providers: [
        ...statusProviders,
    ],
})
export class StatusModule { }