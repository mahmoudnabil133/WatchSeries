import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient,
    private cookieService: CookieService
  ) {}
  getUserWatchList(userId: string): Observable<any> {
    return this.http.get(`http://localhost:3000/users/${userId}/watchList`);
  }
  signUp(user: any): Observable<any>{
    return this.http.post('http://localhost:3000/users/signUp', user).pipe(
      catchError((error) => {
        return throwError(() => new Error(error.error?.msg || 'sign up failed. Please try again.'));
      }))
  }
  login(user: any): Observable<any>{
    return this.http.post('http://localhost:3000/users/login', user).pipe(
      catchError((error) => {
        return throwError(() => new Error(error.error?.msg || 'Login failed. Please try again.'));
      }))
  }
  isAuthonticated(): Observable<boolean>{
    const token = this.getCookie();
    if (!token){
      return of(false);
    };
    return this.http.post< { valid: boolean } >('http://localhost:3000/users/isAuthenticated', {token}).pipe(
      map(response => response.valid),
      catchError(() => of(false))
    );
  }
  logout(): Observable<any>{
    return this.http.get('http://localhost:3000/users/logout');
  }
  myProfile(): Observable<any>{
    return this.http.get('http://localhost:3000/users/getMe', {withCredentials: true}).pipe(
      catchError((error) => {
        return throwError(() => new Error(error.error?.msg || 'getting profile failed. Please try again.'));
      }))
  }
  deleteProfile(): Observable<any>{
    return this.http.delete('http://localhost:3000/users/deleteMe', {withCredentials: true}).pipe(
      catchError((error) => {
        return throwError(() => new Error(error.error?.msg || 'delete profile failed. Please try again.'));
      }))
  }
  updateProfile(user: any): Observable<any>{
    return this.http.patch('http://localhost:3000/users/updateMe', user, {withCredentials: true}).pipe(
      catchError((error) => {
        return throwError(() => new Error(error.error?.msg || 'update password failed. Please try again.'));
      }))
  };
  updatePassword(passwords: any): Observable<any>{
    return this.http.patch('http://localhost:3000/users/updateMyPassword', passwords, {withCredentials: true}).pipe(
      catchError((error) => {
        return throwError(() => new Error(error.error?.msg || 'update password failed. Please try again.'));
      }))
  };
  forgotPassword(email: any): Observable<any>{
    return this.http.post('http://localhost:3000/users/forgotPassword', email);
  };
  resetPassword(token: any, passwords: any): Observable<any>{
    return this.http.patch(`http://localhost:3000/users/resetPassword/${token}`, passwords);
  };
  getAllusers(): Observable<any>{
    return this.http.get('http://localhost:3000/users');
  };
  getUser(userId: string): Observable<any>{
    return this.http.get(`http://localhost:3000/users/${userId}`);
  };
  deleteUser(userId: string): Observable<any>{
    return this.http.delete(`http://localhost:3000/users/${userId}`);
  };
  updateUser(userId: string, user: any): Observable<any>{
    return this.http.patch(`http://localhost:3000/users/${userId}`, user);
  };
  setCookie(token: string): void{
    this.cookieService.set('jwt', token); 
  };
  getCookie(): string{
    return this.cookieService.get('jwt');
  }
  removeCookie(): void{
    this.cookieService.delete('jwt');
  }
  // watchList endpoints
  getWatchList(): Observable<any>{
    return this.http.get('http://localhost:3000/watchList', {withCredentials: true}).pipe(
      catchError((error) => {
        return throwError(() => new Error(error.error?.msg || 'delete profile failed. Please try again.'));
      }))
  }
  addToWatchList(tvId: string): Observable<any>{
    return this.http.post('http://localhost:3000/watchList', {tvId}, {withCredentials: true}).pipe(
      catchError((error) => {
        return throwError(() => new Error(error.error?.msg || 'adding to watchlist failed. Please try again.'));
      }))
  }
  removeFromWatchList(tvId: string): Observable<any>{
    return this.http.delete(`http://localhost:3000/watchList/${tvId}`, {withCredentials: true}).pipe(
      catchError((error) => {
        return throwError(() => new Error(error.error?.msg || 'deleteing from watchList failed. Please try again.'));
      }))
  }
}
