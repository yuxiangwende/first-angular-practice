import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  fluentMenu,
  fluentMenuItem,
  fluentCard,
  fluentDivider,
  fluentTab,
  fluentTabPanel,
  fluentTabs,
  fluentAnchor,
  fluentSwitch,
  provideFluentDesignSystem } from '@fluentui/web-components'
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

provideFluentDesignSystem()
  .register(
    fluentMenu(),
    fluentMenuItem(),
    fluentCard(),
    fluentDivider(),
    fluentTab(),
    fluentTabs(),
    fluentTabPanel(),
    fluentAnchor(),
    fluentSwitch(),
  );