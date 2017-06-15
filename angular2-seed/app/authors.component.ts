import {Component} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
    selector: 'authors',
    template: `<h2>Authors</h2>
                {{ title }}
                <ul>
                    <li #ngFor="#author in authors">
                    {{author}}
                    </li>
                </ul>
              `,
    providers: [AuthorService]
})

export class AuthorsComponent {
    title = "My Favorite Authors";
    authors: string[];

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}
