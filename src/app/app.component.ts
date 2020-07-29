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
      window.open(`https://api.whatsapp.com/send?phone=${cellphone}`);
    } else if (application === ApplicationEnum.Instagram) {
      window.open('https://www.instagram.com/santamora.store');
    } else if (application === ApplicationEnum.eCommerce) {
      window.open('https://santamora.vendizap.com/vitrine');
    }
  }

}
