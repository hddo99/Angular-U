import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';
  length = 0;

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  generateRandom(str: string) {
    const idx = Math.floor(Math.random() * str.length)
    return str[idx];
  }
  onButtonClick() {
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';

    let validChar = '';
    if(this.includeLetters){
      validChar += letters;
    }
    if(this.includeNumbers){
      validChar += numbers;
    }
    if(this.includeSymbols){
      validChar += this.generateRandom(symbols);
    }
    let generatedPassword = '';
    for(let i = 0; i < this.length; i++){
      generatedPassword += this.generateRandom(validChar);
    }
    
    this.password = generatedPassword;
  }

}
