import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  //dfghjkl

  transacton = {};
  constructor(private _transaction: UserService,
    private _router: Router) { }

  public buttonClicked: boolean = false; //Whatever you want to initialise it as 
  public butonClicked: boolean = false;

  //masquer l' envoi
  public onButtonClick() {
    this.butonClicked = !this.butonClicked;
    this.buttonClicked = this.buttonClicked;
  }
  //masquer le retrait
  public offButtonClick() {
    this.buttonClicked = !this.buttonClicked;
    this.butonClicked = this.butonClicked;
  }

  ngOnInit() {
  }

  onsubmit (data:any){
    console.log(data);
    //console.log(this.fileToUpload);
     this._transaction.envoi(data)
     .subscribe(
       data=>{
         console.log('done');
         
        //  this.utilisateur=null;
        //  this.fileToUpload=null;
         //this.router.navigate(['/user'])

       }, err=>{
        console.log(err);
       }
     )

}
}