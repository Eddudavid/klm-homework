import { Injectable } from '@angular/core';
import { BookingErrorEnums } from '../../enums/booking.enums';

@Injectable({
  providedIn: 'root',
})
export class ValidationMessageService {
  getValidationMsg(validationId: string): string {
    return this._errorMessages[validationId.trim()];
  }

  private _errorMessages = {
    'bookingCode-required-msg': BookingErrorEnums.BOOKING_CODE_REQ,
    'bookingCode-minlength-msg': BookingErrorEnums.BOOKING_CODE_MIN_LEN,
    'bookingCode-maxlength-msg': BookingErrorEnums.BOOKING_CODE_MAX_LEN,
    'bookingCode-pattern-msg': BookingErrorEnums.BOOKING_CODE_PATTERN,
    'familyName-required-msg': BookingErrorEnums.FNAME_CODE_REQ,
    'familyName-minlength-msg': BookingErrorEnums.FNAME_CODE_MIN_LEN,
    'familyName-maxlength-msg': BookingErrorEnums.FNAME_CODE_MAX_LEN,
  };
}
