import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http, Response} from "@angular/http";

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  User = {
    username: '',
    password: ''
  };

  // 依赖注入（DI） Http
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp(): void {
    let username = this.User.username;
    let password = this.User.password;
    console.error(`username: ${username}`);
    console.error(`password: ${password}`);


    // 客户端发送注册请求
    let url = `/signUp?username=${username}&password=${password}`;
    this.http.request(url)
      .subscribe((res: Response) => {
        console.error(res.json());
        if (res.json().status === 'ok') {
          this.navCtrl.push('HomePage')
        } else {
          this.navCtrl.push('SignUpPage')
        }
      })
  }

}
