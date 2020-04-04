import { Injectable } from '@angular/core';
import { RSSObject } from '../model/userdata';

@Injectable({
  providedIn: 'root'
})
export class MessageadapterService {

  constructor() { }

  /**
   *Method to implement adapter logics
   *
   * @param {RSSObject} data
   * @returns {RSSObject}
   * @memberof MessageadapterService
   */
  public convertmesssage(data : RSSObject): RSSObject {
    //IF YOU WANT TO DO ANY BUISNESS LOGICS
    return data;
  }

}
