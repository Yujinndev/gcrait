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
    bg: '/images/LORMA-BG.jpg',
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
  REGISTRATION: {
    sections: [
      {
        name: 'IV. Qualified Participants',
        details: [
          {
            text: 'The Global Conference on Robotics and Artificial Intelligence Technologies competitions are open to all Schools at any level',
            highlighted: ['open to all Schools at any level'],
          },
          {
            text: 'The contestants are required to wear their school uniforms, while coaches are required to wear formal attire.',
          },
          {
            text: 'Each team must designate a team leader who will be the main point of contact during the competition.',
          },
          {
            text: 'All team members must be present during the competition and registration.',
          },
        ],
      },
      {
        name: 'V. Competition Proper and General Mechanics',
        details: [
          {
            text: 'Participating Teams must check in at the registration booth at least 30 minutes before the competition. The contest will start exactly at 1:30 PM on December 10, 2024. Late Participants will be disqualified or forfeited from the competition.',
            highlighted: ['1:30 PM', 'December 10, 2024'],
          },
          {
            text: 'Only registered participants are allowed to participate in the competition area.',
          },
          {
            text: 'Coaches and other spectators must stay in the audience area.',
          },
          {
            text: 'Coaches are not allowed to help the participants at the game during the competition.',
          },
          {
            text: 'Sportsmanship conduct is expected from players.',
          },
          {
            text: 'Any misconduct, insults, foul language, or intentional action to harm the opponents or robot shall be disqualified.',
          },
        ],
      },
      {
        name: 'VI. Awards and Certificates',
        details: [
          { text: 'Awarding will be held on the day of the competition' },
          {
            text: 'All contestants are required to be there to receive their awards',
          },
          {
            text: 'All contestants and coaches will receive Certificates of Participation and Certificates of Appearance,',
            highlighted: [
              'Certificates of Participation',
              'Certificates of Appearance',
            ],
          },
          { text: 'while winners will receive the following:' },
        ],
        others: [
          {
            title: 'Grand Prize',
            items: [
              'Plaque',
              {
                'Cash prize': [
                  'RoboTalks - ₱ 2,500',
                  'MobotRace - ₱ 2,000',
                  'SumoBot - ₱ 2,000',
                ],
              },
              'Feature on the event website and social media',
            ],
          },
          {
            title: '1st Runner Ups',
            items: [
              'Certificate',
              {
                'Cash prize': [
                  'RoboTalks - ₱ 2,000',
                  'MobotRace - ₱ 1,500',
                  'SumoBot - ₱ 1,500',
                ],
              },
              'Feature on the event website and social media',
            ],
          },
          {
            title: '2nd Runner Ups',
            items: [
              'Certificate',
              {
                'Cash prize': [
                  'RoboTalks - ₱ 1,500',
                  'MobotRace - ₱ 1,000',
                  'SumoBot - ₱ 1,000',
                ],
              },
              'Feature on the event website and social media',
            ],
          },
          {
            title: 'Special Awards',
            items: [
              'Best Innovation (RoboTalks)',
              'Best Robot Performance (Sumobot)',
              'Best Line Tracing Execution (Mobot Race)',
              "People's Choice Award (voted by attendees)",
              'Certificate for each special award',
              'Feature on the event website and social media',
            ],
          },
        ],
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
        images: [
          '/images/competitions/ROBOTALKS-1.jpg',
          '/images/competitions/ROBOTALKS-2.png',
        ],
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
        penalties: [
          {
            category: 'Deductions',
            details: [
              {
                description:
                  'Failure to Comply with Weight/Size Limits: Disqualification',
              },
              {
                description:
                  'Failure to adhere to safety rules: Disqualification',
              },
              {
                description: 'Late Arrival for Battle: Forfeiture of the Match',
              },
              {
                description:
                  'Unauthorized Assistance from Coach: 10% deduction',
              },
              {
                description:
                  'Time Violations in Repair Periods: 5% deduction for every extra minute used',
              },
            ],
          },
        ],
      },
      {
        title: 'Mobot Race',
        images: [
          '/images/competitions/MOBOTRACE-1.jpg',
          '/images/competitions/MOBOTRACE-2.jpg',
          '/images/competitions/MOBOTRACE-3.jpg',
          '/images/competitions/MOBOTRACE-4.jpg',
        ],
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
        penalties: [
          {
            category: 'Line Deviation',
            details: [
              {
                title: 'Minor Deviation',
                description:
                  'If any robot wheel crosses the centerline but the robot corrects its path and continues within 3 seconds, a 5-second penalty is added to the time.',
              },
              {
                title: 'Major Deviation',
                description:
                  'If all robot wheels move off the centerline for more than 3 seconds, the run is invalidated, and a 10-second penalty is applied.',
              },
            ],
          },
          {
            category: 'Robot Malfunction',
            details: [
              {
                title: 'Stalling',
                description:
                  'If the robot halts for more than 10 seconds on the track and does not automatically resume movement, the run is invalidated.',
              },
              {
                title: 'Manual Interference',
                description:
                  'If the team manually resets or intervenes to move the robot during the race, a 20-second penalty is added, or the referee invalidates the run if necessary.',
              },
            ],
          },
          {
            category: 'Premature Start',
            details: [
              {
                description:
                  'If the robot starts moving before the referee’s signal, the team receives a 5-second penalty, and the robot must be reset at the starting line for a new attempt within the round.',
              },
            ],
          },
          {
            category: 'Robot Exceeding Size or Weight',
            details: [
              {
                description:
                  'If the robot exceeds the specified size or weight limit upon inspection and cannot be adjusted before the start, a 10-second penalty will apply for each run with the oversized robot.',
              },
            ],
          },
          {
            category: 'Track Damage',
            details: [
              {
                title: 'Minor Damage',
                description:
                  'A warning is issued on the first offense. Further damage leads to a 10-second penalty for each occurrence.',
              },
              {
                title: 'Major Damage',
                description:
                  'Immediate disqualification of the team if intentional damage is detected.',
              },
            ],
          },
          {
            category: 'Delay in Starting',
            details: [
              {
                description:
                  'If the team delays the start beyond 10 seconds after the referee’s signal, a 5-second penalty is added to the run.',
              },
            ],
          },
          {
            category: 'Failure to Adhere to Safety Standards',
            details: [
              {
                description:
                  "If the robot's sensors are inadequately protected, resulting in interference with other teams or the environment, the team will be penalized with a 10-second addition to their best run time.",
              },
            ],
          },
          {
            category: 'Exceeded Practice Time',
            details: [
              {
                description:
                  'If the team exceeds the designated 3-minute practice and setup time, a 5-second penalty is added to their best run time.',
              },
            ],
          },
        ],
      },
      {
        title: 'Sumo Bot',
        images: [
          '/images/competitions/SUMOBOT-1.png',
          '/images/competitions/SUMOBOT-2.jpg',
        ],
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
        penalties: [
          {
            category: 'Deductions',
            details: [
              {
                description:
                  'Failure to Comply with Weight/Size Limits: Disqualification',
              },
              {
                description:
                  'Failure to adhere to safety rules: Disqualification',
              },
              {
                description: 'Late Arrival for Battle: Forfeiture of the Match',
              },
              {
                description:
                  'Unauthorized Assistance from Coach: 10% deduction',
              },
              {
                description:
                  'Time Violations in Repair Periods: 5% deduction for every extra minute used',
              },
            ],
          },
        ],
      },
    ],
  },
  FAQS: {
    image: '/images/FAQ.png',
    items: [
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
  },
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
      members: [
        {
          type: 'Welcome Committee',
          users: [
            'RITO, Althea Jazel',
            'HIDALGO, Julius Ivan',
            'LIVARA, Kurt Ruzzell',
            'SALDIVAR, Miguel',
            'ABBAGO, Vince Jason',
            'BAUTISTA, Renzo Lim',
          ],
        },
        {
          type: 'Media Committee',
          users: [
            'AFROILAN, Vhince Cedrick',
            'LAUERMAN, Patrick Xavier',
            'GANUELAS, Luke',
            'RAQUEPO, Pyter Ezra',
            'TORIBIO, Jasper',
          ],
        },
        {
          type: 'Tech Committee',
          users: [
            'REYES, John Mark',
            'GANDAWALI, Russel',
            'HUFALAR, Kylle',
            'AZUSANO, Tyronne',
            'PERIA, Mark Lemuel',
          ],
        },
        {
          type: 'Graphics Committee',
          users: [
            'MACAPUNDAG, Johari',
            'SARMIENTO, Ashley',
            'TALHA, Ahmed',
            'ROMBAOA, Eloisa',
            'LIM, Joshua',
          ],
        },
        {
          type: 'Communications Committee',
          users: [
            'DY, Andrew',
            'ARANCES, Melby',
            'DISU, Jan Victor',
            'MACUGAY, John Patrick',
            'GALVAN, John Patrick',
            'MARTINEZ, Jovencio',
          ],
        },
        {
          type: 'Audit Committee',
          users: [
            'BERGANTIN, Adrian',
            'CABASE, Angelo',
            'NEBRES, Eliakim',
            'NOBLEZA, Gerlene',
            'LOPEZ, Zylas',
          ],
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
          fb: 'https://www.facebook.com/PhilippineDroneSoccerAssociation',
        },
        {
          name: 'First Eduspec',
          desc: 'First Eduspec is a multi-national company that offers innovative, technology-based educational solutions and services for the K-12 program of the education market.',
          image: '/images/collabs/eduspec.png',
          website: 'https://first-eduspec.com/',
          fb: 'https://www.facebook.com/@EduspecPhilippines',
        },
        {
          name: 'Hytech Power',
          desc: 'Hytec Power, Incorporated is an innovative company providing products and services for both academe and industry. We are the leading industrial and educational solutions provider in the Philippines.',
          image: '/images/collabs/hytecpower.png',
          website: 'https://hytecpower.com/',
          fb: 'https://www.facebook.com/hytecpowerincorporated/',
        },
      ],
      partners: [
        {
          name: 'Lorma ICpEP.se',
          desc: 'Institute of Computer Engineers of the Philippines - Student Edition of LORMA Colleges, Inc.',
          image: '/images/partners/icpep.png',
          fb: 'https://www.facebook.com/lc.icpep.se',
        },
        {
          name: 'Lorma CCSE SBO',
          desc: 'College of Computer Studies and Engineering - Student Body Organization.',
          image: '/images/partners/sbo.jpg',
          fb: 'https://www.facebook.com/lorma.ccse.sbo',
        },
      ],
      sponsors: [
        {
          name: 'Golden Ratio',
          desc: "Golden Ratio, is specializing in Graphic Design, Printing Services, Logo Design, and Personalized Prints. Whether you're looking to create memorable souvenirs or elevate your brand with sleek and professional designs, we blend creativity with precision to bring your vision to life.",
          image: '/images/sponsors/goldenratio.png',
          fb: 'https://www.facebook.com/goldenratiolu',
        },
        {
          name: 'Arpi.Tech',
          desc: '"Quality is what we pursue". We are committed to achieving excellence in every project, ensuring that our work meets the highest standards of quality and craftmanship.',
          image: '/images/sponsors/arpitech.png',
          fb: 'https://www.facebook.com/profile.php?id=61559516004340',
        },
      ],
    },
  },
}
