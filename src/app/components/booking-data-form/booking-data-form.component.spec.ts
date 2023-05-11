import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDataFormComponent } from './booking-data-form.component';

describe('BookingDataFormComponent', () => {
  let component: BookingDataFormComponent;
  let fixture: ComponentFixture<BookingDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingDataFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
