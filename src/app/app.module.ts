import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BookingDataFormComponent } from './components/booking-data-form/booking-data-form.component';
import { BookingDataDetailsComponent } from './components/booking-data-details/booking-data-details.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItineraryTypePipe } from './shared/pipes/itinerary-type/itinerary-type.pipe';

@NgModule({
  declarations: [AppComponent],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookingDataFormComponent,
    BookingDataDetailsComponent,
    GraphQLModule,
    HttpClientModule,
    HeaderComponent,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
