import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule, ToastController, LoadingController } from "@ionic/angular";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { BlogPost } from "./blog-post";
import { AuthModalService } from "../auth/auth-modal.service";
import { TokenService } from "src/app/core/token.service";
import { environment } from "src/environments/environment";
import { MediaService } from "../core/media.service";

interface StoryTemplate {
  name: string;
  icon: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  content: string;
}

@Component({
  selector: "app-blog-post",
  templateUrl: "./blog-post.component.html",
  styleUrls: ["./blog-post.component.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
})
export class BlogPostComponent implements OnInit {
  @ViewChild("fileInput") fileInput!: ElementRef<HTMLInputElement>;
  @ViewChild("storyEditor") storyEditor!: ElementRef<HTMLTextAreaElement>;

  postId: string | null = null;
  isEditMode: boolean = false;
  postForm!: FormGroup;
  userId: string | null = null;

  activeTab: "editor" | "preview" = "editor";
  isSubmitting = false;

  // Image handling
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  existingImageUrl: string | null = null;

  categories: string[] = [
    "Trek Guides",
    "Expedition Stories",
    "Gear & Reviews",
    "Wildlife & Nature",
    "Tips & Safety",
    "Monsoon Trails",
  ];

  suggestedTags: string[] = [
    "Western Ghats",
    "Kudremukha",
    "Monsoon Trek",
    "Beginner Guide",
    "Trail Tips",
    "Camping",
    "Photography",
    "Safety",
  ];

  tagInputText: string = "";

  templates: StoryTemplate[] = [
    {
      name: "Trek Experience",
      icon: "bi bi-compass-fill",
      title: "My Sunrise Trek to Kudremukha Peak: A Complete Trail Experience",
      excerpt:
        "Hiking through misty shola forests, emerald meadows, and reaching the majestic horse-face summit in Chikkamagaluru.",
      category: "Expedition Stories",
      tags: ["Western Ghats", "Kudremukha", "Trail Tips"],
      content: `## The Trailhead & Early Morning Ascent
Our journey began at Mullodi basecamp at 5:30 AM. The crisp mountain air and the distant sound of cascading waterfalls set the tone for what was to be an unforgettable adventure.

## Traversing Shola Grasslands & Forest Checkpoints
As the sun climbed over the horizon, the golden light illuminated rolling green hills. Walking along the narrow ridge with valleys plunging on either side was pure magic.

> "Standing amidst the sweeping grasslands of the Western Ghats, all the noise of city life dissolved into mountain breeze."

## The Final Push to the Summit
The final 2 kilometers tested our endurance with steep rocky inclines, but reaching the 1,894m summit milestone made every step worth it.

[TIP] **Trekker Tip**: Start your ascent before 6:30 AM to beat the mid-day sun and catch the sunrise mist.

[WARNING] **Safety Warning**: Entry requires Karnataka Forest Dept permit clearance. Always stick to the marked trail to preserve fragile wildlife habitats.`,
    },
    {
      name: "Gear & Packing",
      icon: "bi bi-backpack4-fill",
      title: "Essential Monsoon Trekking Gear: The Packing Checklist That Saved My Hike",
      excerpt:
        "From waterproof dry-bags to high-ankle grip boots, here is the battle-tested packing list for trekking in the Western Ghats.",
      category: "Gear & Reviews",
      tags: ["Gear & Reviews", "Monsoon Trek", "Beginner Guide"],
      content: `## The Golden Rules of Monsoon Packing
Western Ghats rain is legendary. A single downpour can soak your entire backpack in minutes if you aren't prepared with waterproof dry-bags.

## Top Mandatory Items for Every Trekker
- **Expedition Rain Poncho**: Covers both you and your backpack down to your knees.
- **High-Ankle Trekking Boots**: Deep lug grip for wet mud and slick rock slabs.
- **Leech Socks & Salt Spray**: Crucial for tropical rainforest sections.
- **Quick-Dry Synthetics**: Avoid cotton at all costs; wet cotton causes chafing and hypothermia.
- **Headlamp with Fresh Batteries**: Early starts and misty evenings demand reliable hands-free lighting.

> "There is no bad weather in the mountains, only bad gear choices."

[TIP] **Trekker Tip**: Pack all spare clothes inside zip-lock bags inside your main dry-bag for foolproof double waterproofing.`,
    },
    {
      name: "Photo Trail Log",
      icon: "bi bi-camera-fill",
      title: "Capturing the Clouds: A Photographer's Guide to Western Ghats Trails",
      excerpt:
        "How to shoot dramatic cloud inversions, vibrant flora, and golden hour ridges in the lush mountains of Karnataka.",
      category: "Trek Guides",
      tags: ["Photography", "Western Ghats", "Trail Tips"],
      content: `## Chasing the Golden Hour at Ridge Saddle
The key to mountain photography in Karnataka is reaching vantage saddles right as dawn breaks through the mist.

## Camera Protection in High Humidity
Keep silicone desiccant pouches in your lens bag, and never change lenses in open drizzle. Use a lightweight microfibre towel around your strap.

> "The best photos on a trek happen in the fleeting moments between passing rain clouds and sunbursts."

[TIP] **Trekker Tip**: Polarising filters help cut through glare on wet leaves and intensify the emerald greens of the valley.`,
    },
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private postEditorService: BlogPost,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private authModal: AuthModalService,
    private tokenService: TokenService,
    private media: MediaService,
  ) {}

  ngOnInit() {
    this.initForm();
    this.loadCategories();
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.postId = String(params["id"]);
        this.isEditMode = true;
        this.loadPost(this.postId);
      }
    });
  }

  initForm() {
    this.postForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(5)]],
      excerpt: ["", [Validators.required, Validators.minLength(10)]],
      content: ["", [Validators.required, Validators.minLength(20)]],
      category: ["Trek Guides", Validators.required],
      tags: this.fb.array(["Western Ghats", "Trek Guides"].map((t) => this.fb.control(t))),
      status: ["published"],
    });
  }

  get tags(): FormArray {
    return this.postForm.get("tags") as FormArray;
  }

  get currentTags(): string[] {
    return (this.tags.value || []).filter((t: any) => typeof t === "string" && t.trim() !== "");
  }

  get wordCount(): number {
    const text = (this.postForm.get("content")?.value || "").trim();
    if (!text) return 0;
    return text.split(/\s+/).filter(Boolean).length;
  }

  get readingTime(): number {
    return Math.max(1, Math.ceil(this.wordCount / 180));
  }

  get previewHtml(): string {
    const raw = this.postForm.get("content")?.value || "";
    return this.formatStoryToHtml(raw);
  }

  get isFormReady(): boolean {
    const hasTitle = (this.postForm.get("title")?.value || "").trim().length >= 5;
    const hasExcerpt = (this.postForm.get("excerpt")?.value || "").trim().length >= 10;
    const hasContent = (this.postForm.get("content")?.value || "").trim().length >= 20;
    const hasCategory = !!this.postForm.get("category")?.value;
    const hasImage = !!this.selectedFile || !!this.existingImageUrl;
    return hasTitle && hasExcerpt && hasContent && hasCategory && hasImage;
  }

  private loadCategories() {
    const fallback = [
      "Trek Guides",
      "Expedition Stories",
      "Gear & Reviews",
      "Wildlife & Nature",
      "Tips & Safety",
      "Monsoon Trails",
    ];

    this.postEditorService.getCategories().subscribe({
      next: (response: any) => {
        const categoriesArray = Array.isArray(response)
          ? response
          : response?.data || [];

        const mapped = categoriesArray
          .map((cat: any) => cat?.name || cat?.label || cat?.value || cat)
          .filter((name: any) => typeof name === "string" && !!name.trim())
          .map((name: string) => name.trim());

        if (mapped.length) {
          this.categories = Array.from(new Set([...mapped, ...fallback]));
        }
      },
      error: () => {
        this.categories = fallback;
      },
    });
  }

  // ==================== TAG MANAGEMENT ====================

  addTag(tagText: string) {
    const clean = (tagText || "").trim().replace(/^#+/, "");
    if (!clean) return;
    if (this.currentTags.some((t) => t.toLowerCase() === clean.toLowerCase())) {
      this.tagInputText = "";
      return;
    }
    this.tags.push(this.fb.control(clean));
    this.tagInputText = "";
  }

  onTagKeydown(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      this.addTag(this.tagInputText);
    }
  }

  removeTag(index: number) {
    if (index >= 0 && index < this.tags.length) {
      this.tags.removeAt(index);
    }
  }

  toggleSuggestedTag(tag: string) {
    const existingIndex = this.currentTags.findIndex(
      (t) => t.toLowerCase() === tag.toLowerCase()
    );
    if (existingIndex >= 0) {
      this.removeTag(existingIndex);
    } else {
      this.addTag(tag);
    }
  }

  isTagSelected(tag: string): boolean {
    return this.currentTags.some((t) => t.toLowerCase() === tag.toLowerCase());
  }

  // ==================== TEMPLATES ====================

  applyTemplate(tmpl: StoryTemplate) {
    this.postForm.patchValue({
      title: tmpl.title,
      excerpt: tmpl.excerpt,
      category: tmpl.category,
      content: tmpl.content,
    });

    // Reset and apply tags
    while (this.tags.length) {
      this.tags.removeAt(0);
    }
    tmpl.tags.forEach((t) => this.tags.push(this.fb.control(t)));

    this.showToast(`Applied "${tmpl.name}" starter template!`, "success");
  }

  clearStory() {
    this.postForm.patchValue({
      title: "",
      excerpt: "",
      content: "",
    });
    this.showToast("Story cleared", "warning");
  }

  // ==================== TOOLBAR INSERTIONS ====================

  insertFormatting(type: "h2" | "h3" | "bold" | "italic" | "bullet" | "number" | "quote" | "tip" | "warning") {
    const textarea = this.storyEditor?.nativeElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selected = text.substring(start, end);

    let snippet = "";
    let cursorOffset = 0;

    switch (type) {
      case "h2":
        snippet = `\n\n## ${selected || "Section Heading"}\n`;
        cursorOffset = snippet.length;
        break;
      case "h3":
        snippet = `\n\n### ${selected || "Sub-Heading"}\n`;
        cursorOffset = snippet.length;
        break;
      case "bold":
        snippet = `**${selected || "bold text"}**`;
        cursorOffset = snippet.length;
        break;
      case "italic":
        snippet = `*${selected || "italic text"}*`;
        cursorOffset = snippet.length;
        break;
      case "bullet":
        snippet = `\n- ${selected || "List item 1"}\n- List item 2\n- List item 3\n`;
        cursorOffset = snippet.length;
        break;
      case "number":
        snippet = `\n1. ${selected || "Step 1"}\n2. Step 2\n3. Step 3\n`;
        cursorOffset = snippet.length;
        break;
      case "quote":
        snippet = `\n> "${selected || "Standing on the ridge, the entire valley was blanketed in clouds."}"\n`;
        cursorOffset = snippet.length;
        break;
      case "tip":
        snippet = `\n[TIP] **Trekker Tip**: ${selected || "Start before dawn to catch the sunrise mist."}\n`;
        cursorOffset = snippet.length;
        break;
      case "warning":
        snippet = `\n[WARNING] **Safety Warning**: ${selected || "Monsoon trails are slippery; carry poles and leech protection."}\n`;
        cursorOffset = snippet.length;
        break;
    }

    const newText = text.substring(0, start) + snippet + text.substring(end);
    this.postForm.patchValue({ content: newText });

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + cursorOffset, start + cursorOffset);
    }, 50);
  }

  // ==================== IMAGE HANDLING ====================

  onImageSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (!this.isAcceptedImage(file)) {
        this.showToast("Please select an image file (JPG, PNG, WebP)", "warning");
        return;
      }

      const maxSize = 6 * 1024 * 1024; // 6MB
      if (file.size > maxSize) {
        this.showToast("Image size must be under 6MB", "warning");
        return;
      }

      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);

      this.showToast("Cover photo uploaded successfully", "success");
    }
  }

  private isAcceptedImage(file: File): boolean {
    const mime = String(file?.type || "").toLowerCase();
    if (mime.startsWith("image/")) return true;
    const name = String(file?.name || "").toLowerCase();
    const ext = name.includes(".") ? name.split(".").pop() || "" : "";
    const imageExt = new Set(["jpg", "jpeg", "png", "gif", "webp", "avif", "bmp", "heic"]);
    return imageExt.has(ext);
  }

  removeImage() {
    this.selectedFile = null;
    this.imagePreview = null;
    this.existingImageUrl = null;
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = "";
    }
    this.showToast("Cover photo removed", "warning");
  }

  // ==================== LOAD POST ====================

  loadPost(id: string | number) {
    this.postEditorService.getPost(id).subscribe({
      next: (post: any) => {
        // Clear tags
        while (this.tags.length) {
          this.tags.removeAt(0);
        }
        if (post.tags && Array.isArray(post.tags)) {
          post.tags.forEach((tag: string) => this.tags.push(this.fb.control(tag)));
        }

        // Set image
        if (post.featured_image) {
          this.existingImageUrl = post.featured_image;
          this.imagePreview = this.media.resolve(post.featured_image);
        }

        // Parse content
        let contentText = post.content || "";
        if (post.sections && Array.isArray(post.sections) && post.sections.length > 0) {
          contentText = this.sectionsToMarkdown(post.sections);
        } else if (contentText.includes("<") && contentText.includes(">")) {
          contentText = this.htmlToMarkdown(contentText);
        }

        this.postForm.patchValue({
          title: post.title,
          excerpt: post.excerpt,
          content: contentText,
          category: post.category || "Trek Guides",
          status: post.status || "published",
        });
      },
      error: (err) => {
        console.error("Error loading post:", err);
        this.showToast("Failed to load post", "danger");
      },
    });
  }

  // ==================== PUBLISH / SAVE ====================

  async publish() {
    if (!this.isFormReady) {
      this.showToast("Please complete the title, excerpt, story, and cover photo", "warning");
      return;
    }

    if (!this.tokenService.isValid()) {
      await this.openLoginPanel();
      if (!this.tokenService.isValid()) return;
    }

    const loading = await this.loadingController.create({
      message: this.isEditMode ? "Updating story..." : "Publishing expedition story...",
    });
    await loading.present();
    this.isSubmitting = true;

    try {
      const decoded = this.tokenService.decode();
      this.userId = decoded ? String(decoded.id ?? decoded.userId ?? "").trim() || null : null;

      const formValue = this.postForm.value;
      const rawContent = formValue.content || "";
      const htmlContent = this.formatStoryToHtml(rawContent);
      const structuredSections = this.extractSectionsFromContent(rawContent, htmlContent);

      const formData = new FormData();
      formData.append("title", formValue.title.trim());
      formData.append("excerpt", formValue.excerpt.trim());
      formData.append("content", htmlContent);
      formData.append("sections", JSON.stringify(structuredSections));
      formData.append("category", formValue.category);
      formData.append("status", formValue.status || "published");
      formData.append("publishDate", new Date().toISOString());
      formData.append("author", "You");
      formData.append("tags", JSON.stringify(this.currentTags));

      if (this.userId) {
        formData.append("userId", this.userId);
      }

      if (this.selectedFile) {
        formData.append("image", this.selectedFile, this.selectedFile.name);
      } else if (this.existingImageUrl && this.imagePreview) {
        formData.append("existingImageUrl", this.existingImageUrl);
      }

      this.postEditorService.savePost(this.postId, formData).subscribe({
        next: () => {
          loading.dismiss();
          this.isSubmitting = false;
          this.showToast(
            this.isEditMode ? "Story updated successfully!" : "Story published successfully!",
            "success"
          );
          this.router.navigate(["/blog"]);
        },
        error: (err: any) => {
          loading.dismiss();
          this.isSubmitting = false;
          console.error("Error saving post:", err);
          this.showToast("Failed to save post. Please try again.", "danger");
        },
      });
    } catch (e) {
      loading.dismiss();
      this.isSubmitting = false;
      this.showToast("Error processing story submission", "danger");
    }
  }

  async openLoginPanel() {
    try {
      await this.authModal.openLogin();
    } catch {}
  }

  // ==================== FORMATTING & PARSING ====================

  formatStoryToHtml(text: string): string {
    if (!text) return "";

    let processed = this.escapeHtml(text);

    // Markdown Headings
    processed = processed.replace(/^### (.*$)/gim, '<h3 class="story-h3">$1</h3>');
    processed = processed.replace(/^## (.*$)/gim, '<h2 class="story-h2">$1</h2>');
    processed = processed.replace(/^# (.*$)/gim, '<h2 class="story-h2">$1</h2>');

    // Bold & Italic
    processed = processed.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>");
    processed = processed.replace(/\*(.*?)\*/gim, "<em>$1</em>");

    // Quotes
    processed = processed.replace(/^> (.*$)/gim, '<blockquote class="story-quote"><p>$1</p></blockquote>');

    // Tips & Warnings
    processed = processed.replace(
      /(?:💡|\[TIP\]) \*\*Trekker Tip\*\*:? (.*$)/gim,
      '<div class="story-callout tip"><i class="bi bi-lightbulb-fill callout-icon"></i><div><strong>Trekker Tip:</strong> $1</div></div>'
    );
    processed = processed.replace(
      /(?:⚠️|\[WARNING\]) \*\*Safety Warning\*\*:? (.*$)/gim,
      '<div class="story-callout warning"><i class="bi bi-exclamation-triangle-fill callout-icon"></i><div><strong>Safety Warning:</strong> $1</div></div>'
    );

    // Paragraphs & Lists
    const blocks = processed.split(/\n{2,}/);
    return blocks
      .map((block) => {
        const trimmed = block.trim();
        if (!trimmed) return "";
        if (
          trimmed.startsWith("<h2") ||
          trimmed.startsWith("<h3") ||
          trimmed.startsWith("<blockquote") ||
          trimmed.startsWith("<div")
        ) {
          return trimmed;
        }

        // List
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const items = trimmed
            .split(/\n/)
            .map((line) => `<li>${line.replace(/^[-*]\s+/, "")}</li>`)
            .join("");
          return `<ul class="story-list">${items}</ul>`;
        }

        if (/^\d+\.\s+/.test(trimmed)) {
          const items = trimmed
            .split(/\n/)
            .map((line) => `<li>${line.replace(/^\d+\.\s+/, "")}</li>`)
            .join("");
          return `<ol class="story-list-numbered">${items}</ol>`;
        }

        return `<p class="story-p">${trimmed.replace(/\n/g, "<br>")}</p>`;
      })
      .filter(Boolean)
      .join("\n\n");
  }

  extractSectionsFromContent(text: string, html: string): any[] {
    const sections: any[] = [];
    const lines = text.split("\n");

    let currentSection: any = { type: "text", heading: "", content: "" };

    lines.forEach((line) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("## ")) {
        if (currentSection.content || currentSection.heading) {
          sections.push(currentSection);
        }
        currentSection = { type: "text", heading: trimmed.replace(/^##\s+/, ""), content: "" };
      } else if (trimmed.startsWith("### ")) {
        if (currentSection.content || currentSection.heading) {
          sections.push(currentSection);
        }
        currentSection = { type: "text", heading: trimmed.replace(/^###\s+/, ""), content: "" };
      } else if (trimmed.startsWith("> ")) {
        sections.push({
          type: "quote",
          heading: "",
          content: trimmed.replace(/^>\s+/, "").replace(/^"(.*)"$/, "$1"),
        });
      } else if (trimmed.startsWith("[TIP] ") || trimmed.startsWith("💡 ")) {
        sections.push({
          type: "tip",
          heading: "Trekker Tip",
          content: trimmed.replace(/^(?:\[TIP\]|💡)\s+(\*\*Trekker Tip\*\*:?\s*)?/, ""),
        });
      } else if (trimmed.startsWith("[WARNING] ") || trimmed.startsWith("⚠️ ")) {
        sections.push({
          type: "warning",
          heading: "Safety Warning",
          content: trimmed.replace(/^(?:\[WARNING\]|⚠️)\s+(\*\*Safety Warning\*\*:?\s*)?/, ""),
        });
      } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        if (currentSection.type !== "list") {
          if (currentSection.content || currentSection.heading) {
            sections.push(currentSection);
          }
          currentSection = {
            type: "list",
            heading: "",
            listType: "bullet",
            listItems: [],
            content: "",
          };
        }
        currentSection.listItems.push(trimmed.replace(/^[-*]\s+/, ""));
      } else if (trimmed) {
        if (currentSection.type === "list") {
          sections.push(currentSection);
          currentSection = { type: "text", heading: "", content: trimmed };
        } else {
          currentSection.content += (currentSection.content ? "\n" : "") + trimmed;
        }
      }
    });

    if (currentSection.content || currentSection.heading || (currentSection.listItems && currentSection.listItems.length)) {
      sections.push(currentSection);
    }

    if (sections.length === 0) {
      sections.push({
        type: "text",
        heading: "Story Overview",
        content: text,
      });
    }

    return sections;
  }

  sectionsToMarkdown(sections: any[]): string {
    let md = "";
    sections.forEach((s) => {
      if (s.heading) md += `## ${s.heading}\n\n`;
      if (s.type === "text" && s.content) {
        md += `${s.content}\n\n`;
      } else if (s.type === "list" && s.listItems) {
        s.listItems.forEach((item: string) => {
          md += `- ${item}\n`;
        });
        md += "\n";
      } else if (s.type === "quote" && s.content) {
        md += `> "${s.content}"\n\n`;
      } else if (s.type === "tip" && s.content) {
        md += `[TIP] **Trekker Tip**: ${s.content}\n\n`;
      } else if (s.type === "warning" && s.content) {
        md += `[WARNING] **Safety Warning**: ${s.content}\n\n`;
      }
    });
    return md.trim();
  }

  htmlToMarkdown(html: string): string {
    return html
      .replace(/<h2[^>]*>(.*?)<\/h2>/gi, "\n\n## $1\n\n")
      .replace(/<h3[^>]*>(.*?)<\/h3>/gi, "\n\n### $1\n\n")
      .replace(/<strong>(.*?)<\/strong>/gi, "**$1**")
      .replace(/<em>(.*?)<\/em>/gi, "*$1*")
      .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, "\n\n> $1\n\n")
      .replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n")
      .replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .trim();
  }

  escapeHtml(text: string): string {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  async showToast(message: string, color: "success" | "danger" | "warning" = "success") {
    const toast = await this.toastController.create({
      message,
      duration: 2500,
      position: "top",
      color,
    });
    toast.present();
  }
}
