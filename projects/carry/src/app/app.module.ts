import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabsModule } from 'labs';
import { ClipboardModule } from 'ngf-clipboard';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LabsModule,
        ClipboardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
