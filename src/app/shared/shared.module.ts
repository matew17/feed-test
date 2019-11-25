import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InfoPullComponent } from '@shared/components/info-pull/info-pull.component';
import { MenuComponent } from '@shared/components/menu/menu.component';
import { RemainTimePullComponent } from '@shared/components/remain-time-pull/remain-time-pull.component';
import { WarningComponent } from '@shared/components/warning/warning.component';
import { PullCardComponent } from './components/pull-card/pull-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule
    ],
    declarations: [
        ContactComponent,
        FooterComponent,
        InfoPullComponent,
        MenuComponent,
        PullCardComponent,
        RemainTimePullComponent,
        WarningComponent
    ],
    exports: [
        ContactComponent,
        FooterComponent,
        InfoPullComponent,
        MenuComponent,
        PullCardComponent,
        RemainTimePullComponent,
        WarningComponent
    ]
})
export class SharedModule { }
