import { catchError, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomePageService {

    constructor(private http: HttpClient) { }

    getHomePageInfo(): Observable<{}> {
        return this.http.get<{}>('src/app/shared/mocked-data/homepage.json')
            .pipe(
                catchError(error => {
                    console.log('Error al optener JSON', error);

                    return of(`[Error]: ${error}`);
                })
            );
    }

    // I would send data to a service which store votes on this function. It would be a put call.
    voteService(): Observable<any> {
        return of(true)
            .pipe(
                delay(1500)
            );
    }
}
