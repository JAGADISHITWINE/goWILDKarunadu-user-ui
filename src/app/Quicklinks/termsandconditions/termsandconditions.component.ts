import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription, filter } from 'rxjs';
import { StaticPagesService, StaticPageRecord } from '../../core/static-pages.service';
import { SiteSettingsService, SiteSettings } from '../../core/site-settings.service';

export interface PolicySection {
  id: string;
  icon: string;
  title: string;
  body: string;
  badge?: string;
  badgeClass?: string;
  isOpen: boolean;
}

export interface RefundTier {
  timeframe: string;
  refundPercent: number;
  chargePercent: number;
  badgeText: string;
  badgeClass: string;
  icon: string;
  headline: string;
  description: string;
  note: string;
}

export interface PolicyFaq {
  question: string;
  answer: string;
  icon: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-termsandconditions',
  templateUrl: './termsandconditions.component.html',
  styleUrls: ['./termsandconditions.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class TermsandconditionsComponent implements OnInit, OnDestroy {
  activeTab: 'cancellation' | 'terms' = 'cancellation';
  loading = false;
  error = '';
  lastUpdatedDate = 'September 2026';

  siteSettings: SiteSettings | null = null;
  private routerSub?: Subscription;
  private settingsSub?: Subscription;

  // Active page record from backend CMS
  pageRecord: StaticPageRecord | null = null;
  parsedSections: PolicySection[] = [];

  readonly pdfUrl = 'assets/legal/terms-and-conditions.pdf';

  // Real-world refund timeline tiers matching platform logic
  readonly refundTiers: RefundTier[] = [
    {
      timeframe: '30+ Days Before Departure',
      refundPercent: 100,
      chargePercent: 0,
      badgeText: 'Full Refund',
      badgeClass: 'badge-emerald',
      icon: 'bi bi-shield-check',
      headline: '100% Refundable',
      description: 'Cancel with maximum peace of mind. Only nominal payment gateway merchant fee (up to 2%) may apply if processed by external banks.',
      note: 'Processed in 5–7 banking days directly to source payment account.'
    },
    {
      timeframe: '15 to 29 Days Before Departure',
      refundPercent: 75,
      chargePercent: 25,
      badgeText: '75% Refund',
      badgeClass: 'badge-teal',
      icon: 'bi bi-clock-history',
      headline: '75% Refundable',
      description: '25% retained to absorb early homestay holds, guide dispatch coordination, and logistics booking buffers.',
      note: 'Eligible for instant wallet refund or bank credit.'
    },
    {
      timeframe: '7 to 14 Days Before Departure',
      refundPercent: 50,
      chargePercent: 50,
      badgeText: '50% Refund',
      badgeClass: 'badge-amber',
      icon: 'bi bi-pie-chart-fill',
      headline: '50% Refundable',
      description: '50% retained as dedicated transport seats, trail meals, and base camp reservations are firmly locked in for your batch.',
      note: 'You may also opt to transfer your ticket to a friend.'
    },
    {
      timeframe: 'Less Than 7 Days / No-Show',
      refundPercent: 0,
      chargePercent: 100,
      badgeText: 'Non-Refundable',
      badgeClass: 'badge-rose',
      icon: 'bi bi-x-circle-fill',
      headline: 'Non-Refundable',
      description: 'Karnataka Forest Department trekking permits are strictly non-refundable and non-transferrable once stamped with official trekker IDs.',
      note: 'Late arrivals and departures not met at pickup points are treated as no-shows.'
    }
  ];

  // Specific FAQs for cancellation & refund transparency
  faqs: PolicyFaq[] = [
    {
      question: 'How do I submit a cancellation request?',
      answer: 'The fastest way is self-service: log into your account, visit "My Bookings", locate your upcoming trip, and click "Cancel Booking". Our system automatically calculates your refund tier based on current time. Alternatively, reach out to our concierge via WhatsApp or email with your Booking ID.',
      icon: 'bi bi-laptop',
      isOpen: true
    },
    {
      question: 'Can I transfer my slot to a friend instead of cancelling?',
      answer: 'Yes! We allow free slot replacement up to 48 hours before departure. Simply contact our support team with your friend\'s full name, government ID proof, and emergency contact details so we can update the forest permit manifest.',
      icon: 'bi bi-people-fill',
      isOpen: false
    },
    {
      question: 'What happens if the Forest Department cancels the trek due to weather or wildlife alerts?',
      answer: 'Trekkers safety comes first. If an expedition is cancelled by goWILD Karunadu or local authorities due to torrential rains, red weather alerts, wildlife movements, or road blockages, you receive a 100% full refund OR a 100% credit voucher valid for any trek within 12 months.',
      icon: 'bi bi-cloud-lightning-rain',
      isOpen: false
    },
    {
      question: 'How long does it take for refund funds to appear in my account?',
      answer: 'Approved refunds are submitted to the banking gateway within 24 to 48 hours. Depending on your bank or credit card provider (Visa, Mastercard, RuPay, UPI), the balance typically reflects in your statement within 5 to 7 business days.',
      icon: 'bi bi-credit-card-2-front',
      isOpen: false
    },
    {
      question: 'Are accommodation and transport upgrade add-ons refundable?',
      answer: 'Add-ons follow the exact same timeline tier as your primary ticket. If cancelled 15+ days in advance, 75–100% is refunded. Under 7 days, specialized vehicle charters and single room homestay supplements cannot be reimbursed.',
      icon: 'bi bi-bus-front',
      isOpen: false
    }
  ];

  constructor(
    private staticPagesService: StaticPagesService,
    private siteSettingsService: SiteSettingsService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.settingsSub = this.siteSettingsService.settings$.subscribe((settings) => {
      this.siteSettings = settings;
    });

    this.detectTabFromUrl();

    this.routerSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.detectTabFromUrl();
      });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    this.settingsSub?.unsubscribe();
  }

  detectTabFromUrl(): void {
    const path = (this.router.url || window.location.pathname || '').toLowerCase();
    if (path.includes('terms') && !path.includes('cancellation')) {
      this.setTab('terms', false);
    } else {
      this.setTab('cancellation', false);
    }
  }

  setTab(tab: 'cancellation' | 'terms', updateUrl = true): void {
    this.activeTab = tab;
    if (updateUrl) {
      const targetUrl = tab === 'terms' ? '/terms-and-conditions' : '/cancellation-policy';
      window.history.pushState({}, '', targetUrl);
    }
    this.loadPolicyContent();
  }

  loadPolicyContent(): void {
    const pageKey = this.activeTab === 'cancellation' ? 'cancelation' : 'terms-and-condition';
    this.loading = true;
    this.error = '';

    this.staticPagesService.getPage(pageKey).subscribe({
      next: (page) => {
        this.pageRecord = page;
        if (page?.updatedAt) {
          const d = new Date(page.updatedAt);
          if (!isNaN(d.getTime())) {
            this.lastUpdatedDate = d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
          }
        }
        const rawContent = page?.content || '';
        this.parsedSections = this.parseSectionsFromContent(rawContent, this.activeTab);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        // Fallback to structured offline sections
        this.parsedSections = this.getFallbackSections(this.activeTab);
      }
    });
  }

  toggleSection(section: PolicySection): void {
    section.isOpen = !section.isOpen;
  }

  get pdfFileName(): string {
    return this.activeTab === 'cancellation'
      ? 'goWILD-Karunadu-Cancellation-and-Refund-Policy.pdf'
      : 'goWILD-Karunadu-Terms-and-Conditions.pdf';
  }

  downloadPdf(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    const link = document.createElement('a');
    link.href = this.pdfUrl;
    link.download = this.pdfFileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  openPdf(): void {
    if (typeof window !== 'undefined') {
      window.open(this.pdfUrl, '_blank');
    }
  }

  toggleFaq(faq: PolicyFaq): void {
    faq.isOpen = !faq.isOpen;
  }

  get brandTitle(): string {
    return this.siteSettings?.brandName || 'goWILD Karunadu';
  }

  get supportPhone(): string {
    return this.siteSettings?.supportPhone || '+91 98765 43210';
  }

  get supportEmail(): string {
    return this.siteSettings?.supportEmail || 'info@gowildkarunadu.com';
  }

  get whatsappLink(): string {
    return this.siteSettings?.whatsappLink || 'https://wa.me/919876543210';
  }

  get telLink(): string {
    return this.siteSettings?.telLink || 'tel:+919876543210';
  }

  get legalName(): string {
    return this.siteSettings?.legalName || 'goWILD Karunadu Eco-Adventures Pvt Ltd';
  }

  get gstin(): string {
    return this.siteSettings?.gstin || '29AAGCW9123K1Z8';
  }

  private parseSectionsFromContent(html: string, tab: 'cancellation' | 'terms'): PolicySection[] {
    if (!html || typeof DOMParser === 'undefined') {
      return this.getFallbackSections(tab);
    }

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(`<div>${html}</div>`, 'text/html');
      const listItems = Array.from(doc.querySelectorAll('ul > li, ol > li'));

      if (listItems.length > 0) {
        return listItems.map((li, index) => {
          const strongNode = li.querySelector('strong, b, h3, h4');
          const title = strongNode?.textContent?.trim() || `Clause ${index + 1}`;

          const clone = li.cloneNode(true) as HTMLElement;
          const cloneStrong = clone.querySelector('strong, b, h3, h4');
          if (cloneStrong) cloneStrong.remove();
          const cloneBr = clone.querySelector('br');
          if (cloneBr) cloneBr.remove();

          const body = clone.innerHTML.trim() || li.textContent?.trim() || '';

          return {
            id: `section-${index + 1}`,
            icon: this.getSectionIcon(title, tab),
            title,
            body,
            badge: `Section ${index + 1}`,
            badgeClass: 'badge-outline',
            isOpen: index === 0
          };
        });
      }
    } catch {
      // ignore parser error
    }

    return this.getFallbackSections(tab);
  }

  private getSectionIcon(title: string, tab: 'cancellation' | 'terms'): string {
    const t = title.toLowerCase();
    if (t.includes('customer') || t.includes('participant')) return 'bi bi-person-check';
    if (t.includes('refund') || t.includes('payment') || t.includes('fee')) return 'bi bi-currency-rupee';
    if (t.includes('late') || t.includes('no-show') || t.includes('time')) return 'bi bi-clock-history';
    if (t.includes('organizer') || t.includes('operator')) return 'bi bi-building-check';
    if (t.includes('weather') || t.includes('safety') || t.includes('health') || t.includes('fitness')) return 'bi bi-shield-plus';
    if (t.includes('itinerary') || t.includes('route')) return 'bi bi-compass';
    if (t.includes('liability') || t.includes('belonging')) return 'bi bi-safe2';
    if (t.includes('photo') || t.includes('media')) return 'bi bi-camera';
    if (t.includes('acceptance') || t.includes('update')) return 'bi bi-check2-circle';
    return tab === 'cancellation' ? 'bi bi-file-earmark-ruled' : 'bi bi-file-text';
  }

  private getFallbackSections(tab: 'cancellation' | 'terms'): PolicySection[] {
    if (tab === 'cancellation') {
      return [
        {
          id: 'c-1',
          icon: 'bi bi-person-check',
          title: 'Cancellation by Customer',
          body: 'Cancellations must be requested through your user dashboard under "My Bookings" or submitted in writing to our official support team. The exact server timestamp of your request will be used to calculate your eligible refund tier.',
          badge: 'Section 1',
          badgeClass: 'badge-outline',
          isOpen: true
        },
        {
          id: 'c-2',
          icon: 'bi bi-currency-rupee',
          title: 'Refund Eligibility & Deductions',
          body: 'Refund amounts are calculated against the base booking value minus non-recoverable commitments already incurred (such as personalized Karnataka Forest Department permits, reserved 4x4 off-road shuttles, and homestay block bookings).',
          badge: 'Section 2',
          badgeClass: 'badge-outline',
          isOpen: true
        },
        {
          id: 'c-3',
          icon: 'bi bi-clock-history',
          title: 'Late Notice & No-Show Policy',
          body: 'Cancellations within 7 days of departure, late arrivals at designated pickup points, or failure to report for scheduled boarding are treated as no-shows. In such events, no refund or reschedule voucher can be provided as logistics are fully pre-paid.',
          badge: 'Section 3',
          badgeClass: 'badge-outline',
          isOpen: false
        },
        {
          id: 'c-4',
          icon: 'bi bi-cloud-lightning-rain',
          title: 'Organizer Cancellation & Force Majeure',
          body: 'If goWILD Karunadu cancels an expedition due to extreme weather, safety alerts, landslides, Forest Department trail closures, or insufficient participants, all registered guests are entitled to a 100% full refund or a 1-year valid reschedule voucher.',
          badge: 'Section 4',
          badgeClass: 'badge-outline',
          isOpen: false
        },
        {
          id: 'c-5',
          icon: 'bi bi-credit-card-2-front',
          title: 'Refund Processing & Timelines',
          body: 'Approved refunds are automatically initiated within 24 to 48 hours to the original payment source (credit/debit card, UPI, or net banking). Banking channels generally credit the funds within 5 to 7 business days.',
          badge: 'Section 5',
          badgeClass: 'badge-outline',
          isOpen: false
        }
      ];
    } else {
      return [
        {
          id: 't-1',
          icon: 'bi bi-check2-circle',
          title: 'Acceptance of Terms',
          body: 'By browsing our platform, reserving a trek, or participating in an expedition, you agree to comply with all rules and terms published here.',
          badge: 'Clause 1',
          badgeClass: 'badge-outline',
          isOpen: true
        },
        {
          id: 't-2',
          icon: 'bi bi-person-badge',
          title: 'Participant Responsibilities & Conduct',
          body: 'All trekkers must adhere to instructions given by certified trek leaders, follow Leave No Trace principles, respect local village customs, and abstain from alcohol or illegal substances during wilderness activities.',
          badge: 'Clause 2',
          badgeClass: 'badge-outline',
          isOpen: true
        },
        {
          id: 't-3',
          icon: 'bi bi-heart-pulse',
          title: 'Fitness & Health Declaration',
          body: 'Participants are responsible for assessing their physical fitness before booking. Any chronic conditions (asthma, cardiac concerns, joint injuries) must be disclosed prior to booking.',
          badge: 'Clause 3',
          badgeClass: 'badge-outline',
          isOpen: false
        },
        {
          id: 't-4',
          icon: 'bi bi-compass',
          title: 'Itinerary Changes & Weather Adjustments',
          body: 'We reserve the right to modify routes, campsites, or timings if environmental safety, heavy rains, or regulatory guidelines necessitate changes.',
          badge: 'Clause 4',
          badgeClass: 'badge-outline',
          isOpen: false
        },
        {
          id: 't-5',
          icon: 'bi bi-safe2',
          title: 'Liability & Personal Belongings',
          body: 'Trekkers are solely responsible for their personal electronic devices, cameras, and luggage throughout the expedition. Waterproof bags and durable gear are strongly recommended.',
          badge: 'Clause 5',
          badgeClass: 'badge-outline',
          isOpen: false
        }
      ];
    }
  }
}
