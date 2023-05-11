import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingDetailGuard } from './core/guards/booking-detail/booking-detail.guard';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/booking-data-form/booking-data-form.component').then(mod => mod.BookingDataFormComponent),
  },
  {
    path: 'booking-details',
    canActivate: [BookingDetailGuard()],
    loadComponent: () =>
      import('./components/booking-data-details/booking-data-details.component').then(mod => mod.BookingDataDetailsComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
