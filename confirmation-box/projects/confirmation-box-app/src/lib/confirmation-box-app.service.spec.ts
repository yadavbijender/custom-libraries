import { TestBed } from '@angular/core/testing';

import { ConfirmationBoxAppService } from './confirmation-box-app.service';

describe('ConfirmationBoxAppService', () => {
  let service: ConfirmationBoxAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmationBoxAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
