import { TestBed, inject } from '@angular/core/testing';

import { InoutServiceService } from './inout-service.service';

describe('InoutServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InoutServiceService]
    });
  });

  it('should be created', inject([InoutServiceService], (service: InoutServiceService) => {
    expect(service).toBeTruthy();
  }));
});
