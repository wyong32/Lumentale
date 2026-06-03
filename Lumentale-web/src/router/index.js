import { createRouter, createWebHistory } from 'vue-router'
import { applyNavigationSeo } from '@/seo/pageSeo.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'LumenTale | Animon, Starters, Evolutions, Wiki & Guides',
        description:
          'LumenTale guides for Memories of Trey — Animon dex, starter picks, affinity chart, evolution routes, skills, items, Fountain recipes, boss fights, and the Talea map for your run.',
        keywords:
          'LumenTale, Memories of Trey, LumenTale Animon, LumenTale guide, Talea wiki, LumenTale recipes',
      },
    },
    {
      path: '/animon',
      name: 'animon',
      component: () => import('@/views/AnimonView.vue'),
      meta: {
        title: 'LumenTale | Animon Dex, Stats, BST & Catch Rates',
        description:
          'Browse every LumenTale Animon in Memories of Trey — filter by element, emotional affinity, rarity, BST, and catch rate before you spend levels or evolution items on your team.',
        keywords:
          'LumenTale Animon, Animon dex, Memories of Trey Animon, LumenTale stats, Talea species',
      },
    },
    {
      path: '/animon/:slug',
      name: 'animon-detail',
      component: () => import('@/views/AnimonDetailView.vue'),
    },
    {
      path: '/beginner-guide',
      redirect: '/beginner',
    },
    {
      path: '/beginner',
      name: 'beginner',
      component: () => import('@/views/BeginnerGuideView.vue'),
      meta: {
        title: 'LumenTale | Beginner Guide, Talea & First Hours',
        description:
          'LumenTale beginner guide for Memories of Trey — pick a starter, learn 4v4 SP combat, emotional affinities, wild capture, and early team tips for your first hours exploring Talea.',
        keywords:
          'LumenTale beginner guide, Memories of Trey tips, LumenTale starter, Talea guide, first hours',
      },
    },
    {
      path: '/starters',
      name: 'starters',
      component: () => import('@/views/StartersView.vue'),
      meta: {
        title: 'LumenTale | Starter Guide, Compare 5 Partners',
        description:
          'Compare all five LumenTale starter Animon in Memories of Trey — element type, emotional affinity, BST, catch rate, and level-40 evolution branches before you lock in your opening partner.',
        keywords:
          'LumenTale starter, best starter LumenTale, Memories of Trey starter, Kickstarter Animon, Talea',
      },
    },
    {
      path: '/affinities',
      name: 'affinities',
      component: () => import('@/views/AffinitiesView.vue'),
      meta: {
        title: 'LumenTale | Type Chart, 13 Elements & Affinities',
        description:
          'LumenTale type chart for Memories of Trey — all 13 element types and 5 emotional affinities, combat bonuses, when to trigger affinities, and team coverage tips for 4v4 battles.',
        keywords:
          'LumenTale type chart, LumenTale affinities, Memories of Trey elements, emotional affinities, Talea combat',
      },
    },
    {
      path: '/evolutions',
      name: 'evolutions',
      component: () => import('@/views/EvolutionsView.vue'),
      meta: {
        title: 'LumenTale | Evolution Guide, Items & Conditions',
        description:
          'LumenTale evolution guide for Memories of Trey — level, item, weather, trait, and special party requirements for every Animon line we track, including starter branches at level 40.',
        keywords:
          'LumenTale evolution, evolution guide, Memories of Trey evolve, LumenTale items, Talea',
      },
    },
    {
      path: '/guides',
      name: 'guides',
      component: () => import('@/views/GuidesView.vue'),
      meta: {
        title: 'LumenTale | Guides, Walkthroughs & Talea Tips',
        description:
          'LumenTale guides for Memories of Trey — beginner routes, combat advice, exploration walkthroughs, and collection strategies to help you progress through Talea without missing key unlocks.',
        keywords:
          'LumenTale guides, Memories of Trey walkthrough, LumenTale tips, Talea guide, lumentale.org',
      },
    },
    {
      path: '/guides/:slug',
      name: 'guide-detail',
      component: () => import('@/views/GuideDetailView.vue'),
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('@/views/MapView.vue'),
      meta: {
        title: 'LumenTale | Talea Map, Regions & Locations',
        description:
          'LumenTale Talea map for Memories of Trey — region overview with wild encounters, item pickups, shops, and route notes added as players confirm locations on the overworld.',
        keywords:
          'LumenTale map, Talea map, Memories of Trey locations, LumenTale world map, Talea regions',
      },
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: () => import('@/views/WikiIndexView.vue'),
      meta: {
        title: 'LumenTale Wiki | Skills, Items, Cooking & Bosses',
        description:
          'LumenTale wiki hub for Memories of Trey — look up skills, items, Fountain recipes, boss levels, and links to the Animon dex plus walkthroughs for your current chapter in Talea.',
        keywords:
          'LumenTale wiki, Memories of Trey, LumenTale skills, LumenTale items, LumenTale bosses',
      },
    },
    {
      path: '/wiki/skills',
      name: 'wiki-skills',
      component: () => import('@/views/WikiSkillsView.vue'),
      meta: {
        title: 'LumenTale Skills List | Moves, SP Costs & Power',
        description:
          'Every LumenTale move in Memories of Trey — power, SP cost, accuracy, cooldown, category, and target type so you can plan STAB coverage and SP rotation for 4v4 team fights.',
        keywords:
          'LumenTale skills, Memories of Trey moves, LumenTale SP cost, LumenTale moves list, Talea combat',
      },
    },
    {
      path: '/wiki/items',
      name: 'wiki-items',
      component: () => import('@/views/WikiItemsView.vue'),
      meta: {
        title: 'LumenTale Items List | Bilias, Prices & Crafting',
        description:
          'LumenTale items in Memories of Trey — Bilias, medicines, ingredients, and materials with shop prices, stack sizes, effects, and links to recipes that craft or consume each item.',
        keywords:
          'LumenTale items, Memories of Trey items, LumenTale Bilias, crafting materials, Talea items',
      },
    },
    {
      path: '/wiki/items/:slug',
      name: 'wiki-item-detail',
      component: () => import('@/views/WikiItemDetailView.vue'),
    },
    {
      path: '/wiki/bosses',
      name: 'wiki-bosses',
      component: () => import('@/views/WikiBossesView.vue'),
      meta: {
        title: 'LumenTale Boss Guide | Levels, HP Bars & Teams',
        description:
          'LumenTale boss guide for Memories of Trey — encounter levels, HP bars, typings, affinities, and team ideas so you know what you face before spending medicine on a long fight.',
        keywords:
          'LumenTale boss, Memories of Trey bosses, LumenTale boss guide, boss stats, Talea bosses',
      },
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/SearchView.vue'),
      meta: {
        title: 'LumenTale | Search Wiki, Animon Dex & Items',
        description:
          'Search LumenTale: Memories of Trey — find Animon, skills, items, Fountain recipes, bosses, and guide pages across the wiki and dex from one search box.',
        keywords:
          'LumenTale search, Memories of Trey wiki, LumenTale Animon search, LumenTale items, Talea lookup',
      },
    },
    {
      path: '/wiki/recipes',
      redirect: '/wiki/cooking',
    },
    {
      path: '/wiki/cooking',
      name: 'wiki-cooking',
      component: () => import('@/views/WikiCookingView.vue'),
      meta: {
        title: 'LumenTale Wiki | Fountain Cooking Recipes',
        description:
          'LumenTale Wiki cooking recipes for Memories of Trey — every Fountain dish with ingredient amounts, success rates, and links to materials on the items list.',
        keywords:
          'LumenTale cooking, Memories of Trey recipes, Fountain cooking, LumenTale Wiki food, Talea dishes',
      },
    },
    {
      path: '/wiki/crafting',
      name: 'wiki-crafting',
      component: () => import('@/views/WikiCraftingView.vue'),
      meta: {
        title: 'LumenTale Wiki | Workshop Crafting Recipes',
        description:
          'LumenTale Wiki crafting recipes for Memories of Trey — workshop Bilia upgrades and tools with materials, success rates, and item detail links.',
        keywords:
          'LumenTale crafting, Memories of Trey workshop, Bilia crafting, LumenTale Wiki recipes, Talea upgrades',
      },
    },
    {
      path: '/wiki/recipes/:slug',
      name: 'wiki-recipe-detail',
      component: () => import('@/views/WikiRecipeDetailView.vue'),
    },
    {
      path: '/legal/privacy-policy',
      name: 'legal-privacy',
      component: () => import('@/views/legal/PrivacyPolicyView.vue'),
      meta: {
        title: 'LumenTale Privacy Policy | lumentale.org',
        description:
          'Privacy Policy for lumentale.org, the unofficial LumenTale: Memories of Trey community site — how we collect, use, store, and protect information when you browse our guides and dex pages.',
        keywords:
          'LumenTale privacy policy, lumentale.org privacy, Memories of Trey, LumenTale wiki legal',
      },
    },
    {
      path: '/legal/terms-of-service',
      name: 'legal-terms',
      component: () => import('@/views/legal/TermsOfServiceView.vue'),
      meta: {
        title: 'LumenTale Terms of Service | lumentale.org',
        description:
          'Terms of Service for lumentale.org — rules for using this unofficial LumenTale: Memories of Trey community site, including guides, Animon dex pages, items, recipes, and user content.',
        keywords:
          'LumenTale terms of service, lumentale.org terms, Memories of Trey, LumenTale wiki legal',
      },
    },
    {
      path: '/legal/copyright',
      name: 'legal-copyright',
      component: () => import('@/views/legal/CopyrightView.vue'),
      meta: {
        title: 'LumenTale Copyright Notice | lumentale.org',
        description:
          'Copyright notice for lumentale.org — how LumenTale: Memories of Trey trademarks, game assets, and original guide content on this unofficial community site are handled and credited.',
        keywords:
          'LumenTale copyright, lumentale.org legal, Memories of Trey trademarks, fan site disclaimer',
      },
    },
    {
      path: '/legal/about-us',
      name: 'legal-about',
      component: () => import('@/views/legal/AboutUsView.vue'),
      meta: {
        title: 'LumenTale About Us | Community Guides Site',
        description:
          'About lumentale.org — who runs this unofficial LumenTale: Memories of Trey guides site, how we verify Animon and item pages in-game, and how to report mistakes or suggest guide updates.',
        keywords:
          'LumenTale about, lumentale.org, Memories of Trey community, LumenTale wiki team',
      },
    },
    {
      path: '/legal/contact-us',
      name: 'legal-contact',
      component: () => import('@/views/legal/ContactUsView.vue'),
      meta: {
        title: 'LumenTale Contact Us | lumentale.org Support',
        description:
          'Contact lumentale.org for LumenTale: Memories of Trey stat corrections, guide suggestions, copyright notices, and feedback about this unofficial community guides and dex site.',
        keywords:
          'LumenTale contact, lumentale.org email, Memories of Trey feedback, LumenTale wiki support',
      },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 96 }
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  applyNavigationSeo(to)
})

export default router
