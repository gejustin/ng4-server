import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template: `<div>Hello {{name}}!</div>`,
})
export class HomeComponent {
    public name: string = 'world';
}