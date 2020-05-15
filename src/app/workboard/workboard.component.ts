import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AppdataService } from '../shared/service/appdata.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { takeWhile } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workboard',
  templateUrl: './workboard.component.html',
  styleUrls: ['./workboard.component.scss'],
  animations: [
    trigger('crossfade', [
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
      transition('* => show', animate('1s ease-in')),
      transition('show => hide', animate('1s ease-out'))
    ])
  ]
})
export class WorkboardComponent implements OnInit {

  /**
   *parentText - reference to data text
   *
   * @type {string}
   * @memberof WorkboardComponent
   */
  public data: string = '';

  /**
   *parentText - reference to parent text
   *
   * @type {string}
   * @memberof WorkboardComponent
   */
  public parentText: string = '';

  /**
   *dataState - reference to data animation effect
   *
   * @type {string}
   * @memberof WorkboardComponent
   */
  public dataState : string = 'hide';

  /**
   *userName - reference to the user name.
   *
   * @type {string}
   * @memberof WorkboardComponent
   */
  public userName : string = '';

  /**
   *_compActive - reference to component active
   *
   * @private
   * @type {boolean}
   * @memberof WorkboardComponent
   */
  private _compActive : boolean = false;


  /**
   *_rssData - reference to rss data
   *
   * @private
   * @type {any}
   * @memberof WorkboardComponent
   */
  private _rssData : any;

  constructor(private _userDataService: AppdataService, private _router: Router) { }

  /**
   *Life cycleevent ngOnInit
   *
   * @memberof WorkboardComponent
   */
  ngOnInit(): void {
    this._compActive = true;
    this.userName = this._userDataService.getUserDataObject().name;
  }


  /**
   *Method to pass value to child.
   *
   * @param {*} event
   * @memberof WorkboardComponent
   */
  public sayChildHandler(event) {
    this.data = 'HAI FROM PARENT';
  }

  /**
   *Method to fetch RSS feed.
   *
   * @param {*} event
   * @memberof WorkboardComponent
   */
  public fetchRSS(event) {
    this._userDataService.fetchRSS().pipe(takeWhile(() => {
      return this._compActive
    })).subscribe( rss => {
      console.log('RSS FOUND ', rss)
      this._rssData = rss;
    }, error=> {
      this._rssData = undefined;
    }

    )
  }

  /**
   *Method for handling child emitted event
   *
   * @param {*} event
   * @memberof WorkboardComponent
   */
  public callParentHandler(event) {
    this.parentText = event;
    this.dataState = 'show';
    setTimeout(() => {
      this.dataState = 'hide';
      this.data = '';
    }, 2000);
  }

  /**
   * Handleslogout event
   * @param event 
   */
  public logout(event): void {
    this._userDataService.logoutRequest().pipe(takeWhile(() => {
      return this._compActive
    })).subscribe( rss => {
      console.log('LOGOUT ', rss)
      this._router.navigate(['/intro']);
    }, error=> {
      this._rssData = undefined;
    }

    )
  }

  /**
   *Life cycle method ngOnDestroy
   *
   * @memberof WorkboardComponent
   */
  ngOnDestroy() {
    this._compActive = false;
  }
  
}
