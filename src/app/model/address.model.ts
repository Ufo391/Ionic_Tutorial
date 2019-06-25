export class Address {
    private strassenname: string;
    private hausnummer: string;
    private postleitzahl: number;
    private ort: string;
    private telefonnummer: string;

    constructor(street: string, streetnumber: string, postcode: number, town: string, phone: string) {
        this.strassenname = street;
        this.hausnummer = streetnumber;
        this.postleitzahl = postcode;
        this.ort = town;
        this.telefonnummer = phone;
    }

    public getStreet(): string {
        return this.strassenname;
    }

    public getStreetnumber(): string {
        return this.hausnummer;
    }

    public getPostcode(): number {
        return this.postleitzahl;
    }

    public getTown(): string {
        return this.ort;
    }

    public getPhone(): number {
        return this.telefonnummer;
    }

    public addressToString(): string {
        return this.strassenname + " " + this.hausnummer + " " + this.postleitzahl + " " + this.ort;
    }
}