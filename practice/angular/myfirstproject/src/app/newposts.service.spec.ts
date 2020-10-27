import { TestBed } from '@angular/core/testing';

import { NewpostsService } from './newposts.service';

describe('NewpostsService', () => {
  let service: NewpostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewpostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
