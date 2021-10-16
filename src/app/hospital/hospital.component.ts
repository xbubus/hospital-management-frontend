import { Component, OnInit } from '@angular/core';
import {BedService} from '../services/bed.service'
import {PatientService} from '../services/patient.service'
import {Bed} from '../models/bed'
import {Patient} from '../models/patient'
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})

export class HospitalComponent implements OnInit {
  patients: Array<Patient>=new Array();
  beds: Array<Bed>=new Array();
  free_beds:number=0;
  contagious_patients:number=0;
  label="beds";
  colorScheme = {
    domain: ['#085ebd', '#cccccc']
  };
  bedChart:Array<any>= new Array();
  contagiousChart:Array<any>= new Array();
  constructor(private readonly bedService:BedService,
    private readonly patientService:PatientService,config: NgbCarouselConfig) { 
      config.interval = 3000;  
      config.wrap = true;  
      config.keyboard = false;  
      config.pauseOnHover = true; }

  ngOnInit(): void {
    
    this.bedService.get().subscribe(
      data=>{
        for(const d of data){
          this.beds.push(Bed.build(d))
          
        }
        for (const b of this.beds){
          if(b.isEmpty==true){
            this.free_beds+=1

          }

          this.bedChart=([{name:"free",value:this.free_beds},{name:"occupied",value:this.beds.length-this.free_beds}])
        }
      }
    )
     console.log(this.bedChart) 
  
  this.patientService.get().subscribe(
    data=>{
      for(const d of data){
        this.patients.push(Patient.build(d))
        if(d.contagious){
          this.contagious_patients+=1;
        }
      }
      this.contagiousChart=([{name:"contagious",value:this.contagious_patients},{name:"non-contagious",value:this.patients.length-this.contagious_patients}])
    }
  )

}

}
