import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({
  apiKey: "AIzaSyCAhkT98rqWV53x-4DfAANFNrpRRMIhJUQ",
  authDomain: "ring-of-fire-422e8.firebaseapp.com",
  projectId: "ring-of-fire-422e8",
  storageBucket: "ring-of-fire-422e8.firebasestorage.app",
  messagingSenderId: "268929275831",
  appId: "1:268929275831:web:738e727828f7a24c973a32"
    })),
    provideFirestore(() => getFirestore())
  ]
};