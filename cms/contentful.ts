// Simplified Contentful types and functions
export const contentfulClient = null

export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedDate: string
  tags: string[]
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  skills: string[]
}

export interface Service {
  title: string
  description: string
  category: 'IT' | 'Media'
  features: string[]
  icon: string
  order: number
}

export interface Product {
  name: string
  description: string
  status: 'active' | 'coming-soon'
  features?: string[]
  link?: string
  order: number
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
}

export interface FAQ {
  question: string
  answer: string
  category?: string
  order: number
}

export async function getBlogPosts(): Promise<BlogPost[]> { return [] }
export async function getBlogPost(): Promise<BlogPost | null> { return null }
export async function getTeamMembers(): Promise<TeamMember[]> { return [] }
export async function getServices(): Promise<Service[]> { return [] }
export async function getProducts(): Promise<Product[]> { return [] }
export async function getTestimonials(): Promise<Testimonial[]> { return [] }
export async function getFAQs(): Promise<FAQ[]> { return [] }
