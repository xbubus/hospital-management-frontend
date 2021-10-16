import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient'
import { PatientService } from '../services/patient.service';
import { Bed } from '../models/bed'
import { BedService } from '../services/bed.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  newPatientForm!: FormGroup;
  patientId!: string;
  editForm: boolean = false;
  beds: Array<Bed> = new Array()
  public patient!: Patient;

  constructor(private readonly patientService: PatientService, private route: ActivatedRoute,
    private readonly formBuilder: FormBuilder, private readonly bedService: BedService) { }



  ngOnInit(): void {
    this.newPatientForm = this.formBuilder.group({
      name: [],
      PESEL: [],
      email: [],
      phoneNumber: [''],
      bed!: [''], //tu raczej jakos nazwe trzeba bedzie a nie id i to w backendzie okodzic
      diseaseHistory!: [],
      clinicalCondition!: [],
      contagious!: [],
      dateOfAdmission!: [],
    });

    this.route.params.subscribe((params: Params) => {
      this.patientId = params.id;
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
      this.patientService.find(this.patientId).subscribe(
        data => {
          this.patient = Patient.build(data);
          console.log(this.patient)
          this.newPatientForm.patchValue({
            name: this.patient.personalData.name,
            PESEL: this.patient.personalData.PESEL,
            email: this.patient.personalData.email,
            phoneNumber: this.patient.personalData.phoneNumber,
            bed: this.patient.bed, //tu raczej jakos nazwe trzeba bedzie a nie id i to w backendzie okodzic
            diseaseHistory!: this.patient.diseaseHistory,
            clinicalCondition!: this.patient.clinicalCondition,
            contagious!: this.patient.contagious,
            dateOfAdmission!: this.patient.dateOfAdmission,
          });


        },
        err => {
          console.log("dupa: ", err)
        }

      )

    })
   


    //console.log(this.patient)
  }
  onSubmit() {
    console.log("submit")
    const name = this.newPatientForm.get('name')!.value;
    const PESEL = this.newPatientForm.get('PESEL')!.value;
    const email = this.newPatientForm.get('email')!.value;
    const phoneNumber: string = this.newPatientForm.get('phoneNumber')!.value;
    const diseaseHistory = this.newPatientForm.get('diseaseHistory')!.value;
    const clinicalCondition = this.newPatientForm.get('clinicalCondition')!.value;
    const contagious = this.newPatientForm.get('contagious')!.value;
    const dateOfAdmission = this.newPatientForm.get('dateOfAdmission')!.value;
    const bed = this.newPatientForm.get('bed')!.value;
    const personalData = { name, PESEL, email, phoneNumber };

    //TRZEBA DODAC PATCH
    this.patientService.patch(this.patientId, { personalData, dateOfAdmission, contagious, clinicalCondition, diseaseHistory,bed }).subscribe(
      ok => {
        console.log("OK! " + ok)
      },
      err => {
        console.log(":c " + err)
      }
    )
  }
}
