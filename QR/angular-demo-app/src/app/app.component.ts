import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item = [{
    'name': 'Agatha Harkness',
    'played by': 'Kathryn Hahn',
    'Fictional universe': 'Marvel Universe',
    'Creator': 'StanLee'
  }]

  qrInfo = JSON.stringify(this.item);


  public values: string| any = null;
  public level: "L" | "M" | "Q" | "H";
  public width: number;
  public foreground: "black" |"red" | "purple" | "blue" | "green";

 constructor(){
   this.level = "L";
   this.values = "QR code string value";
   this.width = 200;
   this.foreground = "black";
 }
 qrLevel(val: "L" | "M" | "Q" | "H" ){
   this.level = val;
 }
 qrData(val: string){
   this.values = val;
 }
 qrWidth(val: number){
   this.width = val;
 }
 qrForeground(val: "black" |"red" | "purple" | "blue" | "green"){
   this.foreground = val;
 }
}