import { Component, OnInit, OnDestroy } from '@angular/core';
import { getAnalytics, logEvent, setConsent,setUserId } from 'firebase/analytics';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'sext-app';
  ngOnInit() {
    setConsent(
      {
        ad_storage: "granted",
        analytics_storage: "granted",
        functionality_storage: 'granted',
        personalization_storage: 'granted'
      }
    )
  }


  aceptarTodo() {
    setConsent(
      {
        //ad_storage = ConsentStatus.GRANTED,
        ad_storage: "granted",
        analytics_storage: "granted",
        functionality_storage: 'granted',
        personalization_storage: 'granted'
      }
    )
    const analytics = getAnalytics()
    logEvent(analytics, 'click',{
      'click_event': 'button',
      'click_detail': "Aceptar consentimiento",
      'flow': "consent"
    })

  }

  rechazarTodo() {
    setConsent(
      {
        ad_storage: "denied",
        analytics_storage: "denied",
        functionality_storage: 'denied',
        personalization_storage: 'denied'
      }
    )
    const analytics = getAnalytics()
      logEvent(analytics, 'click',{
        'click_event': 'button',
        'click_detail': "rechazar consentimiento",
        'flow': "consent"
      })
  }
}

