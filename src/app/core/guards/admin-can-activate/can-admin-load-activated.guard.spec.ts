import { TestBed } from '@angular/core/testing';

import { CanAdminLoadActivatedGuard } from './can-admin-load-activated.guard';

describe('CanAdminLoadActivatedGuard', () => {
  let guard: CanAdminLoadActivatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAdminLoadActivatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
