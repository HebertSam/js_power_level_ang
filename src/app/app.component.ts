import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I am a Saiyan?';
  powerLevel=0;
  human;
  saiyan;
  superSaiyan;
  superSaiyan2;
  superSaiyan3;
  superSaiyan4;
  type1 = "Human"
  type2 = "Saiyan"
  type3 = "SuperSaiyan"
  type4 = "SuperSaiyan2"
  type5 = "SuperSaiyan3"
  type6 = "SuperSaiyan4"

  onSubmit(){
    this.human = this.powerLevel;
    this.saiyan = this.powerLevel * 10;
    this.superSaiyan = this.powerLevel * 90;
    this.superSaiyan2 = this.powerLevel * 150;
    this.superSaiyan3 = this.powerLevel * 250;
    this.superSaiyan4 = this.powerLevel * 500;
  }
}
