import { Component } from '@angular/core';

import { Currancy } from './Currancy';
import { strict } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Currancy-Converter-Appl';

  currancy : Currancy[];
  public num1 :number;
  public result:any;
  currancySelected :number;

  //fnction to accept the numbers only
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }


  ngOnInit(){

    this.currancy=[
      {Id:0, Name : 'Select Currancy'},
      {Id:1, Name : 'Doller'},
      {Id:2, Name : 'Euro'},
      {Id:3, Name : 'Pound'},
      {Id:4, Name : 'Rand'},

    ];
  }

  onCurrancyChange(event:any){
    this.currancySelected=event.target.value;

    
if(this.currancySelected == 1){

   this.result=  this.num1 / 75  ;
  // Considered 1 dollars =75 rupees
}

  else if(this.currancySelected == 2){
    this.result = this.num1 / 90;
     // Considered 1 Euro =90 rupees

  }
  else if(this.currancySelected == 3){
    
      this.result = this.num1 / 100;
   // Considered 1 pound =100 rupees

   }
   else if(this.currancySelected == 4){
     this.result = this.num1 / 4;
     // Considered 1 rand = 4 rupees
    }

    else {

      this.result=  "Choose currancy to convert"  ;
     // Considered 1 dollars =75 rupees
   }

 }

 }

