import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
    providedIn: 'root',
})
export class PostsService {
    error = new Subject<string>();

    constructor(private http: HttpClient) {}

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title, content };

        this.http
            .post<{ name: string }>(
                'https://angular-guide-17e46-default-rtdb.firebaseio.com/posts.json',
                postData,
                {
                    observe: 'response',
                },
            )
            .subscribe(
                (response) => {
                    console.log(response);
                },
                (error) => {
                    this.error.next(error.message);
                },
            );
    }

    fetchPosts() {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        searchParams = searchParams.append('custom', 'key');

        return this.http
            .get<{ [key: string]: Post }>(
                'https://angular-guide-17e46-default-rtdb.firebaseio.com/posts.json',
                {
                    headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
                    params: searchParams,
                },
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
                catchError((errorRes) => {
                    // Send to analytics server
                    return throwError(errorRes);
                }),
            );
    }

    deletePosts() {
        return this.http
            .delete('https://angular-guide-17e46-default-rtdb.firebaseio.com/posts.json', {
                observe: 'events',
                // responseType: 'text',
            })
            .pipe(
                tap((event) => {
                    console.log(event);
                    if (event.type === HttpEventType.Sent) {
                        // ...
                    }
                    if (event.type === HttpEventType.Response) {
                        console.log(event.body);
                    }
                }),
            );
    }
}
