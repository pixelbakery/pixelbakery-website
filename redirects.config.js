// base.next.config.js

const redirectsArray = [
  // {
  //   source: '/work/case-studies/snacklins-retainer',
  //   destination: '/work/case-studies/snacklins-ongoing-retainer',
  //   permanent: true,
  // },
  {
    source: '/portfolio',
    destination: '/work',
    permanent: true,
  },
  {
    source: '/careers/breadwinners-program',
    destination: '/careers/brand-ambassador',
    permanent: true,
  },
  {
    source: '/about/daniel-hinz',
    destination: '/about/dan-hinz',
    permanent: true,
  },
  {
    source: '/video-production',
    destination: '/services/video-production',
    permanent: true,
  },
  {
    source: '/bakery',
    destination: '/about',
    permanent: true,
  },
  {
    source: '/work/case-studies/snacklins-retainer',
    destination: '/work/case-studies/snacklins-content-kit',
    permanent: true,
  },
  {
    source: '/animation',
    destination: '/services/animation',
    permanent: true,
  },
  {
    source: '/education/tutorials',
    destination: '/education#madeToOrder',
    permanent: true,
  },
  {
    source: '/social-media-kits',
    destination: '/services/social-media',
    permanent: true,
  },
  {
    source: '/services/social-media-kits',
    destination: '/services/social-media',
    permanent: true,
  },
  {
    source: '/careers/apply',
    destination: '/careers/application',
    permanent: true,
  },
  {
    source: '/monday',
    destination: 'https://pixelbakery.monday.com',
    permanent: true,
  },
  {
    source: '/harvest',
    destination: 'https://pixelbakery.harvestapp.com',
    permanent: true,
  },
  {
    source: '/calendly',
    destination: '/book',
    permanent: true,
  },
  {
    source: '/zoom',
    destination: 'https://unl.zoom.us/j/91258744342?pwd=aTlldnpybXk3ZFNLVkNuSStFaEFKZz09',
    permanent: true,
  },
  {
    source: '/meet',
    destination: 'https://unl.zoom.us/j/91258744342?pwd=aTlldnpybXk3ZFNLVkNuSStFaEFKZz09',
    permanent: true,
  },
  {
    source: '/futurebakers/',
    destination: '/careers/',
    permanent: true,
  },
  {
    source: '/futurebakers/apply',
    destination: '/careers/application',
    permanent: true,
  },
  {
    source: '/services/logo-animation',
    destination: '/logo-animation',
    permanent: true,
  },
  {
    source: '/logoanimation',
    destination: '/logo-animation',
    permanent: true,
  },
  {
    source: '/services/motion-mixer',
    destination: '/logo-animation',
    permanent: true,
  },

  {
    source: '/motion-mixer',
    destination: '/logo-animation',
    permanent: true,
  },
  {
    source: '/motionmixer',
    destination: '/logo-animation',
    permanent: true,
  },
  {
    source: '/our-work',
    destination: '/work',
    permanent: true,
  },
  {
    source: '/education/project-files',
    destination: '/education#project-files',
    permanent: true,
  },
  {
    source: '/store/product',
    destination: '/store',
    permanent: true,
  },
  // {
  //   source: '/services',
  //   destination: '/work',
  //   permanent: true,
  // },
  {
    source: '/work/case-studies',
    destination: '/work#projects',
    permanent: true,
  },
  {
    source: '/recipes/welcome-to-the-pixel-bakery-blog-leave-while-you-still-can',
    destination: '/recipes/welcome-to-the-pixel-bakery-blog',
    permanent: true,
  },
  {
    source: '/recipes/motion-graphics-for-pompeii-wrath-of-vesuvius',
    destination: '/recipes/motion-graphics-for-pompeii',
    permanent: true,
  },
  {
    source: '/recipes/now-trending-low-poly-design',
    destination: '/recipes/low-poly-design',
    permanent: true,
  },
  {
    source: '/recipes/repetition-and-revision-in-the-creative-process',
    destination: '/recipes/repetition-and-revision',
    permanent: true,
  },
  {
    source: '/recipes/kb-joins-pb-as-a-brand-strategist-intern',
    destination: '/recipes/kb-joins-pb',
    permanent: true,
  },
  {
    source: '/recipes/character-rigging-with-duik-digitigrade',
    destination: '/recipes/character-rigging',
    permanent: true,
  },
  {
    source: '/recipes/php-and-bootstrap-4-how-to-get-set-up',
    destination: '/recipes/php-and-bootstrap-4',
    permanent: true,
  },
  {
    source: '/recipes/our-top-10-films-of-all-time-in-no-particular-order',
    destination: '/recipes/our-top-10-films',
    permanent: true,
  },
  {
    source: '/recipes/top-10-music-videos-we-pull-animation-inspiration-from',
    destination: '/recipes/top-10-music-videos',
    permanent: true,
  },
  {
    source:
      '/recipes/a-pretty-long-rant-about-being-polite-at-conferences-because-people-need-to-hear-it',
    destination: '/recipes/being-polite-at-conferences',
    permanent: true,
  },
  {
    source: '/recipes/pb-receives-prosper-lincoln-step-up-award',
    destination: '/recipes/prosper-lincoln-step-up-award',
    permanent: true,
  },
  {
    source: '/recipes/hannah-klemme-just-roll-with-it',
    destination: '/recipes/just-roll-with-it',
    permanent: true,
  },
  {
    source: '/recipes/nebraska-type-challenge-01-30-ampersand',
    destination: '/recipes/nebraska-type-challenge-01-30',
    permanent: true,
  },
  {
    source: '/recipes/nebraska-type-challenge-02-30-question-mark',
    destination: '/recipes/nebraska-type-challenge-02-30',
    permanent: true,
  },
  {
    source: '/recipes/nebraska-type-challenge-03-30-semicolon',
    destination: '/recipes/nebraska-type-challenge-03-30',
    permanent: true,
  },
  {
    source: '/recipes/nebraska-type-challenge-04-30-exclamation-mark',
    destination: '/recipes/nebraska-type-challenge-04-03',
    permanent: true,
  },
  {
    source: '/recipes/pb-wins-gold-at-aiga-nebraskas-show-for-the-second-year-in-a-row',
    destination: '/recipes/pb-wins-gold',
    permanent: true,
  },
  {
    source: '/recipes/helping-uplift-community-art',
    destination: '/recipes/uplift-community-art',
    permanent: true,
  },
  {
    source: '/recipes/we-won-a-really-cool-award-for-the-way-we-run-our-business',
    destination: '/recipes/we-won-a-really-cool-award',
    permanent: true,
  },
  {
    source: '/recipes/5-easy-steps-to-world-domination-not-really',
    destination: '/recipes/5-easy-steps-to-world-domination',
    permanent: true,
  },
  {
    source: '/recipes/tutorial-adobe-illustrators-smooth-tool',
    destination: '/recipes/illustrators-smooth-tool',
    permanent: true,
  },
  {
    source:
      '/recipes/class-tutorial-prepping-character-joints-in-illustrator-for-rigging-in-after-effects',
    destination: '/recipes/class-tutorial-prepping-character-joints',
    permanent: true,
  },
  {
    source: '/recipes/tutorial-composition-settings-in-after-effects',
    destination: '/recipes/tutorial-after-effects',
    permanent: true,
  },
  {
    source: '/recipes/our-new-hire-tells-you-how-to-cure-your-seasonal-depression',
    destination: '/recipes/cure-your-seasonal-depression',
    permanent: true,
  },
  {
    source: '/recipes/tutorial-getting-started-with-bootstraps',
    destination: '/recipes/tutorial-bootstraps',
    permanent: true,
  },
  {
    source: '/work/case-studies/Onyx-Coffee-Journey',
    destination: '/work/case-studies/onyx-coffee-process-animation',
    permanent: true,
  },
  {
    source: '/recipes/tutorial-crash-course-on-motion2',
    destination: '/recipes/tutorial-motion2',
    permanent: true,
  },
  {
    source: '/recipes/the-power-of-extra-guerilla-marketing-and-novelty',
    destination: '/recipes/guerilla-marketing-and-novelty',
    permanent: true,
  },
  {
    source: '/recipes/lincoln-nebraska-this-is-for-you',
    destination: '/recipes/lincoln-nebraska',
    permanent: true,
  },
  {
    source: '/recipes/pixel-bakery-wins-two-awards-at-the-2019-nebraska-addys',
    destination: '/recipes/pixel-bakery-wins-2019-addys',
    permanent: true,
  },
  {
    source:
      '/recipes/recipe-for-success-mix-adaptability-and-confidence-together-in-a-medium-sized-bowl',
    destination: '/recipes/recipe-for-success',
    permanent: true,
  },
  {
    source: '/recipes/a-multimedia-designers-journey-sugar-spice-and-everything-right',
    destination: '/recipes/sugar-spice-and-everything-right',
    permanent: true,
  },
  {
    source: '/recipes/generate-assets-in-photoshop-for-web-images',
    destination: '/recipes/generate-assets-in-photoshop',
    permanent: true,
  },
  {
    source: '/recipes/cookbook-recipes-halloween-monster-toes',
    destination: '/recipes/halloween-monster-toes',
    permanent: true,
  },
  {
    source: '/recipes/ten-tips-for-using-adobe-after-effects',
    destination: '/recipes/tips-for-adobe-after-effects',
    permanent: true,
  },
  {
    source: '/recipes/pixel-bakery-wins-silver-at-aiga-nebraskas-2019-show',
    destination: '/recipes/wins-silver-at-aiga-2019',
    permanent: true,
  },
  {
    source: '/recipes/list-of-video-image-formats-in-2021-supporting-alpha-channels',
    destination: 'recipes/video-image-formats-in-2021',
    permanent: true,
  },
  {
    source: '/recipes/black-history-month-a-history-in-black-animation',
    destination: '/recipes/black-history-month-animation',
    permanent: true,
  },
  {
    source:
      '/recipes/audrey-farnham-batter-late-than-never-a-non-traditional-pilgrimage-to-find-meaning-grit-and-satisfaction',
    destination: '/recipes/audrey-farnham-batter-late-than-never',
    permanent: true,
  },
  {
    source: '/recipes/black-history-month-a-history-in-black-photography',
    destination: '/recipes/black-history-month-photography',
    permanent: true,
  },
  {
    source: '/recipes/black-history-month-a-history-in-black-cinematography',
    destination: '/recipes/2021-black-history-month-cinematography',
    permanent: true,
  },
  {
    source: '/recipes/the-brenna-bode-starter-pack',
    destination: '/recipes/brenna-bode-starter-pack',
    permanent: true,
  },
  {
    source: '/recipes/pixel-bakery-goes-from-idea-to-solution-of-choice-in-motion-marketing',
    destination: '/recipes/pixel-bakery-motion-marketing',
    permanent: true,
  },
  {
    source:
      '/recipes/gmail-how-to-automatically-delete-or-archive-emails-after-a-certain-number-of-days',
    destination: '/recipes/gmail-automatically-delete-or-archive-emails',
    permanent: true,
  },
  {
    source: '/shop',
    destination: '/store',
    permanent: true,
  },
]
async function redirects() {
  return redirectsArray
}
module.exports = { redirects }
