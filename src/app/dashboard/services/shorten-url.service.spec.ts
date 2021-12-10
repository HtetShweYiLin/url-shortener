import { TestBed } from '@angular/core/testing';

import { ShortenUrlService } from './shorten-url.service';

describe('ShortenUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShortenUrlService = TestBed.get(ShortenUrlService);
    expect(service).toBeTruthy();
  });
});
