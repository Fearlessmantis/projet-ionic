import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { addPage } from '../add/add';
import { detailPage } from '../detail/detail';
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class menuPage {

  constructor(public navCtrl: NavController) {

  }

  gotoadd() {
    this.navCtrl.push(addPage);
  }

  gotodetail() {
    this.navCtrl.push(detailPage);
  }
}
