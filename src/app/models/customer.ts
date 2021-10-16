import { Tenant } from './tenants';

export class Customer {
    id: string;
    name: string;
    login: string;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    tenantsNumber: number;
    enabledTenants: number;
    disabledTenants: number;
    'tenants': Array<Tenant>;

    public constructor() {

    }

    static build(data: any): Customer {
        const customer = new Customer();
        Object.assign(customer, data);
        return customer;
    }

}
