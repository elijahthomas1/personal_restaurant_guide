import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.scss'],
})
export class EditRestaurantComponent implements OnInit {
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
  }

  onSubmit() {}

  goBack() {
    this.router.navigateByUrl('/main');
  }
}
