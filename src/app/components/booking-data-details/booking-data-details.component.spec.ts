import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDataDetailsComponent } from './booking-data-details.component';

describe('BookingDataDetailsComponent', () => {
  let component: BookingDataDetailsComponent;
  let fixture: ComponentFixture<BookingDataDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingDataDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingDataDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
