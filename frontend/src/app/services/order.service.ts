import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';
import { ResponseHttp } from '../models/responseHttp';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  updateOrder(order: Order) : Observable<Order[]> {
    return this.http.put<ResponseHttp>(environment.apiUrl + 'api/orders/'+ order.id, order).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(() => new Error(error))
      })
    )
  }

  storeOrder(order: Order) : Observable<Order[]> {
    return this.http.post<ResponseHttp>(environment.apiUrl + 'api/orders', order).pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(() => new Error(error))
      })
    )
  }

  constructor(private http: HttpClient) { }
}
