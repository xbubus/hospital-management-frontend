export class Patient {
  _id!: string; // or id ?
  personalData!:{
  name: string,
  PESEL: string,
  dateOfBirth: string,
  email: string,
  phoneNumber: string
  };
  bed!:string;
  IsInfectious!:String;
  diseaseHistory!: String;
  clinicalCondition!: String;
  contagious!: Boolean;
  dateOfAdmission!:Date
  private constructor() {
  }

  static build(data: any): Patient {
    const user = new Patient();
    Object.assign(user, data);

    return user;
  }
}



