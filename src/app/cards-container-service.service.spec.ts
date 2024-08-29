import { TestBed } from '@angular/core/testing';

import { CardsContainerService } from './cards-container-service.service';

describe('CardsContainerServiceService', () => {
  let service: CardsContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
