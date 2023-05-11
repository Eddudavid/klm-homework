import { ItineraryTypeEnum, SegmentTypeEnum, SellingClassEnum } from '../enums/booking.enums';

export interface IFindBookingDetailsByBookingCodeAndFamilyNameRequestDTO {
  bookingCode: string;
  familyName: string;
}

export interface IFindBookingDetailsByBookingCodeAndFamilyNameResponseDTO {
  bookingCode: string;
  contactDetails: [
    {
      address: string;
    }
  ];
  itinerary: {
    type: ItineraryTypeEnum;
    connections: [
      {
        duration: string;
        origin: {
          name: string;
          city: {
            name: string;
            country: {
              code: string;
              name: string;
            };
          };
        };
        destination: {
          name: string;
          city: {
            name: string;
            country: {
              code: string;
              name: string;
            };
          };
        };
        segments: [
          {
            type: SegmentTypeEnum;
            informational: boolean;
            departFrom: {
              name: string;
              city: {
                name: string;
                country: {
                  code: string;
                  name: string;
                };
              };
            };
            arriveOn: {
              name: string;
              city: {
                name: string;
                country: {
                  code: string;
                  name: string;
                };
              };
            };
            marketingFlight: {
              number: string;
              carrier: {
                name: string;
              };
              status: {
                name: string;
              };
              numberOfStops: number;
              sellingClass: {
                code: SellingClassEnum;
              };
              operatingFlight: {
                number: string;
                carrier: {
                  name: string;
                };
                duration: string;
                flown: boolean;
                checkInStart: Date;
                localCheckInStart: Date;
                checkInEnd: Date;
                localCheckInEnd: Date;
                scheduledArrival: Date;
                localScheduledArrival: Date;
                scheduledDeparture: Date;
                localScheduledDeparture: Date;
                arrivalTerminal: {
                  name: string;
                };
                cabin: {
                  name: string;
                };
                equipment: {
                  name: string;
                };
              };
            };
          }
        ];
      }
    ];
  };
  passengers: {
    firstName: string;
    lastName: string;
    title: {
      name: string;
    };
  };
}
