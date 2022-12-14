import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Job } from '../models/job';
import { ResponseHttp } from '../models/responseHttp';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  getJobs() : Observable<Job[]> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/jobs').pipe(
      map((data) => {
        return data.data.items;
      }),
      catchError((error) => {
        return throwError(() => new Error(error))
      })
    )
  }

  constructor(
    private http: HttpClient
    ) { }
}
