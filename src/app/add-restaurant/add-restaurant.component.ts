import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss'],
})
export class AddRestaurantComponent implements OnInit {
  main: any;
  newRestaurant = {
    name: '',
    location: '',
    description: '',
    tags: '',
    ratings: '',
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  async onSubmit() {
    console.log(this.newRestaurant);
    window.alert(`New Restaurant Added`);
    this.router.navigateByUrl('/main');
  }

  goBack() {
    this.router.navigateByUrl('/main');
  }
}
