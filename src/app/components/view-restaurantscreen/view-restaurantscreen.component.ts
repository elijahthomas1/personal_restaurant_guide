/* eslint-disable guard-for-in */
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
  public indexToDelete: any;
  public curRestaurant = {
    name: '',
    location: '',
    description: '',
    tags: '',
    rating: '',
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.getCurrent();

    Storage.get({ key: `restaurants` }).then((res) => {
      const obj = JSON.parse(res.value);

      this.allRestaurants = obj;
      for (const i in this.allRestaurants) {
        if (this.allRestaurants[i].name === this.curRestaurant.name) {
          this.indexToDelete = i;
          console.log(this.indexToDelete);
        }
      }
    });
  }

  getCurrent() {
    Storage.get({ key: 'current' }).then((res) => {
      const obj = JSON.parse(res.value);
      this.curRestaurant = obj;
    });
  }

  goBack() {
    this.router.navigateByUrl('/main');
  }

  goEdit() {
    this.router.navigateByUrl('/edit');
  }

  goMap() {
    this.router.navigateByUrl('/map');
  }

  async delete() {
    if (this.indexToDelete > -1) {
      this.allRestaurants.splice(this.indexToDelete, 1);
    }
    for (const i in this.allRestaurants) {
      console.log(this.allRestaurants[i]);
    }
    await Storage.set({
      key: 'restaurants',
      value: `${JSON.stringify(this.allRestaurants)}`,
    }).then(() => {
      window.alert(`Restaurant Deleted`);
      this.router.navigateByUrl('main');
    });
  }

}
