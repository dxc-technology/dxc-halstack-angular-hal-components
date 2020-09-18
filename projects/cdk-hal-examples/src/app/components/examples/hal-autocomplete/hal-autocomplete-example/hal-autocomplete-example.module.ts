import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AutocompleteHalExample } from "./hal-autocomplete-example.component";
import { DxcAutocompleteHalModule } from "@dxc-technology/halstack-angular-hal";
import { HttpClientModule } from "@angular/common/http";
import { ExampleViewerModule } from "../../../example-viewer/example-viewer.module";
import { AutocompleteHalSimple } from '../hal-autocomplete-simple/hal-autocomplete-simple.component';
import { DxcTableModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [AutocompleteHalExample, AutocompleteHalSimple],
  imports: [
    HttpClientModule,
    CommonModule,
    DxcAutocompleteHalModule,
    ExampleViewerModule,
  ],
  exports: [AutocompleteHalExample],
})
export class AutocompleteHalExampleModule {}
