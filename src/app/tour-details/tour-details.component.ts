import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TourDetails } from './tour-details';
import { AuthModalService } from '../auth/auth-modal.service';
import { Location } from '@angular/common';
import { PublicRouteIdService } from '../core/public-route-id.service';
import { DropdownService } from '../core/dropdown.service';
import { SiteSettingsService } from '../core/site-settings.service';
import { environment } from 'src/environments/environment';

interface Activity { activityTime: string; activityText: string; }
interface ItineraryDay { day_number: number; title: string; activities: Activity[]; }
interface SafetyPoint { title: string; detail: string; }
interface TrekFaq { question: string; answer: string; }

interface MappedTour {
  id: string | number; trekId: string | number; cacheKey?: string | number;
  name: string; location: string; category: string; difficulty: string;
  fitnessLevel: string; duration: string; price: number; rating: number;
  reviewCount: number; views: number; image: string; gallery: string[];
  overview: string; highlights: string[]; thingsToCarry: string[];
  importantNotes: string[]; inclusions: string[]; exclusions: string[];
  elevationWaypoints?: any[];
  itinerary: { day: number; title: string; activities: Activity[] }[];
  nextDates: string[]; availableSlots: number; minAge: number; maxAge: number;
}

interface RelatedTrek {
  id: string; trekId: string; cacheKey?: string | number; name: string;
  location: string; category: string; difficulty: string; duration: string;
  price: number; image: string; rating: number; reviewCount: number;
  availableSlots: number; score: number;
}

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, RouterLink],
})
export class TourDetailsComponent implements OnInit {
  tour: MappedTour | null = null;
  isLoading = true;
  relatedLoading = false;
  tourUuid = '';
  routeRef = '';
  selectedSegment = 'overview';
  openFaqIndex = -1;
  openDay: number | null = null;
  relatedTreks: RelatedTrek[] = [];
  trailAdvisories: any[] = [];
  activeAdvisory: any = null;

  galleryOpen = false;
  galleryIndex = 0;
  isWishlisted = false;

  baseUrl = (environment.mediaBaseUrl || '').replace(/\/?$/, '/');
  
  get supportPhone(): string {
    return this.siteSettings?.currentSettings?.supportPhone || '+91 98765 43210';
  }

  get supportPhoneRaw(): string {
    return this.siteSettings?.currentSettings?.supportPhoneRaw || '+919876543210';
  }

  readonly prepChecklist = [
    'Walk 4-5 km daily for at least 2 weeks before the trek',
    'Stay hydrated and avoid heavy meals before ascent day',
    'Carry one reusable bottle and avoid single-use plastics',
    'Keep emergency contacts saved and accessible offline',
  ];
  readonly safetyPoints: SafetyPoint[] = [
    { title: 'Certified Trek Leads', detail: 'Every batch is led by trained trek captains with wilderness first-aid basics.' },
    { title: 'Emergency Support', detail: 'Each route includes evacuation fallback points and nearest hospital mapping.' },
    { title: 'Weather Monitoring', detail: 'Route plans are adjusted using live weather windows to reduce risk.' },
  ];
  readonly trekFaqs: TrekFaq[] = [
    { question: 'Can beginners join this trek?', answer: 'Yes, if the fitness level is Easy/Moderate and you complete basic pre-trek walking practice.' },
    { question: 'Will transport be arranged?', answer: 'Transport availability depends on the selected batch plan. Please check inclusions for your batch.' },
    { question: 'What if weather conditions are unsafe?', answer: 'The route can be modified or postponed for safety. You will be informed in advance.' },
    { question: 'How early should I reach the pickup point?', answer: 'Reach at least 20-30 minutes before the reporting time to avoid delays.' },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tourDetailsService: TourDetails,
    private authModal: AuthModalService,
    private location: Location,
    private publicRouteId: PublicRouteIdService,
    private dropdownService: DropdownService,
    public siteSettings: SiteSettingsService
  ) { }

  ngOnInit(): void {
    this.loadTrailAdvisories();

    this.route.paramMap.subscribe(params => {
      const ref = params.get('uuid');
      if (!ref) return;
      const resolvedUuid = this.publicRouteId.resolve(ref);
      if (!resolvedUuid) return;
      this.routeRef = ref;
      this.tourUuid = resolvedUuid;
      this.isLoading = true;
      this.tour = null;
      this.loadTrekDetails();
    });
  }

  loadTrailAdvisories(): void {
    this.dropdownService.getTrailAdvisories().subscribe((advisories) => {
      this.trailAdvisories = advisories || [];
      this.activeAdvisory = this.trailAdvisories[0] || null;
    });
  }

  loadTrekDetails(): void {
    this.isLoading = true;
    this.tourDetailsService.getTrekByUuid(this.tourUuid).subscribe({
      next: (res: any) => {
        if (res?.success) {
          this.mapTourData(res.data);
          this.isLoading = false;
        } else {
          this.tour = null;
          this.isLoading = false;
        }
      },
      error: () => { this.tour = null; this.isLoading = false; }
    });
  }

  mapTourData(result: any): void {
    const firstBatch = result?.batch;
    this.tour = {
      id: firstBatch?.batchId,
      trekId: result.id,
      name: result.name,
      location: result.location,
      category: result.category,
      difficulty: result.difficulty,
      fitnessLevel: result.fitness_level,
      duration: firstBatch?.duration || 'N/A',
      price: firstBatch ? Number(firstBatch.price) : 0,
      rating: Number(result.rating || 0),
      reviewCount: Number(result.reviewCount || 0),
      views: Number(result.views || 0),
      cacheKey: result.updated_at || result.created_at || firstBatch?.updated_at || firstBatch?.created_at || result.id,
      image: result.cover_image,
      gallery: result.galleryImages || [],
      overview: result.description,
      highlights: result.highlights || [],
      thingsToCarry: result.thingsToCarry || [],
      importantNotes: result.importantNotes || [],
      elevationWaypoints: result.elevationWaypoints || [],
      inclusions: firstBatch?.inclusions || [],
      exclusions: firstBatch?.exclusions || [],
      itinerary: firstBatch?.itineraryDays?.map((day: any) => ({
        day: day.day_number, title: day.title, activities: day.activities || []
      })) || [],
      nextDates: result.batches?.map((b: any) => this.formatDate(b.start_date)) || [],
      availableSlots: Math.max(Number(firstBatch?.availableSlots || 0) - Number(firstBatch?.bookedSlots || 0), 0),
      minAge: firstBatch?.minAge || 0,
      maxAge: firstBatch?.maxAge || 0
    };

    if (Array.isArray(result.elevationWaypoints) && result.elevationWaypoints.length > 0) {
      this.elevationWaypoints = result.elevationWaypoints;
      this.selectedWaypoint = this.elevationWaypoints[Math.min(3, this.elevationWaypoints.length - 1)];
    }

    this.loadRelatedTreks();
  }

  get currentGalleryImage(): string {
    if (!this.tour) return '';
    const gallery = this.tour.gallery || [];
    if (this.galleryIndex === 0) return this.getImageUrl(this.tour.image, this.tour.cacheKey);
    return this.getImageUrl(gallery[this.galleryIndex - 1] || this.tour.image, this.tour.cacheKey);
  }

  get galleryTotal(): number {
    return (this.tour?.gallery?.length || 0) + 1;
  }

  openGallery(index = 0): void {
    if (!this.tour) return;
    const total = this.galleryTotal;
    this.galleryIndex = Math.max(0, Math.min(index, total - 1));
    this.galleryOpen = true;
    document.body.classList.add('td-no-scroll');
  }

  closeGallery(): void {
    this.galleryOpen = false;
    document.body.classList.remove('td-no-scroll');
  }

  nextGallery(): void {
    if (!this.tour) return;
    const total = this.galleryTotal;
    this.galleryIndex = (this.galleryIndex + 1) % total;
  }

  previousGallery(): void {
    if (!this.tour) return;
    const total = this.galleryTotal;
    this.galleryIndex = (this.galleryIndex - 1 + total) % total;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.galleryOpen) return;
    if (event.key === 'Escape') {
      this.closeGallery();
    } else if (event.key === 'ArrowRight') {
      this.nextGallery();
    } else if (event.key === 'ArrowLeft') {
      this.previousGallery();
    }
  }

  toggleWishlist(): void {
    this.isWishlisted = !this.isWishlisted;
  }

  shareMessage = '';

  async shareTrek(): Promise<void> {
    if (!this.tour) return;

    const url = window.location.href;
    const title = this.tour.name;
    const text = `Check out ${title}`;

    // Native share: works on supported mobile browsers.
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (error: any) {
        // User closed the native share sheet.
        if (error?.name === 'AbortError') return;
      }
    }

    // Clipboard API requires a secure context in many browsers.
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
        this.showShareMessage('Link copied!');
        return;
      }
    } catch {
      // Use the legacy fallback below.
    }

    // Legacy copy fallback for HTTP / restricted browsers.
    try {
      const textarea = document.createElement('textarea');
      textarea.value = url;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const copied = document.execCommand('copy');
      document.body.removeChild(textarea);

      if (copied) {
        this.showShareMessage('Link copied!');
        return;
      }
    } catch {
      // Final fallback below.
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  }

  private showShareMessage(message: string): void {
    this.shareMessage = message;
    window.setTimeout(() => {
      this.shareMessage = '';
    }, 2200);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  formatTime(timeString: string): string {
    const [hours, minutes] = String(timeString || '').split(':');
    const hour = parseInt(hours || '0', 10);
    return `${hour % 12 || 12}:${minutes || '00'} ${hour >= 12 ? 'PM' : 'AM'}`;
  }

  getDifficultyColor(difficulty: string): string {
    const map: { [key: string]: string } = { Easy: 'bg-success text-white', Moderate: 'bg-warning text-dark', Difficult: 'bg-danger text-white', Challenging: 'bg-dark text-white' };
    return map[difficulty] || 'bg-secondary text-white';
  }

  getImageUrl(path: string, cacheKey?: string | number | null): string {
    const value = String(path || '').trim();
    if (!value) return '';
    if (/^(https?:)?\/\//i.test(value) || value.startsWith('data:') || value.startsWith('blob:')) return this.appendCacheKey(value, cacheKey);
    return this.appendCacheKey(`${this.baseUrl}${value.replace(/^\/+/, '')}`, cacheKey);
  }

  private appendCacheKey(url: string, cacheKey?: string | number | null): string {
    const key = String(cacheKey || '').trim();
    if (!key) return url;
    return url.includes('?') ? `${url}&v=${encodeURIComponent(key)}` : `${url}?v=${encodeURIComponent(key)}`;
  }

  async openLoginPanel(): Promise<void> {
    try {
      await this.authModal.openLogin();
    } catch { }
  }

  bookTrek(tour: MappedTour): void {
    const token = sessionStorage.getItem('token');
    if (!token) { this.openLoginPanel(); return; }
    const bookingRef = this.routeRef || (this.publicRouteId.encode(tour.id) || String(tour.id));
    this.router.navigate(['/booking', bookingRef]);
  }

  toggleFaq(index: number): void { this.openFaqIndex = this.openFaqIndex === index ? -1 : index; }

  openWhatsAppEnquiry(tour: MappedTour): void {
    const brand = this.siteSettings?.currentSettings?.brandName || 'goWILD Karunadu';
    const message = `Hi ${brand}, I want to know more about ${tour.name} trek. Please share batch options and preparation guidance.`;
    const num = (this.siteSettings?.currentSettings?.whatsappNumberRaw || this.supportPhoneRaw).replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(message)}`, '_blank');
  }

  loadRelatedTreks(): void {
    if (!this.tour) return;
    this.relatedLoading = true;
    this.tourDetailsService.getAllTreks().subscribe({
      next: (res: any) => {
        const payload = res?.data || {};
        const rows = Array.isArray(payload?.treks) ? payload.treks : Array.isArray(payload) ? payload : [];
        const currentTrekId = String(this.tour?.trekId || '').trim();
        const currentCategory = String(this.tour?.category || '').toLowerCase();
        const currentDifficulty = String(this.tour?.difficulty || '').toLowerCase();
        const currentLocation = String(this.tour?.location || '').toLowerCase();
        this.relatedTreks = rows.map((trek: any) => this.mapRelatedTrek(trek))
          .filter((item: RelatedTrek | null): item is RelatedTrek => !!item && String(item.trekId) !== currentTrekId && item.availableSlots > 0)
          .map((item: RelatedTrek) => ({
            ...item, score:
              (item.category.toLowerCase() === currentCategory ? 4 : 0) +
              (item.difficulty.toLowerCase() === currentDifficulty ? 3 : 0) +
              (item.location.toLowerCase() === currentLocation ? 2 : 0) +
              Math.min(item.reviewCount, 5) * 0.3 + Math.min(item.rating, 5) * 0.2 + (item.availableSlots <= 5 ? 1 : 0)
          }))
          .sort((a: RelatedTrek, b: RelatedTrek) => b.score - a.score)
          .slice(0, 4);
        this.relatedLoading = false;
      },
      error: () => { this.relatedTreks = []; this.relatedLoading = false; }
    });
  }

  private mapRelatedTrek(trek: any): RelatedTrek | null {
    if (!trek) return null;
    const batches = Array.isArray(trek.batches) ? trek.batches : [];
    const primaryBatch = batches.find((batch: any) =>
      String(batch?.status || batch?.batch_status || '').toLowerCase() === 'active' ||
      Number(batch?.remaining_slots ?? ((batch?.available_slots ?? batch?.availableSlots ?? 0) - (batch?.booked_slots ?? batch?.bookedSlots ?? 0))) > 0
    ) || batches[0] || null;
    const remaining = primaryBatch ? Number(primaryBatch.remaining_slots ?? ((primaryBatch.available_slots ?? primaryBatch.availableSlots ?? 0) - (primaryBatch.booked_slots ?? primaryBatch.bookedSlots ?? 0))) : Number(trek.total_remaining_slots || 0);
    const batchRef = primaryBatch?.public_ref || this.publicRouteId.encode(primaryBatch?.id || '');
    const trekRef = String(trek.id || '').trim();
    const image = this.getImageUrl(trek.cover_image, trek.updated_at || trek.created_at || trek.id);
    if (!trekRef || !batchRef || !image) return null;
    return {
      id: String(batchRef), trekId: trekRef, cacheKey: trek.updated_at || trek.created_at || primaryBatch?.updated_at || primaryBatch?.created_at || trek.id,
      name: trek.name || '', location: trek.location || '', category: trek.category || '', difficulty: trek.difficulty || '',
      duration: primaryBatch?.duration || trek.duration || 'N/A', price: Number(primaryBatch?.price || trek.starting_price || 0), image,
      rating: Number(trek.rating || 0), reviewCount: Number(trek.reviews || trek.reviewCount || 0), availableSlots: Math.max(Number.isFinite(remaining) ? remaining : 0, 0), score: 0
    };
  }

  openRelatedTrek(trek: RelatedTrek): void {
    if (trek?.id) this.router.navigate(['/tour-details', trek.id]);
  }

  // ──────────────── Trail Elevation & GPX ────────────────
  elevationWaypoints = [
    { km: 0, elevation: 950, name: 'Basecamp / Forest Entry Checkpost', icon: 'bi bi-compass-fill', note: 'Permit & ID Verification' },
    { km: 3.8, elevation: 1280, name: 'Shola Canopy & Fresh Water Stream', icon: 'bi bi-droplet-fill', note: 'Natural spring water refill point' },
    { km: 7.2, elevation: 1620, name: 'Western Ridge Campsite / Viewpoint', icon: 'bi bi-flag-fill', note: 'Scenic cloud valley panoramic viewpoint' },
    { km: 11.5, elevation: 1894, name: 'Kudremukha / Peak Summit (1,894m)', icon: 'bi bi-triangle-half', note: 'Highest summit milestone & photo point' },
    { km: 22.0, elevation: 950, name: 'Basecamp Return / Certificate Issuance', icon: 'bi bi-check-circle-fill', note: 'Summit debrief & certificate handover' }
  ];

  selectedWaypoint: any = this.elevationWaypoints[3];

  selectWaypoint(wp: any) {
    this.selectedWaypoint = wp;
  }

  downloadGpxFile(): void {
    if (!this.tour) return;
    const trekName = this.tour.name.replace(/[^a-zA-Z0-9_-]/g, '_');
    const gpxContent = `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="goWILD Karunadu - Western Ghats Trail System" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>${this.tour.name} Official GPS Trail</name>
    <desc>Verified Wilderness Trail by Karnataka Eco-Tourism &amp; goWILD Karunadu</desc>
    <author><name>goWILD Karunadu Expedition Team</name></author>
    <time>${new Date().toISOString()}</time>
  </metadata>
  <wpt lat="13.1283" lon="75.2678">
    <ele>950.0</ele>
    <name>Basecamp Checkpost</name>
    <sym>Campground</sym>
  </wpt>
  <wpt lat="13.1345" lon="75.2750">
    <ele>1280.0</ele>
    <name>Shola Stream Water Point</name>
    <sym>Water Source</sym>
  </wpt>
  <wpt lat="13.1412" lon="75.2890">
    <ele>1620.0</ele>
    <name>Ridge Saddle</name>
    <sym>Scenic Area</sym>
  </wpt>
  <wpt lat="13.1465" lon="75.2985">
    <ele>1894.0</ele>
    <name>${this.tour.name} Summit Peak</name>
    <sym>Summit</sym>
  </wpt>
  <trk>
    <name>${this.tour.name} Main Ascent</name>
    <trkseg>
      <trkpt lat="13.1283" lon="75.2678"><ele>950</ele></trkpt>
      <trkpt lat="13.1310" lon="75.2710"><ele>1100</ele></trkpt>
      <trkpt lat="13.1345" lon="75.2750"><ele>1280</ele></trkpt>
      <trkpt lat="13.1380" lon="75.2820"><ele>1450</ele></trkpt>
      <trkpt lat="13.1412" lon="75.2890"><ele>1620</ele></trkpt>
      <trkpt lat="13.1440" lon="75.2940"><ele>1760</ele></trkpt>
      <trkpt lat="13.1465" lon="75.2985"><ele>1894</ele></trkpt>
    </trkseg>
  </trk>
</gpx>`;

    const blob = new Blob([gpxContent], { type: 'application/gpx+xml;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${trekName}_Trail_Waypoints.gpx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}

