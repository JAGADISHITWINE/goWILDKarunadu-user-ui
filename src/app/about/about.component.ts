import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {
  AboutHero,
  AboutSafetyItem,
  AboutStat,
  AboutStory,
  AboutTeamMember,
  AboutValue,
  StaticPagesService,
} from '../core/static-pages.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
})
export class AboutComponent implements OnInit {
  loading = true;
  error = false;

  hero: AboutHero = {
    year: '2011',
    badge: 'Our Story',
    title: "Exploring Karnataka's Wilderness Since 2011",
    subtitle: 'Your trusted partner for adventure and exploration in the Western Ghats',
  };

  story: AboutStory = {
    sectionNumber: '01',
    tag: 'Our Story',
    heading: 'Born from a love of wild places',
    paragraph1:
      "goWILDKarunadu was born out of a passion for the Western Ghats and a desire to share its beauty with fellow adventurers. What started as weekend treks with friends has grown into one of Karnataka's most trusted trekking organisations.",
    quote:
      "We've introduced thousands of people to the majestic peaks, dense forests, and hidden waterfalls of Karnataka.",
    paragraph2:
      'Our mission remains simple: to create safe, memorable, and responsible trekking experiences while preserving the natural beauty that makes these adventures possible.',
  };

  stats: AboutStat[] = [
    { number: '10,000+', label: 'Happy Trekkers' },
    { number: '50+', label: 'Trek Routes' },
    { number: '15', label: 'Years Experience' },
    { number: '4.8', label: 'Average Rating' },
  ];

  values: AboutValue[] = [
    {
      icon: 'shield-checkmark',
      title: 'Safety First',
      description: 'All our treks are led by certified guides with comprehensive safety protocols',
    },
    {
      icon: 'leaf',
      title: 'Eco-Friendly',
      description: 'We practice and promote responsible trekking with minimal environmental impact',
    },
    {
      icon: 'people',
      title: 'Community',
      description: 'Building a community of adventure enthusiasts who respect nature',
    },
    {
      icon: 'star',
      title: 'Excellence',
      description: 'Committed to providing exceptional experiences on every trek',
    },
  ];

  team: AboutTeamMember[] = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & Lead Trek Leader',
      image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&size=200',
      bio: '15+ years of trekking experience in the Western Ghats',
      suffix: 'Founder & Lead Trek Leader',
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Manager',
      image: 'https://ui-avatars.com/api/?name=Priya+Sharma&size=200',
      bio: 'Expert in trek logistics and safety protocols',
      suffix: 'Operations Manager',
    },
    {
      name: 'Arjun Menon',
      role: 'Senior Trek Guide',
      image: 'https://ui-avatars.com/api/?name=Arjun+Menon&size=200',
      bio: 'Certified wilderness first responder and mountaineer',
      suffix: 'Senior Trek Guide',
    },
    {
      name: 'Meera Reddy',
      role: 'Trek Guide & Naturalist',
      image: 'https://ui-avatars.com/api/?name=Meera+Reddy&size=200',
      bio: 'Wildlife enthusiast with deep knowledge of Western Ghats flora & fauna',
      suffix: 'Trek Guide & Naturalist',
    },
  ];

  safetyItems: AboutSafetyItem[] = [
    {
      icon: 'shield-checkmark',
      title: 'Certified Guides',
      description: 'All treks led by certified guides with wilderness first aid training',
    },
    {
      icon: 'medkit',
      title: 'Safety Briefings',
      description: 'Comprehensive safety briefings before each trek',
    },
    {
      icon: 'call',
      title: 'Emergency Communication',
      description: 'Emergency communication devices on all treks',
    },
    {
      icon: 'cloudy-night',
      title: 'Weather Monitoring',
      description: 'Strict adherence to weather and trail conditions',
    },
  ];

  constructor(private staticPagesService: StaticPagesService) {}

  ngOnInit(): void {
    this.loadAboutData();
  }

  loadAboutData(): void {
    this.loading = true;
    this.error = false;

    this.staticPagesService.getPage('about-us').subscribe({
      next: (page) => {
        this.loading = false;
        if (!page) return;

        const dynamicData = page.aboutData || this.parseContent(page.content);
        if (dynamicData) {
          if (dynamicData.hero) {
            this.hero = { ...this.hero, ...dynamicData.hero };
          }
          if (dynamicData.story) {
            this.story = { ...this.story, ...dynamicData.story };
          }
          if (dynamicData.stats && dynamicData.stats.length > 0) {
            this.stats = dynamicData.stats;
          }
          if (dynamicData.values && dynamicData.values.length > 0) {
            this.values = dynamicData.values;
          }
          if (dynamicData.team && dynamicData.team.length > 0) {
            this.team = dynamicData.team;
          }
          if (dynamicData.safetyItems && dynamicData.safetyItems.length > 0) {
            this.safetyItems = dynamicData.safetyItems;
          }
        }
      },
      error: (err) => {
        console.warn('Failed to fetch dynamic about page data, using default content:', err);
        this.loading = false;
      },
    });
  }

  private parseContent(content: string): any {
    if (!content) return null;
    try {
      return JSON.parse(content);
    } catch {
      return null;
    }
  }
}
