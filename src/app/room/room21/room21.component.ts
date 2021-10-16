import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BedService } from '../../services/bed.service';
@Component({
  selector: 'app-room21',
  templateUrl: './room21.component.html',
  styleUrls: ['./room21.component.scss']
})
export class Room21Component implements OnInit {

  constructor(private readonly bedService: BedService,private readonly router:Router) { }
  beds = new Array();
  bed21_1_s: string = "fill:#008000;stroke:#000001;stroke-width:0.264583;cursor:not-allowed";
  bed21_2_s: string = "fill:#008000;stroke:#000001;stroke-width:0.264583;cursor:not-allowed";
  bed21_3_s: string = "fill:#008000;stroke:#000001;stroke-width:0.264583;cursor:not-allowed";
  bed21_4_s: string = "fill:#008000;stroke:#000001;stroke-width:0.264583;cursor:not-allowed";
  ngOnInit(): void {
    this.bedService.get().subscribe(
      data => {
        for (const d of data) {
          if (d.name.includes("bed-21")) {
            this.beds.push(d);
          }
        }
        for (const bed of this.beds) {
          if (bed.name == "bed-21-1" && (bed.isEmpty == false ||bed.isEmpty=='false')) {
            this.bed21_1_s = "fill:#ff0000;stroke:#000001;stroke-width:0.264583;cursor:pointer";
          }
          if (bed.name == "bed-21-2" && (bed.isEmpty == false ||bed.isEmpty=='false')) {
            this.bed21_2_s = "fill:#ff0000;stroke:#000001;stroke-width:0.264583;cursor:pointer";
          }
          if (bed.name == "bed-21-3" && (bed.isEmpty == false ||bed.isEmpty=='false')) {
            this.bed21_3_s = "fill:#ff0000;stroke:#000001;stroke-width:0.264583;cursor:pointer";
          }
          if (bed.name == "bed-21-4" && (bed.isEmpty == false ||bed.isEmpty=='false')) {
            this.bed21_4_s = "fill:#ff0000;stroke:#000001;stroke-width:0.264583;cursor:pointer";
          }
        }
      },
      err => {

      }
    )
  }
  goToPatients(x:number) { // redirect room/id
    console.log("click ",x)
    for (const bed of this.beds) {
      if (bed.name == ('bed-21-'+x)&&(bed.isEmpty==false||bed.isEmpty=="false")){
        const str= 'patient/'+bed.patient;
        this.router.navigate([str]);
      }
    }
  }
}
