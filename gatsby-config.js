module.exports = {
  siteMetadata: {
    siteUrl: "https://www.matosinhos.tech",
    title: "matosinhos.tech",
    description: `A community that showcases people, projects and companies`,
    partners: [
      {
        slug: "coletiv",
        name: "Coletiv",
        assetsPath: "/images/partners/coletiv/",
        site: "https://www.coletiv.com",
        address: "Avenida da França, 352 4050-276 Porto Portugal",
        mission:
          "Helping entrepreneurs and startups shape any idea into a marketable product.",
        description:
          "Coletiv is not the typical agency or software house. It's a multidisciplinary digital product studio that guides projects from ideation to market, promoting a very interactive collaboration between clients and teams. Focused on product strategy, distinctive design, and high-quality development, Coletiv has worked with multiple teams around the globe, building great products.",
        social_facebook: "https://www.facebook.com/wearecoletiv",
        social_twitter: "https://twitter.com/coletivstudio",
        social_linkedin: "https://linkedin.com/company/coletiv",
        outcomes: [
          (people = "15 team members"),
          (years = "4 years (active since 2017)"),
          (source = "4 GitHub open source projects "),
          (projects = "12 projects"),
        ],
        project_link: "https://www.github.com",
      }, {
        slug: "basecone",
        name: "Basecone",
        assetsPath: "/images/partners/basecone/",
        site: "https://www.basecone.com",
        address: "Praça Bom Sucesso 131, Edifício Península, 4150-146 Porto",
        mission:
          "We give back time to the accountant.",
        description:
          "Basecone, a Wolters Kluwer Tax & Accounting Europe company, is a vibrant and dynamic place to work. We push boundaries and challenge each other every day. We collaborate across disciplines, trying to achieve a common goal: to develop, launch and maintain state-of-the-art Solutions. Solutions that effectively address real business problems and provide the best customer experience out there. Solutions that our teams can be proud of at the end of the day. At Basecone we believe our people are the heart and soul of our company. We value everyone’s input and believe in a commonly agreed commitment. We offer a no-nonsense environment, in which professionalism, fun and open communication are key elements. At Basecone we have tools and resources available to help our team members be at their best emotionally, physically and socially. We also invest on the training and development of all Baseconians by providing training opportunities, both individual and in groups, many online but also plenty onsite, focusing not only on the technical but also on the social/soft skills. These are key opportunities to expand our knowledge and develop ourselves as professionals, as well as an important boost in our morale and motivation. In the end, we all want to stay up-to-date regarding software applications, Agile processes and whatever new challenges the tech scenes throws at us, as well as to learn how to develop our soft skills, such as leadership, critical thinking and complex problem solving.",
        social_facebook: "https://www.facebook.com/baseconenv",
        social_twitter: "https://twitter.com/basecone",
        social_linkedin: "https://linkedin.com/company/basecone​",
        outcomes: [
          (people = "97 team members"),
          (years = "9 years"),
          (source = "2 GitHub open source projects "),
          (projects = "2 projects"),
        ],
        project_link: "https://github.com/Basecone",
      }, {
        slug: "newwork",
        name: "New Work",
        assetsPath: "/images/partners/newwork/",
        site: "https://www.new-work.se/en/",
        address: "Rua Sousa Aroso 991, 4450-291 Matosinhos, Portugal",
        mission: "For a better working life.",
        description: "New Work is a German company which offers a wide range of brands, products and solutions to support companies and future employees to meet. One of the main products developed in Porto is called XING, the leader professional social network in german speaking countries with more than 19M users. Welcome to a no normal company. This is the \"presentation card\" for everyone who enters our office in Matosinhos, Porto. With a bold design, this is where more than 150 very skilled people of 10 different countries develop cutting edge technology and have fun every day.",
        social_facebook: "https://www.facebook.com/XING",
        social_twitter: "https://twitter.com/XING_de",
        social_linkedin: "https://www.linkedin.com/company/new-work-se/",
        outcomes: [
          (people = "150 team members"),
          (years = "4 years"),
          (source = "90 GitHub open source projects "),
          (projects = "10 brands"),
        ],
        project_link: "https://github.com/xing/",
      },
      {
        slug: "glazed",
        name: "Glazed",
        assetsPath: "/images/partners/glazed/",
        site: "https://www.glazed.dev",
        address: "Rua Mouzinho de Albuquerque, nº 744, 3º andar, 4450-203 Matosinhos, Portugal",
        mission: "Some projects require elite mobile and web developers",
        description: "Glazed is a developer-only company based in Porto, Portugal. Glazed is a team of highly specialised developers that takes on the most demanding web and mobile development projects, and for the past ten years, has been providing the world’s leading brands with the right talent when needed.",
        social_facebook: "https://www.facebook.com/glazedEliteDevelopers/",
        social_twitter: "https://twitter.com/glazedSolutions",
        social_linkedin: "https://www.linkedin.com/company/glazed-solutions/​",
        outcomes: [
          (people = "16 team members"),
          (years = "10 years"),
          (source = "3 GitHub open source projects "),
          (projects = "40 projects"),
        ],
        project_link: "https://github.com/glazed-elite-developers",
      },
      {
        slug: "oceaninfinity",
        name: "Ocean Infinity",
        assetsPath: "/images/partners/oceaninfinity/",
        site: "https://oceaninfinity.com/",
        address: "R. Cândido dos Reis 1499 4460, Custóias",
        mission: "Our purpose is to use innovative technology to transform operations at sea, to enable people and the planet to thrive",
        description: "We employ a team of more than 530 experts including, marine geologists, geophysicists, geotechnical engineers, robotics engineers, sensor equipment specialists, biologists, oceanographers, hydrographers, robotic equipment operators, robotic ship operators, and software developers. The company was founded in 2017 and has been growing for 5 years. We have an active \"traditional\" 12 vessel fleet, an underwater robotic fleet of 10 ROVs (remotely operated vehicles), 14 UAVs (unmanned autonomous vehicles), and we are building the largest unmanned robotic vessel fleet that will total 21 uncrewed vessels.",
        social_facebook: "https://www.facebook.com/OceanInfinityOfficial/",
        social_twitter: "https://twitter.com/ocean__infinity",
        social_linkedin: "https://www.linkedin.com/company/ocean-infinity-llc",
        outcomes: [
          (people = "530 experts"),
          (years = "5 years"),
          (source = "10 remotely operated vehicles"),
          (projects = "14 unmanned autonomous vehicles"),
        ],
        project_link: "https://github.com/glazed-elite-developers",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/meta/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#e13b3a`,
        theme_color: `#e13b3a`,
        display: `minimal-ui`,
        icon: `src/assets/images/meta/favicon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/",
      },
      __key: "assets",
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          shared: "src/shared",
          assets: "src/assets",
          layouts: "src/layouts",
        },
        extensions: ["js"],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-RBCCS5WMQW",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-RBCCS5WMQW", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/do-not-track/me/"],
        },
      },
    }
  ],
}
