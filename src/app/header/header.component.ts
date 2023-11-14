import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  v1 : string = "WIEM";

  prop: boolean = false;

  changeme = () => {
    this.prop = true;
  }

  message : string = "";

  showMessage() {
    alert(this.message);
  }
}
