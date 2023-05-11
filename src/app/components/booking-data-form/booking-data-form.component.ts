import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BookingDataService } from '../../shared/services/booking-data/booking-data.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControlErrorMsgDirective } from '../../shared/directives/form-control-error-msg/form-control-error-msg.directive';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-booking-data-form',
  templateUrl: './booking-data-form.component.html',
  imports: [ReactiveFormsModule, FormControlErrorMsgDirective, NgIf],
  styleUrls: ['./booking-data-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingDataFormComponent implements OnInit {
  detailsForm: FormGroup;
  bookingCodeRegexpPatter = new RegExp('^[a-zA-Z2-9]*$');
  error: string;

  constructor(private bookingDataService: BookingDataService, private fb: FormBuilder, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.detailsForm = this.initForm();
    this.bookingDataService.bookingErrorSubject$.subscribe(backendError => {
      this.error = backendError;
      this.cdr.detectChanges();
    });
    this.detailsForm.valueChanges.subscribe(_ => {
      this.error = '';
      this.cdr.detectChanges();
    });
  }

  validateData(): void {
    if (this.detailsForm.invalid) {
      return;
    }
    this.bookingDataService.findBookingDetailsByBookingCodeAndFamilyName({
      bookingCode: this.detailsForm.get('bookingCode')?.value,
      familyName: this.detailsForm.get('familyName')?.value,
    });
  }

  private initForm(): FormGroup {
    return this.fb.group({
      bookingCode: [
        null,
        [Validators.required, Validators.minLength(5), Validators.maxLength(6), Validators.pattern(this.bookingCodeRegexpPatter)],
      ],
      familyName: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    });
  }
}
