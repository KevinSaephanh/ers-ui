export class Reimbursement {
  amount: number;
  submitted: Date;
  resolved: Date | null;
  description: string | null;
  receipt: any | null;
  author: string;
  resolver: string | null;
  type: string;
  status: string;
}
