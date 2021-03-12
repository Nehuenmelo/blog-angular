import { Component, OnInit } from '@angular/core';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { MatDialog } from '@angular/material/dialog';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user.models';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  public users:User[] = [];

  constructor(
    private _userService: UserService,
    public dialog: MatDialog 
    ) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe( (data) => {
      this.users = data;
    });
  }

  openDialog(id:number) {
    this._userService.setIdDialog(id);
    const dialogRef = this.dialog.open(UserDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
