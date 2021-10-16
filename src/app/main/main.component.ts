import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  constructor(config: NgbCarouselConfig) {  
    config.interval = 3000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = true;  
  }  

  ngOnInit(): void {
  }

}
