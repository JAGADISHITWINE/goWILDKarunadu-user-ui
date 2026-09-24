import { CommonModule } from '@angular/common';
import { Component, DestroyRef, HostListener, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Auth } from 'src/app/core/auth';
import { TokenService } from 'src/app/core/token.service';
import { AuthModalService } from 'src/app/auth/auth-modal.service';
import { SITE_CONTACT_ITEMS, SITE_NAV_LINKS, SiteContactItem } from '../site.config';
import { SiteSettingsService } from 'src/app/core/site-settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, CommonModule, FormsModule, RouterLinkActive]
})
export class HeaderComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  // Auth state
  isLoggedIn = false;

  // UI state
  isUserDropdownOpen = false;
  isMobileMenuOpen = false;

  // User data
  userName = '';
  userEmail = '';
  profilePicture: string | null = null;
  isSearchOpen = false;
  searchQuery = '';

  isScrolled = false;
  readonly navLinks = SITE_NAV_LINKS;
  contactItems: SiteContactItem[] = [...SITE_CONTACT_ITEMS];
  brandName = 'goWILD Karunadu';
  brandSubtitle = 'ಕರುನಾಡು';

  get brandPrefix(): string {
    const name = this.brandName || 'goWILD Karunadu';
    if (name.toLowerCase().startsWith('gowild')) return 'go';
    const parts = name.split(' ');
    return parts.length > 1 ? parts[0] : '';
  }

  get brandSuffix(): string {
    const name = this.brandName || 'goWILD Karunadu';
    if (name.toLowerCase().startsWith('gowild')) return name.slice(2);
    const parts = name.split(' ');
    return parts.length > 1 ? parts.slice(1).join(' ') : name;
  }

  constructor(
    private routes: Router,
    private authService: Auth,
    private authModal: AuthModalService,
    private tokenService: TokenService,
    private siteSettings: SiteSettingsService
  ) { }

  ngOnInit() {
    this.siteSettings.settings$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(settings => {
        this.brandName = settings.brandName;
        this.brandSubtitle = settings.brandSubtitle;
        this.contactItems = [
          {
            label: 'Location',
            value: settings.contactLocation,
            icon: 'fas fa-map-marker-alt',
          },
          {
            label: 'Phone',
            value: settings.supportPhone,
            icon: 'fas fa-phone',
            href: settings.telLink,
          },
          {
            label: 'Email',
            value: settings.supportEmail,
            icon: 'far fa-envelope-open',
            href: settings.mailLink,
          },
        ];
      });

    this.authService.authStatus$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;

      if (isLoggedIn) {
        const decoded = this.tokenService.decode();
        this.userName = decoded?.name || decoded?.username || 'User';
        this.userEmail = decoded?.email || '';

      } else {
        this.resetUserData();
      }
    });
  }

  /* ---------------- AUTH ---------------- */

  async openLoginPanel() {
    await this.authModal.openLogin();
  }

  async openRegisterPanel() {
    await this.authModal.openRegister();
  }

  logout() {
    this.tokenService.clear();

    this.resetUserData();

    this.closeUserDropdown();
    this.closeMobileMenu();

    setTimeout(() => {
      this.routes.navigateByUrl('/');
      window.location.reload();
    }, 500)
  }

  /* ---------------- USER UI ---------------- */

  toggleUserDropdown() {
    this.isUserDropdownOpen = !this.isUserDropdownOpen;
  }

  closeUserDropdown() {
    this.isUserDropdownOpen = false;
  }

  getUserInitials(): string {
    if (!this.userName) return 'U';
    return this.userName
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }

  /* ---------------- MOBILE ---------------- */

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  /* ---------------- NAV ---------------- */

  navigateTo(route: string) {
    this.routes.navigateByUrl(route);
    this.closeUserDropdown();
    this.closeMobileMenu();
  }

  /* ---------------- HELPERS ---------------- */

  private resetUserData() {
    this.userName = '';
    this.userEmail = '';
    this.profilePicture = null;
    this.isLoggedIn = false;
  }


  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 60;
  }
}
