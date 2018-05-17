import { Component, Input } from '@angular/core';

/**
 * Generated class for the TreeViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tree-view',
  template: `
    <ul *ngIf="items.length">
      <li *ngFor="let item of items">
      {{item.name}}
      <tree-view *ngIf="item[key]?.length" [key]="key" [data]="item[key]"></tree-view>
      </li>
    </ul>
  `
})
export class TreeViewComponent {
  @Input('data') items: Array<Object>;
  @Input('key') key: string;

  constructor() {
  }

}
