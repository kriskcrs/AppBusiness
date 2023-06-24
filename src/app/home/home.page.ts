import { Component, OnInit } from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public progress = 0;
  constructor(
    public navCtrl: NavController
  ) {
    setInterval(() => {
      this.progress += 0.01;
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 5000);
      }
    }, 50);
  }

  ngOnInit() {
  }
logout(){
  this.navCtrl.navigateRoot('');
}

}
