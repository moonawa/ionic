import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSwap(transaction)
 {
    $(function() {
 
      $("#retrait").click(function() {
          //$("#envoi").hide();
          $ ("#client_emetteur").hide();
          $("#tel_emetteur").hide();
          $("#nci_emetteur").hide();
          $("#montant").show();
          $("#client_recepteur").show();
          $("#tel_recepteur").show();
          $("#nci_recepteur").show();
      })
  }); 
}
  }



