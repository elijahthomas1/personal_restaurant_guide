/* eslint-disable guard-for-in */
import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.scss'],
})
export class EditRestaurantComponent implements OnInit {
  public allRestaurants = [];
  public indexToUpdateRes: any;
  currRestaurant = {
    name: '',
    description: '',
    location: '',
    tags: '',
    rating: '',
  };
  constructor(private router: Router) {}

  ngOnInit() {
    Storage.get({ key: 'current' }).then((res) => {
      const obj = JSON.parse(res.value);
      this.currRestaurant = obj;
    });

    Storage.get({ key: `restaurants` }).then((res) => {
      const obj = JSON.parse(res.value);

      this.allRestaurants = obj;
      for (const i in this.allRestaurants) {
        if (this.allRestaurants[i].name === this.currRestaurant.name) {
          this.indexToUpdateRes = i;
        }
      }
    });
  }

  onSubmit() {
    this.allRestaurants[this.indexToUpdateRes] = this.currRestaurant;

    const obj = JSON.stringify(this.allRestaurants);
    Storage.set({
      key: `restaurants`,
      value: `${obj}`,
    }).then(() => {
      window.alert(`Restaurant Updated`);
      this.router.navigateByUrl('/main');
    });
  }

  goBack() {
    this.router.navigateByUrl('/main');
  }
}
