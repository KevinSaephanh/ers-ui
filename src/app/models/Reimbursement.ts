export class Reimbursement {
  amount: number;
  submitted: Date;
  resolved: Date | null;
  description: string | null;
  receipt: any | null;
  author: string | number;
  resolver: string | number | null;
  type: string | number;
  status: string | number;
}
