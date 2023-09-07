import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMaterialComponent } from 'src/app/cmps/dialog-material/dialog-material.component';
//TODO: remove unused lib
import { Subject, takeUntil,filter } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { GlobalVariables } from '../../../../environment';
import { RouteService } from 'src/app/services/route.service';
import { MyfirstnpmService } from "myfirstnpmtalhafifot";

@Component({
  selector: 'dialog-ex',
  templateUrl: './dialog-ex.component.html',
  styleUrls: ['./dialog-ex.component.scss']
})
export class DialogExComponent implements OnDestroy, OnInit {

  constructor(public dialog: MatDialog, private userService: UserService, private router: Router,
    private routeService: RouteService, private myfirstnpmService: MyfirstnpmService) {
  }

  user: { name: string, pass: number } = { name: 'tal', pass: 1234 };
  destroySubject$ = new Subject<null>();

  ngOnInit(): void {
    this.routeService.routePath$.next(GlobalVariables.dialogExComponentPath);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogMaterialComponent, { data: { name: 'tal' } })
    dialogRef.afterClosed().pipe(
      takeUntil(this.destroySubject$),
      filter(name => name || name === '')
      )
      .subscribe(name => {
        this.user.name = name;
        //todo: naming
        this.userService.setUser(name);
        this.myfirstnpmService.setUser(name);
        this.router.navigateByUrl('/todos');
      })
  }

  ngOnDestroy() {
    this.destroySubject$.next(null);
    this.destroySubject$.complete();
  }
}