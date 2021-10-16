import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BedService } from '../../services/bed.service';
@Component({
  selector: 'app-room22',
  templateUrl: './room22.component.html',
  styleUrls: ['./room22.component.scss']
})
export class Room22Component implements OnInit {

  constructor(private readonly bedService: BedService,private readonly router:Router) { }
  beds = new Array();
  bed22_1_s: string = "fill:#008000;stroke:#000001;stroke-width:0.264583";
  bed22_2_s: string = "fill:#008000;stroke:#000001;stroke-width:0.264583";
  bed22_3_s: string = "fill:#008000;stroke:#000001;stroke-width:0.264583";
  bed22_4_s: string = "fill:#008000;stroke:#000001;stroke-width:0.264583";
  ngOnInit(): void {
    this.bedService.get().subscribe(
      data => {
        for (const d of data) {
          if (d.name.includes("bed-22")) {
            this.beds.push(d);
          }
        }
        for (const bed of this.beds) {
          if (bed.name == "bed-22-1" && (bed.isEmpty == false ||bed.isEmpty=='false')) {
            this.bed22_1_s = "fill:#ff0000;stroke:#000001;stroke-width:0.264583";
          }
          if (bed.name == "bed-22-2" && (bed.isEmpty == false ||bed.isEmpty=='false')) {
            this.bed22_2_s = "fill:#ff0000;stroke:#000001;stroke-width:0.264583";
          }
          if (bed.name == "bed-22-3" && (bed.isEmpty == false ||bed.isEmpty=='false')) {
            this.bed22_3_s = "fill:#ff0000;stroke:#000001;stroke-width:0.264583";
          }
          if (bed.name == "bed-22-4" && (bed.isEmpty == false ||bed.isEmpty=='false')) {
            this.bed22_4_s = "fill:#ff0000;stroke:#000001;stroke-width:0.264583";
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
