import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service'; //importing service
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers : [LoggingService] //To use service
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

//To use service
constructor(private loggingService :LoggingService, private accountService :AccountService){}

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status)
    // this.statusChanged.emit({id: this.id, newStatus: status});
     // using function defined in the logging Service
    this.loggingService.logStatusChange(status)
    //emiting an event 
    this.accountService.statusupdated.emit(status)
  }
}
