import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  filterRadioButtonValue: string = 'all_stock';

  // Event Create + To make parent component know about the event, add @Output over the event
  @Output()
  filterRadioButtonChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  // Event raise on radio button change event with selected radio button's data
  filterRadioButtonChangeEventMethod(){
    this.filterRadioButtonChangeEvent.emit(this.filterRadioButtonValue);
    console.log("Filter Radio button change event has been raised with value: "+this.filterRadioButtonValue);
  }

}
