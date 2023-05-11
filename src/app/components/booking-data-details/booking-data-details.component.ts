import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { BookingDataService } from '../../shared/services/booking-data/booking-data.service';
import { IFindBookingDetailsByBookingCodeAndFamilyNameResponseDTO } from '../../shared/interfaces/booking.interfaces';
import { CommonModule } from '@angular/common';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ItineraryTypePipe } from '../../shared/pipes/itinerary-type/itinerary-type.pipe';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-booking-data-details',
  templateUrl: './booking-data-details.component.html',
  styleUrls: ['./booking-data-details.component.scss'],
  imports: [CommonModule, MatExpansionModule, MatIconModule, ItineraryTypePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BookingDataDetailsComponent implements OnInit, OnDestroy {
  bookingDetails: IFindBookingDetailsByBookingCodeAndFamilyNameResponseDTO;
  constructor(private bookingDataService: BookingDataService, private router: Router) {}

  ngOnInit(): void {
    this.bookingDetails = this.bookingDataService.bookingDetails;
  }
  ngOnDestroy(): void {
    this.bookingDataService.bookingDetails = null as any;
  }
  back(): void {
    this.router.navigate(['/'], { relativeTo: null });
  }
}
