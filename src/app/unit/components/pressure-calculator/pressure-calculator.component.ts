import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PageContent } from '../../../models/page';
import { CalcFunctionsService } from '../../../core/services/cacl-functions.service';
import { PageService } from '../../../core/services/page.service';

@Component({
  selector: 'app-pressure-calculator',
  templateUrl: './pressure-calculator.component.html',
  styleUrls: ['./pressure-calculator.component.scss']
})
export class PressureCalculatorComponent implements OnInit {
  form: FormGroup;
  page: PageContent;
  res: string;
  oldValue: string;
  oldFactor: string;
  newFactor: string;
  conversionFactor = [
    { code: 'atm', factor: 1.0332274527999, name: 'atmospheres' },
    { code: 'bars', factor: 1.0197162129779, name: 'bars' },
    { code: 'epa', factor: 10197162129779, name: 'exapascals' },
    { code: 'gpa', factor: 10197.162129779, name: 'gigapascals' },
    { code: 'hpa', factor: 0.0010197162129779, name: 'hectopascals' },
    { code: 'inhg', factor: 0.034531465893042, name: 'inches mercury' },
    { code: 'kgcm2', factor: 1, name: 'կգ/սմ²' },
    { code: 'kpa', factor: 0.010197162129779, name: 'kilopascals' },
    { code: 'mpa', factor: 10.197162129779, name: 'megapascals' },
    { code: 'mbar', factor: 0.0010197162129779, name: 'milibars' },
    { code: 'mmhg', factor: 0.00135951, name: 'milimeters mercury' },
    { code: 'ncm2', factor: 0.10197162129779, name: 'newton/սմ²' },
    { code: 'nm2', factor: 0.000010197162129779, name: 'newton/մ²' },
    { code: 'pa', factor: 0.000010197162129779, name: 'pascal' },
    { code: 'ppa', factor: 10197162129.779, name: 'petapascal' },
    {
      code: 'tor',
      factor: 0.0013595098063156,
      name: 'torr'
    }
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
