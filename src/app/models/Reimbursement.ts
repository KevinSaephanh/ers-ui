export class Reimbursement {
  reimb_id: number | null;
  reimb_amount: number;
  reimb_submitted: Date;
  reimb_resolved: Date | null;
  reimb_description: string | null;
  reimb_receipt: any | null;
  reimb_author: string | number;
  reimb_resolver: string | number | null;
  reimb_type_id: string | number;
  reimb_status_id: string | number;
}
