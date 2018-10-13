import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CalcFunctionsService } from '../../../core/services/cacl-functions.service';
import { PageService } from '../../../core/services/page.service';
import { PageContent } from '../../../models/page';

@Component({
  selector: 'app-fuel-calculator',
  templateUrl: './fuel-calculator.component.html',
  styleUrls: ['./fuel-calculator.component.css']
})
export class FuelCalculatorComponent implements OnInit {
  form: FormGroup;
  page: PageContent;
  res: string;
  oldValue: string;
  oldFactor: string;
  newFactor: string;
  conversionFactor = [
    { code: 'l100', factor: 100, name: 'լիտր/100 կմ' },
    { code: 'mpggb', factor: 0.35400619, name: 'մղոն / գալոն (ՄԲ)' },
    { code: 'mpgus', factor: 0.4251437075, name: 'մղոն / գալոն (ԱՄՆ)' },
    { code: 'ml', factor: 1.609344, name: 'մղոն/լիտր' },
    { code: 'kml', factor: 1, name: 'կիլոմետր/լիտր' }
  ];

  displayedColumns: string[] = ['name', 'factor'];
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private calcService: CalcFunctionsService,
    private pageService: PageService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      convertFrom: ['', Validators.required],
      convertTo: ['', Validators.required],
      value: ['', Validators.required]
    });
    const route = this.route.snapshot.url[0].path;
    this.page = this.pageService.getPage(route);
  }
  calculate() {
    if (this.form.valid) {
      this.oldValue = this.form.value.value;
      this.oldFactor = this.conversionFactor.find(
        val => val.code === this.form.value.convertFrom
      ).name;
      this.newFactor = this.conversionFactor.find(
        val => val.code === this.form.value.convertTo
      ).name;
      const fromVal = this.conversionFactor.find(
        val => val.code === this.form.value.convertFrom
      ).factor;
      const toVal = this.conversionFactor.find(
        val => val.code === this.form.value.convertTo
      ).factor;
      this.res = this.calcService
        .calculateGeneralConversion(fromVal, toVal, this.form.value.value)
        .toString();
    }
  }
}
