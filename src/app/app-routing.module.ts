import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { MainpageComponent } from "./layout/mainpage/mainpage.component";
import { ResetPasswordComponent } from "./auth/reset-password/reset-password.component";
import { AuthGuard } from "./core/guards/auth-guard";

const routes: Routes = [
  // Standalone route — outside MainpageComponent so no navbar/header shows
  {
    path: "reset-password",
    component: ResetPasswordComponent,
  },
  {
    path: "",
    component: MainpageComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./dashboard/dashboard-module").then((m) => m.DashboardModule),
      },

      // ── TREK EXPLORATION ROUTES ────────────────────────────────────
      {
        path: "upcoming-treks",
        loadChildren: () =>
          import("./upcomingtours/tours-module").then((m) => m.ToursModule),
      },
      {
        path: "trek-details",
        loadChildren: () =>
          import("./tour-details/tour-details-module").then(
            (m) => m.TourDetailsModule,
          ),
      },

      // Seamless backward compatibility & SEO aliases for treks
      { path: "upcomingtours", redirectTo: "upcoming-treks", pathMatch: "full" },
      { path: "upcoming-tours", redirectTo: "upcoming-treks", pathMatch: "full" },
      { path: "treks", redirectTo: "upcoming-treks", pathMatch: "full" },
      { path: "tour-details", redirectTo: "trek-details" },

      // ── BOOKING & CHECKOUT ROUTES ─────────────────────────────────
      {
        path: "booking",
        loadChildren: () =>
          import("./booking/booking-module").then((m) => m.BookingModule),
      },
      { path: "payment", redirectTo: "my-bookings", pathMatch: "full" },
      { path: "payment-test", redirectTo: "my-bookings", pathMatch: "full" },
      {
        path: "my-bookings",
        loadChildren: () =>
          import("./my-bookings/my-bookings-module").then(
            (m) => m.MyBookingsModule,
          ),
      },
      {
        path: "my-wallet",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./wallet/wallet-module").then((m) => m.WalletModule),
      },
      { path: "wallet", redirectTo: "my-wallet", pathMatch: "full" },
      { path: "cancel-booking", redirectTo: "my-bookings", pathMatch: "full" },
      { path: "cancel-bookings", redirectTo: "my-bookings", pathMatch: "full" },
      { path: "cancle-bookings", redirectTo: "my-bookings", pathMatch: "full" },

      // ── JOURNAL & BLOG ROUTES ─────────────────────────────────────
      {
        path: "blog",
        loadChildren: () =>
          import("./blog/blog-module").then((m) => m.BlogModule),
      },
      {
        path: "blog-details",
        loadChildren: () =>
          import("./blog-detail/blog-detail-module").then(
            (m) => m.BlogDetailModule,
          ),
      },
      { path: "blog-detail", redirectTo: "blog-details" },
      {
        path: "create-story",
        canActivate: [AuthGuard],
        loadChildren: () =>
          import("./blog-post/blog-post-module").then((m) => m.BlogPostModule),
      },
      { path: "blog-post", redirectTo: "create-story", pathMatch: "full" },

      // ── INFORMATIONAL & LEGAL ROUTES ──────────────────────────────
      {
        path: "about",
        loadChildren: () =>
          import("./about/about-module").then((m) => m.AboutModule),
      },
      {
        path: "faqs",
        loadChildren: () =>
          import("./faqs/faqs-module").then((m) => m.FaqsModule),
      },
      {
        path: "terms-and-conditions",
        loadChildren: () =>
          import("./Quicklinks/termsandconditions/termsandconditons-module").then(
            (m) => m.TermsandconditionsModule,
          ),
      },
      {
        path: "cancellation-policy",
        loadChildren: () =>
          import("./Quicklinks/termsandconditions/termsandconditons-module").then(
            (m) => m.TermsandconditionsModule,
          ),
      },
      { path: "termsandcondition", redirectTo: "terms-and-conditions", pathMatch: "full" },
      { path: "cancellation", redirectTo: "cancellation-policy", pathMatch: "full" },

      // ── SEARCH ROUTE ──────────────────────────────────────────────
      {
        path: "search",
        loadChildren: () =>
          import("./search/search.module").then((m) => m.SearchModule),
      },
    ],
  },

  // Wildcard must always be last
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      scrollOffset: [0, 0],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
