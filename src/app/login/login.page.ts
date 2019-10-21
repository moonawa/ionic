import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authser: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogin(user){
    //console.log(user);
    let res=this.authser.login(user.username,user.password); 
    if(res==true){
      this.router.navigateByUrl('/menu/home'); 
    }
    else{
      this.router.navigateByUrl('/login'); 
      
    }
  }

}
