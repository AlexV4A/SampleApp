import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { ActionObject } from '../../shared/model/userdata';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AppmessageService } from '../../shared/service/appmessage.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
  animations: [
    trigger('crossfade', [
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
      transition('* => show', animate('1s ease-in')),
      transition('show => hide', animate('1s ease-out'))
    ])
  ]
})
export class ActionComponent implements OnInit {

  /**
   *data - Reference to input data
   *
   * @type {string}
   * @memberof ActionComponent
   */
  @Input() data: string = '';

  /**
   *callSayToParent - Reference to output eventemitter
   *
   * @memberof ActionComponent
   */
  @Output() callSayToParent = new EventEmitter();

  /**
   *_compActive - Reference to component active indicator
   *
   * @private
   * @type {boolean}
   * @memberof ActionComponent
   */
  private _compActive: boolean = false;

  /**
   *_messageState - Reference to the message state object
   *
   * @private
   * @type {ActionObject}
   * @memberof ActionComponent
   */
  private _messageState: ActionObject;

  /**
   *dataState - reference to data animation effect
   *
   * @memberof ActionComponent
   */
  public dataState = 'hide';


  constructor(private _messageEvent: AppmessageService) { }

  /**
   *Life Cycle Method onInit
   *
   * @memberof ActionComponent
   */
  ngOnInit(): void {
    this._compActive = true;
    this._addSubscrptions();
  }


  /**
   *Life Cycle Method ngOnChanges
   *
   * @param {SimpleChanges} changes
   * @memberof ActionComponent
   */
  ngOnChanges(changes: SimpleChanges): void {

    if (changes['data']) {
     this.triggerDataChange();
    }
  }

  /**
   *Method to trigger Data change
   *
   * @memberof ActionComponent
   */
  public triggerDataChange(){
    if (this.data !== '') {
      this.dataState = 'show';
      setTimeout(() => {
        this.dataState = 'hide';
        this.data = '';
      }, 2000);
    }
  }

  /**
   *Method to add subscrption
   *
   * @private
   * @memberof ActionComponent
   */
  private _addSubscrptions(): void {
    this._messageEvent.getMessageEvent().pipe(takeWhile(() => {
      return this._compActive
    })).subscribe((state) => {
      this._messageState = {...state};
      this.data = state.message;
      this.triggerDataChange();
    })
  }


  /**
   *Method to emit event to parent
   *
   * @param {*} event
   * @memberof ActionComponent
   */
  public sayParentHandler(event): void {
    this.callSayToParent.emit('HAI TO PARENT')
  }

  /**
   *Method to communicate to Sibiling
   *
   * @param {*} event
   * @memberof ActionComponent
   */
  public sayChildHandler(event): void {
    this._messageEvent.setMessageEvent({ ...this._messageState, message: 'CALLING SIBLING' });
  }

  /**
   *Life cycle method ngOnDestroy
   *
   * @memberof ActionComponent
   */
  ngOnDestroy() {
    this._compActive = false;
  }

}
