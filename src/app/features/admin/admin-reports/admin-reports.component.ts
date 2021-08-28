import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, take } from 'rxjs/operators';
import { AdminServiceService } from '../services/admin-service.service';
import { of, Subject } from 'rxjs';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.scss']
})
export class AdminReportsComponent implements OnInit {

  constructor(private adminService: AdminServiceService) { }

  data$ = this.adminService.getHttpData().pipe(shareReplay());

  number = 0;

  numbers$ = new Subject;

  ngOnInit(): void {
    // this.data$.subscribe(e => {
    //   console.log("from reports 1", e)
    // })

    // this.data$.subscribe(e => {
    //   console.log("from reports 2", e)
    // })

    this.numbers$.subscribe(e => {
      console.log("I TAKE ALL", e)
    })

    this.numbers$.pipe(
      take(2)
    ).subscribe(e => {
      console.log("I TAKE 2", e)
    })
  }

  increment() {
    this.number += 1;
    this.numbers$.next(this.number);
  }

}
