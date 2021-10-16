import { Component, OnInit } from '@angular/core';
import { BedService } from '../../services/bed.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-room11',
  templateUrl: './room11.component.html',
  styleUrls: ['./room11.component.scss']
})
export class Room11Component implements OnInit {

  constructor(private readonly bedService: BedService, private readonly router:Router) { }
  beds = new Array();
  bed11_1_s: string = "fill:#008000;stroke:#000001;stroke-width:0.264583;cursor:not-allowed";
  bed11_2_s: string = "fill:#008000;stroke:#000001;stroke-width:0.264583;cursor:not-allowed";
  bed11_3_s: string = "fill:#008000;stroke:#000001;stroke-width:0.264583;cursor:not-allowed";
  bed11_4_s: string = "fill:#008000;stroke:#000001;stroke-width:0.264583;cursor:not-allowed";
  bed11_1_p: string = "not-allowed";
  ngOnInit(): void {
    this.bedService.get().subscribe(
      data => {
        for (const d of data) {
          if (d.name.includes("bed-11")) {
            this.beds.push(d);
          }
        }
        for (const bed of this.beds) {
          if (bed.name == "bed-11-1" && (bed.isEmpty == false ||bed.isEmpty=='false')) {
            this.bed11_1_s = "fill:#ffff00;stroke:#000001;stroke-width:0.264583;cursor:pointer";
          }
          if (bed.name == "bed-11-2" && (bed.isEmpty == false ||bed.isEmpty=='false')) {
            this.bed11_2_s = "fill:#ffff00;stroke:#000001;stroke-width:0.264583;cursor:pointer";
          }
          if (bed.name == "bed-11-3" && (bed.isEmpty == false ||bed.isEmpty=='false')) {
            this.bed11_3_s = "fill:#ffff00;stroke:#000001;stroke-width:0.264583;cursor:pointer";
          }
          if (bed.name == "bed-11-4" && (bed.isEmpty == false ||bed.isEmpty=='false')) {
            this.bed11_4_s = "fill:#ffff00;stroke:#000001;stroke-width:0.264583;cursor:pointer";
          }
        }
      },
      err => {

      }
    )
  }
  goToPatients(x:number) { // redirect room/id
    for (const bed of this.beds) {
      if (bed.name == ('bed-11-'+x)&&(bed.isEmpty==false||bed.isEmpty=="false")){
        const str= 'patient/'+bed.patient;
        this.router.navigate([str]);
      }
    }
    
  }
}
