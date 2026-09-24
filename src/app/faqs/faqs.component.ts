import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { StaticPagesService, StaticPageRecord } from '../core/static-pages.service';
import { SiteSettings, SiteSettingsService } from '../core/site-settings.service';

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
  expanded: boolean;
  searchText: string;
}

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
})
export class FaqsComponent implements OnInit {
  page: StaticPageRecord | null = null;
  loading = false;
  error = '';
  searchQuery = '';
  selectedCategory = 'all';
  categories: Array<{ label: string; value: string; icon: string }> = [
    { label: 'All Questions', value: 'all', icon: 'bi-grid-fill' }
  ];
  faqs: FaqItem[] = [];
  readonly settings$: Observable<SiteSettings>;

  // Contact Drawer / Modal State (No crude browser alert!)
  showContactModal = false;
  contactForm = {
    name: '',
    phone: '',
    email: '',
    question: '',
  };
  contactSubmitting = false;
  contactSubmitted = false;

  constructor(
    private staticPagesService: StaticPagesService,
    public siteSettings: SiteSettingsService
  ) {
    this.settings$ = this.siteSettings.settings$;
  }

  ngOnInit(): void {
    this.loadPage();
  }

  get title(): string {
    return this.page?.title || "Frequently Asked Questions";
  }

  get content(): string {
    return this.page?.content || '';
  }

  get filteredFaqs(): FaqItem[] {
    const query = this.searchQuery.trim().toLowerCase();

    return this.faqs.filter((faq) => {
      const matchesCategory =
        this.selectedCategory === 'all' || faq.category === this.selectedCategory;
      const matchesSearch = !query || faq.searchText.includes(query);
      return matchesCategory && matchesSearch;
    });
  }

  get hasStructuredFaqs(): boolean {
    return this.faqs.length > 0;
  }

  toggleFaq(faq: FaqItem): void {
    faq.expanded = !faq.expanded;
  }

  setCategory(categoryValue: string): void {
    this.selectedCategory = categoryValue;
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.selectedCategory = 'all';
  }

  expandAll(): void {
    this.filteredFaqs.forEach((f) => (f.expanded = true));
  }

  collapseAll(): void {
    this.filteredFaqs.forEach((f) => (f.expanded = false));
  }

  retryLoad(): void {
    this.loadPage();
  }

  // Elegant in-UI message handling (no browser alert)
  openContactModal(): void {
    this.showContactModal = true;
    this.contactSubmitted = false;
  }

  closeContactModal(): void {
    this.showContactModal = false;
  }

  submitContactInquiry(): void {
    if (!this.contactForm.question.trim()) return;
    this.contactSubmitting = true;
    setTimeout(() => {
      this.contactSubmitting = false;
      this.contactSubmitted = true;
      this.contactForm = { name: '', phone: '', email: '', question: '' };
    }, 600);
  }

  private loadPage(): void {
    this.loading = true;
    this.error = '';

    this.staticPagesService.getPage('faqs').subscribe({
      next: (page) => {
        this.page = page;
        this.loading = false;
        const content = page?.content?.trim() || '';
        this.faqs = this.parseFaqItems(content);
        this.categories = this.buildCategories(this.faqs);
        if (!page) {
          this.error = 'FAQ content is currently unavailable. Please check back shortly.';
        } else if (!content) {
          this.error = 'FAQ guidelines are being updated for upcoming expeditions.';
        }
      },
      error: () => {
        this.loading = false;
        this.error = 'Unable to connect to the knowledge base. Please check your connection.';
      },
    });
  }

  private parseFaqItems(content: string): FaqItem[] {
    if (!content.trim() || typeof DOMParser === 'undefined') {
      return [];
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(`<div>${content}</div>`, 'text/html');
    const root = doc.body.firstElementChild as HTMLElement | null;
    const detailsNodes = Array.from(doc.querySelectorAll('details'));
    const listItems = Array.from(doc.querySelectorAll('ul > li, ol > li'));

    if (detailsNodes.length > 0) {
      return detailsNodes.map((details, index) => {
        const summary = details.querySelector('summary');
        const question = summary?.textContent?.trim() || `Question ${index + 1}`;
        const answer = Array.from(details.children)
          .filter((child) => child.tagName.toLowerCase() !== 'summary')
          .map((child) => child.outerHTML)
          .join('');
        const category = details.getAttribute('data-category')?.trim() || this.autoCategorize(question, answer);

        return {
          question,
          answer,
          category,
          expanded: index === 0,
          searchText: `${question} ${answer} ${category}`.toLowerCase(),
        };
      });
    }

    if (listItems.length > 0) {
      return listItems.map((li, index) => this.parseListFaqItem(li as HTMLElement, index));
    }

    if (!root) {
      return [];
    }

    const items: FaqItem[] = [];
    let currentTitle = '';
    let currentParts: string[] = [];
    let counter = 1;

    const flush = (): void => {
      if (!currentTitle && !currentParts.length) {
        return;
      }

      const question = currentTitle || `Question ${counter}`;
      const answer = currentParts.join('').trim();
      const category = this.autoCategorize(question, answer);
      items.push({
        question,
        answer,
        category,
        expanded: items.length === 0,
        searchText: `${question} ${answer} ${category}`.toLowerCase(),
      });
      counter += 1;
      currentTitle = '';
      currentParts = [];
    };

    Array.from(root.childNodes).forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        const tagName = element.tagName.toLowerCase();

        if (/^h[1-6]$/.test(tagName)) {
          flush();
          currentTitle = element.textContent?.trim() || `Question ${counter}`;
          return;
        }

        if (!currentTitle && !currentParts.length) {
          currentTitle = `Question ${counter}`;
        }
        currentParts.push(element.outerHTML);
        return;
      }

      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent?.trim();
        if (!text) {
          return;
        }
        if (!currentTitle && !currentParts.length) {
          currentTitle = `Question ${counter}`;
        }
        currentParts.push(`<p>${this.escapeHtml(text)}</p>`);
      }
    });

    flush();

    if (!items.length && content.trim()) {
      items.push({
        question: 'Expedition Guidance',
        answer: content,
        category: 'General',
        expanded: true,
        searchText: content.toLowerCase(),
      });
    }

    return items;
  }

  private parseListFaqItem(li: HTMLElement, index: number): FaqItem {
    const titleNode = li.querySelector(
      ':scope > strong, :scope > b, :scope > h3, :scope > h4, :scope > h5, :scope > h6'
    );
    const title = titleNode?.textContent?.trim() || `Question ${index + 1}`;
    const clone = li.cloneNode(true) as HTMLElement;
    const cloneFirst = clone.firstElementChild;

    if (cloneFirst && ['STRONG', 'B', 'H3', 'H4', 'H5', 'H6'].includes(cloneFirst.tagName)) {
      cloneFirst.remove();
      if (clone.firstElementChild?.tagName === 'BR') {
        clone.firstElementChild.remove();
      }
    }

    const answer = clone.innerHTML.trim() || `<p>${this.escapeHtml(li.textContent || '')}</p>`;
    const category = this.autoCategorize(title, answer);

    return {
      question: title,
      answer,
      category,
      expanded: index === 0,
      searchText: `${title} ${answer} ${category}`.toLowerCase(),
    };
  }

  private autoCategorize(question: string, answer: string): string {
    const text = `${question} ${answer}`.toLowerCase();

    if (/cancel|refund|payment|price|package|charge|cost|upi|card|booking|reschedul/.test(text)) {
      return 'Bookings & Payments';
    }
    if (/shoe|wear|cloth|gear|luggage|pack|backpack|raincoat|poncho|fitness|beginner|stamina/.test(text)) {
      return 'Preparation & Gear';
    }
    if (/safety|permit|forest|emergency|doctor|medical|solo|safe|age|kid|weather|rain|first aid/.test(text)) {
      return 'Safety & Permits';
    }
    if (/stay|tent|room|hotel|food|meal|diet|water|drinking|washroom|toilet|network|signal|transport|pickup/.test(text)) {
      return 'Trail Logistics & Stay';
    }
    return 'General Queries';
  }

  private buildCategories(items: FaqItem[]): Array<{ label: string; value: string; icon: string }> {
    const categoryIconMap: Record<string, string> = {
      'Bookings & Payments': 'bi-credit-card-fill',
      'Preparation & Gear': 'bi-backpack2-fill',
      'Safety & Permits': 'bi-shield-check',
      'Trail Logistics & Stay': 'bi-compass-fill',
      'General Queries': 'bi-info-circle-fill',
    };

    const uniqueCategories = Array.from(new Set(items.map((item) => item.category).filter(Boolean)));
    return [
      { label: 'All Questions', value: 'all', icon: 'bi-grid-fill' },
      ...uniqueCategories.map((cat) => ({
        label: cat,
        value: cat,
        icon: categoryIconMap[cat] || 'bi-bookmark-fill',
      })),
    ];
  }

  private escapeHtml(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
}
