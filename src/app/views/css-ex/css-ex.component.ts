import { Component,OnInit, } from '@angular/core';
import { GlobalVariables} from '../../../../environment';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'css-ex',
  templateUrl: './css-ex.component.html',
  styleUrls: ['./css-ex.component.scss']
})
export class CssExComponent implements OnInit {
  constructor(private routeService:RouteService){}
  activeClass: boolean = true;

  ngOnInit(): void {
    this.routeService.routePath$.next(GlobalVariables.cssExComponentPath);   
  }
}