import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contact = {
    name: "Moonawa",
    email: "awa@gmailcom",
    tel: "771301409",
    logo: "assets/images/kindio.png",
    location: "assets/images/trio.png"


  }

  constructor() {}

}
