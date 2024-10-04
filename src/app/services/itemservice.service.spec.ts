import { TestBed } from '@angular/core/testing';

import { ItemserviceService } from './itemservice.service';

describe('ItemserviceService', () => {
  let service: ItemserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
