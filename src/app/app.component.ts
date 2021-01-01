import { Component} from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  randomText = lorem.sentence();
  enteredText: string = '';

  onInput(event: any){
    this.enteredText = event.target.value;

  }

  compare(randomLetter: string, enteredLetter: string) {
    if(!enteredLetter) {
      return 'pending';
    }
    
    return randomLetter === enteredLetter ? 'correct': 'incorrect';
  }

  generateNewText(){
    setTimeout(()=> {
      this.randomText = lorem.sentence();
      this.enteredText='';
    },400);    
  }
}
