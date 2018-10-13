import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PageContent } from '../../../models/page';
import { pages } from '../../../configs/db/db';

@Component({
  selector: 'app-credit-card-calc',
  templateUrl: './credit-card-calc.component.html',
  styleUrls: ['./credit-card-calc.component.css']
})
export class CreditCardCalcComponent implements OnInit {
  creditCardForm: FormGroup;
  creditCardFormMonth: FormGroup;
  page: PageContent;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit() {
    const route = this.route.snapshot.url[0].path;
    this.page = pages[route];

    this.creditCardForm = this.fb.group({
      currency: ['usd', Validators.required],
      balance: ['', Validators.required],
      rate: ['', Validators.required],
      perMonth: ['', Validators.required]
    });
    this.creditCardFormMonth = this.fb.group({
      currency: ['usd', Validators.required],
      balance: ['', Validators.required],
      rate: ['', Validators.required],
      debt: ['', Validators.required]
    });
  }

  calculate() {}
}
