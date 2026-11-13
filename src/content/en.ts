import type { SiteContent } from './types';

// Same claims as tr.ts. About, Projects, Skills and Experience come from the old site (Emre's own
// words); the "Since 2025" section and game design come from the 2026 session records.
// Game-design quotes: `quote` is a translation, `quoteOriginal` is Emre's Turkish prompt, verbatim.

export const en: SiteContent = {
  meta: {
    title: 'Emre Bahçeci · Computer engineering student',
    description:
      'Computer engineering student with a strong interest in AI, computer vision and mobile development. Projects, experience, and the work I have built with AI since 2025.',
  },

  nav: {
    about: 'About',
    projects: 'Projects',
    recent: 'Since 2025',
    games: 'Game design',
    skills: 'Skills',
    experience: 'Experience',
    contact: 'Contact',
  },

  ui: {
    skipToContent: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    switchLanguage: 'Switch to Turkish',
    toLightTheme: 'Switch to light theme',
    toDarkTheme: 'Switch to dark theme',
    problem: 'Problem',
    mine: 'My part',
    ai: 'The AI\'s part',
    evidence: 'Evidence',
    noPublicLink: 'No public link.',
    decision: 'Decision',
    originalQuote: 'Original (Turkish)',
    opensInNewTab: '(opens in a new tab)',
    technologies: 'Technologies',
    highlights: 'Key features',
    tracksLabel: 'Areas of work',
  },

  tracks: {
    ai: {
      label: 'Building with AI',
      note: 'Work I defined, had AI build, and verified with tests.',
    },
    product: {
      label: 'Product / ML',
      note: 'Product and machine learning work that started from a user observation or a measurable question.',
    },
    game: {
      label: 'Game design',
      note: 'Games where I make the mechanics and systems decisions.',
    },
  },

  hero: {
    eyebrow: 'Final-year computer engineering student',
    name: 'Emre Bahçeci',
    headline: ["Hi, I'm Emre."],
    rotating: { before: 'With AI, I build', roles: ['apps', 'computer vision systems', 'mobile apps'], after: 'in several fields.' },
    lede:
      'As a computer engineering student I have a strong interest in artificial intelligence, computer vision and mobile app development. I enjoy turning real-world problems into working software and working with productive teams.',
    cta: {
      github: 'GitHub',
      cv: 'Download CV',
      contact: 'Contact',
    },
    bridge: {
      text: 'Since late 2025 I have been building with AI agents; in that work my part and the AI\'s part are listed separately.',
      linkLabel: 'Go to the Since 2025 section',
    },
  },

  about: {
    title: 'About',
    paragraphs: [
      'I\'m a computer engineering student interested in artificial intelligence, computer vision and mobile app development. I enjoy turning real-world problems into functional, well-designed software, building things with teams, and creating communities centered on sharing knowledge.',
      'With a focus on continuous growth, I aim to build solutions that are not only impressive but sustainable. I work to explore new technologies, carry what I learn into projects, and inspire the people around me along the way.',
    ],
    facts: [
      {
        label: 'Education',
        value: 'Bilecik Şeyh Edebali University',
        detail: 'Computer Engineering · 2021 - ongoing',
      },
      { label: 'Location', value: 'Kayseri, Türkiye' },
      {
        label: 'Availability',
        value: 'Open to opportunities',
        detail: 'Software development, AI / machine learning and mobile apps; remote or on-site.',
      },
    ],
    languages: {
      title: 'Languages',
      items: [
        { name: 'Turkish', note: 'Native.' },
        { name: 'English', note: 'B1 level (reading, writing, listening).' },
      ],
    },
  },

  projects: {
    title: 'Projects',
    intro: 'Selected projects I have built in AI and mobile app development.',
    items: [
      {
        id: 'dersai',
        name: 'DersAI',
        period: 'Feb 2025 - Jun 2025',
        description:
          'A smart mobile app that digitizes students\' course materials to make studying more efficient. It extracts and organizes text using OCR and AI.',
        technologies: ['Flutter', 'Dart', 'Firebase', 'OCR', 'AI API', 'Firestore'],
        highlights: [
          'Cross-platform Flutter development',
          'Firebase Authentication and Firestore integration',
          'Text extraction with OCR and AI-assisted editing',
          'Voice-input note taking',
          'Smart content classification',
        ],
      },
      {
        id: 'image-style-transfer',
        name: 'Image Style Transfer',
        period: 'Apr 2024 - Jul 2024',
        description:
          'An AI-based image processing app that uses neural style transfer to apply the artistic style of reference images to gallery photos or a live camera feed.',
        technologies: ['PyTorch', 'CNN', 'VGG', 'OpenCV', 'PIL', 'NumPy', 'Matplotlib'],
        highlights: [
          'Pre-trained VGG-based CNN architecture',
          'Live camera support and static image processing',
          'Multiple style inputs and scalable resolution',
          'Model definition and optimization in PyTorch',
        ],
      },
      {
        id: 'visionary-mockup',
        name: 'VisionaryMockUP',
        period: 'Nov 2023 - Feb 2024',
        description:
          'A real-time computer vision system that detects t-shirts in a live video stream with YOLO and automatically overlays pre-designed graphics on them.',
        technologies: ['YOLO', 'OpenCV', 'Python', 'Roboflow', 'Computer Vision'],
        highlights: [
          'Collected and labeled a custom t-shirt dataset with Roboflow',
          'Real-time object detection with a YOLOv8 model',
          'Geometric transforms and perspective correction with OpenCV',
          'Dynamic graphic overlay pipeline',
        ],
      },
    ],
    moreOnGithub: 'More projects on GitHub',
  },

  recent: {
    title: 'Since 2025: working with AI',
    intro:
      'Since late 2025 I mostly don\'t write the code myself. I decide what gets built and for whom, tie "done" to tests a machine can run, and in the work I use myself I catch what the tests miss. Every project in this section lists my part and the AI\'s part side by side.',
  },

  how: {
    title: 'How I work',
    intro: 'The first two are part of all my code work. The work where I did the third held up best. The fourth is my weak spot.',
    steps: [
      {
        title: 'Define the work',
        body: 'Who it\'s for, what the problem is, what stays out. On Tepsi all three were settled before any code was written: homemakers, recipes that get scattered and forgotten, nothing to sell.',
      },
      {
        title: 'Tie "done" to a gate',
        body: 'On my code projects, "done" means checks a machine can run have passed. I set the rule that nothing counts as done until the gates pass; the AI usually proposes and writes the gates, and I sign off. On Tepsi the targets were frozen before the build and no threshold was lowered afterwards.',
      },
      {
        title: 'Use it, catch the errors',
        body: 'I use what gets built and find what the tests miss: wrong match dates in tournament PDFs, a dashboard too complex for a beginner, windows rendering inconsistently in a Unity scene.',
      },
      {
        title: 'Ship it',
        body: 'Of roughly 20 projects I started in the last two and a half months, one has a published release: ytmp3pldl v1.0.0. Tepsi\'s server setup and domain are still waiting on me.',
        open: true,
      },
    ],
    proofs: [
      {
        value: '500+',
        label: 'commits I directed across 15+ repos',
        date: 'Aug-Nov 2026',
      },
      {
        value: '~20',
        label: 'projects I started in the last two and a half months',
        date: 'Aug-Nov 2026',
      },
    ],
    note: 'The AI wrote the code for the work in this section. That\'s why I don\'t say "I developed it"; I say "I defined it, directed it and verified it with tests". The Projects section above and my code from before 2025 are my own hands.',
  },

  work: {
    title: 'Selected work',
    intro:
      'Every number in the evidence carries its date. Only public work has a link; the rest lives on my machine or with the people it was delivered to.',
    items: [
      {
        id: 'oyun-yolculugu',
        name: 'Game Journey',
        track: 'ai',
        status: 'Runs locally, not published',
        period: 'Nov 2026',
        problem:
          'A step-by-step guide that teaches someone with no experience how to make a game with AI, plus a dashboard that updates live in the browser while they work with Claude Code. To show the guide works, a small web game, Hex-Zar web, was built from scratch by following its steps.',
        mine: [
          'I set the idea and the audience: someone who knows nothing should be able to look at it and see how they would make a game (5 Nov 2026).',
          'I chose what the guide teaches: less the code itself, more what is done, why, and where.',
          'I used the dashboard and sent it back: too complex for a beginner (7 Nov 2026). It was rebuilt.',
          'I picked a small web version of Hex-Zar as the sample game.',
        ],
        ai: [
          'All of the guide text, the dashboard, the Claude Code hooks and the tests.',
          'The learner prompts in the sample run and the game\'s visual style also came from AI sessions.',
        ],
        evidence: [
          '48 commits · 5-7 Nov 2026',
          '88/88 tests, gates K1-K7 PASS · 7 Nov 2026',
          'Sample game: 150 game tests + 80 tests checking the rules text against actual behavior · 6 Nov 2026',
          'Real user test: not yet',
        ],
        featured: true,
      },
      {
        id: 'ytmp3pldl',
        name: 'ytmp3pldl v1.0.0',
        track: 'ai',
        status: 'Released, v1.0.0',
        period: 'Oct 2026',
        problem:
          'Turn a Python download script that ran on one computer into an app that installs on other Windows machines without Python and keeps itself up to date. The case is less the product than the packaging and update work.',
        mine: [
          'The decision to turn the script into an installable app.',
          'The idea that the app checks GitHub for its own new version.',
          'I tested the installer on my own machine and gave the go-ahead to release.',
          'I used it for real: two playlists downloaded.',
        ],
        ai: [
          'The Inno Setup installer, the bundled runtime, and the download engine\'s self-update with SHA256 verification. All of the code came from Claude Code.',
        ],
        evidence: [
          '25 commits · 30-31 Oct 2026',
          '~8 hours from first request to public release · 30-31 Oct 2026',
          'Acceptance gate PASS, GitHub release v1.0.0 · 31 Oct 2026',
        ],
        link: {
          label: 'GitHub: EmreBHCC/ytmp3pldl',
          href: 'https://github.com/EmreBHCC/ytmp3pldl',
        },
      },
      {
        id: 'cihs',
        name: 'cihs: Claude Code usage audit',
        track: 'ai',
        status: 'In use on my own setup; share package ready, not published',
        period: 'Oct-Nov 2026',
        problem:
          'My Claude Code sessions were bloating: more than half of all turns ran above 200k tokens of context. I needed an audit skill that measures usage, suggests fixes, and can be carried over to another Claude setup.',
        mine: [
          'I asked for the first analysis, and after each measurement I decided which fix to apply.',
          'I set its name, its shortcut and the requirement that it works when handed to another Claude.',
        ],
        ai: [
          'The measurement script, report templates, status line and skill text.',
          'Interpreting the findings and proposing fixes.',
        ],
        evidence: [
          '94 sessions measured · 25 Oct 2026',
          'Turns above 400k tokens: 19% → 0% · 25 → 29 Oct 2026',
          'Turns above 200k tokens: 54% → 28% · 25 Oct → 6 Nov 2026',
          'Not fixed: share of the 10 most expensive sessions 56% → 77% · 6 Nov 2026',
          'Package run by two Sonnet subagents with no prior context; the 15 issues they found were fixed · 25 Oct 2026',
        ],
      },
      {
        id: 'tepsi',
        name: 'Tepsi: recipe notebook',
        track: 'product',
        status: 'Runs locally; I deliberately put it aside before testing it with a real user',
        period: 'Oct-Nov 2026',
        problem:
          'From what I\'ve seen, recipes get scattered across WhatsApp, paper, phone notes and notebooks. A notebook for homemakers that keeps recipes in one place and also works offline.',
        mine: [
          'The observation: they ask each other for recipes and later struggle to remember what they gave (22 Oct 2026).',
          'The scope: not for selling, for homemakers (22 Oct 2026). Recipes stay with their owner.',
          'I approved the core definition of "done": notebook, importing recipes from WhatsApp, account-free link sharing, PDF export.',
        ],
        ai: [
          'The whole PWA: rule-based recipe parser, offline mode, share links, test gates. 9 commits in a single day.',
          'The proposal for the core definition of "done".',
        ],
        evidence: [
          '17/17 test gates PASS · 7 Nov 2026',
          '100% accuracy, 0 unit errors on 30 sample recipes written by the AI; 100% on a 10-recipe hidden set prepared beforehand by a separate session · 7 Nov 2026',
          'Trial with real WhatsApp messages, server setup and user test: not done',
        ],
      },
      {
        id: 'devre-okuyucu',
        name: 'Circuit Reader (graduation project)',
        track: 'product',
        status: 'In progress; no model results yet',
        period: 'Oct 2026 - ongoing',
        problem:
          'I saw vision-language models find the components in a circuit schematic but miss the connections between them; the project measures this. The goal is a system that turns a schematic image, components and connections, into a netlist.',
        mine: [
          'I found the topic: I noticed a circuit image had been misread because the result made no sense.',
          'The priority: model quality first, getting our model as far as it can go (13 Oct 2026).',
          'The constraint: no large models as the base, because of cost and the 6 GB GPU in my computer.',
          'I found and picked four of the six external datasets; hand-drawn schematics only come in if they can be recognized well.',
        ],
        ai: [
          'The measurement framework, a synthetic data generator with 40,000 samples, and the training code (Florence-2, Pix2Struct, Qwen2-VL).',
          'A guide that explains the training settings to me. I\'m learning the fine-tuning concepts on this project.',
        ],
        evidence: [
          'Measurement gates 14/14 PASS · 10 Nov 2026',
          '40,000 synthetic samples generated · 10 Nov 2026',
          '37 commits · 13 Oct - 10 Nov 2026',
          'Model results: none yet, the first training stage is half done',
        ],
      },
      {
        id: 'turnuva-pdf',
        name: 'Billiards tournament schedules',
        track: 'ai',
        status: 'Delivered',
        period: 'Oct 2026',
        problem:
          'A billiards tournament\'s match schedule and player lists sat page by page on the federation\'s results portal. What was needed: branded PDFs that players from a provincial list and a local club could read at a glance.',
        mine: [
          'I know the domain, so I checked the output myself.',
          'I caught two AI errors: two groups\' match dates were pulled wrong, and everyone on the provincial list had been counted as a club player.',
          'I matched 13 players by their federation IDs myself.',
        ],
        ai: ['Pulling the data from the portal, tabulating it, and the branded PDF layout.'],
        evidence: [
          'Match schedule for 59 players: 46 from the provincial list, 13 from the club · 28 Oct 2026',
          'Player list PDFs · 22 Oct 2026',
          'One-off job; not a reusable tool',
        ],
      },
    ],
  },

  games: {
    title: 'Game design',
    intro:
      'A playable Unity prototype, a farming game with a working core, and a world that exists only on paper. Two design decisions from each.',
    disclaimer:
      'The code is the AI\'s; the decisions are mine. Quotes are translated from my prompts on that day; the Turkish original is verbatim, with cuts marked "…" and spelling left as is.',
    items: [
      {
        id: 'hex-zar',
        name: 'Hex-Zar',
        status: 'Unity · v0.6 · local, not published',
        summary:
          'A two-player tactics game on a hex board: each side fields four units, attacks and shoves are resolved with D&D 5e dice, and a unit pushed onto a tile with no ground falls. The rules core is tested outside Unity; balance is measured with 2,000 matches per board between two simple AIs.',
        decisions: [
          {
            decision: 'Where the game sits: keep the d20, but the pace and depth should land between chess and Polytopia.',
            quote: '…apart from the d20, I want it to sit somewhere between chess and Polytopia',
            quoteOriginal: '…d20 haricinde satranç ve polytopia arasında bir yerde dursun istiyorum',
            date: '17 Oct 2026',
          },
          {
            decision: 'Both players set the terrain together at the start of each match; that is where the replayability comes from.',
            quote: '…I feel it adds replayability to every game',
            quoteOriginal: '…oyuna her seferinde yeniden oynanabilirlik katar gibi hissediyorum',
            date: '17 Oct 2026',
          },
        ],
      },
      {
        id: 'laminel-farm',
        name: 'Laminel-Farm',
        status: 'Unity · first subproject in progress · not published',
        summary:
          'A light-driven vertical farming game set in a multi-storey apartment block under zombie and alien threat. The same plant grows in 2 hours or 6 depending on where you put it; the game rests on a placement puzzle. I lay out the scenes in the Unity editor.',
        decisions: [
          {
            decision: 'Playability first: art style and 3D models were shelved entirely until the game proved playable.',
            quote: '…to test first whether the game is playable, let\'s drop the stylized art and modeling work completely for now',
            quoteOriginal: '…önce oyun oynanılabilir mi test etmek için stilize ve model yapma işini şimdilik komple bırakalım',
            date: '12 Oct 2026',
          },
          {
            decision: 'Sun-loving plants have to sit by the window. Space there is scarce, so every placement has a cost.',
            quote: '…plants that need sun will have to stay near the window',
            quoteOriginal: '…güneş isteyen bitkiler mecbur cama yakın duracak',
            date: '12 Oct 2026',
          },
        ],
      },
      {
        id: 'kabuk',
        name: 'Kabuk',
        status: 'Design only · no code',
        summary:
          'An isometric action MMORPG design based on the D&D 5e SRD, set in a world where a shell built by people stands in place of the sky. Core loop: go into a dangerous zone and get the loot out alive. 11 game decisions and 6 economy decisions are written down. There are no verbatim quotes for these; the source is the summary log of the September sessions: the AI offered options, I drew the lines.',
        decisions: [
          {
            decision: 'It will be a real multiplayer video game; I turned away from the idea of a single-player tabletop story. A tabletop version in the same world comes last.',
            date: '24 Sep 2026',
          },
          {
            decision: 'Power doesn\'t pile up in permanent levels; it lives in an energy core you carry. Players choose which core to take into a raid and lose it if they die.',
            date: '24 Sep 2026',
          },
        ],
      },
    ],
  },

  skills: {
    title: 'Technical skills',
    intro:
      'I keep strengthening my experience across programming languages, frameworks and technologies with new projects.',
    categories: [
      {
        title: 'Programming languages',
        items: ['C/C++/C#', 'Java', 'Python', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'mikroC'],
      },
      {
        title: 'Frameworks & technologies',
        items: ['Flutter', 'React', 'Bootstrap', 'TensorFlow', 'OpenCV', 'PyTorch', 'Firebase', 'Unity', 'Unreal Engine (basics)'],
      },
      {
        title: 'AI & ML',
        items: ['Computer Vision', 'YOLO', 'Neural Style Transfer', 'CNN architectures', 'Object Detection', 'Image Processing'],
      },
      {
        title: 'Database & backend',
        items: ['Firebase Firestore', 'SQL database design', 'RESTful APIs', 'Cloud Storage'],
      },
      {
        title: 'Development tools',
        items: ['Git/GitHub', 'VS Code', 'Claude Code', 'Android Studio', 'Proteus', 'Roboflow'],
      },
      {
        title: 'Other skills',
        items: ['OOP', 'Teamwork', 'Problem solving', 'Project management', 'Mentoring'],
      },
    ],
    aiTitle: 'How I work with AI',
    aiIntro: 'Skills I gained working with AI agents. Each row has a level and one line of evidence.',
    levels: {
      hands: {
        label: 'Hands-on',
        description: 'The call, the know-how or the work comes from me; I can do it without AI.',
      },
      directed: {
        label: 'Directed',
        description: 'I defined the work and had AI do it; I tested the result and made the calls.',
      },
      touched: {
        label: 'Some exposure',
        description: 'Tried it or used it at coursework level; my depth is limited.',
      },
    },
    groups: [
      {
        title: 'Directing AI',
        items: [
          {
            name: 'Reviewing AI output, catching errors',
            level: 'hands',
            evidence: 'Caught two data errors in the tournament PDFs because I know the domain (22 and 28 Oct 2026).',
          },
          {
            name: 'Setting and signing off on "done"',
            level: 'hands',
            evidence: 'I set the rule that nothing counts as done until the gates pass; I sign off once the gate report passes (Oct-Nov 2026).',
          },
          {
            name: 'Having test gates and measurement code written',
            level: 'directed',
            evidence: 'The AI usually proposes and writes the gates: Tepsi, Game Journey, Circuit Reader (Oct-Nov 2026).',
          },
          {
            name: 'Working setup: memory boards, subagents, model choice',
            level: 'directed',
            evidence: 'The status boards, the subagent principle (knowledge gathers in the main session, agents work in parallel) and the model split (Sonnet gathers, Opus judges) came from me (Oct-Nov 2026).',
          },
          {
            name: 'Setting up and connecting MCP servers',
            level: 'directed',
            evidence: 'I picked the Unity MCP repo; Claude Code installed it, and I finished the configuration in the editor (26 Oct 2026).',
          },
        ],
      },
      {
        title: 'Product and game design',
        items: [
          {
            name: 'Requirements from user observation, usability critique',
            level: 'hands',
            evidence: 'Tepsi rests on something I observed (22 Oct); I found the Game Journey dashboard too complex for a beginner and had it rebuilt (7 Nov 2026).',
          },
          {
            name: 'Narrowing scope, setting priorities',
            level: 'hands',
            evidence: 'On Circuit Reader I put model quality first and set the constraint by the 6 GB GPU (13 Oct 2026).',
          },
          {
            name: 'Game mechanics, systems design, game analysis',
            level: 'hands',
            evidence: 'Hex-Zar and Laminel-Farm above, with dated quotes; I also set the first 8 categories of my game review framework (Aug 2026).',
          },
        ],
      },
      {
        title: 'Stacks built with AI',
        items: [
          {
            name: 'Web, desktop and mobile (PWA, Node, FastAPI, Windows installer, Kotlin)',
            level: 'directed',
            evidence: 'Tepsi PWA, Game Journey (Node), data_annotate (FastAPI), the ytmp3pldl installer, easy-phone, an Android launcher for older people (Aug-Nov 2026).',
          },
          {
            name: 'C# (Unity)',
            level: 'directed',
            evidence: 'Laminel-Farm and Hex-Zar: 57 and 53 commits (Oct-Nov 2026).',
          },
          {
            name: 'Scene layout in the Unity editor',
            level: 'hands',
            evidence: 'Laid out the room and windows for Laminel-Farm in the editor myself (12 Oct 2026).',
          },
          {
            name: 'Vision-language model fine-tuning (Florence-2, Pix2Struct, Qwen2-VL)',
            level: 'directed',
            evidence: 'Circuit Reader\'s data generator, measurement and training code; I\'m learning the concepts on this project, no results yet (Oct-Nov 2026).',
          },
          {
            name: 'Dataset selection and quality judgment',
            level: 'hands',
            evidence: 'Found and picked four of Circuit Reader\'s six external datasets myself (21 Oct 2026).',
          },
        ],
      },
    ],
  },

  experience: {
    title: 'Experience & activities',
    intro: 'My work experience and my roles in community work.',
    workTitle: 'Work experience',
    items: [
      {
        role: 'Intern',
        org: '4B Arıcılık Teknolojileri A.Ş. (beekeeping technology)',
        period: 'Jul 2025 - Aug 2025',
        location: 'Bilecik',
        tag: 'Mandatory internship',
        description: 'Gained industry experience in my first mandatory internship program.',
        points: [
          'Built a one-page company site in React and published it through GitHub.',
          'Designed the mobile app\'s login, sign-up, profile, notifications and home screens, and handed them to a teammate to wire up to the backend.',
          'Trained YOLOv8 models to detect varroa mites on bees and queen cells in the hive; when the model missed sealed queen cells, I relabeled the dataset into two classes.',
          'Gained teamwork and project management experience; observed industry standards and business processes up close.',
        ],
      },
      {
        role: 'Student IT staff',
        org: 'Bilecik Şeyh Edebali University, IT Department',
        period: 'Apr 2025 - Jun 2025',
        location: 'Bilecik',
        tag: 'Short term',
        description:
          'Worked with the technical team to support and maintain critical IT infrastructure across the campus.',
        points: [
          'Took part in group repair and maintenance of staff and lab computers.',
          'Diagnosed and fixed issues with system imaging, formatting and OS installation.',
          'Activated the required network ports to integrate machines into the university\'s internal systems.',
          'Carried out hardware swaps (RAM, SSD, power supplies) and peripheral setups.',
          'Provided tech support to university staff and improved system performance.',
        ],
      },
    ],
    educationTitle: 'Education',
    education: [
      {
        role: 'BSc Computer Engineering',
        org: 'Bilecik Şeyh Edebali University',
        period: '2021 - ongoing',
        location: 'Bilecik',
        description: 'Final year. Projects I built at university, newest first:',
        points: [
          'DersAI (Feb - Jun 2025): a Flutter mobile app that digitizes class notes with OCR and AI.',
          'Image Style Transfer (Apr - Jul 2024): a PyTorch app that transfers artistic style onto images and live camera with a VGG-based CNN.',
          'VisionaryMockUP (Nov 2023 - Feb 2024): a real-time system that detects t-shirts in live video with YOLO and overlays graphics on them.',
        ],
      },
    ],
    communityTitle: 'Community & leadership',
    community: [
      {
        role: 'Founding member',
        org: 'BBCLUB',
        period: 'May 2025 - ongoing',
        location: 'Bilecik',
        description:
          'Founding member of a student-led initiative focused on empowering computer engineering students through peer learning.',
        points: [
          'Designed a sustainable mentoring structure that supports continuous learning among students.',
          'Organized weekly sessions, coding workshops and collaborative projects.',
          'Contributed to the technical and academic growth of 50+ members.',
          'Led the creation of a growth-oriented, inclusive community culture.',
        ],
        link: { label: 'bbclub.space', href: 'https://bbclub.space' },
      },
    ],
  },

  contact: {
    title: 'Contact',
    body: 'Write to me about jobs, internships or part-time work in software development, AI / machine learning and mobile apps. I can work remotely or in Kayseri.',
    emailLabel: 'Email',
  },

  footer: {
    colophon: 'I made this site the same way: the AI wrote the code and the text, and I directed it.',
    backToTop: 'Back to top',
  },
};
