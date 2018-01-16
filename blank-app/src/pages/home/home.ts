import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Http, Response} from "@angular/http";


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
    let username: string = this.User.username;
    let password: string = this.User.password;
    console.error(`User: `, this.User);

    let url: string = `/signIn?username=${username}&password=${password}`;
    this.http.request(url)
      .subscribe((res: Response) => {
          console.error(res.json());
      });
  }

  constructor(public navCtrl: NavController,
              private http: Http) {
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
