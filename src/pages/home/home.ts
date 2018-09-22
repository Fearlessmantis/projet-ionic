import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { loginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  
  gotologin() {
    this.navCtrl.push(loginPage);
    
  }
 
  
}
