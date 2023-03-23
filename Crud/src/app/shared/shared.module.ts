import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { StockComponent } from './stock/stock.component';



@NgModule({
  declarations: [
    StockComponent
  ],
  exports: [StockComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
