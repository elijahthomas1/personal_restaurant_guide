import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-searchscreen',
  templateUrl: './searchscreen.component.html',
  styleUrls: ['./searchscreen.component.scss'],
})
export class SearchscreenComponent implements OnInit {
  public allRestaurants2 = [];
  public foundRestaurants = [];
  restkey = 'restaurants';
  searchInfo = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.getSearch();
  }

  getSearch() {
    Storage.get({ key: `searchkey` }).then((res) => {
      const obj = JSON.parse(res.value);
      this.searchInfo = obj;
    })
  }

  findRestaurants() {
    let lenRest = this.allRestaurants2.length;
    for(let i = 0; i < lenRest; i++) {
      let curname = this.allRestaurants2[i].name.toLowerCase();
      let searchname = this.searchInfo.toLowerCase();
      if (curname.includes(searchname)) {
        this.foundRestaurants.push(this.allRestaurants2[i])
      }
    }
  }

  ionViewWillEnter() {
    this.foundRestaurants = [];
    this.getSearch();
    this.getAllRestaurants()
 
  }

  goBack() {
    this.router.navigateByUrl("/main")
  }
  

  async getAllRestaurants(){
    await Storage.get({ key: `${this.restkey}` }).then((res) => {
      const obj = JSON.parse(res.value);
      this.allRestaurants2 = obj;
    });
    this.findRestaurants()
  }

}
