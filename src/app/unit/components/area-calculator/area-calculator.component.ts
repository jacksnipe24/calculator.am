import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CalcFunctionsService } from '../../../core/services/cacl-functions.service';
import { PageService } from '../../../core/services/page.service';
import { PageContent } from '../../../models/page';

@Component({
  selector: 'app-area-calculator',
  templateUrl: './area-calculator.component.html',
  styleUrls: ['./area-calculator.component.css']
})
export class AreaCalculatorComponent implements OnInit {
  form: FormGroup;
  page: PageContent;
  res: string;
  oldValue: string;
  oldFactor: string;
  newFactor: string;
  conversionFactor = [
    { code: 'ac', factor: 4046.8564224, name: 'acre [ac]' },
    { code: 'a', factor: 100, name: 'are [a]' },
    { code: 'ct', factor: 40.468564224, name: 'cent [ct]' },
    { code: 'ha', factor: 10000, name: 'hectare [ha]' },
    { code: 'cm2', factor: 0.0001, name: 'square centimeter [cm2]' },
    { code: 'dm2', factor: 0.01, name: 'square decimeter [dm2]' },
    { code: 'dam2', factor: 100, name: 'square decameter [dam2]' },
    { code: 'ft2', factor: 0.09290304, name: 'square feet [ft2]' },
    { code: 'hm2', factor: 10000, name: 'square hectometer [hm2]' },
    { code: 'in2', factor: 0.00064516, name: 'square inches [in2]' },
    { code: 'km2', factor: 1000000, name: 'square kilometer [km2]' },
    { code: 'm2', factor: 1, name: 'square meter [m2]' },
    { code: 'mi2', factor: 2589988.110336, name: 'square mile [mi2]' },
    { code: 'mm2', factor: 0.000001, name: 'square millimeter [mm2]' },
    { code: 'yd2', factor: 0.83612736, name: 'square yard [yd2]' }
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
