const users = [
  {
    caption: 'Comunidades Unidas',
    image: '/img/comunidades.png',
    infoLink: 'https://www.cuutah.org/',
    pinned: true
  },{
    caption: 'Utah Expungements Project',
    infoLink: 'https://utahexpungements.org',
    pinned: true
  },{
    caption: 'OpenMRS',
    image: '/img/OpenMRS-logo.svg',
    infoLink: 'https://openmrs.org',
    pinned: true
  },{
    caption: 'DocketReminder',
    infoLink: 'https://docketreminder.com',
    pinned: true
  }
];

const siteConfig = {
  title: 'Building Utah one program at a time',
  tagline: 'Building Utah one program at a time!',

  url: 'justutahcoders.org',
  baseUrl: '/', 

  projectName: 'justutahcoders',
  organizationName: 'JustUtahCoders',

  headerLinks: [
    // {page: 'mission', label: 'Mission'},
    // {page: 'portfolio', label: 'Our Projects'},
    // {page: 'sponsers', label: 'Sponsers'},
    // {page: 'about', label: 'About Us'},
    // {page: 'reporting', label: 'Accountablity'},
    // {doc: 'meeting-notes', label: 'Meeting Notes'},
    // {blog: true, label: 'Blog'}
  ],

  users,

  headerIcon: 'img/logo.png',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: 'rgb(19, 26, 25)',
    secondaryColor: '#33afe0',
  },

  copyright: `Copyright © ${new Date().getFullYear()} JustUtahCoders`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
