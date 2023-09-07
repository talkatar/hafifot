import { Component,OnInit } from '@angular/core';
import { GlobalVariables} from '../../../../environment';
import { RouteService } from 'src/app/services/route.service';
@Component({
  selector: 'directives-ex',
  templateUrl: './directives-ex.component.html',
  styleUrls: ['./directives-ex.component.scss']
})
export class DirectivesExComponent implements OnInit {
 
    constructor(private routeService:RouteService){}
  
  ngOnInit(): void {
      this.routeService.routePath$.next(GlobalVariables.directivesExComponentPath);   
    }
}
