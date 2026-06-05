/**
 * Player walkthrough articles (Guides list + /guides/:slug detail).
 * Export an array of entries; leave empty until a guide is ready to publish.
 *
 * Field reference — uncomment and fill one object per guide:
 */
export default [
  // {
  //   id: 1,
  //   title: 'LumenTale Beginner Guide — Your First 5 Hours in Talea',
  //   description: 'Short summary shown on the guides index and detail hero.',
  //   tags: ['Beginner', 'Combat', 'Exploration'],
  //   publishDate: '2026-05-26',
  //   imageUrl: '/images/guides/guides01.webp',
  //   imageAlt: 'Cover image alt text for accessibility',
  //   author: 'Author name or byline',
  //   seo: {
  //     title: 'LumenTale | Page title for search (≤ ~60 chars)',
  //     description: 'Meta description for search and social previews.',
  //     keywords: 'comma, separated, keywords',
  //   },
  //   addressBar: 'url-slug-for-this-guide',
  //   isHome: false,
  //   detailsHtml: `
  // <h2>Section heading</h2>
  // <p>Body copy with optional <a href="/animon">internal links</a>.</p>
  // <ul><li>Bullet points</li></ul>
  // `,
  // },

  {
    id: 1,
    title: "Lumentale: Memories of Trey — Mid-Game Team Optimization &amp; Stat Tuning",
    description: "Let's skip the generic introduction. If you are hitting a wall in mid-game boss battles or realizing your team feels sluggish, it's not because you aren't high-level enough. It's because you are likely ignoring hidden mechanics, falling into evolution traps, or managing your shared SP pool inefficiently. Based on our 30+ hours of testing, here is how you actually optimize your squad without losing your sanity to RNG.",
    tags: [],
    publishDate: "2026-06-05",
    author: "LumenTale Fan Guide Team",
    imageUrl: "/images/guides/guides01.webp",
    imageAlt: "Lumentale: Memories of Trey Team Building &amp; Mid-Game Optimization Guide",
    seo: {
      title: "Lumentale: Memories of Trey Team Building &amp; Mid-Game Optimization Guide",
      description: "A practical, no-nonsense mid-game team optimization guide for Lumentale: Memories of Trey. Learn about the evolution traps, IV food, and SP pool management.",
      keywords: "Lumentale Memories of Trey, Lumentale guide, Lumentale team building, Lumentale evolution delay, Lumentale Prismatype, Lumentale Appendix Q",
    },
    addressBar: "lumentale-memories-of-trey-team-building-optimization",
    detailsHtml: `<p>Let's skip the generic introduction. If you are hitting a wall in mid-game boss battles or realizing your team feels sluggish, it's not because you aren't high-level enough. It's because you are likely ignoring hidden mechanics, falling into evolution traps, or managing your shared SP pool inefficiently. Based on our 30+ hours of testing, here is how you actually optimize your squad without losing your sanity to RNG.
  </p>
  <h2>1. The Early Money Grind: Don't Hunt Rare Drops, Smash Rocks
  </h2>
  <p>Before you tune any stats or swap any abilities, you need capital. Everything in Lumentale's optimization pipeline—from restaurant meals to crafting reagents—is incredibly expensive. Fortunately, there's a highly reliable farming spot right under your nose.
  </p>
  <p>Head to the cave in Area 01 (accessible immediately after picking your path). Using any Animon that can smash rocks, clear out the green crystals.
  </p>
  <ol>
  <li>Quartz (The Goldmine): Sells for 1,500 Gold each. A 30-minute run routinely nets between 100 to 200 Quartz, yielding an easy 150,000+ Gold.
  </li>
  <li>Rare Gems: You will pull Topaz and Ruby from this cave. Keep these; they are vital for later evolution items.
  </li>
  </ol>
  <p>Real-talk warning: Do not waste your time trying to mine Diamonds in the Area 01 cave. I spent over an hour of continuous testing hoping for a lucky drop rate, only to confirm that Diamond drops are hard-locked to later regions (around the third city area). If you need them early, save your energy.
  </p>
  <p><img src="/images/guides/guides01-01.webp" alt="The Early Money Grind: Don't Hunt Rare Drops, Smash Rocks" width="50%">
  </p>
  <h2>2. Stop Re-Catching for Stats: The Restaurant Shortcut
  </h2>
  <p>If you are still catching dozens of the same wild Animon hoping for "good stats," you are wasting your time. Once you have built up your cash reserves from Quartz mining, you can buy max stats directly.
  </p>
  <p>Every major city features a local restaurant selling stat-boosting meals (priced between 500 and 1,000 Gold). Feeding these to your Animon permanently boosts their Innate Stats (IVs).
  </p>
  <ol>
  <li>The Stat Range: Stats are displayed in Roman numerals, ranging from N (Null/Zero) to X (Ten). Each point added directly increases your battle stats.
  </li>
  <li>The Progress Lock: The first city only allows you to max out HP, Defense, and Attack. If you are wondering why you can't increase your Speed (AGI) or Luck (LCK), it's because those meals are locked until you reach the restaurant in the third city. Don't blow your entire budget early wondering why your Animon are still slow.
  </li>
  </ol>
  <h2>3. The Melotica Evolution Trap
  </h2>
  <p>This is easily the biggest rookie mistake in the mid-game. The game will prompt you to evolve your Melotica into Meloquinia at Lv. 24. Do not blindly click confirm.
  </p>
  <p>If you look at the fully unlocked AniWiki (which you get by reaching Research Level 3/Yellow Star on an Animon), you will find that Melotica learns its best life-drain recovery move, Absorb, at Lv. 26.
  </p>
  <p>If you evolve at Lv. 24, your newly evolved Meloquinia cannot easily learn this move until much later in the game. I ruined my first playthrough's pacing because I evolved too early and lost my tank's primary sustain option. Hold down the "cancel" button at Lv. 24, wait two more levels to learn Absorb, and then let the evolution proceed. Your mid-game survival rates will thank you.
  </p>
  <h2>4. Tuning Quirks (Abilities) Without the RNG Headache
  </h2>
  <p>Most Animons have two or three possible passive abilities (Quirks). Hunting for a wild 1% spawn rate variant with the perfect passive is an unnecessary grind. Instead, focus on crafting Appendix Q, which lets you manually select your active Quirk from the Animon's available pool.
  </p>
  <p><img src="/images/guides/guides01-02.webp" alt="Tuning Quirks (Abilities) Without the RNG Headache" width="50%">
  </p>
  <h3>Appendix Q Crafting Cost:
  </h3>
  <table>
  <tbody>
  <tr>
  <td data-row="row-vzzqov">Required Material
  </td>
  <td data-row="row-vzzqov">Quantity
  </td>
  <td data-row="row-vzzqov">Best Acquisition Method
  </td>
  </tr>
  <tr>
  <td data-row="row-fjsjci">Diamond
  </td>
  <td data-row="row-fjsjci">1
  </td>
  <td data-row="row-fjsjci">Smashed from late-game nodes (near 3rd city).
  </td>
  </tr>
  <tr>
  <td data-row="row-j07n4n">Glass
  </td>
  <td data-row="row-j07n4n">10
  </td>
  <td data-row="row-j07n4n">Purchasable at the Lumen Club starting from the 2nd city.
  </td>
  </tr>
  <tr>
  <td data-row="row-mivyzq">Anivite EX
  </td>
  <td data-row="row-mivyzq">2
  </td>
  <td data-row="row-mivyzq">Purchasable from specialized vendors in the 3rd city.
  </td>
  </tr>
  </tbody>
  </table>
  <p>My advice: Don't stress over this item in the very early game. Once you reach the second and third cities, the materials become trivial to purchase or mine, allowing you to instantly fix your core team's passives.
  </p>
  <h2>5. The TP Deficit: Why Type Coverage is Non-Negotiable
  </h2>
  <p>In Lumentale, hitting super-effective damage isn't just about the damage multiplier; it's the engine of your entire combat loop. Every time you strike a weakness, you generate TP (Tactical Points). TP is used to trigger team actions that turn the tide of difficult fights.
  </p>
  <p>If you run a mono-type team or rely too heavily on neutral, same-type attack bonus (STAB) spam, your TP generation will stall.
  </p>
  <p>Watch out for Secret Types. An Animon might appear to be a pure Aura type on your first scan, but it might actually carry a secret secondary Electric type. If your starting Animon is also Electric, you are inadvertently stacking typing and missing out on coverage. Use the AniWiki's star system to double-check hidden typings before finalizing your roster.
  </p>
  <h2>6. Skip the 10% Hunt: Crafting the Prismatype
  </h2>
  <p>Wild Animons only have a 10% chance to spawn with their Secret Type active (and some, like Bonkey, have a 5% split chance between two hidden types). Trying to farm this in the wild is mathematically inefficient.
  </p>
  <p>Instead, use the Prismatype item to force-unlock or swap the hidden potential of your Animon. It gives you a second STAB type without adding any defensive weaknesses—a purely beneficial upgrade.
  </p>
  <h3>Prismatype Recipe:
  </h3>
  <ol>
  <li>2x Anivite EX (Buy from the third city vendors)
  </li>
  <li>10x Plastic (Standard junk material, purchasable at the Lumen Club)
  </li>
  <li>30x Quartz (Farmed from the Area 01 cave method detailed in Section 1)
  </li>
  </ol>
  <p>As soon as you gain access to the third city's shops, wild hunting for hidden types is officially obsolete. Just mine the Quartz, buy the EX crystals, and craft the item.
  </p>
  <h2>7. Why Your Team Constantly Runs out of Juice During Boss Fights
  </h2>
  <p>This is a tactical combat detail that many players overlook. In this game, your entire active team shares a single SP pool, but your turns are resolved individually based on each Animon's Agility (Speed).
  </p>
  <p>If you have a slow, bulky tank like Meloquinia (base Agility is roughly 65), it will almost always act last in the turn order. If you equip Meloquinia with nothing but high-cost, 3-SP or 4-SP moves, your faster offensive sweepers will completely drain the shared pool before Meloquinia even gets a chance to breathe. You will be forced to pass its turn doing absolutely nothing.
  </p>
  <p>The Fix: Always slot a low-cost option on your slow units. I keep basic moves like Headbutt (1 SP cost) or Pat (2 SP cost) on Meloquinia. Even if my sweepers leave me with only 1 SP at the end of the turn, Meloquinia can still execute a low-cost move, chip away at an enemy, or trigger a weakness hit for a free TP point, rather than sitting idle.
  </p>`,
  },

  {
    id: 2,
    title: "Lumentale: Memories of Trey — 7 Unmapped Mechanics &amp; Exploits We Tested",
    description: "Most modern monster-tamers hold your hand until your palm is sweaty. Lumentale: Memories of Trey does the opposite; it buries several of its most crucial systems under UI flourishes, undocumented behavior, and flavor text. We spent the last week parsing combat values and tracking overworld behaviors. Here are seven hidden mechanics the game won't explicitly explain to you for hours—if ever.",
    tags: [],
    publishDate: "2026-06-05",
    author: "LumenTale Fan Guide Team",
    imageUrl: "/images/guides/guides02.webp",
    imageAlt: "Lumentale: Memories of Trey — 7 Unmapped Mechanics &amp; Exploits We Tested",
    seo: {
      title: "Lumentale: Memories of Trey — 7 Hidden Overworld &amp; Combat Mechanics Explained",
      description: "An expert breakdown of unmapped systems in Lumentale: Memories of Trey. Learn about portrait lie detectors, the recycle bin XP multiplier, and early water catching.",
      keywords: "Lumentale Memories of Trey, Lumentale hidden mechanics, Lumentale recycle bins, Lumentale AniSpace, Lumentale status passives, Lumentale water catching exploit"
    },
    addressBar: "lumentale-memories-of-trey-hidden-mechanics",
    detailsHtml: `<p>By: Frontline Pathfinder | Lead Content Tester, GameguideHub 
  </p>
  <p>Tested on Build: EA v0.2.x | Data Status: Hand-Verified
  </p>
  <p>Most modern monster-tamers hold your hand until your palm is sweaty. Lumentale: Memories of Trey does the opposite; it buries several of its most crucial systems under UI flourishes, undocumented behavior, and flavor text. We spent the last week parsing combat values and tracking overworld behaviors. Here are seven hidden mechanics the game won't explicitly explain to you for hours—if ever.
  </p>
  <h2>1. The Dialogue Portrait "Lie Detector"
  </h2>
  <p>This is a subtle piece of visual storytelling that doubles as a major narrative hint tool. When talking to NPCs, pay attention to the faint colored outline (aura) that frames their dialogue portraits.
  </p>
  <p>These colors aren't just decorative; they are directly tied to the game's five core emotional Attributes. If an NPC is telling you that everything is perfectly fine, but their portrait aura flashes Blue (Mestus/Sadness) or Purple (Horrens/Fear), they are actively hiding something or lying to you.
  </p>
  <p><img src="/images/guides/guides02-01.webp" alt="The Dialogue Portrait &quot;Lie Detector'" width="50%">
  </p>
  <p>My experience: I completely missed this during my first few hours. It wasn't until I spoke to Baza—who was grinning and acting completely confident—that I noticed his portrait was glowing with a heavy blue Mestus aura. Sure enough, his dialogue was a front. Keep an eye on those outlines; they are a built-in narrative spoiler system.
  </p>
  <h2>2. Stop Wasting Items: The 4x Recycle Bin XP Penalty
  </h2>
  <p>In most towns, you'll spot several recycling bins side-by-side. They look like simple trash receptacles, but they are actually targeted item sinks designed to level up your character profile. The catch? They are highly specialized.
  </p>
  <p>If you dump an item into the *wrong* bin, the game penalizes you by giving you a flat, baseline 10 XP. However, match the item to its designated bin color, and that XP yield sky-rockets up to 300% or 400%.
  </p>
  <p><img src="/images/guides/guides02-02.webp" alt="Stop Wasting Items: The 4x Recycle Bin XP Penalty" width="50%">
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-oat70r">Bin Color
  </td>
  <td data-row="row-oat70r">Item Specialization
  </td>
  <td data-row="row-oat70r">Example XP Yields
  </td>
  </tr>
  <tr>
  <td data-row="row-v3llew">Green Bin
  </td>
  <td data-row="row-v3llew">Glass, Crystals, Gems, Quartz
  </td>
  <td data-row="row-v3llew">Glass yields 45 XP (instead of 10) | Quartz yields 30 XP
  </td>
  </tr>
  <tr>
  <td data-row="row-ruobrp">Blue Bin
  </td>
  <td data-row="row-ruobrp">Plastics, Liquids, Synthetics
  </td>
  <td data-row="row-ruobrp">Plastic yields 45 XP | Potion yields 30 XP
  </td>
  </tr>
  <tr>
  <td data-row="row-wf9yn1">Yellow / Red Bins
  </td>
  <td data-row="row-wf9yn1">Organic matter, Foods, Wood
  </td>
  <td data-row="row-wf9yn1">Various plants &amp; cooking ingredients yield 30-45 XP
  </td>
  </tr>
  </tbody>
  </table>
  <p>Pathfinder's Tip: Don't play the lazy game of dumping everything into the first bin you click on. If you select an item to discard and the UI shows a mere +10 EXP popup, **cancel the transaction**. That is your warning that you are using the wrong bin and throwing away massive progression gains.
  </p>
  <h2>3. The Aggro-Tethering Exploit: Catching Water Animons Early
  </h2>
  <p>Early in the game, you'll see fish-like Animons (like Firtrix) swimming out in deep water. If you try throwing your Holoken at them, it will fail because they are physically out of reach, and you don't have the water-traversal upgrades required to reach them yet.
  </p>
  <p>You can bypass this limitation entirely using the game's battle-proximity mechanic. When you initiate a wild battle on land, any other wild Animon standing directly adjacent to the target gets dragged into the fight as a multi-battle partner.
  </p>
  <h3>How to execute the exploit:
  </h3>
  <ol>
  <li>Find an aggressive wild Animon patrolling near the shoreline. Aggressive units are easily spotted by their hostile behavior when you get close.
  </li>
  <li>Get its attention (aggro) and slowly walk backward, baiting it toward the water where the swimming target is located.
  </li>
  <li>Once the aggressive land Animon is physically standing right on the water's edge next to the swimming target, touch it to trigger the fight.
  </li>
  <li>The battle will start as a Double or Triple battle, pulling the unreachable water Animon onto the battlefield. Defeat the land unit, and you can freely capture the water unit hours before you are supposed to.
  </li>
  </ol>
  <h2>4. AniSpace is Not Just a Storage Menu
  </h2>
  <p>The "AniSpace" serves as your typical PC storage box for keeping benched Animons. However, in this game, it is a fully rendered physical zone you can walk around in. More importantly: **it spawns wild, exclusive Animons.**
  </p>
  <p>While you are out exploring or fighting, the game runs a background timer. Every 30 minutes or so, there is a distinct chance that rare, AniSpace-exclusive Animons will wander directly into your digital hub.
  </p>
  <p>Our team verified that some of these encounters cannot be found anywhere in the early-game overworld. Make it a habit to physically load into your AniSpace once every half hour just to check the sandbox for spawns.
  </p>
  <h2>5. The Status-Attribute Interaction Table
  </h2>
  <p>The five emotional Attributes (Felicis, Mestus, Furor, Horrens, Sereum) are often mistaken for basic defensive elemental types. They are actually combat-state modifiers that alter how your Animon interacts with status ailments.
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-e58jh4">Attribute Group
  </td>
  <td data-row="row-e58jh4">Color/Emotion
  </td>
  <td data-row="row-e58jh4">Hidden Combat Passive
  </td>
  </tr>
  <tr>
  <td data-row="row-4lhp6m">Felicis
  </td>
  <td data-row="row-4lhp6m">Green / Joy
  </td>
  <td data-row="row-4lhp6m">Receives significantly more healing while under the Ecstatic status.
  </td>
  </tr>
  <tr>
  <td data-row="row-ell64r">Mestus
  </td>
  <td data-row="row-ell64r">Blue / Sadness
  </td>
  <td data-row="row-ell64r">Suffer less damage/stat reduction from the negative effects of the Melancholic status.
  </td>
  </tr>
  <tr>
  <td data-row="row-86e4xk">Furor
  </td>
  <td data-row="row-86e4xk">Orange / Anger
  </td>
  <td data-row="row-86e4xk">Deals substantially more output damage when afflicted with the Berserk status.
  </td>
  </tr>
  <tr>
  <td data-row="row-cvfo4d">Horrens
  </td>
  <td data-row="row-cvfo4d">Purple / Fear
  </td>
  <td data-row="row-cvfo4d">Has a highly elevated resistance to being paralyzed while afflicted with the Scared status.
  </td>
  </tr>
  <tr>
  <td data-row="row-8fbx7q">Sereum
  </td>
  <td data-row="row-8fbx7q">White / Calm
  </td>
  <td data-row="row-8fbx7q">Acts as a pure tank/neutralizer; takes minimized negative effects from all four status ailments.
  </td>
  </tr>
  </tbody>
  </table>
  <h2>6. Secret Secondary Types: Movepools vs. STAB
  </h2>
  <p>The video confirmed a fascinating detail regarding the rare "Secret Types" (the 10% wild variants that sport a secondary element).
  </p>
  <p>Our testing shows that having a secondary Secret Type does not alter the Animon's level-up movepool. For example, a Mollupom with a secret Water secondary type will learn the exact same moves at the exact same levels as a pure Rock Mollupom.
  </p>
  <p>So, why hunt them? The Same Type Attack Bonus (STAB). Having the type active on their profile grants a massive 50% damage multiplier to moves of that element. A pure Anomalous Oaxle (the candle monster) can still learn Fire moves, but an Anomalous/Fire variant gets a massive, passive damage boost on those same fire moves. It's an essential target for late-game min-maxing.
  </p>
  <h2>7. The Starter Level-Boost Quiz Trap
  </h2>
  <p>At the very beginning of your run, you are forced to take a personality test. While this seems like flavor text to help recommend your starting Animon, it has a direct mechanical impact on your early game pacing.
  </p>
  <p>If you choose to select the starter Animon that the quiz actually recommended for your personality type, you will receive that Animon at Level 8. If you ignore the recommendation and force-pick one of the other starters, you receive it at Level 5.
  </p>
  <p>While a three-level gap isn't massive in the grand scheme of things, it saves you roughly 20 minutes of tedious early-game wild grinding. If you aren't married to a specific design, taking the recommended starter is always the optimal play for a faster start.
  </p>`,
  }


]
