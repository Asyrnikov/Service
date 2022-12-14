import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseHttp } from '../models/responseHttp';
import { Type } from '../models/type';
import { map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  getTypes() : Observable<Type[]> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/types').pipe(
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
