import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//Bootstraping the application with this root module

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // Initializes our angular project
