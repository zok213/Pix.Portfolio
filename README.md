# Pixerve - Unleashing Infinite Creativity

[![Next.js](https://img.shields.io/badge/Next.js-14.0.3-blue.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-blue.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-purple.svg)](https://www.framer.com/motion/)

A modern, responsive, and feature-rich portfolio website for Pixerve - a comprehensive creative and technology services company based in Da Nang, Vietnam. This project includes a complete landing page, blog system, authentication, and AI chatbot functionality.

## 🚀 Live Demo

The application runs locally at: [http://localhost:3000](http://localhost:3000)

## ✨ Key Features

### 🎨 **Complete Business Showcase**
- **Modern Landing Page**: Hero section, about, services, products, team, testimonials, FAQ, and contact
- **Interactive Team Profiles**: Category-based filtering with detailed member information
- **Service Categories**: Comprehensive IT (Pix.teq) and Media (Pix.studio) services
- **Product Showcase**: Active and coming-soon products with detailed descriptions
- **Community Section**: Local Da Nang partnerships and connections

### 💻 **Advanced Functionality**
- **Full Blog System**: Blog listing, categories, search, and detailed post pages
- **Authentication Pages**: Modern login/signup with social login options
- **AI Chatbot**: Intelligent chatbox with contextual responses
- **Responsive Design**: Works perfectly on all devices and screen sizes
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Cards

### 🛠 **Developer Experience**
- **TypeScript**: Full type safety throughout the application
- **Modern React**: Latest Next.js 14 with App Router
- **Component Architecture**: Reusable, maintainable components
- **Performance Optimized**: Fast loading with optimized images and code splitting

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 14
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **CMS:** [Contentful](https://www.contentful.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/pixerve-landing-page.git
   cd pixerve-landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file by copying the example file:
   ```bash
   cp .env.example .env.local
   ```
   Then, fill in the required environment variables in `.env.local`:
   - `NEXT_PUBLIC_CONTENTFUL_SPACE_ID`: Your Contentful Space ID.
   - `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`: Your Contentful Content Delivery API access token.

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

The project is organized with a clear and scalable structure:

```
.
├── app/                # Next.js 14 App Router (main pages and layouts)
├── components/         # Shared React components (UI, sections, header, footer)
├── cms/                # Contentful CMS client and type definitions
├── lib/                # Utility functions
├── public/             # Static assets (images, fonts)
├── styles/             # Global styles
├── types/              # TypeScript type definitions
└── ...
```

## 📝 CMS Setup (Contentful)

This project uses Contentful to manage dynamic content. To get started:

1. **Create a Contentful account** and a new space.
2. **Set up the following Content Models:**
   - **BlogPost:** For blog articles.
   - **TeamMember:** For team profiles.
   - **Service:** For IT and Media services.
   - **Product:** For showcasing company products.
   - **Testimonial:** For client and user testimonials.
   - **FAQ:** For the frequently asked questions section.
3. **Add your API credentials** (`Space ID` and `Access Token`) to the `.env.local` file.

## 👥 Our Team & Services

PiXerse is composed of two main divisions:

- **Pix.teq (Technology & Digital Solutions):** Focused on technology products and services, including IT outsourcing, AI/Blockchain development, and cybersecurity.
- **Pix.stdio (Creative & Marketing Solutions):** Dedicated to creative services, offering branding, media production, and marketing solutions.

Our team is a blend of talented founders, engineers, designers, and marketers passionate about blending creativity and technology.

## 🌐 Deployment

The project is optimized for deployment on [Vercel](https://vercel.com/). Simply connect your GitHub repository to Vercel and it will be deployed automatically.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📧 Support

For support, please email [contact@pixerve.com](mailto:contact@pixerve.com) or create an issue in this repository.
