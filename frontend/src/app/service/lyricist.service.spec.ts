import { TestBed } from '@angular/core/testing';

import { LyricistService } from './lyricist.service';

describe('LyricistService', () => {
  let service: LyricistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LyricistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
