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
  restkey = "restaurants";

  constructor(private router: Router) { }

  ngOnInit() {
    this.getAllRestaurants();
  }

  goInfo() {
    this.router.navigateByUrl('/info')
  }

  getAllRestaurants() {
    Storage.get({key:`${this.restkey}`}).then((res) => {
      let obj = JSON.parse(res.value);
      this.allRestaurants = obj;
      if (this.allRestaurants == null) {
        this.allRestaurants = this.allrest;
      }
      this.setRestaurants()
      console.log(this.allRestaurants)
      
    })
  }

  goRestaurant(rest) {
    let thekey = 'current'
    let obj = JSON.stringify(rest)
    Storage.set({
      key: `${thekey}`,
      value:`${obj}`
    }).then(() => {
      console.log("current restaurant stored")
      console.log(obj)
    })
    this.router.navigateByUrl('/viewRestaurant')
  }



  // name, location, description , tags, rating
  rest1 = {name:"Pizza Pizza", location:"2077 Danforth Ave, Toronto", description:"Delicious Pizza and Wings", tags:["pizza", "wings","italian"],rating: "5"}
  rest2 = {name:"McDonalds", location:"31 Woodward Ave, Toronto", description:"Big Mac Burgers and Fries", tags:["burgers", "fries","american"],rating: "4"}
  rest3 = {name:"KFC", location:"1364 Queen St E, Toronto", description:"Fried Chicken, Sandwiches, Fries", tags:["Chicken", "wings","american"],rating: "2"}
  allrest = [this.rest1, this.rest2, this.rest3, this.rest1, this.rest2, this.rest3]

  setRestaurants() {
    let obj = JSON.stringify(this.allRestaurants)
    Storage.set({
      key: `${this.restkey}`,
      value:`${obj}`
    }).then(() => {
      console.log("restaurants stored")
    })
  }

  setStars(rating) {
    switch (rating){
      case 5:
        return `<ion-icon name="heart"></ion-icon>`
    }
  }

}
