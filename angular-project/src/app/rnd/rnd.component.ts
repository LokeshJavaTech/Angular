import { Component } from '@angular/core';

@Component({
  selector: 'app-rnd',
  templateUrl: './rnd.component.html',
  styleUrls: ['./rnd.component.css']
})
export class RndComponent {
  toggleButtonText = "Hide Menu"
  hideArea = false;
  typedText = "It will be over-written.";

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
    this.typedText = event.target.value;
  }

}
