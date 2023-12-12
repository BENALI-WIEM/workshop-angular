import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Appartement } from '../models/appartement';

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.css']
})
export class AppartmentComponent {

  @Input() appartment!:Appartement

  @Output() deleteEvent=new EventEmitter<Appartement>
  @Output() updateEvent=new EventEmitter<Appartement>

  deleteappart(){
    this.deleteEvent.emit(this.appartment)
  }
  update(){
this.updateEvent.emit(this.appartment)
  }

}
