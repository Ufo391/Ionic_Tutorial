export class Address {
    private street: string;
    private streetnumber: string;
    private postcode: number;
    private town: string;
    private phone: number;

    constructor(street: string, streetnumber: string, postcode: number, town: string, phone: number) {
        this.street = street;
        this.streetnumber = streetnumber;
        this.postcode = postcode;
        this.town = town;
        this.phone = phone;
    }

    public getStreet(): string {
        return this.street;
    }

    public getStreetnumber(): string {
        return this.streetnumber;
    }

    public getPostcode(): number {
        return this.postcode;
    }

    public getTown(): string {
        return this.town;
    }

    public getPhone(): number {
        return this.phone;
    }

    public addressToString(): string {
        return this.street + " " + this.streetnumber + " " + this.postcode + " " + this.town;
    }
}