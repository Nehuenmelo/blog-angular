import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
  public idDialog: number = 0;
  public user!: User;

  constructor(private _userService: UserService) { 
    this.idDialog = this._userService.getIdDialog();
    this._userService.getUser(this.idDialog).subscribe((data:User) => {
      this.user = data;
    });
  }

  ngOnInit(): void {
  }

}
