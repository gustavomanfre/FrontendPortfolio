import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/*La aplicación arranca en el main.ts donde se le pasa el primer módulo al sistema para que luego se propague la ejecución cargando los demás módulos.*/
if (environment.production) {
  enableProdMode();
}
//El modulo pasado es AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
