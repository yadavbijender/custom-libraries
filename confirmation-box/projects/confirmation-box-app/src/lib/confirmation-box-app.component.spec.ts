import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationBoxAppComponent } from './confirmation-box-app.component';

describe('ConfirmationBoxAppComponent', () => {
  let component: ConfirmationBoxAppComponent;
  let fixture: ComponentFixture<ConfirmationBoxAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationBoxAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationBoxAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
