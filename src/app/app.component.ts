import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pc-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private _title: string;
  private _year: number;

  constructor() {
    this._title = 'PetCupid';
    this._year = new Date().getFullYear();
  }

  ngOnInit(){}

  get year(): number{
    return this._year;
  }

  get title(): string {
    return this._title;
  }

}
