/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.scss'],
})
export class MainscreenComponent implements OnInit {
  public allRestaurants: Array<any>;
  restkey = 'restaurants';
  searchRest = '';
  searchkey = 'searchkey'

  constructor(private router: Router) {}

  ngOnInit() {
    this.getAllRestaurants();
  }

  goInfo() {
    this.router.navigateByUrl('/info');
  }

  goAddRest() {
    this.router.navigateByUrl('/addRest');
  }

  goSearch() {
    const obj = JSON.stringify(this.searchRest)
    Storage.set({
      key: `${this.searchkey}`,
      value: `${obj}`
    });
    console.log(this.searchRest)
    this.router.navigateByUrl('/search');
  }

  getAllRestaurants() {
    Storage.get({ key: `${this.restkey}` }).then((res) => {
      const obj = JSON.parse(res.value);
      this.allRestaurants = obj;
      if (this.allRestaurants == null) {
        this.allRestaurants = this.allrest;
      }
      this.setRestaurants();
      console.log(this.allRestaurants);
    });
  }

  goRestaurant(rest: any) {
    const thekey = 'current';
    const obj = JSON.stringify(rest);
    Storage.set({
      key: `${thekey}`,
      value: `${obj}`,
    }).then(() => {
      console.log('current restaurant stored');
      console.log(obj);
    });
    this.router.navigateByUrl('/viewRestaurant');
  }

  // name, location, description , tags, rating
  rest1 = {
    name: 'Pizza Pizza',
    location: '2077 Danforth Ave, Toronto',
    description: 'Delicious Pizza and Wings',
    tags: ['pizza', 'wings', 'italian'],
    rating: '5',
  };
  rest2 = {
    name: 'McDonalds',
    location: '31 Woodward Ave, Toronto',
    description: 'Big Mac Burgers and Fries',
    tags: ['burgers', 'fries', 'american'],
    rating: '4',
  };
  rest3 = {
    name: 'KFC',
    location: '1364 Queen St E, Toronto',
    description: 'Fried Chicken, Sandwiches, Fries',
    tags: ['Chicken', 'wings', 'american'],
    rating: '2',
  };
  allrest = [this.rest1, this.rest2, this.rest3];

  setRestaurants() {
    const obj = JSON.stringify(this.allRestaurants);
    Storage.set({
      key: `${this.restkey}`,
      value: `${obj}`,
    }).then(() => {
      console.log('restaurants stored');
    });
  }

  ionViewWillEnter() {
    this.getAllRestaurants();
  }
}
