import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  amount: number;
  height: number;
  miles: number;

  onNameChange(event: any) {
    this.name = event.target.value;
  }

  onDateChange(event: any) {
    this.date = event.target.value;
  }
  
  onAmountChange(event: any) {
    this.amount = parseFloat(event.target.value);
  }

  onHeightChange(event: any) {
    this.height = parseFloat(event.target.value);
  }
  onMileChange(event: any){
    this.miles = parseFloat(event.target.value);
  }
}
