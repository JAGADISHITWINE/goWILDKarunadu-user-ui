import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface AboutHero {
  year?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
}

export interface AboutStory {
  sectionNumber?: string;
  tag?: string;
  heading?: string;
  paragraph1?: string;
  quote?: string;
  paragraph2?: string;
}

export interface AboutStat {
  key?: string;
  number: string;
  label: string;
}

export interface AboutValue {
  icon: string;
  title: string;
  description: string;
}

export interface AboutTeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  suffix?: string;
}

export interface AboutSafetyItem {
  icon: string;
  title: string;
  description: string;
}

export interface AboutDataPayload {
  hero?: AboutHero;
  story?: AboutStory;
  stats?: AboutStat[];
  values?: AboutValue[];
  team?: AboutTeamMember[];
  safetyItems?: AboutSafetyItem[];
}

export interface StaticPageRecord {
  id?: string;
  pageKey: string;
  title: string;
  content: string;
  status?: 'active' | 'inactive';
  sortOrder?: number;
  aboutData?: AboutDataPayload;
  updatedAt?: string;
  createdAt?: string;
}

interface StaticPageResponse {
  success?: boolean;
  message?: string;
  data?: StaticPageRecord | StaticPageRecord[] | null;
}

@Injectable({ providedIn: 'root' })
export class StaticPagesService {
  constructor(private http: HttpClient) {}

  getPage(pageKey: string): Observable<StaticPageRecord | null> {
    const userAuthUrl = `${environment.baseUrl}/pages/${encodeURIComponent(pageKey)}`;
    const contentUrl = `${environment.contentBaseUrl}/pages/${encodeURIComponent(pageKey)}`;

    return this.http.get<StaticPageResponse>(userAuthUrl).pipe(
      catchError(() => this.http.get<StaticPageResponse>(contentUrl).pipe(
        catchError(() => of(null))
      )),
      map((response) => this.extractSinglePage(response))
    );
  }

  private extractSinglePage(response: StaticPageResponse | null | undefined): StaticPageRecord | null {
    const data = response?.data;
    if (data && !Array.isArray(data)) {
      return data;
    }
    return null;
  }
}
