import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'register', loadChildren: '../register/register.module#RegisterPageModule' },
      { path: 'transaction', loadChildren: '../transaction/transaction.module#TransactionPageModule' },
      { path: 'login', loadChildren: '../login/login.module#LoginPageModule' }  
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
