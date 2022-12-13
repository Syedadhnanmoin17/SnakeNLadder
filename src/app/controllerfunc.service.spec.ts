import { TestBed } from '@angular/core/testing';

import { ControllerfuncService } from './controllerfunc.service';

describe('ControllerfuncService', () => {
  let service: ControllerfuncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControllerfuncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
