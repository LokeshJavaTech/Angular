import { Component } from '@angular/core';

@Component({
  selector: 'app-rnd',
  templateUrl: './rnd.component.html',
  styleUrls: ['./rnd.component.css']
})
export class RndComponent {

  /*---------  1-way binding  ---------*/

  toggleButtonText = "Hide Menu"
  hideArea = false;
  oneWayText = "1-way binding text";

  onClickMethod(){
    if(this.hideArea == true) {
     this.hideArea = false;
     this.toggleButtonText = "Hide Menu";
    }
    else {
      this.hideArea = true;
      this.toggleButtonText = "Show Menu";
    }
  }

  onInputMethod(event: any) {
    this.oneWayText = event.target.value;
  }

  /*---------  2-way binding  ---------*/

  twoWayText = "2-way binding text";

  /*---------  *ngFor : Structural directive  ---------*/

  eligibleOperations: string[] = ['Print', 'Export', 'Send Email'];

}
