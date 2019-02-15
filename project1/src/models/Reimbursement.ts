import { ReimbursementStatus } from "./ReimbursementStatus";
import { ReimbursementType } from "./ReimbursementType";

export class Reimbursement{
    reimbursementId: number // primary key
    author: number  // foreign key -> User, not null
    amount: number  // not null
    dateSubmitted: string // not null
    dateResolved: string // not null
    description: string // not null
    resolver: number // foreign key -> User
    status: ReimbursementStatus // foreign key -> ReimbursementStatus, not null
    type: ReimbursementType // foreign key -> ReimbursementType

    constructor() {
        this.amount = 0;
        this.author = 0;
        this.reimbursementId = 0;
        this.dateSubmitted = '0';
        this.dateResolved = '0';
        this.description = '';
        this.resolver = 0;
        this.status = new ReimbursementStatus();
        this.type = new ReimbursementType();
    }
}