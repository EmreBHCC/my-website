import type { SiteContent } from './types';

// Same claims as tr.ts; every claim is sourced in docs/icerik-kaynaklari.md.
// Game-design quotes: `quote` is a translation, `quoteOriginal` is Emre's Turkish prompt, verbatim.

export const en: SiteContent = {
  meta: {
    title: 'Emre Bahçeci · I define the work, build it with AI',
    description:
      'Final-year computer engineering student. Work I built with AI and verified with tests; each project lists my part and the AI\'s part separately.',
  },

  nav: {
    how: 'How I work',
    work: 'Selected work',
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
  },

  tracks: {
    ai: {
      label: 'Shipping with AI',
      note: 'Work I defined, had AI build, and verified with tests.',
    },
    product: {
      label: 'Product / ML',
      note: 'Product and machine learning work that started from a user observation or a measurable question.',
    },
    game: {
      label: 'Game design',
      note: 'The mechanics and system decisions are mine; the code is the AI\'s.',
    },
  },

  hero: {
    eyebrow: 'Kayseri, Türkiye · Final-year computer engineering student · Junior roles and internships, remote or on-site',
    name: 'Emre Bahçeci',
    headline: ['I define the work,', 'build it with AI,', 'and prove it with tests.'],
    lede:
      'I mostly don\'t write the code myself. I decide what gets built and for whom, tie "done" to tests a machine can run, then use the result myself and catch what\'s wrong. Every project below lists my part and the AI\'s part side by side.',
    cta: {
      github: 'GitHub',
      cv: 'CV',
      contact: 'Contact',
    },
  },

  how: {
    title: 'How I work',
    intro: 'Four steps. I do the first three on every project; the fourth is my weak spot.',
    steps: [
      {
        title: 'Define the work',
        body: 'Who it\'s for, what the problem is, what stays out. Tepsi, a recipe app, is built on something I saw: recipes get scattered across WhatsApp, paper and phone notes, and people forget the ones they shared.',
      },
      {
        title: 'Tie "done" to a gate',
        body: 'On my code projects, "done" means checks a machine can run have passed, like "17/17 gates pass". The AI usually writes the checks; I set the requirement and sign off. On Tepsi the targets were frozen before the build and no threshold was lowered afterwards.',
      },
      {
        title: 'Use it, catch the errors',
        body: 'I use what gets built and find what the tests miss: wrong match dates in tournament PDFs, a dashboard too complex for a beginner, windows rendering inconsistently in a Unity scene.',
      },
      {
        title: 'Ship it',
        body: 'My weakest step. Of roughly 20 projects I started in the last two and a half months, one has a published release (ytmp3pldl v1.0.0). Tepsi\'s deployment and domain are still waiting on me.',
      },
    ],
    proofs: [
      {
        value: '500+',
        label: 'commits I directed across 15+ repos; the AI wrote the code',
        date: 'Aug-Nov 2026',
      },
      {
        value: '17/17',
        label: 'test gates passed on Tepsi\'s core',
        date: '7 Nov 2026',
      },
      {
        value: '88/88',
        label: 'tests passed on Game Journey',
        date: '7 Nov 2026',
      },
      {
        value: '~8 hours',
        label: 'ytmp3pldl: from first request to public v1.0.0 release',
        date: '30-31 Oct 2026',
      },
      {
        value: '1 / ~20',
        label: 'projects with a published release',
        date: '11 Nov 2026',
      },
    ],
    note: 'The AI wrote the code for the work on this site. That\'s why I don\'t say "I developed it"; I say "I defined it, directed it and verified it with tests". The code I wrote by hand dates from 2025 and earlier, and it\'s marked separately under Skills.',
  },

  work: {
    title: 'Selected work',
    intro:
      'Six projects. Each one shows the problem, my part, the AI\'s part and the evidence; every number in the evidence is dated. Links only where the work is public.',
    items: [
      {
        id: 'oyun-yolculugu',
        name: 'Game Journey + sample Hex-Zar web game',
        track: 'ai',
        status: 'Runs locally, not published',
        period: 'Nov 2026',
        problem:
          'A step-by-step guide that teaches someone with no experience how to make a game with AI, plus a dashboard that updates live in the browser while they work with Claude Code. To show the guide works, a small web game, Hex-Zar web, was built from scratch by following its steps.',
        mine: [
          'I set the idea and the audience: someone who knows nothing should be able to look at it and see how they would make a game (5 Nov 2026).',
          'I decided what the guide teaches: not which code to write, but what is done, why, and where.',
          'I used the dashboard and sent it back: too complex for a beginner (7 Nov 2026). It was rebuilt.',
          'I picked a small web version of Hex-Zar as the sample game.',
        ],
        ai: [
          'All of the guide text, the dashboard, the Claude Code hooks and the tests.',
          'The learner prompts in the sample run and the game\'s visual style. AI sessions made those calls, not me.',
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
          'Turn a Python download script that ran on one computer into an app that installs on other Windows machines without Python and keeps itself up to date. The case here is the packaging and update work, not the product.',
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
          'Package tested on 2 fresh Claude setups · 25 Oct 2026',
        ],
      },
      {
        id: 'tepsi',
        name: 'Tepsi: recipe notebook',
        track: 'product',
        status: 'Runs locally, not published',
        period: 'Oct-Nov 2026',
        problem:
          'Homemakers keep recipes in WhatsApp, on paper, in phone notes and in notebooks, and struggle to remember the recipes they\'ve given each other. Not something to sell: a recipe notebook for them that also works offline.',
        mine: [
          'The observation: they ask each other for recipes and later struggle to remember what they gave (22 Oct 2026). The design is built on it.',
          'The scope: not for selling, for homemakers (22 Oct 2026). Recipes stay with their owner.',
          'I approved the core definition of "done": notebook, importing recipes from WhatsApp, account-free link sharing, PDF export.',
          'I deliberately put it aside before testing it with a real user.',
        ],
        ai: [
          'The whole PWA: rule-based recipe parser, offline mode, share links, test gates. 9 commits in a single day.',
        ],
        evidence: [
          '17/17 test gates PASS · 7 Nov 2026',
          '100% accuracy, 0 unit errors on a 30-recipe test set; 100% on the hidden set too · 7 Nov 2026',
          'Deployment and real user test: not done',
        ],
      },
      {
        id: 'devre-okuyucu',
        name: 'Circuit Reader (graduation project)',
        track: 'product',
        status: 'In progress; no model results yet',
        period: 'Oct 2026 - ongoing',
        problem:
          'Vision-language models can find the components in a circuit schematic but miss the connections between them. A system that extracts components and connections from a schematic image and turns them into a netlist.',
        mine: [
          'The topic came from something I ran into: an AI misread a circuit image, and I noticed because the result made no sense.',
          'The axis: not the delivery schedule, but getting our model as far as it can go (13 Oct 2026).',
          'The constraint: no large models as the base, because of cost and the 6 GB GPU in my computer.',
          'I found and picked the external datasets; hand-drawn schematics only come in if they can be recognized well.',
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
          'For the players of a local billiards club, the tournament schedule and player lists sat page by page on the federation\'s results portal. What was needed: branded PDFs you can read at a glance.',
        mine: [
          'I know the domain, so I checked the output player by player.',
          'I caught two AI errors: two groups\' match dates were pulled wrong, and everyone on the provincial list had been counted as a club player.',
          'I matched 13 players by their federation IDs myself.',
        ],
        ai: ['Pulling the data from the portal, tabulating it, and the branded PDF layout.'],
        evidence: [
          'Match schedule for 59 players (46 + 13) · 28 Oct 2026',
          'Player list PDFs · 22 Oct 2026',
          'One-off job; not a reusable tool',
        ],
      },
    ],
  },

  games: {
    title: 'Game design',
    intro:
      'Three games at three stages: a playable Unity prototype, a farming game with a working core, and a world that so far exists only on paper. What I\'m showing here is design decisions, not code.',
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
          {
            decision: 'Depth comes from strategy first; the AI doesn\'t add mechanics without asking me.',
            quote: '…I\'m after more strategic play, but don\'t add anything without asking me',
            quoteOriginal: '…daha stratejik bir oynanış arıyorum ama bana sormadan bir şey ekleme',
            date: '17 Oct 2026',
          },
        ],
      },
      {
        id: 'laminel-farm',
        name: 'Laminel-Farm',
        status: 'Unity · first subproject in progress · not published',
        summary:
          'A vertical farming game set in a multi-storey apartment block under zombie and alien threat, where light is everything. The same plant grows in 2 hours or 6 depending on where you put it; the heart of the game is a placement puzzle. I build the scenes in the Unity editor; the AI writes the code.',
        decisions: [
          {
            decision: 'Playability first: art style and 3D models were shelved entirely until the game proved playable.',
            quote: '…to test first whether the game is playable, let\'s drop the stylized art and modeling work completely for now',
            quoteOriginal: '…önce oyun oynanılabilir mi test etmek için stilize ve model yapma işini şimdilik komple bırakalım',
            date: '11 Oct 2026',
          },
          {
            decision: 'Sun-loving plants have to sit by the window. Space there is scarce, so every placement has a cost.',
            quote: '…plants that need sun will have to stay near the window',
            quoteOriginal: '…güneş isteyen bitkiler mecbur cama yakın duracak',
            date: '12 Oct 2026',
          },
          {
            decision: 'When there\'s less to plant in winter, the player shouldn\'t be left idle: a winter-only activity.',
            quote: 'by the way, since there\'s less to plant in winter, I think we should find an activity you can only do in winter',
            quoteOriginal: 'bu arada kış için dikilecek şeyler azaldığından sadece kışın yapılabilecek etkinlik bulmalıyız bence',
            date: '12 Oct 2026',
          },
        ],
      },
      {
        id: 'kabuk',
        name: 'Kabuk',
        status: 'Design only · no code',
        summary:
          'An isometric action MMORPG design based on the D&D 5e SRD, set in a world where a shell built by people stands in place of the sky. Core loop: go into a dangerous zone and get the loot out alive. 11 game decisions and 6 economy decisions are written down.',
        decisions: [
          {
            decision: 'Not a single-player tabletop story but a real multiplayer video game. A tabletop version in the same world comes last.',
            date: '24 Sep 2026',
          },
          {
            decision: 'Level isn\'t a permanent climb. Power lives in an energy core you carry; players choose which core to take into a raid and lose it if they die.',
            date: '24 Sep 2026',
          },
          {
            decision: 'No item-tier grind. Ordinary items are alternatives, not upgrades; power comes from rare ancient items and from the core.',
            date: '24 Sep 2026',
          },
        ],
      },
    ],
  },

  skills: {
    title: 'Skills',
    intro:
      'Three levels, no percentages. Each row has a one-line piece of evidence. Items that only appeared on my old CV with nothing else to back them up are left out.',
    levels: {
      hands: {
        label: 'Hands-on',
        description: 'I do this myself: the call, the know-how or the work comes from me, and I can do it without AI.',
      },
      directed: {
        label: 'Directed',
        description: 'I had AI build it: I defined the work, tested it and made the calls. I didn\'t write the code.',
      },
      touched: {
        label: 'Touched',
        description: 'Tried it or used it at coursework level; my depth is limited.',
      },
    },
    groups: [
      {
        title: 'Working with AI',
        items: [
          {
            name: 'Reviewing AI output, catching errors',
            level: 'hands',
            evidence: 'Caught wrongly pulled group dates and players assigned to the wrong club in the tournament PDFs (22 and 28 Oct 2026).',
          },
          {
            name: 'Defining work and shipping behind test gates',
            level: 'directed',
            evidence: 'I set the gate requirement, the AI writes the gates: Tepsi 17/17, Game Journey K1-K7 (7 Nov 2026).',
          },
          {
            name: 'Parallel work with subagents, model choice',
            level: 'directed',
            evidence: 'Hex-Zar v0.6: eight tasks split across subagents, then an overall review (26 Oct 2026).',
          },
          {
            name: 'Context and memory setup (CLAUDE.md, skills, status boards)',
            level: 'directed',
            evidence: 'The status boards were my idea, to get better results while spending fewer tokens (25 Oct 2026).',
          },
          {
            name: 'Setting up and connecting MCP servers',
            level: 'hands',
            evidence: 'Picked the Unity MCP server from its repo and configured it in the editor (26 Oct 2026).',
          },
        ],
      },
      {
        title: 'Product and game design',
        items: [
          {
            name: 'Turning user observation into requirements',
            level: 'hands',
            evidence: 'Tepsi\'s design rests on what I saw about where recipes get lost (22 Oct 2026).',
          },
          {
            name: 'Usability critique',
            level: 'hands',
            evidence: 'Found the Game Journey dashboard too complex for a beginner and had it rebuilt (7 Nov 2026).',
          },
          {
            name: 'Narrowing scope, setting the axis',
            level: 'hands',
            evidence: 'Circuit Reader: set "get the model as far as it can go" as the axis instead of the delivery schedule (13 Oct 2026).',
          },
          {
            name: 'Game mechanics and systems design',
            level: 'hands',
            evidence: 'The key decisions in Hex-Zar, Laminel-Farm and Kabuk are mine; dated quotes above.',
          },
          {
            name: 'Game review framework',
            level: 'hands',
            evidence: 'I set the first 8 categories of the framework; the AI wrote the text of all 159 reviews (Aug-Nov 2026).',
          },
        ],
      },
      {
        title: 'Software and systems',
        items: [
          {
            name: 'Git and GitHub (branches, merges, tags)',
            level: 'hands',
            evidence: 'On GitHub since 2022; I make the calls on branching, merging and release tags.',
          },
          {
            name: 'React (basics)',
            level: 'hands',
            evidence: 'During my internship I built the company\'s one-page site in React and published it through GitHub (Jul 2025).',
          },
          {
            name: 'Web: PWA, vanilla JavaScript, Node',
            level: 'directed',
            evidence: 'The Tepsi PWA and Game Journey, built on Node with no dependencies (Nov 2026).',
          },
          {
            name: 'Python',
            level: 'directed',
            evidence: 'Circuit Reader\'s data generator, measurement and training code (Oct-Nov 2026).',
          },
          {
            name: 'Backend (FastAPI, serverless function)',
            level: 'directed',
            evidence: 'data_annotate (FastAPI) and Tepsi\'s share function; I haven\'t written a backend by hand.',
          },
          {
            name: 'Unity editor',
            level: 'hands',
            evidence: 'Laid out the room and windows for Laminel-Farm in the editor myself (12 Oct 2026).',
          },
          {
            name: 'C# (Unity)',
            level: 'directed',
            evidence: 'Laminel-Farm 57, Hex-Zar 53 commits; the AI wrote the code (Oct-Nov 2026).',
          },
          {
            name: 'Windows packaging and auto-update',
            level: 'directed',
            evidence: 'ytmp3pldl v1.0.0: Inno Setup installer, SHA256-verified updates (30 Oct 2026).',
          },
          {
            name: 'Android (Kotlin)',
            level: 'directed',
            evidence: 'easy-phone, an Android launcher for older people: 15/15 gates; not tried with a real user (16 Sep 2026).',
          },
          {
            name: 'Hardware, OS installation, tech support',
            level: 'hands',
            evidence: 'University IT department: imaging, formatting, RAM/SSD/power supply swaps (Apr-Jun 2025).',
          },
          {
            name: 'Flutter / Dart',
            level: 'touched',
            evidence: 'DersAI in 2025: Flutter + Firebase, two public repos. Rusty today.',
          },
          {
            name: 'Deployment and domains',
            level: 'touched',
            evidence: 'Published one site during my internship; Tepsi\'s deployment is still waiting on me.',
          },
          {
            name: 'Java',
            level: 'touched',
            evidence: 'Exercises from an online Java bootcamp in 2022; public repo.',
          },
        ],
      },
      {
        title: 'Machine learning and vision',
        items: [
          {
            name: 'Object detection with YOLO (data, labeling, training, evaluation)',
            level: 'hands',
            evidence: 'During my internship, when the model missed capped queen cells, I relabeled the dataset into two classes (Jul-Aug 2025).',
          },
          {
            name: 'Dataset selection and quality judgment',
            level: 'hands',
            evidence: 'Found and picked four of Circuit Reader\'s external datasets myself (21 Oct 2026).',
          },
          {
            name: 'Vision-language model fine-tuning (Florence-2, Pix2Struct, Qwen2-VL)',
            level: 'directed',
            evidence: 'Learning the concepts on this project; the first training stage is ongoing, no results yet (Nov 2026).',
          },
          {
            name: 'Superpixel image labeling (SLIC)',
            level: 'directed',
            evidence: 'data_annotate: the initial idea was mine, and I used the tool every round and brought back the bugs (Aug 2026).',
          },
          {
            name: 'Machine learning basics (scikit-learn)',
            level: 'touched',
            evidence: '2025 course notebooks: regression, decision trees, random forest; public repo.',
          },
          {
            name: 'TensorFlow / Keras',
            level: 'touched',
            evidence: 'A neural style transfer notebook with VGG19 in 2024; public repo.',
          },
        ],
      },
    ],
    languages: {
      title: 'Languages',
      items: [
        { name: 'Turkish', note: 'Native.' },
        {
          name: 'English',
          note: 'I read and write it; my speaking is improving. 2025 self-assessment: reading, writing and listening B1, speaking A2.',
        },
      ],
    },
  },

  experience: {
    title: 'Experience and community',
    items: [
      {
        role: 'Intern',
        org: '4B Arıcılık Teknolojileri A.Ş. (beekeeping technology)',
        period: 'Jul-Aug 2025',
        points: [
          'Built a one-page company site in React and published it through GitHub.',
          'Designed the mobile app\'s login, sign-up, profile, notifications and home screens, and handed them to a teammate to wire up to the backend.',
          'Trained YOLOv8 models to detect varroa mites on bees and queen cells in the hive; when the model missed capped queen cells, I relabeled the dataset into two classes.',
          'Precision and recall stayed below target; I wrote it up in Notion, errors included.',
        ],
      },
      {
        role: 'Student IT staff',
        org: 'Bilecik Şeyh Edebali University, IT Department',
        period: 'Apr-Jun 2025',
        points: [
          'Maintenance and repair of staff and lab computers: imaging, formatting, OS installation.',
          'RAM, SSD and power supply swaps, network port activation, tech support for staff.',
        ],
      },
    ],
    educationTitle: 'Education',
    education: [
      {
        role: 'BSc Computer Engineering',
        org: 'Bilecik Şeyh Edebali University',
        period: 'Sep 2021 - ongoing',
        points: ['Final year. Graduation project: Circuit Reader (see Selected work).'],
      },
    ],
    communityTitle: 'Community',
    community: [
      {
        role: 'Founding member',
        org: 'BBCLUB, computer engineering student community',
        period: 'May 2025',
        points: ['I was on the team that founded a student community built on peer learning.'],
      },
    ],
  },

  contact: {
    title: 'Contact',
    body: 'Write to me about junior software or AI application roles, internships or part-time work. I can work remotely or in Kayseri.',
    emailLabel: 'Email',
  },

  footer: {
    colophon: 'I made this site the same way: the AI wrote the code and the text, and I directed it.',
    backToTop: 'Back to top',
  },
};
