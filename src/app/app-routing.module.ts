import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InfoscreenComponent } from './infoscreen/infoscreen.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { ViewRestaurantscreenComponent } from './view-restaurantscreen/view-restaurantscreen.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainscreenComponent
  },
  {
    path: 'info',
    component: InfoscreenComponent
  },
  {
    path: 'viewRestaurant',
    component: ViewRestaurantscreenComponent
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
