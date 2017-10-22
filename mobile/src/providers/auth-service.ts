import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Travel } from './../models/Travel';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { serverAdress } from './../shared/GlobalVariables';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class User {
  email: string;

  constructor(email: string) {
    this.email = email;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;
  constructor(private _http: Http) { }

  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers: this.headers});

  loginBasic(payload: any): Observable<any>{
    return this._http.post(serverAdress + '/login', JSON.stringify(payload), this.options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  authFacebook(): Observable<any>{
    return this._http.get(serverAdress + '/facebook', this.options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  getMe(payload: any): Observable<any>{
    return this._http.post(serverAdress + '/profile', JSON.stringify(payload), this.options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  signUpBasic(payload: any): Observable<any>{
    return this._http.post(serverAdress + '/signup', JSON.stringify(payload), this.options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  addJourney(payload: any): Observable<any>{
    return this._http.post(serverAdress + '/journey', JSON.stringify(payload), this.options)
    .map((response: Response)=> response.json())
    .catch(this.handleError);
  }
  getJourneys():Observable<Array<Travel>> {
    let access_token = localStorage.getItem('token');
    return this._http.get(serverAdress + '/journeys?access_token='+localStorage.getItem('token'), this.options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  deleteJourney(payload: any): Observable<any> {
    let access_token = localStorage.getItem('token');
    return this._http.delete(serverAdress + '/journeys?access_token=' + localStorage.getItem('token'), this.options)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }
  saveImage(payload: any): Observable<any>{
    return this._http.post(serverAdress + '/image', JSON.stringify(payload), this.options)
    .map((response: Response)=> response.json())
    .catch(this.handleError);
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
  private handleError(error: Response) {
            if (error.status === 401) {
                return Observable.throw('Unauthorized');
            }
            if (error.status === 500) {
                return Observable.throw('Server down');
            }else{
                return Observable.throw(error.json().error || 'Server error');             
            }
  }
}
