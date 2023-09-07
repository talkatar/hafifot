import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CacheService } from "./cache.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //ofir-cr
  constructor(private cacheService: CacheService) { }
  //TODO: move userName string to constant

  //TODO: duplicate code
  public userName$ = new BehaviorSubject<string>(this.cacheService.query('userName') ? this.cacheService.query('userName') : '');

  public setUser(name: string) {
    this.userName$.next(name);
    if (name) this.cacheService.save('userName', name);
    else return;
  }

  public getUser() {
    return this.userName$;
  }

  public getLastLooggedInUser() { //TODO: we dont need to query the cache twice
    return this.cacheService.query('userName') ? this.cacheService.query('userName') : '';
  }

  public logOut() {
    this.cacheService.cleanLocalStorage('userName');
  }
}