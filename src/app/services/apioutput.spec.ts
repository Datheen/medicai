import { TestBed } from '@angular/core/testing';

import { Apioutput } from './apioutput';

describe('Apioutput', () => {
  let service: Apioutput;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apioutput);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
