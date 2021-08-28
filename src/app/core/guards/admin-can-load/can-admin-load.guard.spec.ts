import { TestBed } from '@angular/core/testing';

import { CanAdminLoadGuard } from './can-admin-load.guard';

describe('CanAdminLoadGuard', () => {
  let guard: CanAdminLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAdminLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
