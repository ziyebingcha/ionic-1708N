import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  navToButtonPage():void {
    this.navCtrl.push('ButtonPage');
  }

  navToListPage():void {
    this.navCtrl.push('ListPage');
  }

  navToCardPage():void {
    this.navCtrl.push('CardPage');
  }

  navToFabPage():void {
    this.navCtrl.push('FabPage');
  }

  navToGesturePage():void {
    this.navCtrl.push('GesturePage');
  }

  navToGridPage():void {
    this.navCtrl.push('GridPage');
  }

  navToFormPage():void {
    this.navCtrl.push('FormPage');
  }

  navToToastPage():void {
    this.navCtrl.push('ToastPage');
  }

  navToIconPage():void {
    this.navCtrl.push('IconPage');
  }

  navToSignUpPage():void {
    this.navCtrl.push('SignUpPage');
  }

  navToLazyTestPage():void {
    this.navCtrl.push('LazyTestPage');
  }
}
