import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CalcFunctionsService } from '../../../core/services/cacl-functions.service';
import { PageService } from '../../../core/services/page.service';
import { PageContent } from '../../../models/page';

@Component({
  selector: 'app-acceleration-calc',
  templateUrl: './acceleration-calc.component.html',
  styleUrls: ['./acceleration-calc.component.css']
})
export class AccelerationCalcComponent implements OnInit {
  accForm: FormGroup;
  res: string;
  oldValue: string;
  oldFactor: string;
  newFactor: string;
  conversionFactor = [
    { code: 'cmss', factor: 0.01, name: 'սմ/վրկ²' },
    { code: 'dmss', factor: 0.1, name: 'դմ/վրկ²' },
    { code: 'fss', factor: 0.3048, name: 'ֆուտ/վրկ²' },
    { code: 'gal', factor: 0.01, name: 'գալ' },
    { code: 'hess', factor: 100, name: 'հեկտար/վրկ²' },
    { code: 'iss', factor: 0.0254, name: 'դյույմ/վրկ²' },
    { code: 'mss', factor: 1, name: 'մետր/վրկ²' },
    { code: 'khs', factor: 0.27777, name: 'կմ/ժ/վրկ' },
    { code: 'mhs', factor: 0.44704, name: 'մղոն/ժ/վրկ' }
  ];
  page: PageContent;

  displayedColumns: string[] = ['name', 'factor'];

  constructor(
    private fb: FormBuilder,
    private calcService: CalcFunctionsService,
    private pageService: PageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.accForm = this.fb.group({
      convertFrom: ['', Validators.required],
      convertTo: ['', Validators.required],
      value: ['', Validators.required]
    });
    const route = this.route.snapshot.url[0].path;
    this.page = this.pageService.getPage(route);
  }

  calculate() {
    if (this.accForm.valid) {
      this.oldValue = this.accForm.value.value;
      this.oldFactor = this.conversionFactor.find(
        val => val.code === this.accForm.value.convertFrom
      ).name;
      this.newFactor = this.conversionFactor.find(
        val => val.code === this.accForm.value.convertTo
      ).name;
      const fromVal = this.conversionFactor.find(
        val => val.code === this.accForm.value.convertFrom
      ).factor;
      const toVal = this.conversionFactor.find(
        val => val.code === this.accForm.value.convertTo
      ).factor;
      this.res = this.calcService
        .calculateGeneralConversion(fromVal, toVal, this.accForm.value.value)
        .toString();
    }
  }
}
