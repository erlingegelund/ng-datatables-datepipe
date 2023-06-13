import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ADTSettings } from 'angular-datatables/src/models/settings';
import { Subject } from 'rxjs';
import { Person } from './person.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-simple-datatable',
  templateUrl: './simple-datatable.component.html',
  styleUrls: ['./simple-datatable.component.scss']
})
export class SimpleDatatableComponent implements OnInit, AfterViewInit, OnDestroy {
  dtOptions: ADTSettings = {}
  dtTrigger: Subject<any> = new Subject<any>();
  
  constructor(private httpClient: HttpClient, private datePipe: DatePipe) { }


  ngOnInit(): void {
    this.dtOptions = {
      stateSave: true,
      stateDuration: -1, //-1 indicate session storage
      searching: true,
      pageLength: 5,
      data: [],
      columns: [
        { title: 'ID',data: 'id' }, 
        { title: 'First Name', data: 'firstName' }, 
        { title: 'Last Name', data: 'lastName' }, 
        { title: 'Birthdate', data: 'birthdate', type: 'date', ngPipeInstance: this.datePipe, ngPipeArgs: ['dd-MM-yyyy'] }
      ]
    };
  }

  ngAfterViewInit(): void {
    this.httpClient.get<Person[]>('data/data.json').subscribe(data => {
      this.dtOptions.data = data;
      this.dtTrigger.next(null);
    });
    
  }

  ngOnDestroy(): void {
    this.dtTrigger.complete();
    this.dtTrigger.unsubscribe();
  }

}
