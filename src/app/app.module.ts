import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { MainscreenComponent } from './components/mainscreen/mainscreen.component';
import { ViewRestaurantscreenComponent } from './components/view-restaurantscreen/view-restaurantscreen.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './components/edit-restaurant/edit-restaurant.component';
import { SearchscreenComponent } from './components/searchscreen/searchscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainscreenComponent,
    ViewRestaurantscreenComponent,
    AddRestaurantComponent,
    EditRestaurantComponent,
    SearchscreenComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ScrollingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
