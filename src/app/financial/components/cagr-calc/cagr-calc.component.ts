import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CalcFunctionsService } from '../../../core/services/cacl-functions.service';
import { pages } from '../../../configs/db/db';
import { PageContent } from '../../../models/page';

@Component({
  selector: 'app-cagr-calc',
  templateUrl: './cagr-calc.component.html',
  styleUrls: ['./cagr-calc.component.css']
})
export class CagrCalcComponent implements OnInit {
  cagrForm: FormGroup;
  res: string;
  panelOpenState = false;
  page: PageContent;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private calc: CalcFunctionsService
  ) {}

  ngOnInit() {
    const route = this.route.snapshot.url[0].path;
    this.page = pages[route];

    this.cagrForm = this.fb.group({
      currency: ['pd', [Validators.required]],
      presentValue: [''],
      futureValue: [''],
      period: [''],
      years: ['y']
    });
  }
  calculate() {
    const pv = this.cagrForm.value.presentValue;
    const fv = this.cagrForm.value.futureValue;
    let pr = this.cagrForm.value.period;
    const years = this.cagrForm.value.years;
    if (years === 'm') {
      pr = parseFloat(pr) / 12;
    } else if (years === 'd') {
      pr = parseFloat(pr) / 365;
    }
    this.res = this.calc.calculateCagr(pv, fv, pr).toString();
  }
}
