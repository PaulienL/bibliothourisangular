import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Book } from '../model/book';

@Component({
  selector: 'pc-overview',
  templateUrl: './overview.html'
})
export class Overview implements OnInit {
  private _books : Book; 

  constructor(private _http: Http){} 

  ngOnInit() {
   // this._http
     //     .get(`http://localhost:9000/book`)
       //   .map((response: Response) => response.json())
         // .subscribe((books) => this._books = books); 
  }
}
