import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";
//adding metada
@Injectable()
export class AccountService{
     accounts = [
    {
      name: 'Aswathy',
      email: 'aswathy@amt.in',
      password: 'aswathy123',
      status: 'active'
    },
    {
      name: 'Testaccount',
      email: 'test@gmail.com',
      password: 'test123',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      email: 'hidden@gmail.com',
      password: 'hidden123',
      status: 'unknown'
    }
  ];
  // event provinding an event which can triggered in one component and listening in another component
  statusupdated = new EventEmitter<string>();

  //injecting another service to it
  constructor(private loggingService:LoggingService){}

  createAccount(name :string ,email :string ,password :string , status :string){
    this.accounts.push({name :name , email :email ,password :password , status :status});
    this.loggingService.logStatusChange(status)
  }

  updateAccount(id : number , status :  string){
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status)
  }
}