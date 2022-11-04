import { TestBed } from '@angular/core/testing';

import { S3AccessService } from './s3-access.service';

describe('S3AccessService', () => {
  let service: S3AccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(S3AccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
