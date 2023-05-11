import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { BookingDataService } from '../../../shared/services/booking-data/booking-data.service';

export function BookingDetailGuard(): CanActivateFn {
  return (): boolean | UrlTree => {
    if (!inject(BookingDataService).bookingDetails) {
      inject(Router).navigateByUrl('/');
      return false;
    }

    return !!inject(BookingDataService).bookingDetails;
  };
}
