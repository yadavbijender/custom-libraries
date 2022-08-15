import { TestBed } from '@angular/core/testing';

import { ImageCarouselAppService } from './image-carousel-app.service';

describe('ImageCarouselAppService', () => {
  let service: ImageCarouselAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageCarouselAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
