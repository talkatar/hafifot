import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CacheService } from "./cache.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //ofir-cr
  constructor(private cacheService: CacheService) { }
  //todo: remove duplication + properties before the constructor

  public userName$ = new BehaviorSubject<string>(this.cacheService.query('userName') ? this.cacheService.query('userName') : '');

  public setUser(name: string) {
    this.userName$.next(name);
    if (name) this.cacheService.save('userName', name);
    else return;
  }

  public getUser() {
    return this.userName$;
  }

  public getLastLooggedInUser() {
    return this.cacheService.query('userName') ? this.cacheService.query('userName') : '';
  }

  public logOut() {
    this.cacheService.cleanLocalStorage('userName');
  }
}