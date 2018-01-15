import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  User = {
    username: '',
    password: ''
  };

  signIn(): void {
    // todo
  }

  constructor(public navCtrl: NavController) {
  }

  navigate(page: string): void {
    switch (page) {
      case 'button':
        this.navCtrl.push('ButtonPage');
        break;
      case 'list':
        this.navCtrl.push('ListPage');
        break;
      case 'card':
        this.navCtrl.push('CardPage');
        break;
      case 'fab':
        this.navCtrl.push('FabPage');
        break;
      case 'gesture':
        this.navCtrl.push('GesturePage');
        break;
      case 'grid':
        this.navCtrl.push('GridPage');
        break;
      case 'form':
        this.navCtrl.push('FormPage');
        break;
      case 'toast':
        this.navCtrl.push('ToastPage');
        break;
      case 'icon':
        this.navCtrl.push('Page');
        break;
      case 'signUp':
        this.navCtrl.push('SignUpPage');
        break;
      case 'lazyTest':
        this.navCtrl.push('LazyTestPage');
        break;
      default:
        break;
    }
  }

}
