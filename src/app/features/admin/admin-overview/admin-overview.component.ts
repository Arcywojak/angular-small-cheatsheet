import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AdminDataState } from '../store';
import * as AdminActions from '../store/actions/admin-data.actions';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.scss']
})
export class AdminOverviewComponent implements OnInit {

  constructor(private store: Store<AdminDataState>) { }

  ngOnInit(): void {
  }

  add() {
    this.store.dispatch(AdminActions.tryAddAdminData({itemToAdd: 5}))
  }

}
