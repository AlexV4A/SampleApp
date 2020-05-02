import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { AppdataService } from '../shared/service/appdata.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    trigger('fadeToggle', [
      state('initial', style({
        opacity: '0'
      })),
      state('final', style({
        opacity: '1'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ])
  ]
})
export class IntroComponent implements OnInit {

  /**
   *userForm - Reference to the user form 
   *
   * @type {FormGroup}
   * @memberof IntroComponent
   */
  public userForm: FormGroup;

  /**
   *currentState - Reference to the component state 
   *
   * @memberof IntroComponent
   */
  public currentState = 'initial';

  /**
   *_formSubscription - Reference to the form change subscription.
   *
   * @private
   * @type {*}
   * @memberof IntroComponent
   */
  private _formSubscription: any;

  constructor(private _router: Router, private _formBuilder: FormBuilder,
    private _userDataService: AppdataService) { }

  /**
   *Life cycle event - ngOnInit 
   *
   * @memberof IntroComponent
   */
  ngOnInit() {
    this._initializeValues();
    this._subscribtionHandler();
  }

  /**
   *Initailizes the form values
   *
   * @private
   * @memberof IntroComponent
   */
  private _initializeValues() {
    this.userForm = this._formBuilder.group({
      username: [null, Validators.required]
    });
  }

  /**
   *Form value change Event handler.
   *
   * @private
   * @memberof IntroComponent
   */
  private _subscribtionHandler() {

    this._formSubscription = this.userForm.valueChanges.subscribe(val => {
      this.currentState = !this.userForm.valid ? 'final' : 'initial';
    });
  }

  /**
   *Manages the submition event handling.
   *
   * @memberof IntroComponent
   */
  public onSubmit() {
    if (this.userForm.valid) {
      console.log('form submitted', this.userForm.get('username').value);
      this._userDataService.setUserDataObject({ id: 'RANDOMTEXT', name: this.userForm.get('username').value })
      this._router.navigate(['/workboard']);
    } else {
      this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    }
  }

  /**
   *Life cycle method ngOnDestroy
   * Unsubscribes the handles change event
   *
   * @memberof IntroComponent
   */
  /* istanbul ignore next */
  ngOnDestroy() {
    this._formSubscription.unsubscribe();
  }
}
