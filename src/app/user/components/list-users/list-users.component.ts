import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
/* import { User } from '../../classes/user'; */
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  public users:Array<any> = [];

  constructor(private _service: UserService) {
    
  }

  ngOnInit(): void {
    this._service.getUsers().subscribe( (data) => {
      console.log(data);
      this.users = data;
    });
  }

}
