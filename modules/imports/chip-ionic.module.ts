import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo-add.component';

@NgModule({
    declarations: [TodoComponent],
    exports: [],
    imports: [
      CommonModule,
      RouterModule.forChild([
          { path: '', component: TodoComponent }
        ])
    ]
})
export class ChipIonicModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ChipIonicModule,
            providers: []
        };
    }
}
