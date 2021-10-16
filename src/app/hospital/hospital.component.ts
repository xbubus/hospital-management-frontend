import { Component, OnInit } from '@angular/core';
import {BedService} from '../services/bed.service'
import {PatientService} from '../services/patient.service'
import {Bed} from '../models/bed'
import {Patient} from '../models/patient'
@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {
  patients: Array<Patient>=new Array();
  beds: Array<Bed>=new Array();
  free_beds:number=0;
  constructor(private readonly bedService:BedService,
    private readonly patientService:PatientService) { }

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
        }
      }
    )

  
  this.patientService.get().subscribe(
    data=>{
      for(const d in data){
        this.patients.push(Patient.build(d))
      }
    }
  )

}

}
