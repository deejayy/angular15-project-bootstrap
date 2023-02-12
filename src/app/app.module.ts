import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveConfigModule } from '@deejayy/reactive-config';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export class ConfigVars {
  public apiUrl!: string;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'Angular 14 Bootstrap',
      maxAge: 200,
      logOnly: environment.production,
    }),
    ReactiveConfigModule.forRoot(ConfigVars, { configPath: environment.config }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
