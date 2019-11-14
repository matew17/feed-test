import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InfoPullComponent } from '@shared/components/info-pull/info-pull.component';
import { MenuComponent } from '@shared/components/menu/menu.component';
import { RemainTimePullComponent } from '@shared/components/remain-time-pull/remain-time-pull.component';
import { WarningComponent } from '@shared/components/warning/warning.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [
        InfoPullComponent,
        MenuComponent,
        RemainTimePullComponent,
        WarningComponent
    ],
    exports: [
        InfoPullComponent,
        MenuComponent,
        RemainTimePullComponent,
        WarningComponent
    ]
})
export class SharedModule { }
