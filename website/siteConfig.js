const users = [
];

const siteConfig = {
  title: 'Building Utah one program at a time',
  tagline: 'Building Utah one program at a time!',
  url: 'justutahcoders.org',
  baseUrl: '/', 
  projectName: 'justutahcoders',
  organizationName: 'JustUtahCoders',
  headerLinks: [
  ],
  users,
  headerIcon: 'img/logo.svg',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',
  colors: {
    primaryColor: 'rgb(19, 26, 25)',
    secondaryColor: '#33afe0',
  },
  copyright: `Copyright © ${new Date().getFullYear()} JustUtahCoders`,
  highlight: {
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
};

module.exports = siteConfig;
