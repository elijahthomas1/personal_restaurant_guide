import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-mapscreen',
  templateUrl: './mapscreen.component.html',
  styleUrls: ['./mapscreen.component.scss'],
})
export class MapscreenComponent implements OnInit {
  public curRestaurant = {
    name: '',
    location: '',
    description: '',
    tags: '',
    rating: '',
  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.getCurrent()
  }

  getCurrent() {
    Storage.get({ key: 'current' }).then((res) => {
      const obj = JSON.parse(res.value);
      this.curRestaurant = obj;
    });
  }

  goBack() {
    this.router.navigateByUrl('/viewRestaurant');
  }

}
