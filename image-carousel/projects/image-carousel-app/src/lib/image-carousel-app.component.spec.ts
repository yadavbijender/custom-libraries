import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCarouselAppComponent } from './image-carousel-app.component';

describe('ImageCarouselAppComponent', () => {
  let component: ImageCarouselAppComponent;
  let fixture: ComponentFixture<ImageCarouselAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCarouselAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCarouselAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
