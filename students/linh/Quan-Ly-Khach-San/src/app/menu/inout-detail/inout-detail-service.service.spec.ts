import { TestBed, inject } from '@angular/core/testing';

import { InoutDetailServiceService } from './inout-detail-service.service';

describe('InoutDetailServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InoutDetailServiceService]
    });
  });

  it('should be created', inject([InoutDetailServiceService], (service: InoutDetailServiceService) => {
    expect(service).toBeTruthy();
  }));
});
