import { TestBed } from '@angular/core/testing';

import { LoginBasicAuthService } from './login-basic-auth.service';

describe('LoginBasicAuthService', () => {
  let service: LoginBasicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
