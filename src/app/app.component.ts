import { Component } from '@angular/core';

import { ApplicationEnum } from './application-enum.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  applicationEnum = ApplicationEnum;

  /**
   * Navega para o tipo de aplicação selecionado
   */
  public goTo(application: ApplicationEnum, cellphone = ''): void {
    if (application === ApplicationEnum.WhatsApp) {
      // window.open(`https://api.whatsapp.com/send?phone=${cellphone}`);
    } else if (application === ApplicationEnum.Instagram) {
      window.open('https://www.instagram.com/alinicentininteriores');
    } else if (application === ApplicationEnum.eCommerce) {
      // window.open('https://santamora.vendizap.com/vitrine');
    } else if (application === ApplicationEnum.Localization) {
      window.open('https://goo.gl/maps/whLC3LdboFaDaH8W6');
    } else if (application === ApplicationEnum.Email) {
      window.open('mailto:centinialine@gmail.com');
    } else if (application === ApplicationEnum.External){
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSeeMFh_ISBs2tsmbaM50n5xio0F6VTFVrgTQLChB1vBfBW-Dw/viewform');
    }
  }

}
