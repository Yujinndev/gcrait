export const data = {
  LOGOS: [
    {
      name: 'LORMA',
      image: '/images/LORMA.jpg',
    },
    {
      name: 'CCSE',
      image: '/images/CCSE.png',
    },
    {
      name: 'GCRAIT',
      image: '/images/GCRAIT.png',
    },
  ],
  LINKS: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Registration',
      href: '/registration',
    },
    {
      title: 'Committees',
      href: '/committees',
    },
    {
      title: 'Partners',
      href: '/partners',
    },
  ],
  BRAND: {
    acronym: 'GCRAIT',
    name: {
      text: 'Global Conference on Robotics and Artificial Intelligence Technologies',
      highlights: [
        { word: 'Robotics' },
        { word: 'Artificial Intelligence Technologies' },
      ],
    },
    description:
      'Collaboration into the New and Innovative Future: Hardware Re-imagined',
    CTA: { text: 'Register Now', href: '' },
    logo: '/images/GCRAIT.png',
    bg: '/images/LINEROBOT.jpg',
  },
  CONTACTS: {
    ig: 'https://www.instagram.com/gcrait.lorma/',
    fb: 'https://www.facebook.com/profile.php?id=61566555735259',
    email: 'gcrait@lorma.edu',
  },
  ABOUT: {
    heading: 'About the Conference',
    subheading:
      'The Global Conference on Robotics and Artificial Intelligence Technologies (GCRAIT) is a premier event that brings together leading experts, innovators, and enthusiasts in the fields of robotics and AI. Under the theme, "Collaboration into the New and Innovative Future: Hardware Re-imagined," this conference will serve as a platform for exploring groundbreaking advancements in AI-driven robotics and rethinking how hardware can be designed and integrated for the future. Attendees will engage in insightful discussions, hands-on workshops, and networking opportunities aimed at fostering collaboration and driving the next wave of innovation across industries.',
    cards: [
      {
        className: 'col-span-2',
        thumbnail: '/images/RANDOM1.jpg',
      },
      {
        className: 'col-span-1',
        thumbnail: '/images/RANDOM4.png',
      },
      {
        className: 'col-span-1',
        thumbnail: '/images/RANDOM3.jpg',
      },
      {
        className: 'col-span-2',
        thumbnail: '/images/RANDOM2.jpg',
      },
    ],
  },
  COMPETITONS: {
    heading: 'Call for Submissions and Competitions',
    subheading:
      "We invite participants to showcase their skills and creativity in the following competitions; Whether you're presenting innovative solutions for sustainable development or competing in robotics challenges. Join us to push the boundaries of technology and innovation!",
    items: [
      {
        title: 'RoboTalks',
        overview:
          'A showcase competition where entrants develop and demonstrate creative solutions for industries related to at least one of the 17 Sustainable Development Goals. Entrants present comprehensive project posters, emphasizing how their concepts address practical obstacles and extend the frontiers of automation and technology.',
        robotRequirement: '1 robot / Prototype',
        maxPlayers: '1-5 members',
        category: 'K12 to College Students',
        CTA: { text: 'Submit your Paper', href: '/registration' },
        table: [
          { Theme: '17 SDG' },
          { 'Robot Per Team': '1 robot / Prototype' },
          { 'Max Players': '1-5 members per talk' },
        ],
        generalRules: [
          'All submissions must be original work; any form of plagiarism will lead to disqualification.',
          'Posters must be submitted by the deadline; late submissions will not be accepted.',
          'Teams must adhere to the presentation time limits; failure to comply may result in point deductions.',
          'Coaches are not permitted to assist in the competition, including during poster explanations or presentations.',
          'Judges’ decisions are final.',
        ],
        deductions: [
          { 'Late Submissions': '10% of total points for each day late.' },
          {
            'Plagiarism or Misrepresentation':
              'Disqualification from the competition.',
          },
          {
            'Failure to Adhere to Presentation Time Limits':
              '5% deduction for exceeding the allocated presentation time.',
          },
        ],
      },
      {
        title: 'Mobot Race',
        overview:
          'Mobot Race is a speed competition where robots (mobots) must autonomously follow a designated line on the track and complete the course in the shortest time possible.',
        robotRequirement: '1 Robot',
        maxPlayers: '1-3 players',
        category: 'K12 to College Students',
        CTA: { text: 'Join the Race', href: '/registration' },
        table: [
          { 'Robot Per Team': '1 Robot' },
          { 'Max Players': '1-3 players per team' },
          { 'Robot Control': 'Fully Autonomous' },
          { 'Game Format': 'Round Robin' },
        ],
        generalRules: [
          'The race track will be approximately 3 meters long and 3 meters wide.',
          'Robots must be fully autonomous and controlled by onboard systems.',
          'No external control (remote control or external guidance) is allowed during the race.',
          'Robots must pass a pre-race technical inspection.',
          'Teams must adhere to the time limits for setup and race completion.',
          'Judges’ decisions regarding penalties, deductions, and race outcomes are final.',
        ],
      },
      {
        title: 'Sumo Bot',
        overview:
          'It is a head-to-head robotics competition where teams compete by building and battling with other robots in an arena.',
        robotRequirement: '1 Robot',
        maxPlayers: '1-3 members',
        category: 'K12 to College Students',
        CTA: { text: 'Register Your Team', href: '/registration' },
        table: [
          { 'Robot Per Team': '1 Sumobot' },
          { 'Max Players': '1-3 players per team' },
          { 'Robot Control': 'Remote Controlled' },
          { 'Game Format': 'Round Robin' },
        ],
        generalRules: [
          'The playing field will be 120 cm in diameter.',
          'Robots must be fully remote-controlled',
          'No Weaponry that causes uncontrolled projectiles or chemical hazards is allowed',
          'Teams must adhere to the time limits for each battle.',
        ],
        deductions: [
          { 'Failure to Comply with Weight/Size Limits': 'Disqualification' },
          { 'Failure to adhere to safety rules': 'Disqualification' },
          { 'Late Arrival for Battle': 'Forfeiture of the Match' },
          { 'Unauthorized Assistance from Coach': '10% deduction' },
          {
            'Time Violations in Repair Periods':
              '5% deduction for every extra minute used',
          },
        ],
      },
    ],
  },
  FAQS: [
    {
      question: 'Who can attend GCRAIT?',
      answer:
        'GCRAIT is open to anyone with an interest in robotics, AI, and technology, including students, researchers, professionals, and enthusiasts. Both industry and academic participants are welcome.',
    },
    {
      question: 'Is there an option for virtual attendance?',
      answer:
        'Yes, GCRAIT offers both in-person and virtual attendance options to accommodate participants worldwide. More details on the registration process and fees can be found on our website.',
    },
    {
      question: 'Are there any funding opportunities for students?',
      answer:
        'Yes, GCRAIT offers prizes and awards for students who excel in specific categories. Details on the categories and criteria will be provided closer to the event.',
    },
  ],
  COMMITTEES: {
    heading: 'The Team Powering GCRAIT’s Mission',
    subheading:
      'Uniting experts and enthusiasts for an unforgettable conference. Our committee ensures every detail supports meaningful interactions.',
    organizing: {
      heads: [
        {
          name: 'CASTRO, Hendrick Paul L.',
          position: 'Overall Head',
          image: '/images/committees/OverallHead.jpg',
        },
        {
          name: 'FLORES, Kaishen A.',
          position: 'Overall Vice-President Head',
          image: '/images/committees/OverallVPHead.jpg',
        },
      ],
      subheads: [
        {
          name: 'AJIDO, Andriq Klyne T.',
          position: 'Audit President',
          image: '/images/committees/AuditPres.jpg',
        },
        {
          name: 'GAERLAN, Jerick B.',
          position: 'Audit Vice-President',
          image: '/images/committees/AuditVP.jpg',
        },
        {
          name: 'ROSALES, Maira Francine R.',
          position: 'Communications President',
          image: '/images/committees/CommunicationPres.jpg',
        },
        {
          name: 'CORTEZ, Leo Anthony P.',
          position: 'Communications Vice-President',
          image: '/images/committees/CommunicationVP.jpg',
        },
        {
          name: 'VILLAREAL, Aileen B.',
          position: 'Graphics President',
          image: '/images/committees/GraphicsPres.jpg',
        },
        {
          name: 'AL-AUG, Osamah Basheer Yahya',
          position: 'Graphics Vice-President',
          image: '/images/committees/GraphicsVP.jpg',
        },
        {
          name: 'ZAMBRANO, Daryll Matthews A.',
          position: 'Media President',
          image: '/images/committees/MediaPres.jpg',
        },
        {
          name: 'LAYSA, Mark Eugene U.',
          position: 'Media Vice-President',
          image: '/images/committees/MediaVP.jpg',
        },
        {
          name: 'QUIMPO, Paul Emmanuelle',
          position: 'Tech President',
          image: '/images/committees/TechPres.jpg',
        },
        {
          name: 'SAN JUAN, Xavier Gael S.',
          position: 'Tech Vice-President',
          image: '/images/committees/TechVP.jpg',
        },
        {
          name: 'ANGELO, Mighty Angel P.',
          position: 'Welcome President',
          image: '/images/committees/WelcomePres.jpg',
        },
        {
          name: 'DELA CERNA, Jovan M.',
          position: 'Welcome Vice-President',
          image: '/images/committees/WelcomeVP.jpg',
        },
      ],
      welcome: [
        {
          name: 'RITO, Althea Jazel',
        },
        {
          name: 'HIDALGO, Julius Ivan',
        },
        {
          name: 'LIVARA, Kurt Ruzzell',
        },
        {
          name: 'SALDIVAR, Miguel',
        },
        {
          name: 'ABBAGO, Vince Jason',
        },
        {
          name: 'BAUTISTA, Renzo Lim',
        },
      ],
      media: [
        {
          name: 'AFROILAN, Vhince Cedrick',
        },
        {
          name: 'LAUERMAN, Patrick Xavier',
        },
        {
          name: 'GANUELAS, Luke',
        },
        {
          name: 'RAQUEPO, Pyter Ezra',
        },
        {
          name: 'TORIBIO, Jasper',
        },
      ],
      tech: [
        {
          name: 'REYES, John Mark',
        },
        {
          name: 'GANDAWALI, Russel',
        },
        {
          name: 'HUFALAR, Kylle',
        },
        {
          name: 'AZUSANO, Tyronne',
        },
        {
          name: 'PERIA, Mark Lemuel',
        },
      ],
      graphics: [
        {
          name: 'MACAPUNDAG, Johari',
        },
        {
          name: 'SARMIENTO, Ashley',
        },
        {
          name: 'TALHA, Ahmed',
        },
        {
          name: 'ROMBAOA, Eloisa',
        },
        {
          name: 'LIM, Joshua',
        },
      ],
      communications: [
        {
          name: 'DY, Andrew',
        },
        {
          name: 'ARANCES, Melby',
        },
        {
          name: 'DISU, Jan Victor',
        },
        {
          name: 'MACUGAY, John Patrick',
        },
        {
          name: 'GALVAN, John Patrick',
        },
        {
          name: 'MARTINEZ, Jovencio',
        },
      ],
      audit: [
        {
          name: 'BERGANTIN, Adrian',
        },
        {
          name: 'CABASE, Angelo',
        },
        {
          name: 'NEBRES, Eliakim',
        },
        {
          name: 'NOBLEZA, Gerlene',
        },
        {
          name: 'LOPEZ, Zylas',
        },
      ],
    },
  },
  PARTNERS: {
    heading: 'The Team Powering GCRAIT’s Mission',
    subheading:
      'Uniting experts and enthusiasts for an unforgettable conference. Our committee ensures every detail supports meaningful interactions.',
    items: {
      collaborators: [
        {
          name: 'Philippine Drone Soccer Association',
          desc: 'At the intersection of technology and sports, we proudly introduce the exciting world of drone soccer. As an official part of the Korean Soccer Association and Federation (FIDA), we strive to revolutionize the way we experience the beautiful e-sport.',
          image: '/images/collabs/dronesoccer.png',
          website: 'https://www.dronesoccerph.com/',
        },
        {
          name: 'First Eduspec',
          desc: 'First Eduspec is a multi-national company that offers innovative, technology-based educational solutions and services for the K-12 program of the education market.',
          image: '/images/collabs/eduspec.png',
          website: 'https://first-eduspec.com/',
        },
        {
          name: 'Hytech Power',
          desc: 'Hytec Power, Incorporated is an innovative company providing products and services for both academe and industry. We are the leading industrial and educational solutions provider in the Philippines.',
          image: '/images/collabs/hytecpower.png',
          website: 'https://hytecpower.com/',
        },
      ],
      partners: [
        {
          name: 'Lorma ICpEP.se',
          image: '/images/partners/icpep.png',
          website: 'https://www.facebook.com/lc.icpep.se',
        },
        {
          name: 'Lorma CCSE SBO',
          image: '/images/GCRAIT.png',
          website: 'https://www.facebook.com/lorma.ccse.sbo',
        },
      ],
      sponsors: [
        {
          name: 'Golden Ratio',
          image: '/images/sponsors/goldenratio.png',
          website: 'https://www.facebook.com/goldenratiolu',
        },
        {
          name: 'Arpi.Tech',
          image: '/images/sponsors/arpitech.png',
          website: 'https://www.facebook.com/profile.php?id=61559516004340',
        },
      ],
    },
  },
}
