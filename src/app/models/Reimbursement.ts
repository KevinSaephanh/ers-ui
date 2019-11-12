export class Reimbursement {
  id: number | null;
  amount: number;
  submitted: Date | null;
  resolved: Date | null;
  description: string | null;
  receipt: Blob | null;
  authorId: number | string;
  resolverId: number | string | null;
  reimbTypeId: number | string;
  reimbStatusId: number | string;
  reimbImgString: string | null;
}
