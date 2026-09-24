import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule, LoadingController } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { Observable } from "rxjs";
import { Blog } from "./blog";
import { Location } from '@angular/common';
import { Auth } from "../core/auth";
import { AuthModalService } from "../auth/auth-modal.service";
import { MediaService } from "../core/media.service";
import { SiteSettings, SiteSettingsService } from "../core/site-settings.service";

export interface BlogPost {
  id: string | number;
  publicRef?: string;
  cacheKey?: string | number;
  title: string;
  excerpt: string;
  content: string;
  image: any;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  views: number;
  featured?: boolean;
}

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class BlogComponent implements OnInit {
  selectedCategory: string = "all";
  searchQuery: string = "";
  isLoading: boolean = false;
  readonly settings$: Observable<SiteSettings>;

  categories = [
    { value: "all", label: "All Stories", icon: "bi-grid-fill" },
    { value: "trek-guides", label: "Trek Guides", icon: "bi-compass-fill" },
    { value: "tips-tricks", label: "Tips & Wisdom", icon: "bi-lightbulb-fill" },
    { value: "gear-reviews", label: "Gear & Packing", icon: "bi-backpack2-fill" },
    { value: "travel-stories", label: "Trail Journals", icon: "bi-journal-richtext" },
    { value: "safety", label: "Safety & Medical", icon: "bi-shield-check" },
    { value: "destinations", label: "Western Ghats", icon: "bi-geo-alt-fill" },
  ];

  allPosts: BlogPost[] = [];
  popularTags: string[] = [];

  // Newsletter State
  newsletterEmail: string = '';
  newsletterSubscribed: boolean = false;

  constructor(
    private router: Router,
    private blogService: Blog,
    private loadingController: LoadingController,
    private location: Location,
    private auth: Auth,
    private authModal: AuthModalService,
    private media: MediaService,
    public siteSettings: SiteSettingsService
  ) {
    this.settings$ = this.siteSettings.settings$;
  }

  ngOnInit() {
    this.loadPosts();
    this.loadCategories();
  }

  async loadPosts() {
    this.isLoading = true;
    const loading = await this.loadingController.create({
      message: "Loading trail journals...",
      duration: 3000,
    });
    await loading.present();

    this.blogService.getPublishedPosts().subscribe({
      next: (posts: any) => {
        const raw = posts?.data || [];
        this.allPosts = raw.map((post: any) => this.mapPostToBlogPost(post));
        this.extractPopularTags();
        loading.dismiss();
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error loading posts:", error);
        loading.dismiss();
        this.isLoading = false;
      },
    });
  }

  async loadCategories() {
    this.blogService.getCategories().subscribe({
      next: (response: any) => {
        const categoriesArray = Array.isArray(response)
          ? response
          : response?.data || [];

        if (categoriesArray.length > 0) {
          const mappedCategories = categoriesArray.map((cat: any) => ({
            value: cat.slug || cat.name.toLowerCase().replace(/\s+/g, "-"),
            label: cat.name,
            icon: this.getCategoryIconByName(cat.name),
          }));

          this.categories = [
            { value: "all", label: "All Stories", icon: "bi-grid-fill" },
            ...mappedCategories,
          ];
        }
      },
      error: (error) => {
        console.error("Error loading categories:", error);
      },
    });
  }

  mapPostToBlogPost(post: any): BlogPost {
    const cacheKey = post.updated_at || post.created_at || post.id;
    return {
      id: post.id,
      publicRef: post.public_ref || undefined,
      cacheKey,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      image: this.media.resolve(post.featured_image, cacheKey),
      author: {
        name: post.author_name || "Trail Master",
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author_name || "Trail Master")}&background=0f3d23&color=a7f3d0&size=100`,
      },
      category: this.slugify(post.category_name || post.category || 'Trek Guides'),
      tags: post.tags || [],
      date: this.formatDate(post.published_at || post.created_at),
      readTime: this.calculateReadTime(post.content),
      views: post.views || 0,
      featured: post.views > 2000,
    };
  }

  resolveImageUrl(imagePath: string | null | undefined, cacheKey?: string | number | null): string {
    return this.media.resolve(imagePath, cacheKey);
  }

  slugify(text: string): string {
    return (text || '')
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-");
  }

  formatDate(dateString?: string): string {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Recently";
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  calculateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const wordCount = (content || '').split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    return `${minutes} min read`;
  }

  extractPopularTags() {
    const tagFrequency: { [key: string]: number } = {};

    this.allPosts.forEach((post) => {
      (post.tags || []).forEach((tag) => {
        tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
      });
    });

    this.popularTags = Object.entries(tagFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([tag]) => tag);

    if (this.popularTags.length === 0) {
      this.popularTags = ['Western Ghats', 'Monsoon Trek', 'Zero Plastic', 'Kudremukha', 'Beginner Tips'];
    }
  }

  getCategoryIconByName(name: string): string {
    const iconMap: { [key: string]: string } = {
      "Trek Guides": "bi-compass-fill",
      "Tips & Tricks": "bi-lightbulb-fill",
      "Gear Reviews": "bi-backpack2-fill",
      "Travel Stories": "bi-journal-richtext",
      "Safety": "bi-shield-check",
      "Destinations": "bi-geo-alt-fill",
    };
    return iconMap[name] || "bi-bookmark-fill";
  }

  get featuredPosts(): BlogPost[] {
    const featured = this.allPosts.filter((post) => post.featured).slice(0, 3);
    if (featured.length > 0) return featured;
    return this.allPosts.slice(0, 3);
  }

  get heroPost(): BlogPost | null {
    return this.featuredPosts[0] || this.allPosts[0] || null;
  }

  get secondaryFeatured(): BlogPost[] {
    const posts = this.featuredPosts;
    return posts.length > 1 ? posts.slice(1, 4) : [];
  }

  get filteredPosts(): BlogPost[] {
    let posts = this.allPosts;

    if (this.selectedCategory !== "all") {
      posts = posts.filter((post) => post.category === this.selectedCategory);
    }

    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          (post.excerpt && post.excerpt.toLowerCase().includes(query)) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Exclude hero post if in "all" view and not searching
    if (this.selectedCategory === "all" && !this.searchQuery && this.heroPost) {
      posts = posts.filter((post) => post.id !== this.heroPost?.id);
    }

    return posts;
  }

  viewPost(post: BlogPost) {
    if (!post) return;
    this.blogService.incrementViews(post.publicRef || post.id).subscribe({
      next: () => {
        const publicRef = String(post.publicRef || post.id);
        this.router.navigate(["/blog-details", publicRef]);
      },
      error: () => {
        const publicRef = String(post.publicRef || post.id);
        this.router.navigate(["/blog-details", publicRef]);
      }
    });
  }

  filterByTag(tag: string) {
    this.searchQuery = tag;
  }

  clearSearch() {
    this.searchQuery = "";
    this.selectedCategory = "all";
  }

  get categoryTitle(): string {
    if (this.selectedCategory === "all") {
      return "All Expedition Dispatches";
    }
    const category = this.categories.find((c) => c.value === this.selectedCategory);
    return category?.label ?? "Latest Articles";
  }

  subscribeNewsletter() {
    if (!this.newsletterEmail || !this.newsletterEmail.includes('@')) return;
    this.newsletterSubscribed = true;
  }

  exploreTreks() {
    this.router.navigate(["/upcomingtours"]);
  }

  get canWriteBlog(): boolean {
    return this.auth.isLoggedIn();
  }

  async writeBlog(): Promise<void> {
    try {
      if (!this.auth.isLoggedIn()) {
        await this.authModal.openLogin();
        if (!this.auth.isLoggedIn()) {
          return;
        }
      }
      this.router.navigate(['/blog-post']);
    } catch {
      // dismissed
    }
  }

  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }
}
