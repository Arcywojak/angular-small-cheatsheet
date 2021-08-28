import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.scss']
})
export class AdminUserListComponent implements OnInit {

  constructor(private adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.adminService.getHttpData().subscribe(e => {
      console.log("from users", e)
    })
  }

}
