import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, setConsent } from "firebase/analytics";
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
// setConsent({
//   'ad_storage': 'granted',
//   'analytics_storage': 'granted',
//   'functionality_storage': 'granted',
//   'personalization_storage': 'granted',
//   'security_storage': 'granted'
// })
let analytics = getAnalytics(app);
// setConsent({
//   'ad_storage': 'denied',
//   'analytics_storage': 'denied',
//   'functionality_storage': 'denied',
//   'personalization_storage': 'denied',
//   'security_storage': 'denied'
// })