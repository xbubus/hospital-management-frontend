import { Component, OnInit } from '@angular/core';
import {Patient} from '../models/patient'
import {PatientService} from '../services/patient.service';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patients: Array<Patient> = new Array();
  addForm:boolean=false;
  searchTerm!:string;
  constructor(private readonly patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.get().subscribe(
      data=>{
        for (const patient of data){
          this.patients.push(Patient.build(patient))
        }
      },
      err=>{
        console.log("sadge: ",err)
      }

    )
  }
  onDelete(id:string){
    if (confirm('Are you sure ?')) {
      this.patientService.delete(id).subscribe(
        response => {
          //tu usuwac z tablicy patiens usuniety obiekt i nie robic redirect w html
          //a nie lepiej odebrac nowa tablice z backendu?
          //tak jest szybciej, o tak:
          const index = this.patients.findIndex(item => item._id === id);
          if (index !== -1) {
           this.patients.splice(index, 1);
      }
          this.addForm=false;

        },

        error => {
          this.addForm=false;
        }
      );
    }
  }
}
