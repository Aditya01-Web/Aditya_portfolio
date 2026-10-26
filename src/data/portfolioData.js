 import scriptedReality from '../assets/scripted-reality.png';
 import Coffee from '../assets/CoffeeOrder.png';
 import PromptENG from '../assets/Prompt-eng.png';
 import Internship from '../assets/Internship-certificate.png';
/**
 * =====================================================================
 * PORTFOLIO DATA & CONTENT CONFIGURATION
 * =====================================================================
 * This file is the single place to update your website information.
 * Any edits made here will immediately reflect across the entire site:
 * 
 *  1. profileData      -> Your name, tagline, bio, contact details & tools
 *  2. aboutData        -> About Me section text, image, and quote
 *  3. whyMeData        -> Why Choose Me problem-solving points
 *  4. servicesData     -> Services offered and categories
 *  5. projectsData     -> Featured projects, live links, code & tags
 *  6. certificatesData -> Credentials, issuers, years and links
 *  7. processSteps     -> Your 4-step client workflow
 *  8. testimonialsData -> Client reviews and testimonials
 *  9. faqsData         -> Frequently asked questions & answers
 * =====================================================================
 */

// 1. Profile & Personal Contact Info
export const profileData = {
  name: "Aditya Pawar",
  tagline: "Full-Stack Developer & AI Solutions Specialist",
  intro: "I build modern web applications, high-converting websites, and intelligent AI workflows designed to elevate brands and streamline business operations.",
  email: "pawaraditya832@gmail.com",
  phone: "+91 98765 43210",
  availability: "Available for freelance projects & full-time roles",
  replyTime: "Usually responds within 24 hours",
  tools: ["JavaScript (ES6+)", "HTML5 / CSS3", "Python", "OpenAI API", "Node.js", "Git", "Figma"],
  socialLinks: {
    github: "https://github.com/Aditya01-Web/OrderingSystem",
    linkedin: "https://www.linkedin.com/in/aditya-pawar8072/"
  }
};

// --- Numerical Statistics ---
export const statsData = [
  {
    label: "Projects Completed",
    value: 24,
    sublabel: "Web apps & AI tools delivered"
  },
  {
    label: "Certificates Earned",
    value: 8,
    sublabel: "Verified professional credentials"
  },
  {
    label: "Technologies Known",
    value: 14,
    sublabel: "Languages, frameworks & APIs"
  }
];

// --- About Me Data ---
export const aboutData = {
  heading: "About Me",
  image: "/assets/images/profile/aditya-photo.jpg",
  statement: "I am a full-stack software developer. I focus on building clean, fast websites and practical AI tools for small businesses. I believe code should solve real business problems without unnecessary complexity.",
  quote: "I focus on clean code, transparent communication, and delivering real value without fluff."
};

// --- Why Choose Me ---
export const whyMeData = [
  {
    id: "why-1",
    problem: "Slow page load times costing you potential clients.",
    solution: "Fast, Lightweight Websites",
    title: "Optimized Performance",
    description: "I build websites with clean code that load under 1 second, keeping your visitors engaged and boosting your search engine rankings."
  },
  {
    id: "why-2",
    problem: "Unclear communication and missed project deadlines.",
    solution: "Direct 1-on-1 Contact",
    title: "Transparent Collaboration",
    description: "You work directly with me from day one. No middle managers or confusing jargon — just clear daily updates and direct answers."
  },
  {
    id: "why-3",
    problem: "Repetitive manual tasks taking up hours every day.",
    solution: "Intelligent AI Automation",
    title: "Automated Workflows",
    description: "I build custom AI chatbots and automated workflows that handle routine support and data entry so you can focus on growing your business."
  },
  {
    id: "why-4",
    problem: "Generic templates that look just like your competitors.",
    solution: "Custom-Tailored Solutions",
    title: "Unique Brand Identity",
    description: "Every solution I build is custom-crafted for your specific goals, ensuring your business stands out with a unique, modern online presence."
  }
];

// --- Frequently Asked Questions ---
export const faqsData = [
  {
    category: "pricing",
    question: "How much does a custom website or AI tool cost?",
    answer: "Project pricing depends on your specific goals, feature scope, and timeline. I provide transparent, fixed-price project quotes before any work begins so there are no unexpected surprises."
  },
  {
    category: "process",
    question: "How long does a typical project take to complete?",
    answer: "Most business websites and AI tools are completed within 2 to 4 weeks. After our initial discovery call, I will give you an exact milestone schedule."
  },
  {
    category: "process",
    question: "What do you need from me before starting?",
    answer: "We start with a brief discussion to clarify your goals, content requirements, and design preferences. If you have existing text or branding, that's great; if not, I can help organize it."
  },
  {
    category: "support",
    question: "Do you provide support after the site or tool is launched?",
    answer: "Yes, I offer post-launch support and maintenance to ensure everything runs smoothly, including minor updates, technical checks, and bug fixes."
  },
  {
    category: "pricing",
    question: "Do you require a deposit before beginning work?",
    answer: "Yes, standard project engagements typically begin with a 50% initial deposit, with the remaining balance due upon final project approval and launch."
  },
  {
    category: "support",
    question: "Can I update content on my website myself later?",
    answer: "Absolutely. I structure content cleanly so updating text, adding new projects, or editing details is straightforward and requires no coding knowledge."
  }
];

// --- Services Offered ---
export const servicesData = [
  {
    id: "business-websites",
    title: "Business Websites",
    category: "web",
    description: "Custom-built, high-performance websites tailored to represent your brand professionally and convert visitors into loyal clients."
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    category: "web",
    description: "Modernize your existing site with faster load speeds, responsive mobile layouts, sleek aesthetics, and enhanced user experience."
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    category: "ai",
    description: "Intelligent conversational bots trained on your business data to deliver 24/7 automated customer support and lead qualification."
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    category: "ai",
    description: "Streamline manual operations by connecting business applications, automating repetitive tasks, and reducing human data entry errors."
  },
  {
    id: "ai-agents-integrations",
    title: "AI Agents & Integrations",
    category: "ai",
    description: "Custom autonomous AI agents integrated into your software pipeline to automate research, synthesis, and complex decision workflows."
  },
  {
    id: "ai-content-seo",
    title: "AI Content & SEO",
    category: "content",
    description: "Data-driven content strategies and AI-assisted copywriting optimized for search engine rankings and targeted audience engagement."
  },
  {
    id: "ai-video-image-editing",
    title: "AI Video & Image Editing",
    category: "content",
    description: "Generative AI asset creation, image enhancement, background removal, and dynamic promotional video clip generation."
  }
];

// --- Portfolio Projects ---
export const projectsData = [
  {
    id: "project-coffee",
    title: "Cafe Coffee Ordering System",
    category: "web",
    result: "Interactive digital cafe menu and seamless real-time order customization app.",
    tools: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    image: Coffee,
    liveUrl: "https://coffeeorderingsystem.vercel.app/"
  },
  {
    
    id: "project-scripted-reality",
    title: "The Scripted Reality",
    category: "web",
    result: "Engaging web platform delivering immersive narrative video content and interactive experiences.",
    tools: ["React", "Vite", "Modern CSS", "JavaScript"],
    image:  scriptedReality,
    liveUrl: "https://scripted-reality.vercel.app/"
  },
  {
    id: "project-1",
    title: "SaaS Analytics Dashboard",
    category: "web",
    result: "Increased client conversion rate by 34% and reduced dashboard load times to under 1 second.",
    tools: ["HTML5", "CSS Grid", "Vanilla JS", "Chart.js"],
    image: "/assets/images/projects/project1.jpg",
    liveUrl: "https://example.com/demo1",
    codeUrl: "https://github.com/example/saas-dashboard"
  },
  {
    id: "project-2",
    title: "Customer Support AI Bot",
    category: "ai",
    result: "Automated 65% of incoming support tickets while maintaining a 98% CSAT satisfaction score.",
    tools: ["Python", "OpenAI API", "Node.js", "Webhooks"],
    image: "/assets/images/projects/project2.jpg",
    liveUrl: "https://example.com/demo2",
    codeUrl: "https://github.com/example/ai-support-bot"
  },
  {
    id: "project-3",
    title: "Automated Content & SEO Pipeline",
    category: "content",
    result: "Generated 120+ SEO-optimized articles per month, driving 45k organic monthly visits.",
    tools: ["JavaScript", "REST APIs", "Markdown", "AI Prompts"],
    image: "/assets/images/projects/project3.jpg",
    liveUrl: "https://example.com/demo3",
    codeUrl: "https://github.com/example/seo-automation"
  }
];

// --- Certifications & Credentials ---
export const certificatesData = [
  {
    id: "cert-linkedin-1",
    name: " Prompt Engineering for Generative AI",
    issuer: "LinkedIn Learning",
    year: "2026",
    image:PromptENG,
    link: "https://media.licdn.com/dms/image/v2/D4D1FAQF76Zokz2GEag/feedshare-document-images_1920/B4DZwadGoFJkAo-/1/1769970364477?e=1793836800&v=beta&t=bpcz-J8lavBxAL9iz2LwNaOiLJcjbNIYnaMGBL8OW1Y"
  },
  {
    id: "cert-linkedin-2",
    name: "The Complete Full-Stack Web Development",
    issuer: "Udemy",
    year: "2026",
    image: "./assets/images/certificates/FULL-STACK COURSE Certificate Udemy_page-0001.jpg"
    
  },
 
  {
    id: "cert-linkedin-5",
    name: "Web Development Internship House of Artist",
    issuer: "Industry Ready",
    year: "2025",
    image:Internship,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7358006935276716033/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3B6Q3o3Hk%2FSrWrxT5W5YgCCw%3D%3D"
  }
];

// --- Process Workflow Steps ---
export const processSteps = [
  {
    step: 1,
    title: "Discovery & Scope",
    description: "We discuss your business goals, target audience, technical requirements, and define clear project milestones."
  },
  {
    step: 2,
    title: "Architecture & Design",
    description: "I structure clean system logic, craft intuitive user interfaces, and outline high-performing API integrations."
  },
  {
    step: 3,
    title: "Development & Testing",
    description: "Building your solution with clean code, rigorous performance optimizations, responsive design, and AI features."
  },
  {
    step: 4,
    title: "Launch & Support",
    description: "Deploying your application live, verifying security & speed, and providing ongoing support for continuous success."
  }
];

// --- Testimonials ---
export const testimonialsData = [
  {
    quote: "Aditya delivered an outstanding web app that transformed our client onboarding. Fast, communicative, and extremely skilled.",
    author: "Marcus Vance",
    role: "Founder, Apex Growth Digital"
  },
  {
    quote: "The custom AI chatbot built by Aditya automated over 60% of our daily customer inquiries effortlessly. Highly recommended!",
    author: "Elena Rostova",
    role: "Operations Lead, Nexus Commerce"
  }
];
