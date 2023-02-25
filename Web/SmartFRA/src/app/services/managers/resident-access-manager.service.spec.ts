import { TestBed } from '@angular/core/testing';

import { ResidentAccessManagerService } from './resident-access-manager.service';

describe('ResidentAccessManagerService', () => {
  let service: ResidentAccessManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResidentAccessManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
