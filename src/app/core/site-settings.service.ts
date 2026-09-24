import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface SiteSettings {
  brandName: string;
  brandSubtitle: string;
  brandTagline: string;
  supportPhone: string;
  supportPhoneRaw: string;
  whatsappNumber: string;
  whatsappNumberRaw: string;
  supportEmail: string;
  contactLocation: string;
  legalName: string;
  gstin: string;
  address: string;
  socialFacebook: string;
  socialInstagram: string;
  socialYoutube: string;
  aboutText: string;
  telLink: string;
  mailLink: string;
  whatsappLink: string;
}

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  brandName: 'goWILD Karunadu',
  brandSubtitle: 'ಕರುನಾಡು',
  brandTagline: 'Wilderness Expeditions & Western Ghats Trails',
  supportPhone: '+91 98765 43210',
  supportPhoneRaw: '+919876543210',
  whatsappNumber: '+91 98765 43210',
  whatsappNumberRaw: '919876543210',
  supportEmail: 'info@gowildkarunadu.com',
  contactLocation: 'Bengaluru, Karnataka',
  legalName: 'goWILD Karunadu Eco-Adventures Pvt Ltd',
  gstin: '29AAGCW9123K1Z8',
  address: 'Forest Trailway Plaza, Indiranagar, Bengaluru, Karnataka 560038',
  socialFacebook: 'https://facebook.com/gowildkarunadu',
  socialInstagram: 'https://instagram.com/gowildkarunadu',
  socialYoutube: 'https://youtube.com/@gowildkarunadu',
  aboutText: "Karnataka's leading trekking and adventure travel company. Guiding passionate explorers through breathtaking Western Ghats trails.",
  telLink: 'tel:+919876543210',
  mailLink: 'mailto:info@gowildkarunadu.com',
  whatsappLink: 'https://wa.me/919876543210'
};

@Injectable({ providedIn: 'root' })
export class SiteSettingsService {
  private readonly settingsSubject = new BehaviorSubject<SiteSettings>(DEFAULT_SITE_SETTINGS);
  readonly settings$: Observable<SiteSettings> = this.settingsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadSettings().subscribe();
  }

  get currentSettings(): SiteSettings {
    return this.settingsSubject.getValue();
  }

  loadSettings(): Observable<SiteSettings> {
    const url = `${environment.baseUrl}/meta/site-settings`;
    return this.http.get<{ success?: boolean; data?: Partial<SiteSettings> }>(url).pipe(
      map(res => {
        if (res?.data) {
          const raw = res.data;
          const merged: SiteSettings = {
            ...DEFAULT_SITE_SETTINGS,
            ...raw,
            telLink: raw.telLink || `tel:${(raw.supportPhoneRaw || raw.supportPhone || DEFAULT_SITE_SETTINGS.supportPhone).replace(/[^0-9+]/g, '')}`,
            mailLink: raw.mailLink || `mailto:${raw.supportEmail || DEFAULT_SITE_SETTINGS.supportEmail}`,
            whatsappLink: raw.whatsappLink || `https://wa.me/${(raw.whatsappNumberRaw || raw.whatsappNumber || DEFAULT_SITE_SETTINGS.whatsappNumber).replace(/[^0-9]/g, '')}`
          };
          this.settingsSubject.next(merged);
          return merged;
        }
        return this.currentSettings;
      }),
      catchError(err => {
        console.warn('Using default site settings:', err?.message || err);
        return of(this.currentSettings);
      })
    );
  }
}
