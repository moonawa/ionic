import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _loginUrl = "http://localhost:8000/api/connexion";
  public auth: boolean;
  public token: string;

  jwt:string;
  username:string;
  roles: Array<string>;

  constructor(private http: HttpClient,
    private _router: Router) { }

    loginUser(user){
      return this.http.post(this._loginUrl, user, {observe: 'response'});
    }  
    
    logoutUser(){
      localStorage.removeItem('token')
      this._router.navigate(['/login'])
    }

    public getToken():string{
      var loc= localStorage.getItem('token');
      return loc;
    }
  
    saveToken(jwt:string){
      localStorage.setItem('token', jwt);
      this.jwt=jwt;
      this.parseJWT();

    }
    
    parseJWT(){
      const jwtHelper = new JwtHelperService();
      const objWT= jwtHelper.decodeToken(this.jwt);
      this.username=objWT.obj;
      this.roles=objWT.roles;
      localStorage.setItem('role', objWT.roles);
      localStorage.setItem('username', objWT.username);
    }
    getRole(){
      return localStorage.getItem('role');
    }
  //le token créé
  //   public login(username:string, password:string){
  //   if(username=='admin' && password=='admin'){
  //     this.auth=true;
  //     this.savedToken();
  //   }
  //   else{
  //     this.auth=false;
  //   }
  //   return this.auth;
  // }

  // private savedToken(){
  //   this.token ="azerty"; 
  //   localStorage.setItem("myToken",this.token);
  // }
  // public loadToken(){
  //   this.token=localStorage.getItem("myToken");
  //   if(this.token=='azerty'){
  //     this.auth=true;
  //   }
  //   else{
  //     this.auth=false;
  //   }
  //   return this.auth;
  // }

  //les roles
  isAdmin(){
    return this.roles.indexOf('ROLE_Super-admin')>=0;
  }
  isUser(){
    return this.roles.indexOf('ROLE_utilisateur')>=0;
  }

  isAuthenticated(){
  return this.roles && (this.isAdmin() || this.isUser());

}
  
}
