import { TestBed } from '@angular/core/testing';

import { AdminDataInterceptor } from './admin-data.interceptor';

describe('AdminDataInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AdminDataInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AdminDataInterceptor = TestBed.inject(AdminDataInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
