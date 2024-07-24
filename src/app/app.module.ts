import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { hotelListComponent } from './hotel-list/hotel-list.component';
import { FormsModule } from '@angular/forms';
import { StartRatingComponent } from './shared/components/star-rating/star-rating.component';
import { HomeComponent } from './home/home.component';
import { HotelDetailComponent } from './hotel-list/hotel-detail/hotel-detail.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'hotel/:id', component: HotelDetailComponent },
  { path: 'hotels', component: hotelListComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    hotelListComponent,
    StartRatingComponent,
    HomeComponent,
    HotelDetailComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
