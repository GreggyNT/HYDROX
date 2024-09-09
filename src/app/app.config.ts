import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideYConfig, YConfig } from 'angular-yandex-maps-v3';

import { routes } from './app.routes';

const config: YConfig = {
  apikey: 'd24204d2-0abe-43cf-87f7-87f3aad8f7b4',
};
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(),provideAnimationsAsync(), provideYConfig(config)]
};
