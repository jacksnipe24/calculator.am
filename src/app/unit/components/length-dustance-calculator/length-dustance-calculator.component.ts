import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CalcFunctionsService } from '../../../core/services/cacl-functions.service';
import { PageService } from '../../../core/services/page.service';
import { PageContent } from '../../../models/page';

@Component({
  selector: 'app-length-dustance-calculator',
  templateUrl: './length-dustance-calculator.component.html',
  styleUrls: ['./length-dustance-calculator.component.css']
})
export class LengthDustanceCalculatorComponent implements OnInit {
  form: FormGroup;
  page: PageContent;
  res: string;
  oldValue: string;
  oldFactor: string;
  newFactor: string;
  conversionFactor = [
    { code: 'cm', factor: 0.01, name: 'սանտիմետր' },
    { code: 'ch', factor: 20.1168, name: 'chains' },
    { code: 'dm', factor: 0.1, name: 'դեցիմետր' },
    { code: 'dam', factor: 10, name: 'դեկամետր' },
    { code: 'fath', factor: 1.8288, name: 'fathoms' },
    { code: 'ft', factor: 0.3047, name: 'ֆուտ' },
    { code: 'fur', factor: 201.168, name: 'ֆուրլոնգ' },
    { code: 'gm', factor: 1000000000, name: 'գիգամետր' },
    { code: 'hm', factor: 100, name: 'հեկտոմետր' },
    { code: 'in', factor: 0.0254, name: 'դյույմ' },
    { code: 'km', factor: 1000, name: 'կիլոմետր' },
    { code: 'ly', factor: 9460528404879400, name: 'լուսային տարի' },
    { code: 'm', factor: 1, name: 'մետր' },
    { code: 'um', factor: 0.000001, name: 'միկրոմետր' },
    { code: 'mi', factor: 1609.344, name: 'մղոն' },
    { code: 'mm', factor: 0.001, name: 'միլիմետր' },
    { code: 'nm', factor: 0.000000001, name: 'նանոմետր' },
    { code: 'pc', factor: 30856775812800000, name: 'parsec' },
    { code: 'yd', factor: 0.91440000000001, name: 'յարդ' }
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
