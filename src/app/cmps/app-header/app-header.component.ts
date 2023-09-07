import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'; //TODO: remove unused libs
import { Observable, Subscription, filter, of, Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { RouteService } from 'src/app/services/route.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  constructor(
    public router: Router,
    private userService: UserService,
    private utilService: UtilService,
    private routeService: RouteService,//TODO: remove extra line

  ) { }
    //ofir-cr
  routeName: string = ''; //TODO: properties comes before methods
  defaultRouteColor: string = 'black'; //TODO: move black to enviroment if it is a global constant or just a const here if it is a local constant
  routeColor: string = 'black';
  userName$: Observable<string> = of('');
  destroySubject$ = new Subject<null>();
  subscribe!: Subscription; //TODO: rename
  routes: { path: string, name: string }[] = [];

  ngOnInit(): void {
    this.routes = this.routeService.routes;
    this.routeService.routePath$.pipe(
      takeUntil(this.destroySubject$)
    )
      .subscribe({
        next: (routePath) => {
          this._onGetRouteColor(routePath);
        }
      }) //TODO: fix tabs

    //////////Second way ////////////
      // TODO: next time you make 2 ways of the same this, split it in 2 functions 

    // this.subscribe = this.router.events
    //   .pipe(
    //     filter(event => event instanceof NavigationEnd),
    //   )
    //   .subscribe(() => {
    //     const routeName = this.getRoutePathName();
    //     this._onGetRouteColor(routeName);
    //   })

    this.userName$ = this.userService.userName$;
  }

  _onGetRouteColor(routeName: string) {
    const firstLetter = routeName.charAt(0).toLowerCase();

    if (this.doesLetterExist(this.utilService.colorsLettersCoupling, firstLetter)) {
      this.setRouteColor(firstLetter);
    }

    else {
      var randomColor = this.generateRandomColor();

      while (this.doesColorExist(this.utilService.colorsLettersCoupling, randomColor)) {
        randomColor = this.generateRandomColor();
      }

      this.utilService.colorsLettersCoupling.push({ letter: firstLetter, color: randomColor });

      this.routeColor = randomColor;
    }
  }

  generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  doesColorExist(arr: { letter: string, color: string }[], color: string) {
    return arr.some(obj => obj.color === color);
  }

  doesLetterExist(arr: { letter: string, color: string }[], letter: string) {
    return arr.some(obj => obj.letter === letter);
  }

  setRouteColor(letter: string) {
    const letterIndex = this.utilService.colorsLettersCoupling.findIndex(obj => obj.letter === letter);
    this.routeColor = this.utilService.colorsLettersCoupling[letterIndex].color;
  }

  trackByFn(idx: number) {
    return idx;
  }

  getRoutePathName(): string {
    const path = this.router.routerState.snapshot.url;
    const questionMarkIndex = path.indexOf('?');
    const routeName = questionMarkIndex === -1 ? path.slice(1) : path.slice(1, questionMarkIndex);
    return routeName;
  }

  _isRouterActive(routeName: string): boolean {
    const routePath = '/' + this.getRoutePathName();
    //TODO: REMOVE
    // console.log(routeName !== routePath);
    return routeName === routePath;
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
    this.destroySubject$.next(null);
    this.destroySubject$.complete();
  }
}