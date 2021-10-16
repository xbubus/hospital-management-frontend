import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor',
  templateUrl: './floor2.component.html',
  styleUrls: ['./floor2.component.scss']
})
export class Floor2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  room21(){ // redirect room/id
    window.location.href="/room/21"
  }
  room22(){ // redirect room/id
    window.location.href="/room/22"
  }
}
