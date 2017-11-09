import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

export const isBlank = (obj: any) => obj === undefined || obj === null;

@NgModule({
    declarations: [],
    exports: [],
    imports: [CommonModule]
})
export class ChipIonicModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ChipIonicModule,
            providers: []
        };
    }
}
