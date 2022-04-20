import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewRestaurantscreenComponent } from './view-restaurantscreen.component';

describe('ViewRestaurantscreenComponent', () => {
  let component: ViewRestaurantscreenComponent;
  let fixture: ComponentFixture<ViewRestaurantscreenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRestaurantscreenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewRestaurantscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
