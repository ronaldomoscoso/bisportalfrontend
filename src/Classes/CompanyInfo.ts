export class CompanyInfo {
    COMPANYID: string | undefined;
    COMPANYNO: string | undefined;
    NAME: string | undefined;

    constructor(id: string, cmpno: string, cmpname: string) {
        this.COMPANYID = id;
        this.COMPANYNO = cmpno;
        this.NAME = cmpname;
    }
}