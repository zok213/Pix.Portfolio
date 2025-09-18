'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
  featured: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.',
    content: 'Full blog post content here...',
    author: 'Alex Chen',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Technology',
    tags: ['Web Development', 'AI', 'Trends'],
    image: '/api/placeholder/400/240',
    featured: true
  },
  {
    id: '2',
    title: 'Building Brand Identity in the Digital Age',
    excerpt: 'How modern businesses can create compelling brand identities that resonate with digital-first audiences.',
    content: 'Full blog post content here...',
    author: 'Sarah Kim',
    date: '2024-01-12',
    readTime: '7 min read',
    category: 'Design',
    tags: ['Branding', 'Design', 'Marketing'],
    image: '/api/placeholder/400/240',
    featured: true
  },
  {
    id: '3',
    title: 'Da Nang Tech Scene: A Growing Hub for Innovation',
    excerpt: 'Discover why Da Nang is becoming a major tech destination in Southeast Asia.',
    content: 'Full blog post content here...',
    author: 'David Nguyen',
    date: '2024-01-10',
    readTime: '4 min read',
    category: 'Local Insights',
    tags: ['Da Nang', 'Tech', 'Innovation'],
    image: '/api/placeholder/400/240',
    featured: false
  },
  {
    id: '4',
    title: 'UI/UX Design Principles for Modern Applications',
    excerpt: 'Essential design principles every developer and designer should know in 2024.',
    content: 'Full blog post content here...',
    author: 'Emily Zhang',
    date: '2024-01-08',
    readTime: '6 min read',
    category: 'Design',
    tags: ['UI/UX', 'Design', 'Applications'],
    image: '/api/placeholder/400/240',
    featured: false
  },
  {
    id: '5',
    title: 'The Power of AI in Creative Industries',
    excerpt: 'How artificial intelligence is revolutionizing creative workflows and enhancing human creativity.',
    content: 'Full blog post content here...',
    author: 'Michael Rivera',
    date: '2024-01-05',
    readTime: '8 min read',
    category: 'Technology',
    tags: ['AI', 'Creativity', 'Innovation'],
    image: '/api/placeholder/400/240',
    featured: false
  }
]

const categories = ['All', 'Technology', 'Design', 'Local Insights', 'Marketing']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <Link href="/" className="inline-block mb-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pixerve
              </h1>
            </Link>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, trends, and stories from the world of technology and creativity
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm group"
                      >
                        Read
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or category filter.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Get the latest insights and trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}