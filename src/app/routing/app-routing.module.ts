import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from '../components/add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from '../components/edit-restaurant/edit-restaurant.component';
import { InfoscreenComponent } from '../components/infoscreen/infoscreen.component';
import { MainscreenComponent } from '../components/mainscreen/mainscreen.component';
import { ViewRestaurantscreenComponent } from '../components/view-restaurantscreen/view-restaurantscreen.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../components/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainscreenComponent,
  },
  {
    path: 'info',
    component: InfoscreenComponent,
  },
  {
    path: 'viewRestaurant',
    component: ViewRestaurantscreenComponent,
  },
  {
    path: 'addRest',
    component: AddRestaurantComponent,
  },
  {
    path: 'edit',
    component: EditRestaurantComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
