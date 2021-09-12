import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    loadedPosts = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.fetchPosts();
    }

    onCreatePost(postData: Post) {
        // Send Http request
        this.http
            .post<{ name: string }>(
                'https://angular-guide-17e46-default-rtdb.firebaseio.com/posts.json',
                postData,
            )
            .subscribe((response) => {
                console.log(response);
            });
    }

    onFetchPosts() {
        this.fetchPosts();
    }

    onClearPosts() {
        // Send Http request
    }

    private fetchPosts() {
        this.http
            .get<{ [key: string]: Post }>(
                'https://angular-guide-17e46-default-rtdb.firebaseio.com/posts.json',
            )
            .pipe(
                map((response) => {
                    const postsArray: Post[] = [];
                    for (const key in response) {
                        if (response.hasOwnProperty(key))
                            postsArray.push({ ...response[key], id: key });
                    }
                    return postsArray;
                }),
            )
            .subscribe((posts) => {
                console.log(posts);
            });
    }
}