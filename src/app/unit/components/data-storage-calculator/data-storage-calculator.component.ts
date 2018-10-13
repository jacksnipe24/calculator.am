import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PageContent } from '../../../models/page';
import { CalcFunctionsService } from '../../../core/services/cacl-functions.service';
import { PageService } from '../../../core/services/page.service';

@Component({
  selector: 'app-data-storage-calculator',
  templateUrl: './data-storage-calculator.component.html',
  styleUrls: ['./data-storage-calculator.component.css']
})
export class DataStorageCalculatorComponent implements OnInit {
  form: FormGroup;
  page: PageContent;
  res: string;
  oldValue: string;
  oldFactor: string;
  newFactor: string;
  conversionFactor = [
    { code: 'b', factor: 8, name: 'բայտ' },
    { code: 'bit', factor: 1, name: 'բիտ' },
    { code: 'kbit', factor: 1024, name: 'կբիտ' },
    { code: 'kb', factor: 8192, name: 'կբայտ' },
    { code: 'mbit', factor: 1048576, name: 'մբիտ' },
    { code: 'mb', factor: 8388608, name: 'մբայտ' },
    { code: 'gbit', factor: 1073741824, name: 'գբիտ' },
    { code: 'gb', factor: 8589934592, name: 'գբայտ' },
    { code: 'tbit', factor: 1099511560222.01, name: 'տբիտ' },
    { code: 'tb', factor: 8796092251191.81, name: 'տբայտ' },
    { code: 'pbit', factor: 1125899845931478.2, name: 'պբիտ' },
    { code: 'pb', factor: 9007198042096471, name: 'պբայտ' }
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
