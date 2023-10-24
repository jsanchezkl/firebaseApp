import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw4QtPAOeUfF309HaLRoGqw_7YL0vvZ9o",
  authDomain: "sext-app.firebaseapp.com",
  projectId: "sext-app",
  storageBucket: "sext-app.appspot.com",
  messagingSenderId: "448101294701",
  appId: "1:448101294701:web:8613784cda8ecf2b911564",
  measurementId: "G-F7K1PYQBQZ"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);

// si Se realiza la instancia de analytics antes del consentimiento, no se podrá
// modificar después
// let analytics = getAnalytics(app);
