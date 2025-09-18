import React from 'react';

export interface NavigationItem {
  title: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    portfolio?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  category: 'IT' | 'Media';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'coming-soon';
  features?: string[];
  image?: string;
  link?: string;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'coming-soon';
  link?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  slug: string;
  featuredImage?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

// CMS Content Types
export interface CMSContent {
  aboutUs: {
    headline: string;
    subHeadline: string;
    vision: string;
    mission: string;
    coreValues: string[];
    howItWorks: string[];
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    backgroundImage?: string;
  };
  footer: {
    contactInfo: ContactInfo;
    socialLinks: SocialLink[];
    quickLinks: NavigationItem[];
    copyrightText: string;
  };
}

// Animation variants for Framer Motion
export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
    };
  };
}