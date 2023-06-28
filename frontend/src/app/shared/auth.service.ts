import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseHttp } from '../models/responseHttp';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  defaultUser: User = {
    email: "",
    firstname: "",
    id: 0,
    lastname: "",
    password: "",
    password_confirmation: "",
    phone_number: "",
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  // User registration
  register(user: User): Observable<any> {
    return this.http.post(environment.apiUrl + 'api/auth/register', user);
  }
  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>(environment.apiUrl + 'api/auth/login', user).pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user.user));
      this.userSubject.next(user.user);
      return user;
    }))
  }
  // Access user profile
  profileUser(): Observable<User> {
    return this.http.get<ResponseHttp>(environment.apiUrl + 'api/auth/user-profile').pipe(
      map((data) => {
        return data.data.item;
      }),
      catchError((error) => {
        return throwError(() => new Error(error))
      })
    )
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(this.defaultUser);
    this.router.navigate(['/login']);
  }
}