import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  student = {
    list : "List Student",
    add : "Add Student",
    delete : "Delete Student"
  };
}
