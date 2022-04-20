import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-view-restaurantscreen',
  templateUrl: './view-restaurantscreen.component.html',
  styleUrls: ['./view-restaurantscreen.component.scss'],
})
export class ViewRestaurantscreenComponent implements OnInit {
  public allRestaurants: Array<any>;
  public curRestaurant = {
    name: '',
    location: '',
    description: '',
    tags: '',
    rating: '',
  };
  restkey = 'current';

  constructor(private router: Router) {}

  ngOnInit() {
    this.getCurrent();
  }

  getCurrent() {
    Storage.get({ key: 'current' }).then((res) => {
      const obj = JSON.parse(res.value);
      this.curRestaurant = obj;
      console.log(this.curRestaurant);
    });
  }

  goBack() {
    this.router.navigateByUrl('/main');
  }

  goEdit() {
    this.router.navigateByUrl('/edit');
  }
}
