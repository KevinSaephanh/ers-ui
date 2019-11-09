import { Component, OnInit, Input } from '@angular/core';
import { __importDefault } from 'tslib';
import { Reimbursement } from '../models/Reimbursement';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() reimbursement: Reimbursement = new Reimbursement();
  
  constructor() { }

  ngOnInit() {
  
  }

}
