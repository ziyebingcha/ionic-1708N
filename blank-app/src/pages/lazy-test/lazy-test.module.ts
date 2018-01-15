import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LazyTestPage } from './lazy-test';

@NgModule({
  declarations: [
    LazyTestPage,
  ],
  imports: [
    IonicPageModule.forChild(LazyTestPage),
  ],
})
export class LazyTestPageModule {}
