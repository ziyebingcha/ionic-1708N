import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ToastController} from "ionic-angular";

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }

  showToast(){
    let toast = this.toastCtrl.create({
      message: 'toast message...',
      duration: 3000
    });
    toast.present(); // 出现
  }

  showToastPosition(postion){
    let toast = this.toastCtrl.create({
      message: 'toast message...',
      duration: 3000,
      position: postion
    });
    toast.present(); // 出现
  }

  showToastClose(){
    let toast = this.toastCtrl.create({
      message: 'toast message...',
      showCloseButton: true,
      closeButtonText: 'OK'
    });
    toast.present(); // 出现
  }
}
