import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }
  
  colorsLettersCoupling :{letter:string, color:string}[]=[];
}