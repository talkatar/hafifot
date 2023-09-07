import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'dialog-material',
  templateUrl: './dialog-material.component.html',
  styleUrls: ['./dialog-material.component.scss']
})
export class DialogMaterialComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string },
    private userService: UserService
  ) { }

  userName: string = '';
  lastLoggedInUserName$ = new BehaviorSubject<string>('');
  lastLoggedInUserName: string = '';

  ngOnInit(): void {
    this.lastLoggedInUserName = this.userService.getLastLooggedInUser();
  }

  _emitData() {    
    if (this.userName[0].toUpperCase() !== this.userName[0]) {
      this.userName = this.userName.charAt(0).toUpperCase() + this.userName.slice(1);
    }
    this.dialogRef.close(this.userName);
  }

  _onLogOut() {
    this.userService.logOut();
  }
}