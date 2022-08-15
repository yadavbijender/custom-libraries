import { TestBed } from '@angular/core/testing';

import { PageLayoutAppService } from './page-layout-app.service';

describe('PageLayoutAppService', () => {
  let service: PageLayoutAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageLayoutAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
