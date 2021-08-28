import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AdminDataState } from '../store';
import * as AdminDataAction from "../store/actions/admin-data.actions";
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private store: Store<AdminDataState>,) {
    this.store.dispatch(AdminDataAction.loadAdminData())
  }

  ngOnInit(): void {
    this.store.select("adminData").subscribe(e => {
      console.log("Data admin: ",e.adminData)
    })
   // this.store.dispatch(AdminDataAction.loadAdminData())
  }
  

}
