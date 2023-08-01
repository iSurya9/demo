import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit{

sam:string='jenish';
r:number=3;
myArray=[1,2,3];
v:number=0;
showDiv = false;

 num1:number=0;
 num2:number=0;
 sum:number=0;
sub:number=0;
ngOnInit(): void {
 for (let index = 0; index < this.myArray.length; index++) {
this.v = this.v + this.myArray[index];
 }
}


try(){
var sam = "sam1";

  alert(sam);
  console.log(this.sam);

}

changeDivView(){
  this.showDiv = !this.showDiv;
}

calculate(){
this.sum = this.num1 + this.num2;

}
cal(){
this.sub = Number(this.num1) - Number(this.num2);
}



}
