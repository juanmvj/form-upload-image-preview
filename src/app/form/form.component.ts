import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  imagePath: string = "";


  constructor() { }

  readURL(event: any): void {

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imagePath = <string>reader.result;
      console.log("Este es el imagepath: " + this.imagePath);
    }
    reader.readAsDataURL(file);
  }




}
