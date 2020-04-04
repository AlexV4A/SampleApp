import { TestBed } from '@angular/core/testing';

import { MessageadapterService } from './messageadapter.service';

describe('MessageadapterService', () => {
  let service: MessageadapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageadapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
