import { Injectable } from '@angular/core';
import { ActionObject } from '../model/userdata';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppmessageService {

  /**
   *messageEvent - Reference to the message event 
   *
   * @private
   * @memberof AppdataService
   */
  private _messageEvent = new BehaviorSubject<ActionObject>({id : '', message: ''});


  constructor() { }


  /**
   *Public Method
   * 
   * Implemented for setting message data
   *
   * @param {ActionObject} actionObj
   * @memberof AppdataService
   */
  public setMessageEvent(actionObj: ActionObject) {
    this._messageEvent.next(Object.assign({}, actionObj));
  }

  /**
   * Public Method
   * 
   * Implemented for getting message data
   *
   * @returns {Observable<ActionObject>}
   * @memberof AppdataService
   */
  public getMessageEvent() : Observable<ActionObject> {
    return this._messageEvent.asObservable();
  }
}
