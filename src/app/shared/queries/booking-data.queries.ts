import { gql } from 'apollo-angular';

export const FIND_BOOKING_DETAILS_QUERY = gql`
  query bookingDetails($bookingCode: String!, $familyName: String!) {
    bookingDetails(bookingCode: $bookingCode, familyName: $familyName) {
      bookingCode
      contactDetails {
        address
      }
      itinerary {
        type
        connections {
          duration
          origin {
            name
            city {
              name
              country {
                code
                name
              }
            }
          }
          destination {
            name
            city {
              name
              country {
                code
                name
              }
            }
          }
          segments {
            type
            informational
            departFrom {
              name
              city {
                name
                country {
                  code
                  name
                }
              }
            }
            arriveOn {
              name
              city {
                name
                country {
                  code
                  name
                }
              }
            }
            marketingFlight {
              number
              carrier {
                name
              }
              status {
                name
              }
              numberOfStops
              sellingClass {
                code
              }
              operatingFlight {
                number
                carrier {
                  name
                }
                duration
                flown
                checkInStart
                localCheckInStart
                checkInEnd
                localCheckInEnd
                scheduledArrival
                localScheduledArrival
                scheduledDeparture
                localScheduledDeparture
                arrivalTerminal {
                  name
                }
                cabin {
                  name
                }
                equipment {
                  name
                }
              }
            }
          }
        }
      }
      passengers {
        firstName
        lastName
        title {
          name
        }
      }
    }
  }
`;
