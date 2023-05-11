import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  IFindBookingDetailsByBookingCodeAndFamilyNameRequestDTO,
  IFindBookingDetailsByBookingCodeAndFamilyNameResponseDTO,
} from '../../interfaces/booking.interfaces';
import { FIND_BOOKING_DETAILS_QUERY } from '../../queries/booking-data.queries';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BookingErrorEnums } from '../../enums/booking.enums';

@Injectable({
  providedIn: 'root',
})
export class BookingDataService {
  bookingErrorSubject$ = new BehaviorSubject<string>('');

  set bookingDetails(value: IFindBookingDetailsByBookingCodeAndFamilyNameResponseDTO) {
    this._bookingDetails = value;
  }
  get bookingDetails(): IFindBookingDetailsByBookingCodeAndFamilyNameResponseDTO {
    return this._bookingDetails;
  }

  private _bookingDetails: IFindBookingDetailsByBookingCodeAndFamilyNameResponseDTO = null as any;

  constructor(private apollo: Apollo, private router: Router) {}

  findBookingDetailsByBookingCodeAndFamilyName(request: IFindBookingDetailsByBookingCodeAndFamilyNameRequestDTO) {
    this.bookingErrorSubject$.next('');
    return this.apollo
      .watchQuery({
        query: FIND_BOOKING_DETAILS_QUERY,
        variables: {
          bookingCode: request.bookingCode,
          familyName: request.familyName,
        },
      })
      .valueChanges.subscribe(
        (data: any) => {
          if (data.data.bookingDetails == null) {
            this.bookingErrorSubject$.next(BookingErrorEnums.NOT_FOUND);
            return;
          }
          this._bookingDetails = data.data.bookingDetails;
          this.router.navigate(['booking-details'], { relativeTo: null });
        },
        error => {
          this.bookingErrorSubject$.next(error.message);
        }
      );
  }
}
