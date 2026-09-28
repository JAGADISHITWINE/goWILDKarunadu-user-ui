import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { SITE_NAV_LINKS, SITE_SOCIAL_LINKS, SITE_TRUST_ITEMS } from '../site.config';
import { SiteSettings, SiteSettingsService } from 'src/app/core/site-settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule]
})
export class FooterComponent implements OnInit {
  readonly navLinks = SITE_NAV_LINKS;
  readonly socialLinks = SITE_SOCIAL_LINKS;
  readonly trustItems = SITE_TRUST_ITEMS;
  readonly currentYear = new Date().getFullYear();
  readonly settings$: Observable<SiteSettings>;

  constructor(public siteSettings: SiteSettingsService) {
    this.settings$ = this.siteSettings.settings$;
  }

  ngOnInit() {}

  getBrandPrefix(name: string): string {
    const val = name || 'goWILD Karunadu';
    if (val.toLowerCase().startsWith('gowild')) return 'go';
    const parts = val.split(' ');
    return parts.length > 1 ? parts[0] : '';
  }

  getBrandSuffix(name: string): string {
    const val = name || 'goWILD Karunadu';
    if (val.toLowerCase().startsWith('gowild')) return val.slice(2);
    const parts = val.split(' ');
    return parts.length > 1 ? parts.slice(1).join(' ') : val;
  }
}
