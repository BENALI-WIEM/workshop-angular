import { Component, EventEmitter,Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Appartement } from '../models/appartement';

@Component({
  selector: 'app-add-apparment',
  templateUrl: './add-apparment.component.html',
  styleUrls: ['./add-apparment.component.css']
})
export class AddApparmentComponent {
  imageUrl:string='/assets/images/'
  appartform!:FormGroup
  id=0
  res={id:1,name:'',address:'',image:this.imageUrl}
  appart={
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

  @Output() addformEvent=new EventEmitter<Appartement>();
constructor(private acr : ActivatedRoute){

}

ngOnInit(): void {
 // this.id=this.acr.snapshot.params['id']
  this.appartform=new FormGroup({
    numAppart:new FormControl(this.appart.numAppart,Validators.required),
    description:new FormControl(this.appart.description,[Validators.required, Validators.minLength(10)]),
    residence:new FormControl(this.id,Validators.required),
  })
}
get numAppart(){return this.appartform.get('numAppart')}
get description(){return this.appartform.get('description')}
add(){
  console.log("my form"+JSON.stringify(this.appartform.value))
  this.appart.numAppart=this.appartform.value.numAppart
  this.appart.description=this.appartform.value.description
  this.addformEvent.emit(this.appart)
}

}
