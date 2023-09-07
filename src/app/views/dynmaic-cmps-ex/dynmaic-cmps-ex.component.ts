import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentComponent } from '../../cmps/dynamic-component/dynamic-component.component';
import { Dynamiccomponent1Component } from '../../cmps/dynamiccomponent1/dynamiccomponent1.component';
import { GlobalVariables} from '../../../../environment';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'dynmaic-cmps-ex',
  templateUrl: './dynmaic-cmps-ex.component.html',
  styleUrls: ['./dynmaic-cmps-ex.component.scss']
})
export class DynmaicCmpsExComponent {
  constructor(private routeService:RouteService){}

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  ngOnInit(): void {
    this.routeService.routePath$.next(GlobalVariables.dynmaicCmpsExComponentPath);   
  }

createComp() {
    // this.container.clear()
    this.container.createComponent(DynamicComponentComponent);
    this.container.createComponent(Dynamiccomponent1Component);
  }
}