import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _auth:AuthenticationService,
    private authser: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this._auth.logoutUser()
  }

  // onLogin(user){
  //   //console.log(user);
  //   let res=this.authser.login(user.username,user.password); 
  //   if(res==true){
  //     this.router.navigateByUrl('/menu/home'); 
  //   }
  //   else{
  //     this.router.navigateByUrl('/login'); 
      
  //   }
  // }

  loginUser(user){
    this._auth.loginUser(user)
    .subscribe(
      res => {
        console.log(res)
        //localStorage.setItem('token', res.token)
        let jwt = res.body['token'];
        this._auth.saveToken(jwt);
        this.router.navigateByUrl('/menu/home'); 
        //this.router.navigate(['/nav'])
      },
      err =>{console.log(err)
        this.router.navigateByUrl('/login'); 
      }
    )
  }  
  isAdmin(){
    return this.authser.isAdmin();
  }
  isUser(){
    return this.authser.isUser();
  }

}
