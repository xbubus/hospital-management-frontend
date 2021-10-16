import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Patient} from '../models/patient'
import {PatientService} from '../services/patient.service';
import { Bed } from '../models/bed'
import { BedService } from '../services/bed.service';
@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})
export class PatientAddComponent implements OnInit {
  newPatientForm!: FormGroup;
  beds: Array<Bed> = new Array()
  personalData!:{
    name: string,
    PESEL: string,
    email: string,
    phoneNumber: string
    };
    bed!:string;
    diseaseHistory!: String;
    clinicalCondition!: String;
    contagious!: Boolean;
    dateOfAdmission!:Date

  constructor(private readonly formBuilder: FormBuilder,private readonly patientService: PatientService,private readonly bedService: BedService) { }

  ngOnInit(): void {
    this.bedService.get().subscribe(
      data=>{
        for (const bed of data){
          if(bed.isEmpty==true){
            console.log(bed)
          this.beds.push(Bed.build(bed))
          }
        }
      },
      err=>{
        console.log("sadge: ",err)
      }

    )
    this.newPatientForm = this.formBuilder.group({
      name: [''],
      PESEL:  [''],
      email:  [''],
      phoneNumber:  [''],
      bed!: [''], //tu raczej jakos nazwe trzeba bedzie a nie id i to w backendzie okodzic
      diseaseHistory!:  [''],
      clinicalCondition!:  [''],
      contagious!:  [false],
      dateOfAdmission!: [''], 
    });
  }
  onSubmit(){
    const name = this.newPatientForm.get('name')!.value;
    const PESEL = this.newPatientForm.get('PESEL')!.value;
    const email = this.newPatientForm.get('email')!.value;
    const phoneNumber = this.newPatientForm.get('phoneNumber')!.value;
    const diseaseHistory = this.newPatientForm.get('diseaseHistory')!.value;
    const clinicalCondition = this.newPatientForm.get('clinicalCondition')!.value;
    const contagious = this.newPatientForm.get('contagious')!.value;
    const dateOfAdmission = this.newPatientForm.get('dateOfAdmission')!.value;
    const bed = this.newPatientForm.get('bed')!.value;
    const personalData={name,PESEL,email,phoneNumber};
    this.patientService.create({personalData,dateOfAdmission,contagious,clinicalCondition,diseaseHistory,bed}).subscribe(
      ok=>{
        console.log("OK! "+ok)
      },
      err=>{
        console.log(":c "+err)
      }
    )
  }
}
