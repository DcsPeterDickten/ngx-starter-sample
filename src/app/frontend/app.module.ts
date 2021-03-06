import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_TRANSLATIONS } from '@dcs/ngx-utils';

import { BackendModule } from '../backend/backend.module';
import { translations as de } from '../locale/de';
import { translations as en } from '../locale/en';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false
    }),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // App modules
    BackendModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
    {
      provide: APP_TRANSLATIONS,
      useValue: { name: 'de', translations: de },
      multi: true
    },
    {
      provide: APP_TRANSLATIONS,
      useValue: { name: 'en', translations: en },
      multi: true
    }
  ]
})
export class AppModule {}
