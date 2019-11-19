import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [AccountService]
})
export class AppComponent implements OnInit{
  account : {name :string ,status :string }[] = []

  constructor(private accountService :AccountService){}

  ngOnInit(){
    this.account = this.accountService.accounts;
    console.log(this.account)
  }

  // onAccountAdded(newAccount: {name: string, status: string}) {

  //   // this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   // this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
