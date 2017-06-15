// component decorator from module 'angular2/core'
// this is also a function
import {Component} from 'angular2/core'
// all decorators are prefixed with @ symbol
// calling decorator function Component which takes an object selector and template
@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
                {{title}}
                <ul>
                    <li *ngFor="#course of courses">
                    {{course}}
                    </li>
                </ul>
              `
})
export class CoursesComponent {
    title = "The title of courses page";
    courses = ["Course1", "Course2", "Course3"];
}
