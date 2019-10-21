import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public menus = [
    {title:"Home", url:"/menu/home", icon:'happy'},
    {title:"Register", url:"/menu/register", icon:'log-in'},
    {title:"Transaction", url:"/menu/transaction", icon:'swap'},
    {title:"Logout", url:"/login", icon:'log-out'}
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onMenuItem(m){
    this.router.navigateByUrl(m.url);
  }

}
