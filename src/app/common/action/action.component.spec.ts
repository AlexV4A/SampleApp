import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionComponent } from './action.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

describe('ActionComponent', () => {
  let component: ActionComponent;
  let fixture: ComponentFixture<ActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule //For Issue Found the synthetic property @crossfade
      ],
      declarations: [ ActionComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
