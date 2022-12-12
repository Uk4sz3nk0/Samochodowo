import { TestBed } from '@angular/core/testing';

import { CarBaseServiceService } from './car-base-service.service';

describe('CarBaseServiceService', () => {
  let service: CarBaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarBaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
