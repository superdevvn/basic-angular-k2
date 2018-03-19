import { TestBed, inject } from '@angular/core/testing';

import { InOutService } from './in-out.service';

describe('InOutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InOutService]
    });
  });

  it('should be created', inject([InOutService], (service: InOutService) => {
    expect(service).toBeTruthy();
  }));
});
