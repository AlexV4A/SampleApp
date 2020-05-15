import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserdataObject, RSSObject } from '../model/userdata';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { MessageadapterService } from '../adapter/messageadapter.service';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  /**
   * _userInfo - private variable to contain user data.
   */
  private _userInfo: UserdataObject = {};

  constructor(private _http: HttpClient, private _messageAdapter: MessageadapterService) {
  }

  /**
   * Public Method
   * 
   * Implemented for setting user data
   * 
   * @param userObj 
   */
  public setUserDataObject(userObj: UserdataObject): void {
    this._userInfo = { ...userObj };
  }

  /**
   * Public Method
   * 
   * Implemented for getting user data
   * 
   * @return UserdataObject
   */
  public getUserDataObject(): UserdataObject {
    return this._userInfo;
  }


  /**
   *Method to fetch RSS feeds.
   *
   * @returns {Observable<any>}
   * @memberof AppdataService
   */
  public fetchRSS(): Observable<RSSObject> {

    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return new Observable(observer => {
      this._http.get('https://www.espn.com/espn/rss/news', requestOptions).subscribe(res => {
          res = this._messageAdapter.convertmesssage(res as RSSObject);
          observer.next(res as RSSObject);
        },
        err => {
          observer.error(err)
        },
        () => {
          observer.complete();
        })
    })


  }

  public logoutRequest(): Observable<RSSObject> {

    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return new Observable(observer => {
      this._http.get('https://www.espn.com/espn/rss/news', requestOptions).subscribe(res => {
          res = this._messageAdapter.convertmesssage(res as RSSObject);
          observer.next(res as RSSObject);
        },
        err => {
          observer.error(err)
        },
        () => {
          observer.complete();
        })
    })


  }
}
