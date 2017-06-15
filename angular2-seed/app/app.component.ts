import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'

@Component({
    selector: 'my-app',
    template: '<h1>My first Angular2 App</h1><courses></courses>',
    directives: [CoursesComponent]
})

// root of application, view component
export class AppComponent { }
