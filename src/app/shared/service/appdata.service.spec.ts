import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppdataService } from './appdata.service';

describe('AppdataService', () => {
  let service: AppdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]});
    service = TestBed.inject(AppdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
