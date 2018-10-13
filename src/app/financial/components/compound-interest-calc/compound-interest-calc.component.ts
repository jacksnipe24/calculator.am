import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CalcFunctionsService } from '../../../core/services/cacl-functions.service';
import { PageContent } from '../../../models/page';
import { pages } from '../../../configs/db/db';

@Component({
  selector: 'app-compound-interest-calc',
  templateUrl: './compound-interest-calc.component.html',
  styleUrls: ['./compound-interest-calc.component.css']
})
export class CompoundInterestCalcComponent implements OnInit {
  standardForm: FormGroup;
  depositForm: FormGroup;
  showInflationRate: boolean;
  compoundPeriod = 'Տարի';
  res: any[];
  page: PageContent;
  currency: string;
  displayedColumns: string[] = ['yearNumber', 'year', 'total', 'balance'];

  constructor(
    private fb: FormBuilder,
    private calcService: CalcFunctionsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const route = this.route.snapshot.url[0].path;
    this.page = pages[route];

    if (this.page) {
      this.standardForm = this.fb.group({
        currency: ['amd', Validators.required],
        base: ['', Validators.required],
        air: ['', Validators.required],
        period: ['', Validators.required],
        periodOption: ['y', Validators.required],
        compountInterval: [12, Validators.required]
      });
    } else {
      this.router.navigate(['/']);
    }
  }

  standartCalc() {
    if (this.standardForm.valid) {
      const form = this.standardForm.value;
      const base = form.base;
      const rate = form.air / 100;
      const t = form.period;
      const n = form.compountInterval;
      const periodOption = form.periodOption;
      let monthly;
      if (periodOption === 'm') {
        this.compoundPeriod = 'Ամիս';
        monthly = true;
      }
      if (form.currency === 'usd') {
        this.currency = '$';
      } else if (form.currency === 'eur') {
        this.currency = '€';
      } else if (form.currency === 'amd') {
        this.currency = 'Դ';
      } else {
        this.currency = '';
      }
      this.res = this.calcService.calculateCoompoundInterestStandart(
        base,
        rate,
        n,
        t,
        monthly
      );
    }
  }

  onChange(e) {
    e.checked
      ? (this.showInflationRate = true)
      : (this.showInflationRate = false);
  }
}
