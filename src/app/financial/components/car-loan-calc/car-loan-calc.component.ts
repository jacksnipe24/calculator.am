import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { PageContent } from '../../../models/page';
import { pages } from '../../../configs/db/db';

@Component({
  selector: 'app-car-loan-calc',
  templateUrl: './car-loan-calc.component.html',
  styleUrls: ['./car-loan-calc.component.css']
})
export class CarLoanCalcComponent implements OnInit {
  carLoanForm: FormGroup;
  page: PageContent;
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit() {
    const route = this.route.snapshot.url[0].path;
    this.page = pages[route];

    this.carLoanForm = this.fb.group({
      currency: ['amd', Validators.required],
      value: ['', Validators.required],
      rate: ['', Validators.required],
      months: ['', Validators.required],
      deposit: [''],
      balloon: [''],
      startDate: ['']
    });
  }

  calculate() {}
}
