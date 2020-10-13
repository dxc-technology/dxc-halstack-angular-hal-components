import { Component, Inject } from "@angular/core";
import { ThemeService } from '@dxc-technology/halstack-angular';
import { customTheme } from '../assets/styles/themesProperties';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "cdk-hal-examples";
  constructor(
    @Inject("ThemeService") private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.themeService.registerTheme(customTheme);
  }

}
