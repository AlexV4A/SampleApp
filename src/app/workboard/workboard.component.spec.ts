import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { WorkboardComponent } from './workboard.component';
import { AppdataService } from '../shared/service/appdata.service';
import { UserdataObject, RSSObject } from '../shared/model/userdata';
import { Observable } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
describe('WorkboardComponent', () => {
  let component: WorkboardComponent;
  let fixture: ComponentFixture<WorkboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          BrowserModule, 
          FormsModule, ReactiveFormsModule,/* For Issue No provider for FormBuilder!*/
          BrowserAnimationsModule //Error: Found the synthetic property @
      ],
      declarations: [ WorkboardComponent ],
      providers:[{provide: AppdataService, useClass : MockAppDataService}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it("should test callParentHandler", fakeAsync(() => {
    component.callParentHandler('HI')
    tick(2000)
    fixture.detectChanges()
  
    fixture.whenStable().then(() => {
      expect( component.dataState).toBe('hide')
    })
  }));

  it("should test fetchRSS", () => {
    component.fetchRSS('HI')
    expect( component['_rssData']).toBeDefined();
  });

});
