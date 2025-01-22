/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Dbz.service.tsService } from './dbz.service.ts.service';

describe('Service: Dbz.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Dbz.service.tsService]
    });
  });

  it('should ...', inject([Dbz.service.tsService], (service: Dbz.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});
