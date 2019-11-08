export class Reimbursement {
  id: number | null;
  amount: number;
  submitted: Date;
  resolved: Date | null;
  description: string | null;
  receipt: any | null;
  authorId: number;
  resolverId: number | null;
  reimbTypeId: number;
  reimbStatusId: number;
}
