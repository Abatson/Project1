export class ReimbursementStatus {
    statusId: number // primary key
    status: string // not null, unique

    constructor() {
        this.statusId = 0;
        this. status = '0'
    }
  }