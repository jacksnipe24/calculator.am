import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitDashboardComponent } from './components/unit-dashboard/unit-dashboard.component';
import { AccelerationCalcComponent } from './components/acceleration-calc/acceleration-calc.component';
import { MassWeightCalculatorComponent } from './components/mass-weight-calculator/mass-weight-calculator.component';
import { AreaCalculatorComponent } from './components/area-calculator/area-calculator.component';
import { DataStorageCalculatorComponent } from './components/data-storage-calculator/data-storage-calculator.component';
import { FuelCalculatorComponent } from './components/fuel-calculator/fuel-calculator.component';
import { LengthDustanceCalculatorComponent } from './components/length-dustance-calculator/length-dustance-calculator.component';
import { PowerCalculatorComponent } from './components/power-calculator/power-calculator.component';
import { PressureCalculatorComponent } from './components/pressure-calculator/pressure-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: UnitDashboardComponent,
    data: {
      title: 'Միավորային հաշվիչներ',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, `
    }
  },
  {
    path: 'aragacman-hashvich',
    component: AccelerationCalcComponent,
    data: {
      title: 'Արագացման Հաշվիչ',
      description: 'Արագացման Հաշվիչ'
    }
  },
  {
    path: 'zangvaci-hashvich',
    component: MassWeightCalculatorComponent,
    data: { title: 'Զանգվածի Հաշվիչ' }
  },
  {
    path: 'makeresi-hashvich',
    component: AreaCalculatorComponent,
    data: { title: 'Մակերեսի Հաշվիչ' }
  },
  {
    path: 'hishoxutyan-chapman-hashvich',
    component: DataStorageCalculatorComponent,
    data: {
      title: 'Տեղեկատվության չափման Հաշվիչ'
    }
  },
  {
    path: 'vareliqi-sparman-hashvich',
    component: FuelCalculatorComponent,
    data: {
      title: 'Վառելիքի սպառման Հաշվիչ'
    }
  },
  {
    path: 'erkarutyan-heravorutyan-hashvich',
    component: LengthDustanceCalculatorComponent,
    data: {
      title: 'Երկարության և Հեռավորության Հաշվիչ'
    }
  },
  {
    path: 'uji-chapman-hashvich',
    component: PowerCalculatorComponent,
    data: {
      title: 'ՈՒժի չափման Հաշվիչ',
      description: 'ՈՒժի չափման Հաշվիչ'
    }
  },
  {
    path: 'chnshman-chapman-hashvich',
    component: PressureCalculatorComponent,
    data: {
      title: 'Ճնշման չափման Հաշվիչ',
      description: 'Ճնշման չափման Հաշվիչ'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitRoutingModule {}
