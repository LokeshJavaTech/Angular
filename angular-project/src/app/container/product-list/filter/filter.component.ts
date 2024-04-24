import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input()
  allCount: number = 0;

  @Input()
  inStockCount: number = 0;

  @Input()
  outOfStockCount: number = 0;

}
