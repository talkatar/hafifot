
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  //ofir-cr
export class CacheService {

  query(entityType: string) {
    return JSON.parse(localStorage.getItem(entityType) || 'null') ||'';
  }

  save(entityType: string, entity: string) {
    localStorage.setItem(entityType, JSON.stringify(entity));
  }
  
  cleanLocalStorage(entityType:string){
    localStorage.removeItem(entityType);
  }
}