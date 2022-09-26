import { TestBed } from '@angular/core/testing';

import { ResidentManagerService } from './resident-manager.service';

describe('ResidentManagerService', () => {
  let service: ResidentManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResidentManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
