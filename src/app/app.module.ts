import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FloorComponent } from './floor/floor.component';
import { BedComponent } from './bed/bed.component';
import { PatientComponent } from './patient/patient.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { RoomComponent } from './room/room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HospitalComponent } from './hospital/hospital.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FloorComponent,
    BedComponent,
    PatientComponent,
    PatientsComponent,
    PatientAddComponent,
    RoomComponent,
    HospitalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
