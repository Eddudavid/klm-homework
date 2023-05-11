import { Pipe, PipeTransform } from '@angular/core';
import { ItineraryTypeEnum } from '../../enums/booking.enums';

@Pipe({
  name: 'itineraryType',
  standalone: true,
})
export class ItineraryTypePipe implements PipeTransform {
  transform(value: ItineraryTypeEnum, ...args: unknown[]): unknown {
    switch (value) {
      case ItineraryTypeEnum.ONE_WAY:
        return 'One way';
      default:
        return 'Unknown';
    }
  }
}
