import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  items = [ // todo 数据来自于 HTTP 请求
    'Tom 1',
    'Jerry 1',
    'Tom 2',
    'Jerry 2',
    'Tom 3',
    'Jerry 3',
    'Tom 4',
    'Jerry 4',
    'Tom 5',
    'Jerry 5',
    'Tom 6',
    'Jerry 6',
    'Tom 7',
    'Jerry 7'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  itemSelected(item: string){
    console.error(`selected: ${item}`);
  }

}
