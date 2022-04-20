import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-infoscreen',
  templateUrl: './infoscreen.component.html',
  styleUrls: ['./infoscreen.component.scss'],
})
export class InfoscreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goMain() {
    this.router.navigateByUrl('/main')
  }
}
