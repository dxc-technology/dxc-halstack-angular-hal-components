import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcHalTableComponent } from './dxc-hal-table.component';
import { DxcPaginatorModule, DxcTableModule, DxcSpinnerModule } from '@diaas/dxc-ngx-cdk';
import { DxcHalTableCellModule } from './dxc-hal-table-cell.module';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ComponentExampleComponent } from 'projects/cdk-hal-examples/src/app/components/component-example/component-example.component';

@NgModule({
  declarations: [
    DxcHalTableComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DxcTableModule,
    DxcPaginatorModule,
    DxcSpinnerModule,
    DxcHalTableCellModule
  ],
  exports: [
    DxcHalTableComponent
  ]
})
export class DxcHalTableModule { }
