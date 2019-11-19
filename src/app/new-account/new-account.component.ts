import { Component } from '@angular/core';
import { LoggingService } from '../logging.service'; //importing service
import { AccountService } from '../account.service'; //importing service


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
 // providers : [LoggingService] //To use service
})
export class NewAccountComponent {
 // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  //To use service
  constructor(private loggingService :LoggingService, private acountService : AccountService){
    //listening the event
    this.acountService.statusupdated.subscribe(
      (status :string) => {
        alert('Status Updated ' + status)
      }
    )
  }

  onCreateAccount(accountName: string,accountEmail: string, accountPassword: string, accountStatus: string) {
    this.acountService.createAccount(accountName,accountEmail,accountPassword, accountStatus)
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // using function defined in the logging Service
    this.loggingService.logStatusChange(accountStatus)
    // const service = new LoggingService()
    // service.logStatusChange(accountStatus)
    //console.log('A server status changed, new status: ' + accountStatus);
  }
}
