

export class Bed {
    _id!: string;
    isEmpty!:boolean;
    room!:string;
    patient!:string;
    name!:string;
    respirator!:boolean;

    private constructor() {

    }

    static build(data: any): Bed {
        const bed = new Bed();
        Object.assign(bed, data);
        return bed;
    }

}
