import faqs from '@data/en/faqs.json';
import features from '@data/en/features.json';
import pricing from '@data/en/pricing.json';

/**
 * English copy table. This file defines the shape every other locale must
 * satisfy (see `Copy` in `./index.ts`), so a missing translation fails
 * `astro check` instead of leaking English onto a localised page.
 *
 * Paths are unlocalised (`/products`, not `/fr/products`); callers run them
 * through `localePath()` from `@utils/locale`.
 */
export const en = {
  site: {
    /** Default `<meta name="description">` when a page sets none. */
    description:
      'HealthTalks brings you insightful discussions, expert medical perspectives, and practical wellness guidance to empower healthier lives and communities.',
    /** schema.org `WebSite.description` in every page's `isPartOf`. */
    descriptionShort:
      'HealthTalks brings you insightful discussions, expert medical perspectives, and practical wellness guidance.',
    ogTitle: 'HealthTalks: Wellness, Medicine & Community Health Conversations',
    ogDescription:
      'Explore life-changing health discussions with leading medical practitioners, wellness researchers, and health advocates on HealthTalks.',
  },

  layout: {
    skipToContent: 'Skip to content',
    changeLanguage: 'Change language',
    toggleNavigation: 'Toggle navigation',
    darkTheme: 'Dark Theme Toggle',
    lightTheme: 'Light Theme Toggle',
    toggleTheme: 'Toggle theme',
  },

  nav: {
    /** Labels for `navLinks` in `@data/navigation`, keyed by id. */
    labels: {
      home: 'Home',
      products: 'Health Topics',
      services: 'Talks & Programs',
      blog: 'Blog & Articles',
      contact: 'Contact',
    },
    footer: {
      /** Section titles and link labels for `footerSections` in `@data/navigation`, keyed by id. */
      sectionTitles: {
        ecosystem: 'Health Portal',
        company: 'HealthTalks',
      },
      links: {
        documentation: 'Wellness Guides',
        tools: 'Health Topics',
        services: 'Programs & Care',
        about: 'About Us',
        blog: 'Blog & Articles',
        careers: 'Join Our Team',
        customers: 'Community Stories',
      },
      hiringBadge: "We're hiring!",
      stayUpToDate: 'Stay up to date',
      stayUpToDateContent:
        'Get weekly evidence-based health insights, nutrition guides, and expert episode alerts.',
      craftedBy: 'Crafted for healthier communities',
      newsletterDemoMessage:
        'Thank you! You are now subscribed to HealthTalks updates.',
    },
    /** Text for the optional mega menu (`@data/mega_link`). */
    megaMenu: {
      services: {
        guides: {
          title: 'Health Guides & Advice',
          description:
            'Dive deep into helpful guides, medical explanations, and wellness articles from certified doctors',
        },
        integrations: {
          title: 'Community Programs',
          description:
            'Engage with interactive webinars, community dialogues, and live health Q&A sessions',
        },
        experts: {
          title: 'Medical Specialists',
          description: 'Access trusted medical advice and panels with leading clinicians',
        },
        tools: {
          title: 'Health Literacy Topics',
          description:
            'Live healthier, longer. Evidence-based strategies for metabolic, heart, and lifestyle vitality',
        },
        plans: {
          title: 'Community Memberships',
          description:
            'Join our community to access exclusive doctor masterclasses and health archives',
        },
        community: {
          title: 'Community Forum',
          description: 'Learn, share, and connect with other ScrewFast users',
        },
      },
      successStories: 'Success Stories',
      successStory: {
        description:
          'See how ScrewFast has empowered businesses of all sizes to achieve outstanding results.',
        imageAlt: 'Portrait of a smiling person',
      },
      learnMore: 'Learn more',
    },
  },

  forms: {
    email: 'Email',
    emailAddress: 'Email address',
    emailPlaceholder: 'Enter your email',
    emailInvalid:
      'Please include a valid email address so we can get back to you',
    subscribe: 'Subscribe',
    phone: 'Phone Number',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot password?',
    passwordHint: '8+ characters required',
    passwordMismatch: 'Password does not match the password',
    rememberMe: 'Remember me',
    acceptTerms: 'I accept the ',
    termsAndConditions: 'Terms and Conditions',
    or: 'Or',
    demoFallbackMessage: 'Demo only — this form is not connected to a backend.',
  },

  auth: {
    logIn: 'Log in',
    signIn: 'Sign in',
    signUp: 'Sign up',
    signInWithGoogle: 'Sign in with Google',
    signUpWithGoogle: 'Sign up with Google',
    noAccountYet: "Don't have an account yet?",
    signUpHere: 'Sign up here',
    alreadyHaveAccount: 'Already have an account?',
    signInHere: 'Sign in here',
    forgotPasswordTitle: 'Forgot password?',
    rememberYourPassword: 'Remember your password?',
    resetPassword: 'Reset password',
    credentialsDemoNotice:
      'Demo only – connect a real auth provider before collecting credentials.',
    recoveryDemoNotice:
      'Demo only – password recovery is not connected to a backend.',
    signInDemoMessage: 'Demo only – sign-in is not connected to a backend.',
    registerDemoMessage:
      'Demo only – registration is not connected to a backend.',
    recoverDemoMessage:
      'Demo only – password recovery is not connected to a backend.',
  },

  share: {
    share: 'Share',
    shareOn: (platform: string) => `Share on ${platform}`,
    copied: 'Copied',
    copyLink: 'Copy link',
  },

  banner: {
    dismiss: 'Dismiss',
    region: 'Informational banner',
  },

  blog: {
    readMore: 'Read More',
    minRead: (minutes: number) => `${minutes} min read`,
    relatedArticles: 'Related articles',
    wasHelpful: 'Was this post helpful?',
    yes: 'Yes',
    no: 'No',
    ogSection: 'Blog',
  },

  insights: {
    readMore: 'Read more',
    tableOfContents: 'Table of Contents:',
    ogSection: 'Insights',
  },

  products: {
    ogSection: 'Hardware Tools',
    tabs: 'Tabs',
  },

  notFound: {
    title: 'Page Not Found',
    subTitle: "Oops, this isn't the tool you were looking for!",
    content:
      "Don't let this hiccup slow you down. Let's get you back to building your masterpiece.",
    goHome: 'Go Home',
    goBack: 'Go Back',
  },

  home: {
    banner: 'Join the HealthTalks Community & Latest Episodes',
    hero: {
      title:
        'Empowering Healthier Lives Through <span class="text-dark-green font-extrabold">HealthTalks</span>',
      subTitle:
        'Engaging discussions, expert medical insights, and practical wellness guidance for individuals and communities.',
      primaryBtn: 'Explore Talks',
      secondaryBtn: 'Join Community',
      rating: '<span class="font-bold">4.9</span> / 5',
      reviews: 'From Over <span class="font-bold">15k+</span> Active Listeners',
      imageAlt:
        'HealthTalks panel discussion and health insights presentation',
    },
    clients: {
      title: 'Trusted by Health & Wellness Leaders',
      subTitle: 'Collaborating with clinics, medical professionals, and wellness organizations.',
    },
    trending: {
      sectionTitle: 'Trending on HealthTalks',
      badge: 'Trending',
      featured: {
        tag: 'Gut Health & Digestion',
        title: 'Day 6: IBS or IBD? Decode Your Gut Symptoms & Microbiome Health',
        description:
          'Learn the evidence-based nutritional strategies, fiber balance, and medical checkpoints that help manage digestive symptoms and protect overall wellness.',
        author: 'Dr. Sarah Mwangi',
        readTime: '5 min read',
      },
      stories: [
        {
          tag: "Women's Health",
          title: 'We Surveyed 1,032 Women: Barriers to Early Screenings and Preventive Care',
          readTime: '4 min read',
        },
        {
          tag: 'Sleep & Recovery',
          title: '10 Evidence-Based Habits and Natural Sleep Aids for Restful Nights',
          readTime: '3 min read',
        },
        {
          tag: 'Senior & Family Care',
          title: 'Managing Chronic Health and Essential Clinical Screenings for Elders',
          readTime: '6 min read',
        },
        {
          tag: 'Health Literacy',
          title: 'Practical Daily Habits That Strengthen Immunity and Lower Infection Risks',
          readTime: '4 min read',
        },
      ],
    },
    featuredVideos: {
      badge: 'Video Spotlight',
      title: 'Doctor Insights & Health Masterclasses',
      subTitle:
        'Watch recorded medical talks, expert wellness advice, and preventative health tutorials from certified healthcare professionals.',
      emptyState: 'No featured videos yet. Check back soon for fresh health talks!',
      watchNow: 'Watch Talk',
      durationLabel: 'min',
    },
    featuresGeneral: {
      title: 'Evidence-Based Wellness for Everyday Life',
      subTitle:
        "At HealthTalks, we bridge clinical medical research with practical lifestyle solutions. From nutrition and mental resilience to preventive healthcare, our mission is to empower you to make informed decisions for your health and longevity.",
      imageAlt: 'Community members engaging in an interactive HealthTalks wellness workshop',
    },
    featuresNavs: {
      title:
        'Explore <span class="text-dark-green font-bold">HealthTalks</span> core wellness pillars to support your everyday vitality.',
      tabs: {
        tools: {
          heading: 'Clinical & Whole-Food Nutrition',
          content:
            "Discover science-backed meal planning, metabolic health advice, and personalized nutrition strategies shared by certified clinical dietitians and physicians.",
          alt: 'Nutritious balanced meal with colorful vegetables and healthy proteins',
        },
        dashboard: {
          heading: 'Active Living & Cardiovascular Fitness',
          content:
            "Build sustainable movement habits, functional fitness routines, and joint mobility practices designed for all ages to increase daily energy and long-term vitality.",
          alt: 'Group of people jogging together in a park for healthy active living',
        },
        features: {
          heading: 'Preventive Care & Health Screening',
          content:
            "Stay proactive with regular health screenings, immunization awareness, and early detection insights delivered by board-certified healthcare clinicians.",
          alt: 'Healthcare provider administering preventive vaccine in a clinic',
        },
      },
    },
    testimonials: {
      title: 'Inspiring Healthier Lives Daily',
      subTitle:
        'Thousands of readers, patients, and health seekers trust HealthTalks for clear, reliable, and uplifting health education.',
      quotes: [
        {
          content:
            'HealthTalks breaks down intimidating medical topics into clear, compassionate, and actionable steps. Their practical episodes on heart health and daily nutrition transformed the lifestyle of our entire clinic community!',
          author: 'Dr. Amanda Chen, MD',
          role: 'Family Medicine Physician & Community Health Advocate',
        },
      ],
      statistics: [
        {
          count: '50k+',
          description:
            'monthly readers and listeners exploring our evidence-based health portal',
        },
        {
          count: '98%',
          description:
            'of listeners report adopting healthier daily habits within four weeks',
        },
        {
          count: '150+',
          description:
            'certified doctors, dietitians, and specialists featured across our sessions',
        },
        {
          count: '100%',
          description: 'medically reviewed and fact-checked health articles',
        },
      ],
    },
    faqTitle: 'Frequently<br />asked questions',
    heroAlt: {
      title: "Join the HealthTalks Community",
      subTitle:
        'Your trusted health portal and wellness publication — inspiring healthier communities through credible knowledge, expert advice, and open dialogue.',
      btn: 'Explore Health Articles',
    },
  },

  services: {
    title: 'Programs & Services',
    metaDescription:
      'Connecting medical expertise with community wellness, HealthTalks delivers comprehensive health education, preventive programs, and clinical consultations.',
    ogTitle: 'Health Programs & Expert Medical Services | HealthTalks',
    intro: {
      title: 'Expert Medical Guidance for Healthier Communities',
      subTitle:
        'At HealthTalks, we pride ourselves on delivering evidence-based medical education and actionable wellness guidance. Our team of certified clinicians and health advocates supports your journey toward lasting vitality.',
      cta: 'Contact Our Medical Team',
    },
    articles: {
      guidance: {
        title: 'Delivering Evidence-Based Clinical Guidance',
        subTitle:
          'Navigating personal health decisions can feel daunting. Through our interactive sessions and clinical guides, we help you understand disease prevention, nutritional strategies, and diagnostic screenings so you can make confident, informed choices.',
        imageAlts: [
          'Doctor consulting with patient in clinical setting',
          'Medical specialists discussing health research',
        ],
      },
      craftsmanship: {
        title: 'Building Sustainable Health & Nutrition Habits',
        subTitle:
          'Lifelong wellness is built on small, consistent daily decisions. We provide science-backed protocols for whole-food nutrition, metabolic health, reducing refined sugars, and safeguarding cardiovascular vitality.',
        imageAlts: ['Fresh wholesome fruits and balanced nutrition'],
        cta: 'Explore Wellness Guides',
      },
      oversight: {
        title: 'Maternal, Newborn & Family Health Initiatives',
        subTitle:
          'The health of mothers and children forms the cornerstone of resilient communities. HealthTalks delivers vetted pediatric advice, prenatal and postnatal care guides, and essential childhood immunization literacy.',
        imageAlts: [
          'Mother holding and nurturing child with care',
          'Pediatric specialist conducting developmental checkup',
        ],
      },
      maintenance: {
        title: 'Sustaining Immunity & Preventative Hygiene',
        subTitle:
          'Prevention is always superior to cure. We promote evidence-based hygiene practices, environmental sanitation, restorative sleep hygiene, and holistic stress management to keep illnesses at bay.',
        imageAlts: ['Person thoroughly washing hands with clean water and soap'],
      },
      bespoke: {
        title: 'Workplace Wellness & Corporate Health Programs',
        subTitle:
          'For organizations, schools, and enterprise teams, HealthTalks designs bespoke corporate wellness workshops, health screenings, and mental resilience seminars that elevate staff productivity and reduce chronic disease risks.',
        imageAlts: [
          'Team members participating in healthy corporate fitness routine',
          'Nutritious meal and wellness session for employees',
        ],
        cta: 'Partner With Us',
      },
    },
    stats: {
      title: 'Our Health Impact by the Numbers',
      subTitle:
        'Our commitment to medical credibility and actionable health education is reflected across every community initiative we lead.',
      mainStatTitle: '98%',
      mainStatSubTitle:
        'of community members report adopting healthier daily habits after HealthTalks sessions',
      stats: [
        { stat: '10,000+', description: 'listeners & readers reached' },
        { stat: '150+', description: 'certified medical specialists' },
        { stat: '100%', description: 'evidence-based clinical content' },
      ],
    },
  },

  contact: {
    title: 'Contact',
    metaDescription:
      'Have questions or want to reach out to our medical team? Contact HealthTalks for health inquiries, collaborations, and community feedback.',
    ogTitle: 'Contact Us | HealthTalks',
    heading: 'Contact Us',
    subTitle:
      'Have questions, feedback, or health topics you want covered? Reach out and connect with the HealthTalks team.',
    formTitle: 'Fill in the form below',
    formSubTitle: "We'll get back to you in 1-2 business days.",
    firstName: 'First Name',
    lastName: 'Last Name',
    details: 'Details',
    send: 'Send Message',
    demoMessage:
      'Thanks! Your message has been sent to HealthTalks.',
    knowledgeHeading: 'Health Guides',
    knowledgeContent: 'Browse through all of our evidence-based wellness articles and health guides.',
    knowledgeLink: 'Visit Guides & Articles',
    faqHeading: 'FAQ',
    faqContent: 'Explore our FAQ for quick, clear answers to common health and portal questions.',
    faqLink: 'Visit FAQ',
    officeHeading: 'Our Office',
    officeContent: 'HealthTalks Media & Wellness',
    emailHeading: 'Contact us by email',
    emailContent: 'Prefer email? Send your inquiries to',
  },

  blogIndex: {
    title: 'Blog & Articles',
    metaDescription:
      'Stay up-to-date with medical breakthroughs, preventive care, nutrition, and wellness guides from HealthTalks medical experts.',
    ogTitle: 'Health & Wellness Blog | HealthTalks',
    heading: 'Your Gateway to Health & Wellness',
    subTitle:
      'Explore the latest health research, doctor-approved wellness tips, nutrition strategies, and inspiring patient stories on HealthTalks.',
    insightsHeading: 'Expert Insights',
    insightsSubTitle:
      'In-depth medical analyses, wellness research, and lifestyle tips curated by our certified practitioners.',
    noPosts: 'No health articles published yet. Check back soon.',
    noInsights: 'No insights available yet. Check back soon.',
  },

  productsIndex: {
    title: 'Health Topics',
    metaDescription:
      'Discover comprehensive health categories, medical specialties, preventive programs, and clinical guides.',
    ogTitle: 'Health Topics & Programs | HealthTalks',
    heading: 'Health Topics & Programs',
    subTitle:
      'Browse our curated health categories, evidence-based wellness programs, and specialized care guides designed to help you live healthier.',
    customerStories: 'Community Stories',
    testimonials: {
      title: 'Voices of HealthTalks Community',
      quotes: [
        {
          content:
            ' "HealthTalks transformed how I approach daily nutrition and managing my blood pressure. Having verified, doctor-reviewed information in simple language has been life-changing for my family." ',
          author: 'Dr. Sarah Mwangi',
          role: 'Community Health Advocate',
          avatarAlt: 'Community Health Advocate',
        },
        {
          content:
            ' "Finding trustworthy wellness advice used to feel overwhelming. HealthTalks makes medical topics accessible, engaging, and genuinely actionable for everyday living." ',
          author: 'David Omondi',
          role: 'Wellness Enthusiast & Marathon Runner',
          avatarAlt: 'Community Member',
        },
        {
          content:
            ' "The interactive discussions and patient-focused articles helped me understand preventive care and take proactive steps for my cardiovascular health." ',
          author: 'Amina Kassim',
          role: 'Patient & Nutrition Coach',
          avatarAlt: 'Nutrition Coach',
        },
      ],
    },
    stats: {
      title: 'Why Choose HealthTalks?',
      subTitle:
        'Evidence-based healthcare information, doctor-reviewed articles, and community support designed to help you thrive at every stage of life.',
      benefits: [
        'Medically reviewed and verified health content.',
        'Actionable nutrition, mental health, and wellness programs.',
        'Empowering patient communities and open dialogues with clinicians.',
      ],
    },
  },

  /** Locale-specific JSON data (already the good pattern; kept as-is). */
  data: { faqs, features, pricing },
};
