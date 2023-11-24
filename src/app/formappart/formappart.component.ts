import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formappart',
  templateUrl: './formappart.component.html',
  styleUrls: ['./formappart.component.css']
})
export class FormappartComponent implements OnInit{
  formAppart: FormGroup;
  id: number;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id'];
    this.formAppart = new FormGroup({
      numAppart: new FormControl('', Validators.required),
      description:new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }
get numAppart(){
  return this.formAppart.get('numAppart');
}
get description(){
  return this.formAppart.get('description');
}
  add(): void {
    console.log(JSON.stringify(this.formAppart.value));
    
  }
}
