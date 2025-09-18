// Static data based on the project requirements from Landing Page Team Profile.md
export const companyData = {
  name: 'PiXerse',
  tagline: 'Unleashing infinite creativity in the pixel universe',
  description: 'PiXerse is your all-in-one hub for creativity and technology. From branding, media, and social management to marketing, business, and innovative tech projects. Whatever you need, we make it happen.',
  
  // Social Links
  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/107096001/admin/page-posts/published/',
    telegram: 'https://t.me/dananglocalist',
    facebook: 'https://web.facebook.com/pixerse',
    twitter: 'https://x.com/PixStdio'
  },
  
  // Navigation items
  navigation: [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Community', href: '#community' },
    { name: 'Team', href: '#team' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]
}

// Services data
export const servicesData = {
  itServices: {
    title: 'Technology & Digital Solutions (Pix.teq)',
    brief: 'Deliver end-to-end technology solutions—from expert IT outsourcing and cutting-edge AI/Blockchain development to robust cybersecurity audits. We close your technology gaps, optimize performance, and secure your digital assets, enabling you to focus on core business growth.',
    services: [
      {
        title: 'Software Outsourcing',
        description: 'A complete package to fill technology gaps, offering tailored solutions from software development to system optimization. We help you save costs and accelerate project delivery while ensuring high-quality results.'
      },
      {
        title: 'Research Paper (AI, Robotics, Blockchain)',
        description: 'We provide expert research and writing support for scientific papers and professional publications in AI, Robotics, and Blockchain.'
      },
      {
        title: 'AI Solutions & Advisor',
        description: 'We design and implement AI applications, including chatbots, data analytics, and automation tools. We also provide expert advice to help you apply AI to improve decision-making, increase efficiency, and gain a competitive advantage.'
      },
      {
        title: 'Security Audit & Advisor',
        description: 'We provide comprehensive penetration testing and security audits for Web2, Web3, Android, APIs, and LLM applications. Our expertise helps you identify and fix vulnerabilities, ensuring robust protection against cyber threats.'
      },
      {
        title: 'Blockchain Solutions',
        description: 'From smart contract development to dApps, we offer end-to-end blockchain solutions to enhance security and efficiency in data and transactions.'
      }
    ]
  },
  mediaServices: {
    title: 'Creative & Marketing Solutions (Pix.studio)',
    brief: 'Elevate your brand with comprehensive creative and marketing solutions. From developing a strong brand identity and producing high-quality visual content (including video and animation) to executing multi-channel advertising campaigns, we help you stand out, engage effectively with your target audience, and build lasting customer trust.',
    services: [
      {
        title: 'Video Editing',
        description: 'Engaging, high-quality edits tailored for ads, campaigns, and digital platforms.'
      },
      {
        title: 'UX/UI Design',
        description: 'User-centered design for websites, apps, and digital products.'
      },
      {
        title: 'Brand Identity Design',
        description: 'Brand strategy, logo creation, typography, visual identity, and color palette development.'
      },
      {
        title: 'Printing Design',
        description: 'Design of posters, banners, marketing materials, and branded merchandise.'
      },
      {
        title: 'Animation Videos',
        description: 'Creative animated videos for advertising, storytelling, and brand engagement.'
      },
      {
        title: 'Photography & Videography',
        description: 'Professional photo and video production with creative editing that brings brand stories to life.'
      },
      {
        title: 'Creative Content',
        description: 'Channel building, communication planning, and content scheduling management.'
      },
      {
        title: 'Advertising & Communication',
        description: 'Planning and executing multi-channel advertising campaigns, including digital and social media.'
      },
      {
        title: 'Market Research',
        description: 'In-depth analysis of customer behavior, target markets, and competitors to guide effective business strategies.'
      }
    ]
  }
}

// Community data
export const communityData = [
  {
    name: 'PiX.Lab',
    title: 'Pixerse Research Lab',
    description: 'Pixerse Research Lab, established at Pixerse, is a specialized research lab focused on the application of Artificial Intelligence (AI) in the field of Robotics.',
    fullDescription: `With the vision of becoming a pioneering research center in Da Nang, we focus on the convergence of AI and Robotics, viewing this as the key to creating intelligent autonomous systems. The mission of Pixerse Research Lab is to create a premier research environment that nurtures and develops young tech talents by tackling complex challenges within the industry. Our core research areas include autonomous systems, collaborative robots (cobots), and Human-Robot Interaction (HRI).`,
    pillars: [
      {
        title: 'Scientific Research',
        description: 'Conducting and publishing in-depth research in fields such as Computer Vision, autonomous navigation algorithms, Natural Language Processing (NLP), and Deep Learning models applied to Robotics.'
      },
      {
        title: 'Applied R&D',
        description: 'Members directly participate in Research & Development (R&D) projects, building robotic systems capable of perception, learning, and autonomous decision-making in complex environments.'
      },
      {
        title: 'Enterprise Solutions',
        description: 'Aiming to commercialize research outcomes through the development of customized Intelligent Robotics Solutions designed to optimize business operations.'
      }
    ]
  },
  {
    name: 'DaNang Localist',
    title: 'DaNang Localist: Beyond a Workspace',
    description: 'DaNang Localist is a vibrant community hub in Da Nang, founded with a core mission: to create authentic connections between the global digital nomad community and the local young generation.',
    fullDescription: `Going beyond a typical co-working space, DaNang Localist acts as a cultural and professional bridge. It brings together talented digital nomads and connects them with Da Nang's dynamic, tech-savvy youth who are proud of their city. Our philosophy is simple: the best way to experience and "live like a local" in Da Nang is through genuine relationships.`,
    link: 'https://t.me/dananglocalist'
  }
]

// Products data
export const productsData = [
  {
    name: 'PiXity.AI',
    description: 'A smart, friendly AI assistant that serves as a gateway for brands to connect with digital-native audiences. With deep local knowledge and an "always-on, always-learning" capability, PiXity provides highly personalized and valuable interactions.',
    features: [
      'Real-time chatbot interaction',
      'Content curated by local creators',
      'In-depth analytics tools to enhance marketing campaigns'
    ],
    status: 'active'
  },
  {
    name: 'Mini Game',
    description: 'Interactive gaming experiences designed to engage users and enhance brand connection.',
    status: 'active'
  }
]

// Team data
export const teamData = {
  founders: [
    {
      username: '@giangesley',
      name: 'Giang Esley',
      role: 'Founder - Head of PiX.Teq, Project Manager, Business Development, Researcher',
      specialties: 'Leadership, Business Development, Research',
      quote: 'A multidisciplinary company that blends creativity and technology to deliver impactful solutions. We aim to build connections between ideas and brand stories while crafting tools that empower communities.',
      linkedin: 'https://www.linkedin.com/in/giangesley/'
    },
    {
      username: '@sown',
      name: 'Son W',
      role: 'Co-founder - Head of PiX.Studio, Cybersecurity Consultant, Security Researcher',
      specialties: 'Cybersecurity, Creative Direction, Security Research',
      quote: 'Pix.studio for creative services, offers full-service marketing, media, and design solutions. From branding and visual identity to content production and strategic campaigns, Pix.studio helps brands communicate their values and connect with their audience through powerful, intentional design.',
      linkedin: 'https://www.linkedin.com/in/sonw-vh/'
    },
    {
      username: '@finn',
      name: 'Finn',
      role: 'Co-founder - PiX.Teq Advisor, CTO, Embedded R&D Engineer',
      specialties: 'Technology Leadership, Embedded Systems, R&D',
      quote: 'Pix.teq for technology products, the technology engine of PiXerse, dedicated to building practical, community-centered products. It focuses on developing tools that are accessible, intuitive, and purpose-driven solving everyday problems with meaningful digital experiences.',
      linkedin: ''
    }
  ],
  pixTeq: [
    {
      username: '@blue',
      name: 'Blue',
      role: 'Blockchain Lead',
      specialties: 'Fullstack Developer, Smart Contract Developer',
      quote: 'Success in business isn\'t just about profits; it\'s about perseverance, patience, and passion. It\'s waking up early to chase dreams others can\'t see, working late to solve problems no one else knows about, and betting on yourself when the odds feel impossible.',
      linkedin: 'https://www.linkedin.com/in/h%E1%BB%93-t%E1%BA%A5t-b%E1%BA%A3o-ho%C3%A0ng-1678922a7/'
    },
    {
      username: '@hary',
      name: 'Nguyễn Hải',
      role: 'Game Lead',
      specialties: 'Graphic Designer, Video Editor',
      quote: '"I play to feel. I build to be felt" I\'m not here just to make games. I\'m here to craft emotions, spark imagination, and leave something that lingers after the screen goes dark. For me, every mechanic is a message, every level a story, and every player a collaborator. If a game doesn\'t leave a mark, it wasn\'t worth building.',
      linkedin: 'https://www.linkedin.com/in/nguy%E1%BB%85n-h%E1%BA%A3i-37a6b5211/'
    },
    {
      username: '@zok',
      name: 'Mai Tài',
      role: 'AI Lead',
      specialties: 'AI Engineer, MLOps, Fullstack Developer',
      quote: '"I spend half my time building the future of intelligence, and the other half trying to center a `<div>`" For me, that\'s not just a joke—it\'s a core belief. The most brilliant AI is useless if it isn\'t delivered through a robust, user-friendly application. Our focus is on the complete journey: from architecting the model and engineering the data pipelines to deploying the full application. We don\'t just build algorithms; we ship intelligent experiences.',
      linkedin: 'https://www.linkedin.com/in/mai-t%C3%A0i-8a672a2a0/'
    },
    {
      username: '@temaz',
      name: 'Temaz',
      role: 'Technical',
      specialties: 'AI Engineer, NLP Engineer, Backend Developer',
      quote: 'An AI engineer passionate about AI and Blockchain, with experience in building MCP-RAG chatbots and contributing to several projects within the Solana ecosystem. I combine strong technical expertise with real-world project experience, while actively contributing to tech communities through talks, training sessions, and collaborative innovation.',
      linkedin: ''
    },
    {
      username: '@NXC',
      name: 'Cuong Nguyen',
      role: 'Technical',
      specialties: 'AI Engineer, Backend Developer',
      quote: 'AI enthusiast specializing in AI applications, research, backend development, and blockchain solutions. Experienced in building scalable systems, designing RAG pipelines, integrating LLMs, and deploying AI models across both software and hardware environments.',
      linkedin: 'https://www.linkedin.com/in/cuong-nguyen-2715a136b/'
    }
  ],
  pixStudio: [
    {
      username: '@V',
      name: 'Vivian Dinh',
      role: 'PiX.studio HOD',
      specialties: 'Community Builder, Digital Marketer, Event Organizer, Social Media Specialist',
      quote: '"Building communities is not just about connection, it\'s about creating impact that lasts." My passion lies in blending creativity and technology to deliver meaningful experiences for both communities and businesses.',
      linkedin: 'https://www.linkedin.com/in/vivian-dinh-506165276/'
    },
    {
      username: '@TKP',
      name: 'Phúc Thái',
      role: 'Design Leader',
      specialties: 'Graphic Designer, Video Editor, Cameraman, Art Director',
      quote: '"Creativity is the bridge between imagination and impact." I thrive on transforming ideas into engaging visuals that not only capture attention but also inspire action.',
      linkedin: 'http://www.linkedin.com/in/phúc-thái-33039636b'
    },
    {
      username: '@zan',
      name: 'Giang NTQ',
      role: 'Content Lead',
      specialties: 'Content Creator, Digital Marketer, Progress Tracking',
      quote: 'I help ideas take shape and find their voice. My role is to bring clarity and direction so others can move forward with confidence. What I create is built to inspire progress that truly lasts.',
      linkedin: 'https://www.linkedin.com/in/giangntq/'
    },
    {
      username: '@Mill',
      name: 'Hien Phan',
      role: 'Media Assistant',
      specialties: 'Content Creator, Administrative, Event Media Coordinator',
      quote: '"Turning overload into overachieve." As a multitasker, I bridge content, events, and media to build powerful brand presence. Blending creative vision with practical execution, this role creates meaningful connections and inspires audiences.',
      linkedin: 'https://www.linkedin.com/in/hien-phan-mill01/'
    },
    {
      username: '@jay',
      name: 'Jay Nguyen',
      role: 'Marketing',
      specialties: 'Data Analyst, Content Creator, Digital Marketer',
      quote: 'I approach marketing with patience. I try to keep things simple, so they may last. The work is meant to speak, not me.',
      linkedin: 'https://www.linkedin.com/in/jaynguyen-jay/'
    },
    {
      username: '@orentB',
      name: 'Orent B',
      role: 'Graphic Design',
      specialties: '2D Artist, Graphic Designer',
      quote: '"I dream in galaxies, I draw in fantasies" My art embraces fantasy and mystery, while my design focuses on minimalism. This allows me to create works that are both imaginative and functional. I believe in the power of colors to evoke emotion, yet I balance them with clarity and structure to deliver impactful visuals.',
      linkedin: 'https://www.linkedin.com/in/orentb/'
    },
    {
      username: '@eirian',
      name: 'Tâm Như Nguyễn Trần',
      role: 'Content & Marketing Assistant',
      specialties: 'Content Creator, Customer Service, Market Research',
      quote: 'I turn ideas and customer insights into engaging content and clear strategies. With a structured yet creative approach, I help teams communicate effectively and bring projects to life with impact and clarity.',
      linkedin: 'https://www.linkedin.com/in/t%C3%A2m-nh%C6%B0-nguy%E1%BB%85n-tr%E1%BA%A7n-86a086222/'
    },
    {
      username: '@nhiivuii',
      name: 'Nhi Lê Khánh',
      role: 'Graphic Designer',
      specialties: 'Branding, UI/UX',
      quote: 'I\'m a graphic designer passionate about turning ideas into impactful visuals. Through my work, I aim to create designs that not only capture attention but also build meaningful connections between brands and their audiences.',
      linkedin: 'https://www.linkedin.com/in/nhi-l%C3%AA-kh%C3%A1nh-0375522ba'
    }
  ]
}

// Testimonials data
export const testimonialsData = [
  {
    name: 'Robert Thompkins',
    quote: 'Traveling in Da Nang felt effortless with the PiX chatbox. It instantly guided me to local restaurants and entertainment spots with fair prices. No tourist traps, just authentic experiences. It\'s like having a local friend in your pocket.',
    role: 'Digital Nomad'
  },
  {
    name: 'William Thorne',
    quote: 'You show such a great understanding of our offer. You actively listen to what each organisation is trying to achieve and tie everything together so well. Well done!',
    role: 'Business Partner'
  },
  {
    name: 'Carla Thomas',
    quote: 'Thank you for always being on hand to offer help. Always answering questions and being flexible with your time! I especially appreciate you coming up with new ways of working and trying to make my role easier for me as my role adapts and changes.',
    role: 'Client'
  },
  {
    name: 'John David',
    quote: 'PiX chatbox made exploring Da Nang so easy! It pointed me to amazing local restaurants with great prices and hidden spots tourists usually miss. It felt like I had a personal guide 24/7.',
    role: 'Tourist'
  },
  {
    name: 'Julieta Melina',
    quote: 'The team\'s collaboration was truly impressive. They brought fresh creative ideas and made the right changes to elevate our brand image. The results were beyond my expectations, and I couldn\'t be more satisfied. Thanks again PiXerse!',
    role: 'Brand Manager'
  }
]

// FAQ data
export const faqData = {
  'About the Agency': [
    {
      question: 'Who are you? What do you do?',
      answer: 'We are PiXerse, a multidisciplinary company that blends creativity and technology to deliver impactful solutions. We specialize in both IT services (Pix.teq) and creative services (Pix.studio).'
    },
    {
      question: 'What are your core values and working style?',
      answer: 'Our core values are innovation, creativity, excellence, and community building. We work collaboratively, focusing on practical solutions that empower communities and connect ideas with brand stories.'
    },
    {
      question: 'Do you offer your own in-house products?',
      answer: 'Yes, we have developed PiXity.AI, an intelligent chatbot platform, and various gaming experiences. We also run community initiatives like PiX.Lab and DaNang Localist.'
    },
    {
      question: 'What expertise and experience does your team bring?',
      answer: 'Our team combines expertise in AI/ML, blockchain development, cybersecurity, UX/UI design, digital marketing, content creation, and community building.'
    }
  ],
  'About Services': [
    {
      question: 'What services does the agency provide?',
      answer: 'We offer two main service categories: Technology & Digital Solutions (Pix.teq) including AI, blockchain, and cybersecurity; and Creative & Marketing Solutions (Pix.studio) including branding, design, and digital marketing.'
    },
    {
      question: 'Can services be customized to meet specific client needs?',
      answer: 'Absolutely! We tailor our solutions to meet specific client requirements, whether you need a complete digital transformation or specific creative services.'
    },
    {
      question: 'Are your services suitable for small businesses, startups, or large brands?',
      answer: 'Our services are designed to scale and adapt to businesses of all sizes, from startups to enterprise-level organizations.'
    },
    {
      question: 'What does the workflow look like, from brief to delivery?',
      answer: 'We start with understanding your needs, followed by strategic planning, design/development phases, testing/refinement, and finally delivery with ongoing support.'
    }
  ],
  'About Pricing & Timeline': [
    {
      question: 'How are service fees calculated?',
      answer: 'Our pricing is project-based and depends on scope, complexity, and timeline. We provide transparent quotes after understanding your specific requirements.'
    },
    {
      question: 'Do you provide transparent pricing and clear contracts?',
      answer: 'Yes, we believe in complete transparency. All pricing and project details are clearly outlined in our contracts before work begins.'
    },
    {
      question: 'What\'s the average turnaround time for a project?',
      answer: 'Project timelines vary based on complexity. Simple projects may take 2-4 weeks, while comprehensive solutions can take 2-6 months. We provide detailed timelines during planning.'
    },
    {
      question: 'Do you support urgent/fast-track projects?',
      answer: 'Yes, we can accommodate urgent projects with adjusted timelines and dedicated resources, though this may affect pricing.'
    }
  ],
  'About Support & Contact': [
    {
      question: 'What\'s the best way to get in touch?',
      answer: 'You can reach us through our contact form, email, or social media channels. We\'re also available on Telegram and LinkedIn.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes, we provide initial consultations to understand your needs and explore how we can help achieve your goals.'
    },
    {
      question: 'Can we work together remotely?',
      answer: 'Absolutely! We work with clients globally and have extensive experience in remote collaboration using modern communication tools.'
    },
    {
      question: 'Do you provide post-project support?',
      answer: 'Yes, we offer ongoing support and maintenance services to ensure your solutions continue to perform optimally.'
    }
  ]
}