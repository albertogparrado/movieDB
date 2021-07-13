import { TestBed } from '@angular/core/testing';

import { PopularsMoviesService } from './populars-movies.service';

describe('PopularsMoviesService', () => {
  let service: PopularsMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularsMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
