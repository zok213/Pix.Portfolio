'use client'

import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowLeft, Share2, BookmarkPlus, Tag } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const blogPost = {
  id: '1',
  title: 'The Future of Web Development: Trends to Watch in 2024',
  content: `
    <p>Web development continues to evolve at a rapid pace, driven by advancing technologies, changing user expectations, and emerging business needs. As we progress through 2024, several key trends are shaping the landscape of web development.</p>

    <h2>1. AI-Driven Development</h2>
    <p>Artificial Intelligence is revolutionizing how we build and interact with web applications. From AI-powered code generation to intelligent user interfaces that adapt to user behavior, the integration of AI is becoming more sophisticated and accessible.</p>

    <h3>Key Areas of AI Integration:</h3>
    <ul>
      <li>Automated code generation and debugging</li>
      <li>Personalized user experiences</li>
      <li>Intelligent chatbots and virtual assistants</li>
      <li>Predictive analytics and user behavior modeling</li>
    </ul>

    <h2>2. Progressive Web Apps (PWAs)</h2>
    <p>Progressive Web Apps continue to bridge the gap between web and native applications, offering app-like experiences through web browsers. The latest improvements in PWA capabilities make them an increasingly attractive option for businesses.</p>

    <h2>3. Serverless Architecture</h2>
    <p>The serverless computing model is gaining traction for its scalability, cost-effectiveness, and reduced operational overhead. Developers can focus on writing code without worrying about server management.</p>

    <h2>4. Web3 and Blockchain Integration</h2>
    <p>Decentralized applications (dApps) and blockchain integration are becoming more mainstream, with improved tools and frameworks making Web3 development more accessible to traditional web developers.</p>

    <h2>5. Enhanced Developer Experience</h2>
    <p>Tools and frameworks are prioritizing developer experience with features like hot reloading, better debugging tools, and more intuitive APIs. This trend is making development faster and more enjoyable.</p>

    <h2>Conclusion</h2>
    <p>The future of web development is bright and full of possibilities. As these trends continue to evolve, developers who stay informed and adapt to new technologies will be best positioned to create innovative and impactful web experiences.</p>
  `,
  author: 'Alex Chen',
  date: '2024-01-15',
  readTime: '5 min read',
  category: 'Technology',
  tags: ['Web Development', 'AI', 'Trends', 'PWA', 'Serverless'],
  image: '/api/placeholder/800/400'
}

export default function BlogPostPage() {
  const params = useParams()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <Link href="/" className="inline-block">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Pixerve
            </h1>
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-video bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-6 left-6 text-white">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              {blogPost.category}
            </span>
          </div>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blogPost.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{blogPost.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(blogPost.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{blogPost.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {blogPost.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              <BookmarkPlus className="w-4 h-4" />
              Save
            </button>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 bg-white rounded-2xl shadow-sm border border-gray-200"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {blogPost.author.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{blogPost.author}</h3>
              <p className="text-gray-600">Senior Web Developer & Tech Writer</p>
              <p className="text-sm text-gray-500 mt-2">
                Passionate about cutting-edge web technologies and sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Building Scalable React Applications',
                excerpt: 'Best practices for creating maintainable and scalable React applications.',
                author: 'Sarah Kim',
                readTime: '6 min read'
              },
              {
                title: 'Modern CSS Techniques for 2024',
                excerpt: 'Explore the latest CSS features and techniques for modern web design.',
                author: 'David Chen',
                readTime: '4 min read'
              }
            ].map((article, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </article>

      {/* Newsletter CTA */}
      <div className="bg-gray-900 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Enjoyed this article?</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Subscribe to our newsletter for more insights and updates.
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