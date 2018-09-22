import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { menuPage } from '../menu/menu';
import { signinPage } from '../signin/signin';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class loginPage {

  constructor(public navCtrl: NavController) {

  }

  gotomenu() {
    this.navCtrl.push(menuPage);
  }

  gotosignin() {
    this.navCtrl.push(signinPage);
  }
}
