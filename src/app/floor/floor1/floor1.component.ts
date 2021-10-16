import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor1',
  templateUrl: './floor1.component.html',
  styleUrls: ['./floor1.component.scss']
})
export class Floor1Component implements OnInit {
  alert = true;

  constructor() { }

  ngOnInit(): void {
  }
  room11(){ // redirect room/id
    window.location.href="/room/11"
  }
  room12(){ // redirect room/id
    window.location.href="/room/12"
  }
  room13(){ // redirect room/id
    window.location.href="/room/13"
  }
}
