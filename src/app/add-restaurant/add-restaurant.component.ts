import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss'],
})
export class AddRestaurantComponent implements OnInit {
  restaurants = [];
  main: any;
  newRestaurant = {
    name: '',
    location: '',
    description: '',
    tags: '',
    rating: '',
  };

  constructor(private router: Router) {}

  ngOnInit() {
    Storage.get({ key: `restaurants` }).then((res) => {
      this.restaurants = JSON.parse(res.value);
      console.log(this.restaurants);
    });
  }

  async onSubmit() {
    this.restaurants.push(this.newRestaurant);
    await Storage.set({
      key: 'restaurants',
      value: `${JSON.stringify(this.restaurants)}`,
    });
    console.log(this.restaurants);
    window.alert(`New Restaurant Added`);
    this.newRestaurant = {
      name: '',
      location: '',
      description: '',
      tags: '',
      rating: '',
    };

    this.router.navigateByUrl('/main');
  }

  goBack() {
    this.router.navigateByUrl('/main');
  }
}
