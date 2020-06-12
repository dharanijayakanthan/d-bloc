import { Component, OnInit, ComponentRef, Input, Output, EventEmitter } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  @Input()
    open: false;
  constructor() {
  }


  @Output()valueChange = new EventEmitter();

  reflectOutput(cta){
    this.valueChange.emit(cta)
  }

}