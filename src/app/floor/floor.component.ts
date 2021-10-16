import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  room11(){ // redirect room/id
    window.location.href="https://google.com"
  }
}
