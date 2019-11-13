import { catchError } from 'rxjs/operators';
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
}
