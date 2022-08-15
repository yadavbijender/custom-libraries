import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutAppComponent } from './page-layout-app.component';

describe('PageLayoutAppComponent', () => {
  let component: PageLayoutAppComponent;
  let fixture: ComponentFixture<PageLayoutAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLayoutAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLayoutAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
