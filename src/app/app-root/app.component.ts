import { Component, OnInit, OnDestroy,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMaterialComponent } from 'src/app/cmps/dialog-material/dialog-material.component';
import { Subject, takeUntil,BehaviorSubject,filter } from 'rxjs';
import { UserService } from '../services/user.service';
import { MyfirstnpmService } from "myfirstnpmtalhafifot";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(public dialog: MatDialog,
    private userService: UserService,
    private myfirstnpmService: MyfirstnpmService,
    private toastr: ToastrService //TODO: remove unused dependencies from all the component
  ) { }
  //ofir-cr
  destroySubject$ = new Subject<null>();
  @Input() user$:BehaviorSubject<string>|undefined; //TODO: what is thr purpose of this input?


//TODO: remove extra line
  ngOnInit(): void {
    this.openDialog();
   this.userService.userName$.pipe(
    takeUntil(this.destroySubject$)
   ).subscribe({
    next:(newUserName)=>  this.user$ =new BehaviorSubject<string>(newUserName)
  }) //TODO: CTRL+K+D
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogMaterialComponent, { data: { user: this.user$ } });
    dialogRef.afterClosed().pipe(
      takeUntil(this.destroySubject$),
      filter(name => name || name === ''))
      .subscribe(name => {
          this.userService.setUser(name);
          this.myfirstnpmService.setUser(name);
      })
  }

  ngOnDestroy(): void {
    this.destroySubject$.next(null);
    this.destroySubject$.complete();
  }
}