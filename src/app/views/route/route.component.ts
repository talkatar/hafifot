import { Component, OnDestroy ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { GlobalVariables} from '../../../../environment';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnDestroy,OnInit {
  //TODO: try to use just one of the router types + rename the properties - Cant !
  constructor(private router: Router, private route: ActivatedRoute,private routeService:RouteService) {
  }
  //TODO: ;
  queryParams: { [key: string]: number } = {};
  hierarchyPrinting: string[] = [];
  //TODO: $ after the name of the observable
  destroySubject$ = new Subject<null>();

 ngOnInit(): void {
  this.routeService.routePath$.next(GlobalVariables.routeComponentPath);   
}

  _onGetRandomNumberInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    this.queryParams[`num${this.hierarchyPrinting.length++}`] = randomNum;
    this.hierarchyPrinting.push(`Parameter number ${this.hierarchyPrinting.length++} is ${randomNum}`);
    //TODO: remove the counter
    this.router.navigate(['/route'], { queryParams: this.queryParams });
  }
  // TODO: use the full words
  _onPrintingNumbers() {
    //TODO: talked
    this.route.queryParams.pipe(
      takeUntil(this.destroySubject$)
    )
      .subscribe({
        next: (queryParams) => {
          console.log(queryParams);
        }
      })
  }

  ngOnDestroy(): void {
    this.destroySubject$.next(null);
    this.destroySubject$.complete();
  }
}