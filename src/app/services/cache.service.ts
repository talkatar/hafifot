
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  //ofir-cr
export class CacheService {

  query(entityType: string) {
    return JSON.parse(localStorage.getItem(entityType) || 'null') ||'';
  }

  save(entityType: string, entity: string) { //TODO: what if we will want to save an complicated object?
    localStorage.setItem(entityType, JSON.stringify(entity));
  }
  
  cleanLocalStorage(entityType:string){
    localStorage.removeItem(entityType);
  }
}