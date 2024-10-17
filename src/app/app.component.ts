import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { WhatsappIconComponent } from './whatsapp-icon/whatsapp-icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BannerComponent, AboutComponent, ServicesComponent, ContactComponent, FooterComponent, WhatsappIconComponent],
  template: `
    <app-header></app-header>
    <app-banner></app-banner>
    <app-about></app-about>
    <app-services></app-services>
    <app-contact></app-contact>
    <app-footer></app-footer>
    <app-whatsapp-icon></app-whatsapp-icon>
  `,
  styles: [`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }
  `]
})
export class AppComponent {
  title = 'Landing Page';
}