import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { IntroComponent } from './intro.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserdataObject, RSSObject } from '../shared/model/userdata';
import { Observable } from 'rxjs';
import { AppdataService } from '../shared/service/appdata.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export class MockAppDataService {

  private _userInfo : UserdataObject = {
    name : 'HAI'
  };

  public setUserDataObject(userObj: UserdataObject): void {
    this._userInfo = { ...userObj };
  }

  public getUserDataObject(): UserdataObject {
    return this._userInfo;
  }

  public fetchRSS(): Observable<RSSObject> {

    return Observable.create(observer => {
      observer.next({'result': ''})
    })
  }
}

describe('IntroComponent', () => {
  let component: IntroComponent;
  let fixture: ComponentFixture<IntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, 
        FormsModule, ReactiveFormsModule,/* For Issue No provider for FormBuilder!*/
        RouterTestingModule,
        BrowserAnimationsModule],/* For Issue No provider for Router!*/
        providers: [{provide : AppdataService, useClass : MockAppDataService}], //No provider for HttpClient!
      declarations: [ IntroComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
