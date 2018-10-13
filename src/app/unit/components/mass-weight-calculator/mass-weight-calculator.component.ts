import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CalcFunctionsService } from '../../../core/services/cacl-functions.service';
import { PageService } from '../../../core/services/page.service';
import { PageContent } from '../../../models/page';

@Component({
  selector: 'app-mass-weight-calculator',
  templateUrl: './mass-weight-calculator.component.html',
  styleUrls: ['./mass-weight-calculator.component.css']
})
export class MassWeightCalculatorComponent implements OnInit {
  form: FormGroup;
  page: PageContent;
  res: string;
  oldValue: string;
  oldFactor: string;
  newFactor: string;
  conversionFactor = [
    { code: 'cm', factor: 0.0002, name: 'կարատ [cm]' },
    { code: 'cg', factor: 0.00001, name: 'սենտրիգրամ [cg]' },
    { code: 'dg', factor: 0.0001, name: 'դեցիգրամ [dg]' },
    { code: 'dag', factor: 0.01, name: 'դեկագրամ [dag]' },
    { code: 'g', factor: 0.001, name: 'գրամ [g]' },
    { code: 'kg', factor: 1, name: 'կիլոգրամ [kg]' },
    { code: 'mcg', factor: 0.000000001, name: 'միկրոգրամ [mcg]' },
    { code: 'mg', factor: 0.000001, name: 'միլիգրամ [mg]' },
    { code: 'oz', factor: 0.028349523125, name: 'ունց [oz]' },
    { code: 'lb', factor: 0.45359237, name: 'ֆունտ [lb]' },
    { code: 'st', factor: 6.35029318, name: 'Stones բրիտանական' },
    {
      code: 'sts',
      factor: 5.669904625,
      name: 'Stones ամերիկյան'
    },
    { code: 't', factor: 1000, name: 'տոննա' }
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
