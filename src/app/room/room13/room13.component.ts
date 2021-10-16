import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BedService } from '../../services/bed.service';

@Component({
  selector: 'app-room13',
  templateUrl: './room13.component.html',
  styleUrls: ['./room13.component.scss']
})
export class Room13Component implements OnInit {

  constructor(private readonly bedService: BedService,private readonly router:Router) { }
  beds = new Array();
  bed13_1_s: string = "fill:#008000;stroke:#000001;stroke-width:0.264583;cursor:not-allowed";
  bed13_2_s: string = "fill:#008000;stroke:#000001;stroke-width:0.264583;cursor:not-allowed";
  bed13_3_s: string = "fill:#008000;stroke:#000001;stroke-width:0.264583;cursor:not-allowed";
  bed13_4_s: string = "fill:#008000;stroke:#000001;stroke-width:0.264583;cursor:not-allowed";
  ngOnInit(): void {
    this.bedService.get().subscribe(
      data => {
        for (const d of data) {
          
          if (d.name.includes("bed-13")) {
            
            this.beds.push(d);
          }
        }
        
        for (const bed of this.beds) {
          if (bed.name == "bed-13-1" && (bed.isEmpty == false ||bed.isEmpty=='false')) {
            this.bed13_1_s = "fill:#ffff00;stroke:#000001;stroke-width:0.264583;cursor:pointer";
          }
          if (bed.name == "bed-13-2" && (bed.isEmpty == false ||bed.isEmpty=='false')) {
            this.bed13_2_s = "fill:#ffff00;stroke:#000001;stroke-width:0.264583;cursor:pointer";
          }
          if (bed.name == "bed-13-3" && (bed.isEmpty == false ||bed.isEmpty=='false')) {
            this.bed13_3_s = "fill:#ffff00;stroke:#000001;stroke-width:0.264583;cursor:pointer";
          }
          if (bed.name == "bed-13-4" && (bed.isEmpty == false ||bed.isEmpty=='false')){
            
            this.bed13_4_s = "fill:#ffff00;stroke:#000001;stroke-width:0.264583;cursor:pointer";
          }
        }
      },
      err => {

      }
    )
  }
  goToPatients(x:number) { // redirect room/id
    for (const bed of this.beds) {
      if (bed.name == ('bed-13-'+x)&&(bed.isEmpty==false||bed.isEmpty=="false")){
        const str= 'patient/'+bed.patient;
        this.router.navigate([str]);
      }
    }
  }

}
