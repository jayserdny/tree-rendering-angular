import { NgModule } from '@angular/core';
import { TreeViewComponent } from './tree-view/tree-view';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [TreeViewComponent],
	imports: [IonicModule],
	exports: [TreeViewComponent]
})
export class ComponentsModule {}
