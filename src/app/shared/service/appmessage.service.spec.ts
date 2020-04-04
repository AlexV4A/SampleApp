import { TestBed } from '@angular/core/testing';

import { AppmessageService } from './appmessage.service';

describe('AppmessageService', () => {
  let service: AppmessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppmessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
