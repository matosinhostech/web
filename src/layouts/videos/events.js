// Assets
import anaSpeaker from "assets/images/events/ana-carvalho-speaker-red.jpeg";
import architectureSpeaker from "assets/images/events/architecture-speaker-red.jpg";
import cryptoSpeaker from "assets/images/events/crypto-speaker-red.jpeg";
import cyberSpeaker from "assets/images/events/cyber-speaker-red.jpeg";
import designSystemsSpeaker from "assets/images/events/design-systems-speaker.jpg";
import diffuseSpeaker from "assets/images/events/diffuse-speaker-red.jpeg";
import giddySpeaker from "assets/images/events/giddy-speaker-red.jpeg";
import hasuraSpeaker from "assets/images/events/hasura-speaker-red.jpeg";
import manelSpeaker from "assets/images/events/manuel-parente-speaker.jpg";
import marcSpeaker from "assets/images/events/marc-speaker-red.jpeg";
import andersonParra from "assets/images/events/market/anderson-parra.jpg";
import antonioCapelo from "assets/images/events/market/antonio-capelo.jpg";
import artjomVassiljev from "assets/images/events/market/artjom-vassiljev.jpg";
import felipeConde from "assets/images/events/market/filipe-conde-sales.jpg";
import joanaCarvalho from "assets/images/events/market/joana-carvalho.jpg";
import ricardoCastro from "assets/images/events/market/ricardo-castro.jpg";
import mlSpeaker from "assets/images/events/ml-speaker-red.jpg";
import ml2Speaker from "assets/images/events/ml2-speaker-red.jpg";
import neuralSpeaker2 from "assets/images/events/neural-speaker-2-red.jpeg";
import neuralSpeaker1 from "assets/images/events/neural-speaker-red.jpeg";
import openSourceSpeaker from "assets/images/events/open-source-speaker-red.jpg";
import {
  default as architectureBanner,
  default as cyberBanner,
  default as diffuseBanner,
  default as giddyBanner,
  default as hasuraBanner,
  default as mlBanner,
  default as neuralBanner,
  default as ycBanner,
} from "assets/images/events/placeholder.jpeg"; //giddy-banner-dark.png';
import tiagoSpeaker from "assets/images/events/tiago-fernandes-speaker.jpg";
import ycSpeaker from "assets/images/events/yc-speaker-red.jpeg";

export default [
  {
    title: "Tracking: Not exactly what you think",
    authors: [
      {
        name: "Felipe Conde",
        url: "https://www.linkedin.com/in/felipe-conde-7475a950/",
        img: felipeConde,
      },
    ],
    projectUrl: "",
    description: "About user data collection",
    longDescription:
      "Tracking user data is a common practice in today's tech industry. Users are nowadays more concerned about their privacy, but reality is that not always their data is used for the bad - yes Google and Meta, I'm taking to you. How do companies leverage users' behaviour to improve their products, what challenges comes from tracking data and which steps can we take to make the most of all data we collect.",
    video: "https://vimeo.com/768764466",
    bannerImg: mlBanner,
    partnerSlug: "felipeConde",
    date: "2022-10-09",
    duration: "23:53",
  },
  {
    title: "Fighting money-laundering with code",
    authors: [
      {
        name: "Artjom Vassiljev",
        url: "https://www.linkedin.com/in/tjomk/",
        img: artjomVassiljev,
      },
    ],
    projectUrl: "",
    description: "The role of tech in the fight against financial crime",
    longDescription:
      "It is estimated that only 1-2% of money-laundering crime is detected. How do companies fight financial crime today? What happens in the first seconds while your money travels from one account to another? This talk gives an overview of the tech used by the analysts, the problems we face scaling it globally, and how we're solving these.",
    video: "https://vimeo.com/765381811",
    bannerImg: mlBanner,
    partnerSlug: "artjomVassiljev",
    date: "2022-10-09",
    duration: "21:12",
  },
  {
    title: "Observability with OpenTelemetry",
    authors: [
      {
        name: "Joana Carvalho",
        url: "https://www.linkedin.com/in/joanacarvalho1987/",
        img: joanaCarvalho,
      },
    ],
    projectUrl: "",
    description: "Tracing and exporting telemtry data",
    longDescription:
      "Many components are involved in monitoring and correlating signals from distributed systems. OpenTelemetry comes to aid with a vendor-agnostic telemetry specification that allows developers in any stack to gather telemetry data. It aims to be the standard for implementing and enabling effective Observability. This talk will introduce its core architecture components, key concepts and features, and how to set them up for tracing and exporting telemetry data.",
    video: "https://vimeo.com/773520339",
    bannerImg: mlBanner,
    partnerSlug: "joanaCarvalho",
    date: "2022-10-09",
    duration: "36:48",
  },
  {
    title: "How SeatGeek handles high demand ticket on-sales",
    authors: [
      {
        name: "Anderson Parra",
        url: "https://www.linkedin.com/in/anderparra/",
        img: andersonParra,
      },
    ],
    projectUrl: "",
    description: "High-traffic distributed systems",
    longDescription:
      "High-demand online ticket on-sales are a core part of SeatGeek's business and pose a challenge to delivering a seamless user experience. SeatGeek's ability to handle large amounts of online traffic made the company the preferred ticketing solution for significant teams at the English Premier League. They use SeatGeek's primary ticketing software, SeatGeek Enterprise, to give supporters a best-in-class buying experience.",
    video: "https://vimeo.com/767067316",
    bannerImg: mlBanner,
    partnerSlug: "andersonParra",
    date: "2022-10-09",
    duration: "22:13",
  },
  {
    title: "Building journeys for 60+ countries",
    authors: [
      {
        name: "António Capelo",
        url: "https://www.linkedin.com/in/antoniocapelo/",
        img: antonioCapelo,
      },
    ],
    projectUrl: "",
    description: "User journeys and developers' experience",
    longDescription:
      "At Remote, we aim to turn complex processes into simple and pleasant experiences. This talk is about our journey to deliver the best experience possible, both for end-users and engineers.",
    video: "https://vimeo.com/772816848",
    bannerImg: mlBanner,
    partnerSlug: "antonioCapelo",
    date: "2022-10-09",
    duration: "21:05",
  },
  {
    title: "Relia...bility?",
    authors: [
      {
        name: "Ricardo Castro",
        url: "https://www.linkedin.com/in/mccricardo/",
        img: ricardoCastro,
      },
    ],
    projectUrl: "",
    description: "Reliability Systems",
    longDescription:
      "Technology ecosystems are complex and it is really important to understand every change and how it affects our systems, as well as the service provided. Users expect systems to be up, responsive, fast, consistent, and reliable. Reliability for systems means that they are doing what their users need them to do. A system's reliability is essentially how happy users are and we know those happy users are good for business. If reliability is one of the most important requirements of any system, users determine what reliability means, and it’s okay to not be perfect all the time. We need a way of thinking that can address this way of thinking since we have limited resources to spend, be they financial, human, or political.",
    video: "https://vimeo.com/765382336",
    bannerImg: mlBanner,
    partnerSlug: "ricardoCastro",
    date: "2022-10-09",
    duration: "26:37",
  },
  {
    title: "Compensation as a Service",
    authors: [
      {
        name: "Tiago Fernandes",
        url: "https://www.linkedin.com/in/tiago-m-fernandes/",
        img: tiagoSpeaker,
      },
    ],
    projectUrl: "",
    description: "Building the Bank of the Employee with Elixir",
    longDescription:
      "Tiago Fernandes, CTO of Coverflex, explains to us how Coverflex is building the future of compensation with Elixir and give us an insight into their mission of creating the Bank of the Employee.",
    video: "https://vimeo.com/720187333",
    bannerImg: mlBanner,
    partnerSlug: "tiagoFernandes",
    date: "2022-06-01",
    duration: "21:54",
  },
  {
    title: "Maritime Robots",
    authors: [
      {
        name: "Manuel Parente",
        url: "https://www.linkedin.com/in/mparente/",
        img: manelSpeaker,
      },
    ],
    projectUrl: "",
    description:
      "Maritime Robots: Protecting our oceans with sustainable technology",
    longDescription:
      "Manuel Parente, Director of Software Engineering at Ocean Infinity, will break down how building a fleet of robotic vessels at scale is a complex challenge – especially if done sustainably.",
    video: "https://vimeo.com/722376503",
    bannerImg: mlBanner,
    partnerSlug: "manelParente",
    date: "2022-06-01",
    duration: "32:08",
  },
  {
    title: "Founding a tech startup",
    authors: [
      {
        name: "Ana Martins de Carvalho",
        url: "https://www.linkedin.com/in/anapmc/",
        img: anaSpeaker,
      },
    ],
    projectUrl: "",
    description: "From 0 to seed: Founding a tech startup.",
    longDescription:
      "Ana Martins de Carvalho, CTO at Anansi, will showcase the journey of a tech start-up, from business idea to million pound investment. It highlights the choices and compromises made to build a product ready for launch and how the processes, infrastructure and codebase evolve along the way. You'll hear about the first MVP and how a Django monolith made it to market, the decisions made on micro budgets and the exciting roadmap ahead. This is Ana's personal reflection on the engineering side of Anansi, and the adventures of building an automated goods-in-transit insurance product.",
    video: "https://vimeo.com/702963781",
    bannerImg: mlBanner,
    partnerSlug: "anaMartins",
    date: "2022-04-13",
    duration: "20:57",
  },
  {
    title: "The Journey to Async",
    authors: [
      {
        name: "Marc Roberts",
        url: "https://www.linkedin.com/in/marcusjroberts/",
        img: marcSpeaker,
      },
    ],
    projectUrl: "",
    description: "The Journey to Async",
    longDescription:
      "Marc Roberts, Head of Engineering at Ambassador Theatre Group, will tell us how a ticketing platform has a lot in common with a fundraising platform - one mention on TV and traffic goes through the roof. The talk will be about how ATG is looking to benefit from asynchronous services and how they're using microservices, serverless and event-based architectures to build a resilient platform.",
    video: "https://vimeo.com/702966241",
    bannerImg: mlBanner,
    partnerSlug: "marcRoberts",
    date: "2022-04-13",
    duration: "26:47",
  },
  {
    title: "Crypto Payments",
    authors: [
      {
        name: "Roberto Sousa",
        url: "https://www.linkedin.com/in/roberto-sousa-06767078/",
        img: cryptoSpeaker,
      },
    ],
    projectUrl: "",
    description: "Crypto Payments",
    longDescription:
      "How to mix crypto with everyday payments? Roberto Sousa, Head of Engineering at Mode, gives us an insight into how to merge crypto into payments and a breakdown of how to design it to scale and all the challenges associated with it.",
    video: "https://vimeo.com/676381927",
    bannerImg: mlBanner,
    partnerSlug: "robertoSousa",
    date: "2022-02-10",
    duration: "17:24",
  },
  {
    title: "Open Source",
    authors: [
      {
        name: "Tiago Barbosa",
        url: "https://www.linkedin.com/in/tiagobarbosa/",
        img: openSourceSpeaker,
      },
    ],
    projectUrl: "",
    description: "Open Source",
    longDescription:
      "Why contribute to open source? Tiago Barbosa, Specialist Solutions Architect at AWS and streamer at the AWS Twitch channel Talk Dev to me, showcases the power and the motivations to do open source projects.",
    video: "https://vimeo.com/676380612",
    bannerImg: mlBanner,
    partnerSlug: "tiagoBarbosa",
    date: "2022-02-10",
    duration: "19:29",
  },
  {
    title: "AI Reconition",
    authors: [
      {
        name: "Andreia Sousa",
        url: "https://www.linkedin.com/in/andreia-ferreira-sousa-a4a95226/",
        img: ml2Speaker,
      },
    ],
    projectUrl: "",
    description: "AI recognition project",
    longDescription:
      "In the Basecone business, one of the most concerning problems is to accurately translate the information present in an invoice or receipt to a human-readable text in the correct format. During the last year, the data science team has been working on algorithms to solve this.",
    video: "https://vimeo.com/652798237",
    bannerImg: mlBanner,
    partnerSlug: "andreiaSousa",
    date: "2021-11-26",
    duration: "21:46",
  },
  {
    title: "Design System",
    authors: [
      {
        name: "Henrique Macedo",
        url: "https://www.linkedin.com/in/henrikemacedo/",
        img: designSystemsSpeaker,
      },
    ],
    projectUrl:
      "https://taikai-rocket-kit.netlify.app/?path=/story/design-system-atoms-button--button-component",
    description: "Build a design system from zero to… the moon!",
    longDescription:
      "The why and how we build the design system behind TAIKAI. A design system can be the foundation for SaaS companies and centralized space for single or multiple projects. But what seems to be easy to build, it’s not so easy at all. So, we go share what we learn, what we use, the mistakes we made, and what we think about the future for our design system.",
    video: "https://vimeo.com/652189921",
    bannerImg: architectureBanner,
    partnerSlug: "taikai",
    date: "2021-11-26",
    duration: "15:07",
  },
  {
    title: "What is ML, and what is definitely not..",
    authors: [
      {
        name: "Sara Pinto",
        url: "https://www.linkedin.com/in/sara-cs-pinto/",
        img: mlSpeaker,
      },
    ],
    projectUrl: "",
    description: "What machine learning is and isn't",
    longDescription:
      "In this talk, Sara Pinto, Senior Data Scientist at Tessian, will clarify what machine learning is and isn't, helping us understand and acknowledge the benefits of this technology in our industry.\n\nSara's background is Computer Science but what she really love is combining Software Engineering with Data. She started working as a Software Engineer but picked interest in Data Science by exploring some ML online courses. After working for 3 years in Portugal as a Data Scientist, she moved to London 3 years ago where she continued to learn everyday on how to solve problems. Her day-to-day is building end-to-end solutions from data analysis & modeling to deployment.",
    video: "https://vimeo.com/624915219",
    bannerImg: mlBanner,
    partnerSlug: "saraPinto",
    date: "2021-9-30",
    duration: "15:44",
  },
  {
    title: "Software Architecture",
    authors: [
      {
        name: "Luís Ramos",
        url: "https://www.linkedin.com/in/luisramos/",
        img: architectureSpeaker,
      },
    ],
    projectUrl: "https://www.huub.com",
    description: "HUUB and good software architecture",
    longDescription:
      "In this talk, seasoned software engineer and HUUB CTO, Luís Ramos, will teach us how good software architecture could make or break the scalability of your project, especially in the Logistics as a Service paradigm.\n\nLuís is a Software Engineer with 20 years of professional experience. He has worked in Switzerland, France, Portugal and the UK, and across different industries such as E-commerce, Digital Marketing, Banking, Healthcare and Telco. He is passionate about simplicity, software design and Lean Software Development. In the last 5 years he has been CTO at AdClick, Head of Engineering at Farfetch and, in the last year, CTO at HUUB where is helps build the next generation Logistics platform.",
    video: "https://vimeo.com/624919801",
    bannerImg: architectureBanner,
    partnerSlug: "huub",
    date: "2021-9-30",
    duration: "19:07",
  },
  {
    title: "Project Analysis for Software Houses",
    authors: [
      {
        name: "André Silva",
        url: "https://www.linkedin.com/in/andreragsilva/",
        img: giddySpeaker,
      },
    ],
    projectUrl: "https://coletiv.com/showcase/giddy/",
    description:
      "Learn with André Silva how an Elixir backend and Flutter are useful to create a project analysis tool for small scale software houses.",
    longDescription:
      "Giddy presents itself as being the very first internal product made by Coletiv Studio, fruit of a whiteboard improvement process that is now a mobile application.\n\nAndré Silva is the CTO of Coletiv and a Software Engineer, with focus on iOS and Elixir development from Porto, Portugal.",
    video: "https://vimeo.com/518630526",
    bannerImg: giddyBanner,
    partnerSlug: "coletiv",
    date: "2021-2-26",
    duration: "19:44",
  },
  {
    title: "A Random Walk to YC",
    authors: [
      {
        name: "Pedro Pregueiro",
        url: "https://www.linkedin.com/in/pedropregueiro",
        img: ycSpeaker,
      },
    ],
    projectUrl: "https://coletiv.com/showcase/giddy/",
    description:
      "Through Pedro Pregueiro experience, learn how to navigate your way to the most desired startup accelerator in the world – Y Combinator.",
    longDescription:
      "This talk is split into two parts. During the first part, Pedro will share some anecdotes of his path from CS graduate to getting into Y Combinator, and how a bunch of random decisions led him there. In the second part, he’ll share some insights about what it is like to be part of YC and what kind of lessons he learnt as a tech person and founder, regarding building your own company.\n\nPedro is one of the founders of Satchel. He has a CS degree from Uni. Minho and has since worked in multiple startups as a developer, eng. manager, and CTO. He loves building tech from the ground up, and thrives especially when hacking things together. He was part of the latest Y Combinator batch (W21) in San Francisco.",
    video: "https://vimeo.com/568145996",
    bannerImg: ycBanner,
    date: "2021-6-18",
    duration: "21:24",
  },
  {
    title: "Survival kit to build your POC",
    authors: [
      {
        name: "Márcio Pinto",
        url: "https://www.linkedin.com/in/m%C3%A1rcio-pinto-4b261146/",
        img: hasuraSpeaker,
      },
    ],
    description:
      "Learn about Hasura and all its potential to quickly build an API capable of responding to all the necessary requirements without compromising the quality and the capability of our POC.",
    longDescription:
      "In this talk Márcio will share how he used Hasura and all its potential to quickly build an API capable of responding to all the necessary requirements without compromising the quality and the capability of the POC. He'll show you how easy is to create a complete GraphQL API with queries, mutations and subscriptions and how to overtake some common obstacles.\n\nMárcio Pinto is a full-stack developer at Significa with a special focus on web solutions (React) and mobile hybrid solutions (React-Native). Originally graduated as a Designer at UBI, Márcio is now a software enthusiastic and a perfect solution seeker.",
    video: "https://vimeo.com/544663917",
    bannerImg: hasuraBanner,
    date: "2021-4-30",
    duration: "21:44",
  },
  {
    title: "Let the travel begin",
    authors: [
      {
        name: "José Pereira",
        url: "https://www.linkedin.com/in/joselfpereira/",
        img: cyberSpeaker,
      },
    ],
    description:
      "Learn how Jose Pereira went go from Marco de Canavezes to Silicon Valley and co-found two cybersecurity startups while living there.",
    longDescription:
      "In this talk Jose will recount how he ended up in California and why eventually returned back to origins. And make the case for you to go abroad as well.\n\nWhile graduating in EE from FEUP in 2011, Jose worked in a couple open-source projects that landed him a job in Silicon Valley. While there, Jose co-founded and exited 2 cybersecurity startups. An entrepreneur at heart, Jose can't let go of writing code and helping create consumer-looking enterprise-grade products. Recently back in Portugal, Jose tries to run a family with his wife, newborn and 2 cats.",
    video: "https://vimeo.com/568146045",
    bannerImg: cyberBanner,
    date: "2021-6-18",
    duration: "28:00",
  },
  {
    title: "Neural-network monitoring",
    authors: [
      {
        name: "José Ferrão",
        url: "https://www.linkedin.com/in/jos%C3%A9-ferr%C3%A3o-17b489126/",
        img: neuralSpeaker1,
      },
      {
        name: "Nelson Campos",
        url: "https://www.linkedin.com/in/nelson-campos-97b86910b",
        img: neuralSpeaker2,
      },
    ],
    description:
      "In this talk we will present the challenges we faced @ EQS Digital while building our data monitoring system to handle large-scale time series datasets of over 100GB.",
    longDescription:
      "José and Nelson will explain how they structured their data, stored, and indexed it in their databases to provide fast visualization and processing tools to the user, while also being able to process it using our neural network-based systems for forecasting and automated anomaly detection.\n\nJosé Ferrão is a software engineer at EQS Digital and PhD Student of Computer Engineering at UA, working on web visualisation tools, computer vision and machine learning.\n\nNelson Campos is a software engineer at EQS Digital, obtained his master’s degree of Robotics and Autonomous Systems at ISEP. Interested in electronics and full-stack software development.",
    video: "https://vimeo.com/544665590",
    bannerImg: neuralBanner,
    date: "2021-4-30",
    duration: "20:01",
  },
  {
    title: "Content Media Distribution",
    authors: [
      {
        name: "Francisco Sales",
        url: "https://www.linkedin.com/in/franciscofsales/",
        img: diffuseSpeaker,
      },
    ],
    description:
      "DIFFUSE.TV is a media content distribution platform built by Mosano that relies on IPFS protocol, to store & share media content more efficiently.",
    longDescription:
      "IPFS (InterPlanetary File System) is a protocol, and P2P network for storing and sharing data in a distributed file-sharing system, that can be leveraged to more efficiently store and share large files. It relies on cryptographic hashes that can easily be stored on a blockchain.\n\nFrancisco Sales is passionate about solving complex problems, and simple ones. Always aspiring for perfection, and thriving to innovate through technology. He's also the CoFounder & Tech Lead at Mosano.",
    video: "https://vimeo.com/518631682",
    bannerImg: diffuseBanner,
    date: "2021-2-26",
    duration: "15:55",
  },
];
