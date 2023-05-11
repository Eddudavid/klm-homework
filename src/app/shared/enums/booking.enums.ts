export enum ItineraryTypeEnum {
  ONE_WAY = 'ONE_WAY',
}

export enum SegmentTypeEnum {
  LOCAL = 'LOCAL',
}

export enum SellingClassEnum {
  Z = 'Z',
}
export enum BookingErrorEnums {
  NOT_FOUND = 'Booking not found. Please check you booking code / family name, and try again.',
  BOOKING_CODE_REQ = 'Booking code is a required filed',
  BOOKING_CODE_MIN_LEN = 'Booking code must have 5 characters',
  BOOKING_CODE_MAX_LEN = 'Booking code can have maximum 6 characters',
  BOOKING_CODE_PATTERN = 'Booking code contains invalid characters. Allowed characters: a-z, A-Z, 2-9',
  FNAME_CODE_REQ = 'Family name is a required filed',
  FNAME_CODE_MIN_LEN = 'Family name must have 2 characters',
  FNAME_CODE_MAX_LEN = 'Family name can have maximum 30 characters',
}
