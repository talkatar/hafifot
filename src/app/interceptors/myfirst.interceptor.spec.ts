import { TestBed } from '@angular/core/testing';

import { MyfirstInterceptor } from './myfirst.interceptor';

describe('MyfirstInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MyfirstInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MyfirstInterceptor = TestBed.inject(MyfirstInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
