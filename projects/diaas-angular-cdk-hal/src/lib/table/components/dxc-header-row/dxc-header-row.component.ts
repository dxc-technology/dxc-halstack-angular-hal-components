import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from "@angular/core";
import { SortService } from "../../services/sort.service";
import { ElementRef } from '@angular/core';

@Component({
  selector: "th",
  template: `<div
    ordering="{{ isSortable }}"
    id="header-{{ columnName }}-{{ parentClassName }}"
    propertyname="{{ value }}"
    [ngClass]="[isSortable ? 'isSortable' : '']"
  >
    {{ columnName }}
    <span
      id="iconSort-{{ columnName }}-{{ parentClassName }}"
      *ngIf="isSortable"
    ></span>
  </div>`,
  styleUrls: ["./dxc-header-row-component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})
export class DxcHeaderRowComponent {
  columnName: string;
  isSortable: boolean;

  defaultSort: string;
  ascSort: string;
  descSort: string;

  state: string;
  parentClassName: any;
  value: string;

  constructor(
    private sortService: SortService,
    public elementRef: ElementRef
  ) {}

  ngAfterViewInit() {
    this.setSortIcon();
  }

  /** Paint icon for sorting depending on header state (up for asc, down for desc and default) */
  setSortIcon() {
    if (this.isSortable) {
      let divHeader = this.elementRef.nativeElement;
      let spanIcon = (divHeader as HTMLElement).getElementsByTagName("span")[0];
      switch (this.state) {
        case "up":
          let up = this.sortService.getAscIcon(this.columnName);
          spanIcon.insertAdjacentHTML("beforeend", up);
          divHeader.setAttribute("state", this.state);
          break;
        case "down":
          let down = this.sortService.getDescIcon(this.columnName);
          spanIcon.insertAdjacentHTML("beforeend", down);
          divHeader.setAttribute("state", this.state);
          break;
        default:
          let defaultIcon = this.sortService.getDefaultIcon(this.columnName);
          spanIcon.insertAdjacentHTML("beforeend", defaultIcon);
          divHeader.setAttribute("state", this.state);
          break;
      }
    }
  }
}
