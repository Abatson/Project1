export class ReimbursementType {
    typeId: number // primary key
    type: string // not null, unique

    constructor() {
        this.typeId = 0;
        this.type = '0';
    }
  }