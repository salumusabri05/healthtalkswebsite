import faqs from '@data/sw/faqs.json';
import features from '@data/sw/features.json';
import pricing from '@data/sw/pricing.json';
import type { Copy } from './index';

/** Swahili copy table. Must satisfy `Copy` (the shape of `./en.ts`). */
export const sw: Copy = {
  site: {
    description:
      'HealthTalks inakuletea mijadala ya kina, mitazamo ya madaktari bingwa, na miongozo ya vitendo ya afya na ustawi ili kujenga jamii yenye afya bora.',
    descriptionShort:
      'Mijadala ya afya, ushauri wa kitaalamu wa kitabibu, na miongozo ya maisha yenye afya njema.',
    ogTitle: 'HealthTalks: Tovuti ya Afya, Tiba na Mazungumzo ya Jamii',
    ogDescription:
      'Gundua mazungumzo ya kubadilisha maisha na madaktari bingwa, wataalamu wa lishe na watafiti wa afya kupitia HealthTalks.',
  },

  layout: {
    skipToContent: 'Ruka hadi kwenye maudhui',
    changeLanguage: 'Badilisha lugha',
    toggleNavigation: 'Fungua menyu',
    darkTheme: 'Washa mandhari meusi',
    lightTheme: 'Washa mandhari meupe',
    toggleTheme: 'Badilisha mandhari',
  },

  nav: {
    labels: {
      home: 'Mwanzo',
      products: 'Mada za Afya',
      services: 'Vipindi na Huduma',
      blog: 'Makala na Blogu',
      contact: 'Wasiliana Nasi',
    },
    footer: {
      sectionTitles: {
        ecosystem: 'Rasilimali za Afya',
        company: 'HealthTalks',
      },
      links: {
        documentation: 'Miongozo ya Afya',
        tools: 'Mada za Afya',
        services: 'Vipindi na Ushauri',
        about: 'Kuhusu Sisi',
        blog: 'Blogu na Makala',
        careers: 'Nafasi za Kazi',
        customers: 'Jumuiya Yetu',
      },
      hiringBadge: 'Nafasi za kazi!',
      stayUpToDate: 'Pata Habari Mpya',
      stayUpToDateContent:
        'Pata makala za afya zilizothibitishwa kisayansi, miongozo ya lishe, na taarifa za vipindi vipya kila wiki.',
      craftedBy: 'Imeandaliwa kwa ajili ya jamii yenye afya',
      newsletterDemoMessage:
        'Asante! Umejiandikisha kupokea taarifa za HealthTalks.',
    },
    megaMenu: {
      services: {
        guides: {
          title: 'Miongozo na Elimu ya Afya',
          description:
            'Gundua miongozo ya kina na ufafanuzi wa kitaalamu kuhusu magonjwa na lishe bora.',
        },
        integrations: {
          title: 'Vipindi vya Jamii',
          description:
            'Shiriki katika mijadala yetu ya mtandaoni na warsha za moja kwa moja na madaktari.',
        },
        experts: {
          title: 'Madaktari Bingwa',
          description: 'Pata ushauri wa kitaalamu kutoka kwa madaktari walioidhinishwa.',
        },
        tools: {
          title: 'Mada za Kisasa',
          description:
            'Jifunze mbinu za kisasa za kudhibiti afya ya akili, moyo na lishe ya kila siku.',
        },
        plans: {
          title: 'Uanachama na Kujiunga',
          description:
            'Pata faida za uanachama wa HealthTalks kwa ajili ya familia yako au shirika.',
        },
        community: {
          title: 'Jukwaa la Jamii',
          description: 'Uliza maswali na jadili mada za afya na wengine kwenye jamii.',
        },
      },
      successStories: 'Shuhuda za Jamii',
      successStory: {
        description:
          'Tazama jinsi HealthTalks inavyosaidia maelfu ya watu kuboresha afya zao kila siku.',
        imageAlt: 'Picha ya tabasamu ya daktari',
      },
      learnMore: 'Fahamu Zaidi',
    },
  },

  forms: {
    email: 'Barua Pepe',
    emailAddress: 'Anwani ya barua pepe',
    emailPlaceholder: 'Weka barua pepe yako',
    emailInvalid:
      'Tafadhali weka anwani sahihi ya barua pepe ili tuweze kuwasiliana nawe',
    subscribe: 'Jiandikishe',
    phone: 'Nambari ya Simu',
    password: 'Nenosiri',
    confirmPassword: 'Thibitisha Nenosiri',
    forgotPassword: 'Umesahau nenosiri?',
    passwordHint: 'Herufi 8 au zaidi zinahitajika',
    passwordMismatch: 'Nenosiri halifanani',
    rememberMe: 'Nikumbuke',
    acceptTerms: 'Ninakubali ',
    termsAndConditions: 'Vigezo na Masharti',
    or: 'Au',
    demoFallbackMessage: 'Fomu hii ni ya majaribio — haijaunganishwa na mfumo.',
  },

  auth: {
    logIn: 'Ingia',
    signIn: 'Ingia',
    signUp: 'Jisajili',
    signInWithGoogle: 'Ingia kwa Google',
    signUpWithGoogle: 'Jisajili kwa Google',
    noAccountYet: 'Bado huna akaunti?',
    signUpHere: 'Jisajili hapa',
    alreadyHaveAccount: 'Tayari una akaunti?',
    signInHere: 'Ingia hapa',
    forgotPasswordTitle: 'Umesahau nenosiri?',
    rememberYourPassword: 'Unakumbuka nenosiri lako?',
    resetPassword: 'Badilisha nenosiri',
    credentialsDemoNotice:
      'Onyesho la majaribio – unganisha mfumo halisi wa usajili kabla ya kutumia.',
    recoveryDemoNotice:
      'Onyesho la majaribio – huduma ya kurejesha nenosiri haijaunganishwa.',
    signInDemoMessage: 'Onyesho la majaribio – kuingia hakuna mfumo uliounganishwa.',
    registerDemoMessage:
      'Onyesho la majaribio – usajili haujaunganishwa na mfumo.',
    recoverDemoMessage:
      'Onyesho la majaribio – kurejesha nenosiri hakuna mfumo uliounganishwa.',
  },

  share: {
    share: 'Shiriki',
    shareOn: (platform: string) => `Shiriki kwenye ${platform}`,
    copied: 'Imenakiliwa',
    copyLink: 'Nakili kiungo',
  },

  banner: {
    dismiss: 'Funga',
    region: 'Tangazo la taarifa',
  },

  blog: {
    readMore: 'Soma Zaidi',
    minRead: (minutes: number) => `Dakika ${minutes} za kusoma`,
    relatedArticles: 'Makala Zinazohusiana',
    wasHelpful: 'Je, makala hii imekusaidia?',
    yes: 'Ndiyo',
    no: 'Hapana',
    ogSection: 'Blogu ya Afya',
  },

  insights: {
    readMore: 'Soma zaidi',
    tableOfContents: 'Yaliyomo:',
    ogSection: 'Tafiti za Afya',
  },

  products: {
    ogSection: 'Mada za Afya',
    tabs: 'Vichupo',
  },

  notFound: {
    title: 'Ukurasa Haujapatikana',
    subTitle: 'Samahani, ukurasa unaoutafuta haupo!',
    content:
      'Usijali, rudi kwenye ukurasa mkuu ili uendelee kujifunza kuhusu afya na ustawi.',
    goHome: 'Rudi Mwanzo',
    goBack: 'Rudi Nyuma',
  },

  home: {
    banner: 'Jiunge na Jumuiya ya HealthTalks & Vipindi Vipya vya Afya',
    hero: {
      title:
        'Kujenga Jamii Yenye Afya Bora Kupitia <span class="text-dark-green font-extrabold">HealthTalks</span>',
      subTitle:
        'Mazungumzo ya kina kutoka kwa madaktari bingwa, wataalamu wa lishe, na miongozo thabiti ya afya kwa ajili yako na familia yako.',
      primaryBtn: 'Soma Makala za Afya',
      secondaryBtn: 'Wasiliana Nasi',
      rating: '<span class="font-bold">4.9</span> / 5',
      reviews: 'Kutoka kwa Wasomaji Zaidi ya <span class="font-bold">15k+</span>',
      imageAlt:
        'Daktari bingwa akitoa mwongozo wa afya kupitia HealthTalks',
    },
    clients: {
      title: 'Inaaminika na Mashirika na Vituo vya Afya',
      subTitle: 'Ushirikiano madhubuti na kliniki, wataalamu wa tiba na jamii.',
    },
    trending: {
      sectionTitle: 'Zinazovuma Zaidi HealthTalks',
      badge: 'Zinazovuma',
      featured: {
        tag: 'Afya ya Mfumo wa Chakula',
        title: 'Dalili za Tumbo na Mfumo wa Chakula: Jinsi ya Kutambua na Kuboresha Usagaji Chakula',
        description:
          'Gundua miongozo ya kitabibu kuhusu vyakula vyenye nyuzinyuzi, utambuzi wa mapema wa changamoto za tumbo, na tabia za kila siku za kujenga kinga imara.',
        author: 'Dkt. Sarah Mwangi',
        readTime: 'Dakika 5 kusoma',
      },
      stories: [
        {
          tag: 'Afya ya Wanawake na Uzazi',
          title: 'Utafiti wa Wanawake 1,032: Changamoto Zinazozuia Uchunguzi wa Mapema wa Afya',
          readTime: 'Dakika 4 kusoma',
        },
        {
          tag: 'Usingizi na Siha',
          title: 'Mbinu 10 Zilizothibitishwa Kisayansi za Kupata Usingizi Mnono na Kuondoa Uchovu',
          readTime: 'Dakika 3 kusoma',
        },
        {
          tag: 'Uangalizi wa Wazee',
          title: 'Kudhibiti Magonjwa Sugu na Vipimo Muhimu vya Mara kwa Mara kwa Wazee Wetu',
          readTime: 'Dakika 6 kusoma',
        },
        {
          tag: 'Elimu ya Afya na Usafi',
          title: 'Tabia za Kila Siku Zinazosaidia Kuzuia Maambukizi ya Mara kwa Mara Katika Jamii',
          readTime: 'Dakika 4 kusoma',
        },
      ],
    },
    featuresGeneral: {
      title: 'Elimu ya Afya Inayotegemea Ushahidi wa Kisayansi',
      subTitle:
        'Katika HealthTalks, tunaleta maarifa halisi ya kitabibu katika maisha yako ya kila siku. Kuanzia lishe bora, kinga ya magonjwa, hadi afya ya akili, tuko hapa kukuwezesha kufanya maamuzi sahihi ya kiafya.',
      imageAlt: 'Wanajamii wakishiriki katika kongamano la afya na ustawi',
    },
    featuresNavs: {
      title:
        'Gundua nguzo kuu za <span class="text-dark-green font-bold">HealthTalks</span> za kukuza afya na maisha marefu.',
      tabs: {
        tools: {
          heading: 'Lishe Bora na Mlo Kamili',
          content:
            'Gundua miongozo ya kisayansi kuhusu mpangilio wa milo kamili, afya ya mfumo wa chakula, na mlo unaofaa kuzuia magonjwa sugu kama kisukari na presha.',
          alt: 'Mlo kamili wenye mboga mboga na virutubisho asilia',
        },
        dashboard: {
          heading: 'Mazoezi na Maisha ya Kuchangamka',
          content:
            'Jenga mazoea endelevu ya kufanya mazoezi ya viungo, kukimbia na kutembea ili kuimarisha afya ya moyo na kuongeza nguvu za mwili.',
          alt: 'Kikundi cha watu wakikimbia pamoja asubuhi kwa ajili ya afya ya moyo',
        },
        features: {
          heading: 'Huduma za Kinga na Uchunguzi wa Mapema',
          content:
            'Kaa salama kwa kufahamu umuhimu wa vipimo vya mara kwa mara, chanjo sahihi na utambuzi wa mapema kutoka kwa madaktari bingwa.',
          alt: 'Mhudumu wa afya akitoa chanjo ya kinga kliniki',
        },
      },
    },
    testimonials: {
      title: 'Mageuzi ya Kiafya Katika Maisha ya Kila Siku',
      subTitle:
        'Maelfu ya wananchi, wagonjwa, na wapenzi wa afya wanaiamini HealthTalks kwa elimu ya wazi na mwongozo wa kuaminika.',
      quotes: [
        {
          content:
            'HealthTalks imebadilisha kabisa jinsi familia yangu inavyotunza afya. Makala zao kuhusu lishe ya moyo na mazoezi zilinisaidia kupunguza shinikizo la damu kwa vitendo!',
          author: 'Dkt. Amanda Chen, MD',
          role: 'Daktari wa Tiba ya Familia na Mtetezi wa Afya ya Jamii',
        },
      ],
      statistics: [
        {
          count: '50k+',
          description:
            'wasomaji na wasikilizaji wa kila mwezi kwenye tovuti na podcast yetu',
        },
        {
          count: '98%',
          description:
            'ya wasomaji wameripoti kuanza tabia bora za kiafya ndani ya wiki 4',
        },
        {
          count: '150+',
          description:
            'madaktari na wataalamu wa afya walioshiriki katika vipindi vyetu',
        },
        {
          count: '100%',
          description: 'makala zilizokaguliwa na kuthibitishwa na wataalamu wa tiba',
        },
      ],
    },
    faqTitle: 'Maswali Yanayoulizwa<br />Mara kwa Mara',
    heroAlt: {
      title: 'Jiunge na Jumuiya ya HealthTalks',
      subTitle:
        'Mlango wako wa maarifa ya afya na maisha marefu — kuhamasisha jamii kupitia elimu ya uhakika na mazungumzo ya wazi.',
      btn: 'Soma Makala Zote',
    },
  },

  services: {
    title: 'Vipindi na Huduma',
    metaDescription:
      'Tukileta utaalamu wa kitabibu karibu nawe, HealthTalks inatoa miongozo ya kina na vipindi vya afya kuanzia lishe bora hadi kinga ya magonjwa.',
    ogTitle: 'Vipindi na Huduma za Afya | HealthTalks',
    intro: {
      title: 'Ushauri wa Kitalaamu kwa Afya Yako',
      subTitle:
        'Katika HealthTalks, tunajivunia kutoa maarifa sahihi ya kitabibu yanayowezesha jamii kufanya maamuzi bora ya kiafya kila siku.',
      cta: 'Wasiliana Nasi',
    },
    articles: {
      guidance: {
        title: 'Kutoa Mwongozo wa Kitaalamu',
        subTitle:
          'Kutunza afya yako kunaweza kuleta changamoto. Kupitia vipindi vyetu vya wazi, tunakuongoza katika kila hatua ili uweze kuchagua lishe sahihi, mazoezi yanayokufaa, na vipimo vya kinga.',
        imageAlts: [
          'Daktari akimshauri mgonjwa kliniki',
          'Wataalamu wa afya wakijadili tafiti za tiba',
        ],
      },
      craftsmanship: {
        title: 'Kujenga Tabia Endelevu za Kiafya',
        subTitle:
          'Afya bora inajengwa kwa vitendo vya kila siku. Tunakupa mbinu rahisi za kuanza kula vyakula asilia, kupunguza sukari, na kulinda afya ya moyo na mishipa ya damu.',
        imageAlts: ['Matunda na mboga mboga safi kwa ajili ya afya'],
        cta: 'Soma Zaidi',
      },
      oversight: {
        title: 'Miongozo ya Afya ya Familia na Watoto',
        subTitle:
          'Afya ya mtoto na mama ndio msingi wa taifa lenye nguvu. HealthTalks inatoa miongozo ya kitaalamu kuhusu lishe ya watoto, chanjo muhimu, na malezi yenye afya.',
        imageAlts: [
          'Mama akimlea mtoto kwa upendo',
          'Daktari wa watoto akifanya uchunguzi wa afya',
        ],
      },
      maintenance: {
        title: 'Kudumisha Kinga na Uhai wa Muda Mrefu',
        subTitle:
          'Kuzuia ni bora kuliko kutibu. Tunatoa elimu kuhusu unawaji mikono, usafi wa mazingira, usingizi wa kutosha, na usimamizi wa msongo wa mawazo.',
        imageAlts: ['Mtu akinawa mikono kwa maji safi na sabuni'],
      },
      bespoke: {
        title: 'Mipango Maalum ya Afya kwa Mashirika',
        subTitle:
          'Kwa ajili ya mashirika, shule na vituo vya kazi, HealthTalks huandaa warsha za ustawi na afya ya wafanyakazi ili kuongeza ufanisi na kupunguza magonjwa kazini.',
        imageAlts: [
          'Mkutano wa wafanyakazi wakijadili afya kazini',
          'Ukumbi wa mafunzo ya afya na uzima',
        ],
        cta: 'Wasiliana Nasi',
      },
    },
    stats: {
      title: 'Takwimu Zetu',
      subTitle:
        'Kujitolea kwetu kwa elimu sahihi na ya kuaminika kunaonekana katika matokeo chanya ya jamii inayotufuata kila siku.',
      mainStatTitle: '98%',
      mainStatSubTitle:
        'ya wasomaji wanasema HealthTalks imewasaidia kufanya maamuzi bora ya kiafya',
      stats: [
        { stat: '100%', description: 'makala zilizokaguliwa kitabibu' },
        { stat: '50,000+', description: 'wasomaji wa kila mwezi' },
        { stat: '150+', description: 'madaktari na wataalamu walioshiriki' },
      ],
    },
  },

  contact: {
    title: 'Wasiliana Nasi',
    metaDescription:
      'Una swali kuhusu afya, pendekezo la mada, au ungependa kushirikiana nasi? Wasiliana na timu ya HealthTalks leo.',
    ogTitle: 'Wasiliana Nasi | HealthTalks',
    heading: 'Wasiliana Nasi',
    subTitle:
      'Tungependa kusikia kutoka kwako! Tuma ujumbe wako na timu yetu ya wataalamu itawasiliana nawe mara moja.',
    formTitle: 'Jaza fomu ifuatayo',
    formSubTitle:
      'Tutakujibu ndani ya siku 1 au 2 za kazi.',
    firstName: 'Jina la Kwanza',
    lastName: 'Jina la Ukoo',
    details: 'Ujumbe au Swali lako',
    send: 'Tuma Ujumbe',
    demoMessage:
      'Asante! Ujumbe wako umepokelewa (fomu hii ni ya majaribio).',
    knowledgeHeading: 'Miongozo ya Afya',
    knowledgeContent: 'Pitia makala zetu zote za elimu na ushauri wa kiafya.',
    knowledgeLink: 'Tazama Makala na Miongozo',
    faqHeading: 'Maswali ya Mara kwa Mara',
    faqContent: 'Pata majibu ya haraka kwa maswali yanayoulizwa mara kwa mara.',
    faqLink: 'Pitia Majibu ya Maswali',
    officeHeading: 'Ofisi Yetu',
    officeContent: 'Dar es Salaam, Tanzania',
    emailHeading: 'Tuandikie kwa Barua Pepe',
    emailContent: 'Tuma barua pepe kwa swali lolote la afya au ushirikiano.',
  },

  blogIndex: {
    title: 'Makala na Blogu ya Afya',
    metaDescription:
      'Pata habari mpya za kitiba, kinga ya magonjwa, lishe bora, na maelekezo ya siha kutoka kwa madaktari bingwa wa HealthTalks.',
    ogTitle: 'Blogu na Makala za Afya | HealthTalks',
    heading: 'Lango Lako la Elimu na Siha Bora',
    subTitle:
      'Chunguza tafiti za hivi karibuni za kimatibabu, ushauri ulioidhinishwa na madaktari, miongozo ya lishe, na visa vya kweli vya jamii yetu kupitia HealthTalks.',
    insightsHeading: 'Uchambuzi wa Wataalamu',
    insightsSubTitle:
      'Tafakari za kina za matibabu, tafiti za ustawi, na miongozo ya maisha inayotolewa na madaktari na wataalamu wetu.',
    noPosts: 'Bado hakuna makala zilizochapishwa. Tafadhali rudi hivi karibuni.',
    noInsights: 'Bado hakuna uchambuzi uliopo. Tafadhali rudi hivi karibuni.',
  },

  productsIndex: {
    title: 'Mada za Kiafya',
    metaDescription:
      'Gundua makundi mbalimbali ya mada za afya, huduma maalum, vipindi vya kinga, na miongozo ya kitabibu.',
    ogTitle: 'Mada na Vipindi vya Afya | HealthTalks',
    heading: 'Mada na Vipindi vya Afya',
    subTitle:
      'Pitia orodha yetu pana ya mada za kiafya, programu za siha zenye ushahidi wa kisayansi, na miongozo inayokusaidia kuishi maisha yenye afya tele.',
    customerStories: 'Shuhuda za Jamii',
    testimonials: {
      title: 'Maoni Kutoka Jamii ya HealthTalks',
      quotes: [
        {
          content:
            ' "HealthTalks imebadilisha kabisa jinsi ninavyozingatia lishe ya kila siku na kudhibiti shinikizo la damu. Kupata taarifa sahihi zilizothibitishwa na daktari kwa Kiswahili kimekuwa msaada mkubwa kwa familia yangu." ',
          author: 'Dkt. Sarah Mwangi',
          role: 'Mtetezi wa Afya ya Jamii',
          avatarAlt: 'Picha ya Mtetezi wa Afya',
        },
        {
          content:
            ' "Kupata ushauri wa kweli wa kiafya zamani ilikuwa ngumu kutokana na habari potofu mtandaoni. HealthTalks imefanya masuala ya kitabibu kuwa rahisi kueleweka na kutumia maishani." ',
          author: 'David Omondi',
          role: 'Mkimbiaji na Mwanajamii',
          avatarAlt: 'Picha ya Mwanachama wa Jamii',
        },
        {
          content:
            ' "Vipindi shirikishi na makala za kuelimisha zimenisaidia kuelewa umuhimu wa uchunguzi wa mapema na kuchukua hatua madhubuti kwa afya ya moyo wangu." ',
          author: 'Amina Kassim',
          role: 'Mshauri wa Lishe Bora',
          avatarAlt: 'Picha ya Mshauri wa Lishe',
        },
      ],
    },
    stats: {
      title: 'Kwanini Uchague HealthTalks?',
      subTitle:
        'Taarifa za afya zenye uthibitisho wa kisayansi, makala zilizopitiwa na madaktari, na jamii yenye upendo inayokusaidia kustawi katika kila hatua ya maisha yako.',
      benefits: [
        'Maudhui ya kiafya yaliyopitiwa na kuthibitishwa na madaktari.',
        'Miongozo ya lishe, afya ya akili, na programu za mazoezi.',
        'Jamii inayowezesha wagonjwa kujifunza na kushauriana moja kwa moja.',
      ],
    },
  },

  data: {
    faqs,
    features,
    pricing,
  },
};
