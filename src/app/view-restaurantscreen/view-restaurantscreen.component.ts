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
  public curRestaurant = {name:"Pizza Pizza", location:"2077 Danforth Ave, Toronto", description:"Delicious Pizza and Wings", tags:["pizza", "wings","italian"],rating: "5"};
  restkey = 'current';

  constructor(private router: Router) { }

  ngOnInit() {
    this.getCurrent();
  }

  getCurrent() {
    Storage.get({key:'current'}).then((res) => {
      let obj = JSON.parse(res.value);
      this.curRestaurant = obj;
      console.log(this.curRestaurant)
      
    })
  }

  goBack() {
    this.curRestaurant = {name:"Pizza Pizza", location:"2077 Danforth Ave, Toronto", description:"Delicious Pizza and Wings", tags:["pizza", "wings","italian"],rating: "5"};
    this.router.navigateByUrl('/main')
  }

}
