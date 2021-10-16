import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FloorComponent} from './floor/floor.component'
import {Floor1Component} from './floor/floor1/floor1.component'
import {Floor2Component} from './floor/floor2/floor2.component'
import {Room11Component} from './room/room11/room11.component'
import {Room13Component} from './room/room13/room13.component'
import {Room21Component} from './room/room21/room21.component'
import {Room22Component} from './room/room22/room22.component'

import {BedComponent} from './bed/bed.component'
import {PatientComponent} from './patient/patient.component'
import {PatientsComponent} from './patients/patients.component'
import {MainComponent} from './main/main.component'
import {HospitalComponent} from './hospital/hospital.component'
const routes: Routes = [
  
  {path: 'floor/1', component: Floor1Component},
  {path: 'floor/2', component: Floor2Component},
  // {path: 'room', component: Room11Component},
  {path: 'room/11', component: Room11Component},
  {path: 'room/13', component: Room13Component},
  {path: 'room/21', component: Room21Component},
  {path: 'room/22', component: Room22Component},
  {path: 'bed', component: BedComponent},
  {path: 'patient/:id', component: PatientComponent},
  {path: 'patients', component: PatientsComponent},
  {path:'hospital',component:HospitalComponent},
  {path: '', component: MainComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
