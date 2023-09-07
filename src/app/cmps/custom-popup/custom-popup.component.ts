import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'custom-popup',
  templateUrl: './custom-popup.component.html',
  styleUrls: ['./custom-popup.component.scss']
})
  //ofir-cr
export class CustomPopupComponent implements OnChanges {
  @Input() user$: BehaviorSubject<string> | undefined;
  loggedOutUser: string = '';
  popupActive: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user$'] && !changes['user$'].firstChange) {
      const previousValue = changes['user$'].previousValue?.getValue();
      this.loggedOutUser = previousValue;
      this.popupActive = true;
      setTimeout(() => this.popupActive = false, 2500);
    }
  }
  _onClosePopUp() {
    this.popupActive = false;
  }
}