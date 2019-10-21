import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public auth: boolean;
  public token: string;
  constructor() { }
  public login(username:string, password:string){
    if(username=='admin' && password=='admin'){
      this.auth=true;
      this.saveToken();
    }
    else{
      this.auth=false;
    }
    return this.auth;
  }

  private saveToken(){
    this.token ="azerty"; 
    localStorage.setItem("myToken",this.token);
  }
  public loadToken(){
    this.token=localStorage.getItem("myToken");
    if(this.token=='azerty'){
      this.auth=true;
    }
    else{
      this.auth=false;
    }
    return this.auth;
  }
  
}
