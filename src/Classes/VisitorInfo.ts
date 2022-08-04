export class VisitorInfo {
    VISID: string | any;
    name: string | any;
    companyid: string  | any;
    companyno: string | any;
    phonemobile: string | any;
    phoneoffice: string | any;
    email: string;

    constructor(visid: string) {
        this.VISID = visid;
        this.name = '';
        this.companyid = '';
        this.companyno = '';
        this.phonemobile = '';
        this.phoneoffice = '';
        this.email = '';
    }
}

