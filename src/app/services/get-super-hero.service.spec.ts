import { TestBed } from '@angular/core/testing';

import { GetSuperHeroService } from './get-super-hero.service';

describe('GetSuperHeroService', () => {
  let service: GetSuperHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSuperHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
