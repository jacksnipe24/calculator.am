import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PageContent } from '../../../models/page';
import { CalcFunctionsService } from '../../../core/services/cacl-functions.service';
import { PageService } from '../../../core/services/page.service';

@Component({
  selector: 'app-power-calculator',
  templateUrl: './power-calculator.component.html',
  styleUrls: ['./power-calculator.component.css']
})
export class PowerCalculatorComponent implements OnInit {
  form: FormGroup;
  page: PageContent;
  res: string;
  oldValue: string;
  oldFactor: string;
  newFactor: string;
  conversionFactor = [
    { code: 'ew', factor: 1000000000000000000, name: 'exawatts' },
    { code: 'fppm', factor: 0.022596965805523, name: 'foot pounds per minute' },
    { code: 'fpps', factor: 1.3558179483314, name: 'foot pounds per second' },
    { code: 'hp', factor: 745.69987158227, name: 'ձիաուժ' },
    { code: 'js', factor: 1, name: 'ջոուլ/վրկ' },
    { code: 'kva', factor: 1000, name: 'կիլովոլտ ամպեր' },
    { code: 'kw', factor: 1000, name: 'կիլովատտ' },
    { code: 'mw', factor: 1000000, name: 'մեգավատտ' },
    { code: 'miw', factor: 0.001, name: 'միլիվատտ' },
    { code: 'va', factor: 1, name: 'վոլտ ամպեր' },
    { code: 'w', factor: 1000, name: 'վատտ' }
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
