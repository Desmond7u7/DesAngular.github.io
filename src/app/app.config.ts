import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // 3. Inicializa Firebase aquí en lugar del app.module.ts
    importProvidersFrom(
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule
    )
  ]
};