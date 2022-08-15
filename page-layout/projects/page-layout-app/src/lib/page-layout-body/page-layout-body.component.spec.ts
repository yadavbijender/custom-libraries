import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutBodyComponent } from './page-layout-body.component';

describe('PageLayoutBodyComponent', () => {
  let component: PageLayoutBodyComponent;
  let fixture: ComponentFixture<PageLayoutBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLayoutBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLayoutBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
