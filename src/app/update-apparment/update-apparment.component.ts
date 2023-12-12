import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Appartement } from '../models/appartement';
import { AppartmentService } from '../services/appartment.service';

@Component({
  selector: 'app-update-apparment',
  templateUrl: './update-apparment.component.html',
  styleUrls: ['./update-apparment.component.css']
})
export class UpdateApparmentComponent implements OnInit{

  imageUrl:string='/assets/images/'
  appartform!:FormGroup
  id=0
  res={id:1,name:'',address:'',image:this.imageUrl}
  @Input() app:Appartement={
    id:1,
    numAppart:0,
    numEtage:0,
    surface:0,
    terrasse:"",
    surfaceTerrasse:0,
    category:"",
    description:"",
    residence:this.res,
    status:true
  }

  @Output() updateformEvent=new EventEmitter<Appartement>();
constructor(private acr : ActivatedRoute,private apperte:AppartmentService){

}

ngOnInit(): void {
 // this.id=this.acr.snapshot.params['id']
  this.appartform=new FormGroup({
    numAppart:new FormControl(this.app.numAppart,Validators.required),
    description:new FormControl(this.app.description,[Validators.required, Validators.minLength(10)]),
    residence:new FormControl(this.id,Validators.required),
  })

}
get numAppart(){return this.appartform.get('numAppart')}
get description(){return this.appartform.get('description')}
update(){
  console.log("my form"+JSON.stringify(this.appartform.value))
  this.app.numAppart=this.appartform.value.numAppart
  this.app.description=this.appartform.value.description
  this.updateformEvent.emit(this.app)
}

}
