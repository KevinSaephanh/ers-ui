import { TestBed } from '@angular/core/testing';

import { ReimbImgServiceService } from './reimb-img-service.service';

describe('ReimbImgServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReimbImgServiceService = TestBed.get(ReimbImgServiceService);
    expect(service).toBeTruthy();
  });
});
