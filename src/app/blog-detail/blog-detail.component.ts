import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Title, Meta } from "@angular/platform-browser";
import { BlogDetail } from "./blog-detail";
import { TokenService } from 'src/app/core/token.service';
import { FormsModule } from "@angular/forms";
import { AuthModalService } from "../auth/auth-modal.service";
import { environment } from "src/environments/environment";
import { MediaService } from '../core/media.service';

interface Comment {
  id: string;
  userId: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
  likes: number;
  replies?: any[];
}

interface RelatedPost {
  id: string;
  publicRef?: string;
  title: string;
  image: string;
  category: string;
  readTime: string;
}

@Component({
  selector: "app-blog-detail",
  templateUrl: "./blog-detail.component.html",
  styleUrls: ["./blog-detail.component.scss"],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})
export class BlogDetailComponent implements OnInit {
  postId: string = "";
  postRef: string = "";
  newComment: string = "";
  isSubmittingComment: boolean = false;
  currentUserId: string | null = null;
  editingCommentId: any | null = null;
  editedContent: string = "";
  Loading = false;
  isLiked = false;
  copyFeedback: string | null = null;
  private copyFeedbackTimer: any = null;
  private readonly mediaBaseUrl = (environment.mediaBaseUrl || '').replace(/\/?$/, '/');

  post: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    author: {
      name: string;
      avatar: string;
      bio: string;
    };
    category: string;
    categoryId?: string | number;
    tags: string[];
    date: string;
    readTime: string;
    views: number;
    likes: number;
    content: string;
  } = {
    id: "",
    title: "",
    excerpt: "",
    image: "",
    author: {
      name: "",
      avatar: "",
      bio: "",
    },
    category: "",
    tags: [],
    date: "",
    readTime: "",
    views: 0,
    likes: 0,
    content: "",
  };

  relatedPosts: RelatedPost[] = [];
  comments: Comment[] = [];
  user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogDetailService: BlogDetail,
    private authModal: AuthModalService,
    private tokenService: TokenService,
    private media: MediaService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  get isLoggedIn(): boolean {
    return this.tokenService.isValid();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postRef = String(params["id"] || "");
      this.postId = this.postRef;
      if (!this.postRef) return;
      this.loadPost();
      this.loadComments();
      this.setCurrentUser();
    });
  }

  setCurrentUser() {
    if (!this.tokenService.isValid()) {
      this.currentUserId = null;
      return;
    }

    const decoded = this.tokenService.decode();
    this.currentUserId = decoded ? String(decoded?.id ?? decoded?.userId ?? "").trim() || null : null;
  }

  loadPost() {
    this.blogDetailService.getPostById(this.postRef).subscribe((result: any) => {
      const res = result.data;
      if (!res) return;
      this.postId = String(res.id || this.postId || "");
      this.post = {
        id: res.id,
        title: res.title,
        excerpt: res.excerpt || "",
        image: this.media.resolve(res.featured_image),
        author: {
          name: res.author_name || "Trail Guide",
          avatar: res.author_avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(res.author_name || "Guide")}&background=0f2d1e&color=10b981&size=120`,
          bio: res.author_bio || "Certified Western Ghats Explorer & Nature Documentarian.",
        },
        category: res.category || "Expeditions",
        categoryId: res.category_id,
        tags: res.tags || [],
        date: res.published_at ? new Date(res.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Recently Published",
        readTime: res.read_time || "5 min read",
        views: res.views || 0,
        likes: res.likes || 0,
        content: res.content || '',
      };

      this.updateOpenGraphTags(this.post);

      if (this.post.categoryId) {
        this.loadRelated(this.post.categoryId);
      }
    });
  }

  updateOpenGraphTags(post: any): void {
    if (!post) return;
    const pageTitle = `${post.title} | goWILD Karunadu`;
    const description = post.excerpt ? post.excerpt.slice(0, 160).trim() : `Read ${post.title} on goWILD Karunadu.`;
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

    this.titleService.setTitle(pageTitle);

    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ property: 'og:title', content: pageTitle });
    this.metaService.updateTag({ property: 'og:description', content: description });
    if (post.image) {
      this.metaService.updateTag({ property: 'og:image', content: post.image });
    }
    if (currentUrl) {
      this.metaService.updateTag({ property: 'og:url', content: currentUrl });
    }
    this.metaService.updateTag({ property: 'og:type', content: 'article' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: pageTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
    if (post.image) {
      this.metaService.updateTag({ name: 'twitter:image', content: post.image });
    }
  }

  loadComments() {
    this.blogDetailService.getComments(this.postRef).subscribe(
      (res: any) => {
        const commentsData = res.data || [];

        this.comments = commentsData.map((comment: any) => ({
          id: comment.id,
          userId: String(comment.user_id || ""),
          author: {
            name: comment.author_name || "Trekker",
            avatar:
              comment.author_avatar ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.author_name || "Trekker")}&background=0f2d1e&color=10b981&size=100`,
          },
          content: comment.content,
          date: this.formatCommentDate(comment.created_at),
          likes: comment.likes || 0,
          replies: comment.replies || [],
        }));
      },
      (error) => {
        this.comments = [];
      },
    );
  }

  loadRelated(categoryId: string | number) {
    this.blogDetailService
      .getRelatedPosts(categoryId, this.postRef)
      .subscribe((res: any) => {
        if (res.success == true) {
          this.Loading = false;
          const relatedData = res.data || [];
          this.relatedPosts = relatedData.map((post: any) => ({
            id: post.id,
            publicRef: post.public_ref || undefined,
            title: post.title,
            image: this.media.resolve(post.featured_image),
            category: post.category,
            readTime: post.read_time || "5 min read",
          }));
        } else {
          this.relatedPosts = res.data || [];
          this.Loading = false;
        }
      });
  }

  async openLoginPanel() {
    try {
      await this.authModal.openLogin();
      this.setCurrentUser();
    } catch (err) {}
  }

  postComment() {
    if (!this.newComment?.trim()) return;

    if (!this.tokenService.isValid()) {
      this.openLoginPanel();
      return;
    }

    const decodedUser: any = this.tokenService.decode();
    if (!decodedUser?.id && !decodedUser?.userId) {
      this.openLoginPanel();
      return;
    }

    this.isSubmittingComment = true;
    const commentData = {
      post_id: this.postId,
      content: this.newComment.trim(),
    };

    this.blogDetailService.addComment(commentData).subscribe(
      (res: any) => {
        const comment = res.data;
        this.comments.unshift({
          id: comment.id,
          userId: String(comment.user_id || ""),
          author: {
            name: comment.author_name || "You",
            avatar:
              comment.author_avatar ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.author_name || "You")}&background=0f2d1e&color=10b981&size=100`,
          },
          content: comment.content,
          date: "Just now",
          likes: 0,
        });

        this.newComment = "";
        this.isSubmittingComment = false;
      },
      (error) => {
        this.isSubmittingComment = false;
      },
    );
  }

  likePost() {
    this.blogDetailService.likePost(this.postRef).subscribe(
      (res: any) => {
        this.post.likes = res.data.likes;
        this.isLiked = true;
      },
      (error) => {
      },
    );
  }

  likeComment(commentId: string | number) {
    this.blogDetailService.likeComment(commentId).subscribe(
      (res: any) => {
        const comment = this.comments.find((c) => c.id === commentId);
        if (comment) {
          comment.likes = res.data.likes;
        }
      },
      (error) => {
      },
    );
  }

  viewRelatedPost(post: RelatedPost) {
    const publicRef = String(post.publicRef || post.id);
    this.router.navigate(["/blog-details", publicRef]).then(() => {
      window.location.reload();
    });
  }

  getCategoryLabel(category: string): string {
    return (category || "Trail Story").replace(/-/g, " ");
  }

  formatCommentDate(dateString: string): string {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  startEdit(comment: any) {
    this.editingCommentId = comment.id;
    this.editedContent = comment.content;
  }

  cancelEdit() {
    this.editingCommentId = null;
    this.editedContent = "";
  }

  updateComment(commentId: string | number) {
    if (!this.editedContent.trim() || !this.currentUserId) return;
    const content = this.editedContent.trim();

    this.blogDetailService
      .updateComment(commentId, this.currentUserId, content)
      .subscribe(
        (res: any) => {
          if (res.success == true) {
            this.cancelEdit();
            this.loadComments();
          }
        },
        (err) => {
        },
      );
  }

  deleteComment(commentId: string | number) {
    if (!this.currentUserId) return;

    this.blogDetailService
      .deleteComment(commentId, this.currentUserId)
      .subscribe(
        (res: any) => {
          if (res.success == true) {
            this.comments = this.comments.filter((c) => c.id !== commentId);
            this.loadComments();
            this.cancelEdit();
          }
        },
        (err) => {
        },
      );
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }

  scrollToComments(): void {
    const el = document.getElementById('discussion-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  copyShareLink(): void {
    const url = window.location.href;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        this.showShareFeedback("Story link copied to clipboard!");
      }).catch(() => {
        this.fallbackCopy(url);
      });
    } else {
      this.fallbackCopy(url);
    }
  }

  private fallbackCopy(text: string) {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    this.showShareFeedback("Story link copied!");
  }

  showShareFeedback(msg: string) {
    this.copyFeedback = msg;
    if (this.copyFeedbackTimer) clearTimeout(this.copyFeedbackTimer);
    this.copyFeedbackTimer = setTimeout(() => {
      this.copyFeedback = null;
    }, 3000);
  }

  shareOnWhatsApp(): void {
    const text = encodeURIComponent(`Read this trek story: ${this.post.title}\n${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  }

  shareOnTwitter(): void {
    const text = encodeURIComponent(`${this.post.title} via @goWILDKarunadu`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  }

  createPost() {
    if (!this.tokenService.isValid()) {
      this.openLoginPanel();
      return;
    }
    this.router.navigate(["/create-story"]);
  }
}
