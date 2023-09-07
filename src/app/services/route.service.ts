import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GlobalVariables } from '../../../environment'

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor() { }
  //ofir-cr
  public routePath$ = new BehaviorSubject<string>('');
  public routes: { path: string, name: string }[] = [
    { path: '/', name: 'Main page' },
    { path: '/' + GlobalVariables.cssExComponentPath, name: 'Css exercise' },
    { path: '/' + GlobalVariables.dynmaicCmpsExComponentPath, name: 'Dynamic-cmps' },
    { path: '/' + GlobalVariables.todosExComponentPath, name: 'TO-DOS' },
    { path: '/' + GlobalVariables.directivesExComponentPath, name: 'Directives' },
    { path: '/' + GlobalVariables.dialogExComponentPath, name: 'Dialog' },
    { path: '/' + GlobalVariables.routeComponentPath, name: 'Route' },
  ]
}