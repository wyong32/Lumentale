/**
 * Player walkthrough articles (Guides list + /guides/:slug detail).
 * Export an array of entries; leave empty until a guide is ready to publish.
 *
 * Field reference 鈥?uncomment and fill one object per guide:
 */
export default [
  {
    id: 16,
    title: "Lumentale: Memories of Trey Quirks and Skill Upgrade Guide: Trainer Rewards and Utility Animon",
    h1: "Lumentale Quirks, Skill Upgrades, and Trainer Rewards Guide",
    description: "Stats, quirk changes, skill upgrades, trainer rewards, and utility Animon checks for Lumentale without wasting rare items.",
    tags: ["Stats", "Quirks", "Skills", "Trainers", "Animon"],
    publishDate: "2026-07-27",
    author: "LumenTale Fan Guide Team",
    imageUrl: "/images/guides/lumentale-quirks-skills-battle-stats.jpg",
    imageAlt: "Lumentale stats explained with skill costs and trainer battle reward checks",
    seo: {
      title: "Lumentale Quirks and Skill Upgrade Guide",
      description: "Stats, quirk changes, skill upgrades, trainer rewards, and utility Animon checks for Lumentale without wasting rare items.",
      keywords: "Lumentale quirks, skill upgrades, stats, trainer rewards, utility Animon",
    },
    addressBar: "lumentale-memories-of-trey-stats-quirks-skills",
    detailsHtml: `<p>By: Frontline Pathfinder | Lead Content Tester, GameguideHub
  </p>
  <p>Tested on Version: Current public build | Status: <strong>PATCH SENSITIVE</strong>. Item effects, trainer rewards, and utility prompts can move when Beehive changes balance data.
  </p>
  <p><strong>Fast answer:</strong> Lumentale stats are the normal six-combat-stat spread: HP, Attack, Defense, Sp. Atk, Sp. Def, and Speed. Quirk changes are not a free menu toggle; the current item data points to rare ability-changing items such as <a href="/wiki/items/appendice-q">Appendice Q</a>. Skill planning should start from <a href="/wiki/skills">skill type, category, power, and SP cost</a>, not from raw level alone. If you beat a trainer and do not see money, verify the result screen and wallet delta before assuming the fight bugged.
  </p>
  <figure>
    <img src="/images/guides/lumentale-quirks-skills-battle-stats.jpg" alt="Lumentale stats explained guide showing battle skills SP cost and Animon team order" title="Lumentale stats explained and skill upgrade guide" loading="lazy">
    <figcaption>Battle value is decided by stat spread, skill category, SP cost, and turn order. Do not judge an Animon from level alone.</figcaption>
  </figure>
  <h2>Stats and progression systems
  </h2>
  <h3>Stats explained
  </h3>
  <p>Use the stat sheet as a role check first. A fast Animon with weak bulk needs a different job than a slow wall with high defenses. The <a href="/animon">Animon dex</a> exposes the visible stat ranges, while the <a href="/affinities">affinity chart</a> tells you whether the matchup is worth taking.
  </p>
  <table>
    <thead>
      <tr><th>Stat</th><th>What it controls</th><th>What to check before investing</th></tr>
    </thead>
    <tbody>
      <tr><td>HP</td><td>How much damage the Animon can take before fainting.</td><td>High HP matters only if Defense or Sp. Def is not collapsing first.</td></tr>
      <tr><td>Attack</td><td>Damage for physical skills.</td><td>Pair it with physical skills; do not waste SP on special attacks if Attack is the only strong stat.</td></tr>
      <tr><td>Defense</td><td>Physical damage mitigation.</td><td>Useful for contact-heavy fights and trainer teams with repeated physical pressure.</td></tr>
      <tr><td>Sp. Atk</td><td>Damage for special skills.</td><td>Check the skill list before committing. Power without a usable SP cost is trap value.</td></tr>
      <tr><td>Sp. Def</td><td>Special damage mitigation.</td><td>Important when a boss or trainer chain pressures your backline with special coverage.</td></tr>
      <tr><td>Speed</td><td>Turn-order pressure and tempo.</td><td>Speed is strongest when it lets you act before a KO or status setup.</td></tr>
    </tbody>
  </table>
  <p>If you are trying to optimize a full party, use this page with the <a href="/guides/lumentale-memories-of-trey-team-building-optimization">team-building guide</a> and the <a href="/guides/lumentale-memories-of-trey-sp-combat-tp-guide">SP combat guide</a>. Stats pick the role. Skills decide whether the role actually works.
  </p>
  <h3>Quirk changes
  </h3>
  <p><strong>Can you change quirks in Lumentale?</strong> Yes, but treat it as an item-gated adjustment, not a free respec. The strongest current clue is <a href="/wiki/items/appendice-q">Appendice Q</a>, a 10,000-price AARI capsule whose item text says it can vary an Animon innate ability. That is the quirk-adjacent lane.
  </p>
  <p>Do not confuse this with <a href="/wiki/items/prismatipo">Prismatipo</a>. Prismatipo is a rare hidden-type influence item at 7,500 price. It is relevant to build tuning, but it is not the same question as changing a quirk or innate ability.
  </p>
  <p><strong>INFERRED:</strong> repeat use, exact unlock timing, and whether every Animon can accept the same quirk-change flow still need per-build verification. Before spending rare items, save first and record the old innate ability.
  </p>
  <h2>Skills, trainers, and rewards
  </h2>
  <h3>How to upgrade skills
  </h3>
  <p>When players search "how to upgrade skills in Lumentales", they usually mean one of three things: learning a better move, replacing a low-power move, or building around SP cost. The current <a href="/wiki/skills">skills table</a> is the clean starting point because every skill carries type, category, power, and cost.
  </p>
  <table>
    <thead>
      <tr><th>Skill field</th><th>Why it matters</th><th>Bad upgrade habit</th></tr>
    </thead>
    <tbody>
      <tr><td>Type</td><td>Controls affinity interaction and route utility overlap.</td><td>Stacking one type and then losing to a single resistant trainer team.</td></tr>
      <tr><td>Category</td><td>Physical skills scale from Attack; special skills scale from Sp. Atk.</td><td>Putting special moves on an Attack-heavy Animon because the power number looks high.</td></tr>
      <tr><td>Power</td><td>Sets damage ceiling before matchup and stat checks.</td><td>Ignoring accuracy, status value, or SP strain.</td></tr>
      <tr><td>Cost</td><td>Controls how long the rotation survives in multi-Animon fights.</td><td>Burning all shared SP before the second enemy phase.</td></tr>
    </tbody>
  </table>
  <p>If the current build shows a direct skill-upgrade vendor or tutor in your save, test one low-value skill first. Until the route is fully mapped, do not spend scarce currency on a skill just because it has a bigger power number.
  </p>
  <h3>Trainer battle reward confusion
  </h3>
  <p>The search variant "I beat a trainer and I don't see how much mopney I got" points to a display problem, not a strategy problem. The local boss/trainer data includes money drops on trainer-style encounters; for example, multiple camp entries carry a <strong>386</strong> money drop value. That means the reward exists in data, but the UI may not make the wallet change obvious.
  </p>
  <ol>
    <li>Check wallet amount before starting a trainer rematch or camp fight.</li>
    <li>Finish the fight and wait through the full result screen.</li>
    <li>Open the menu immediately after control returns and compare the wallet number.</li>
    <li>If no change appears, reload once and repeat with a low-risk trainer before reporting the bug.</li>
  </ol>
  <p>The <a href="/wiki/bosses">boss and trainer table</a> is the faster route when you only need to confirm that a fight has a configured reward.
  </p>
  <h2>Element and utility Animon choices
  </h2>
  <h3>Geopower, wind, and aura Animon
  </h3>
  <p>Do not rank the entire dex when the problem is a field gate. For searches like "Lumentale Animon for Geopower", "wind power Animon", "windmill", or "aura Animon", solve the prompt first, then decide if the Animon also belongs on your combat team.
  </p>
  <figure>
    <img src="/images/guides/lumentale-utility-animon-field-checks.jpg" alt="Lumentale utility Animon field route for Geopower wind power and aura checks" title="Lumentale utility Animon route checks" loading="lazy">
    <figcaption>Utility Animon are route tools first. A weak combat pick can still be correct if it opens the field interaction you are stuck on.</figcaption>
  </figure>
  <table>
    <thead>
      <tr><th>Search intent</th><th>What to verify</th><th>Where to go next</th></tr>
    </thead>
    <tbody>
      <tr><td>Geopower Animon</td><td>Look for GEO skills, route prompts, and field-interaction wording.</td><td><a href="/animon">Animon dex</a> and <a href="/wiki/skills">skills table</a>.</td></tr>
      <tr><td>Wind power or windmill Animon</td><td>Check whether the obstacle asks for wind affinity, a specific field power, or story progress.</td><td><a href="/guides/lumentale-memories-of-trey-holoken-powers-guide">Holoken powers guide</a>.</td></tr>
      <tr><td>Aura Animon</td><td>Separate aura utility from combat typing before replacing a stable party member.</td><td><a href="/guides/lumentale-memories-of-trey-hidden-mechanics">hidden mechanics guide</a>.</td></tr>
    </tbody>
  </table>
  <p><strong>INFERRED:</strong> some field prompts may be story-locked even when you already own the right Animon. If the prompt does nothing, advance the local objective before changing your whole party.
  </p>
  <h2>FAQ
  </h2>
  <h3>Can you change quirks in Lumentale?
  </h3>
  <p>Yes, but not from a free always-available menu in the verified data. Use rare ability-changing items such as Appendice Q, save first, and confirm whether the current build allows repeat use on that Animon.
  </p>
  <h3>Why did I not see money after beating a trainer?
  </h3>
  <p>Check the result screen and wallet delta before replaying. The reward can exist in encounter data while the post-battle UI makes the money change easy to miss.
  </p>`,
  },
  {
    id: 15,
    title: "Lumentale: Memories of Trey Card Sellers and Furniture Guide: Magnolia Cards, Aari Furniture, and Friend Requests",
    h1: "Lumentale Card Sellers, Furniture, and Friend Requests Guide",
    description: "Find card seller logic, Magnolia card checks, Aari furniture purpose, custom furniture quests, and friend request flow in Lumentale.",
    tags: ["Cards", "Furniture", "Magnolia", "AARI", "Social"],
    publishDate: "2026-07-27",
    author: "LumenTale Fan Guide Team",
    imageUrl: "/images/guides/lumentale-card-sellers-magnolia-route.jpg",
    imageAlt: "Lumentale Magnolia card seller route with shop NPCs and card lookup checks",
    seo: {
      title: "Lumentale Card Sellers and Furniture Guide",
      description: "Find card seller logic, Magnolia card checks, Aari furniture purpose, custom furniture quests, and friend request flow in Lumentale.",
      keywords: "Lumentale card sellers, Magnolia cards, Aari furniture, friend request",
    },
    addressBar: "lumentale-memories-of-trey-card-sellers-furniture",
    detailsHtml: `<p>By: Frontline Pathfinder | Lead Content Tester, GameguideHub
  </p>
  <p>Tested on Version: Current public build | Status: <strong>INFERRED WHERE MARKED</strong>. Card item data is structured. Magnolia seller routing, AARI furniture, and friend-request prompts still depend on story flags and local NPC state.
  </p>
  <p><strong>Fast answer:</strong> card searches should start with the item table, not random NPC guessing. Lumentale has standard card packs at <strong>2,000</strong>, card boxes at <strong>8,000</strong>, and special Kickstarter card items at higher prices. Magnolia card-seller and furniture searches are route/task questions: check the local vendor cluster, then confirm story progress if the expected prompt or stock does not appear.
  </p>
  <figure>
    <img src="/images/guides/lumentale-card-sellers-magnolia-route.jpg" alt="Lumentale Magnolia card sellers guide with shop NPC route and card lookup path" title="Lumentale Magnolia card seller route" loading="lazy">
    <figcaption>For seller queries, identify the town hub first, then test vendor stock after each local story flag. Wandering between maps without a flag check wastes time.</figcaption>
  </figure>
  <h2>Card seller lookup
  </h2>
  <h3>Magnolia card sellers
  </h3>
  <p>Project3 flagged "Lumentale Magnolia card sellers" because players are clearly looking for a vendor route, not a lore page. The hard limit: the current structured item data confirms card packs and boxes, but it does not expose a clean Magnolia seller coordinate table.
  </p>
  <table>
    <thead>
      <tr><th>Check</th><th>What to do</th><th>Why it matters</th></tr>
    </thead>
    <tbody>
      <tr><td>Town hub</td><td>Start at the Magnolia/Magnolia-linked vendor cluster or the nearest active market hub.</td><td>Card sellers are more likely to be vendor-stock gated than wild-drop gated.</td></tr>
      <tr><td>Story flag</td><td>Clear local dialogue and objective prompts before assuming the seller is missing.</td><td>Some shops change stock after route progress.</td></tr>
      <tr><td>Inventory category</td><td>Look under miscellaneous or card-pack style items, not medicine.</td><td>Card packs and boxes are MISC items in the current data.</td></tr>
      <tr><td>Price check</td><td>Bring at least 2,000 for a pack and 8,000 for a box.</td><td>If you arrive broke, the seller lookup is solved but the purchase still fails.</td></tr>
    </tbody>
  </table>
  <p><strong>INFERRED:</strong> if the Magnolia seller has no card stock, the most likely blockers are story state, vendor refresh, or being at the wrong Magnolia-adjacent NPC. Do not treat this as a card drop farm until you have checked the shop route.
  </p>
  <h3>Card and card-seller typo variants
  </h3>
  <p>The typo search "Lumentale card selles" belongs here too. Use the table below when you only need the card item family and price range.
  </p>
  <table>
    <thead>
      <tr><th>Item</th><th>Current price</th><th>Use case</th></tr>
    </thead>
    <tbody>
      <tr><td><a href="/wiki/items/pacchetto-carte">Pacchetto Carte</a></td><td>2,000</td><td>Standard Animon TCG card pack.</td></tr>
      <tr><td><a href="/wiki/items/box-carte">Box Carte</a></td><td>8,000</td><td>Bulk card opening when you are collecting many cards at once.</td></tr>
      <tr><td><a href="/wiki/items/pacchetto-carte-logos">Pacchetto Carte Logos</a></td><td>2,000</td><td>Logos-themed card pack.</td></tr>
      <tr><td><a href="/wiki/items/box-carte-logos">Box Carte Logos</a></td><td>8,000</td><td>Bulk Logos card opening.</td></tr>
      <tr><td><a href="/wiki/items/pacchetto-carte-mythos">Pacchetto Carte Mythos</a></td><td>2,000</td><td>Mythos-themed card pack.</td></tr>
      <tr><td><a href="/wiki/items/box-carte-mythos">Box Carte Mythos</a></td><td>8,000</td><td>Bulk Mythos card opening.</td></tr>
      <tr><td><a href="/wiki/items/pacchetto-kickstarter">Pacchetto Kickstarter</a></td><td>9,000</td><td>Special card pack tied to Kickstarter contribution wording.</td></tr>
      <tr><td><a href="/wiki/items/box-carte-kickstarter">Box Carte Kickstarter</a></td><td>10,000</td><td>High-price special card box.</td></tr>
    </tbody>
  </table>
  <p>The broader <a href="/wiki/items">item index</a> is the fastest way to check whether a card entry changed price after a patch.
  </p>
  <h2>Furniture and social-system queries
  </h2>
  <h3>Aari furniture and furniture purpose
  </h3>
  <p>Furniture is not showing up as a clean combat-stat item class in the current local item data. That matters: do not buy AARI furniture because you expect a hidden Attack bonus unless the current build explicitly says so.
  </p>
  <figure>
    <img src="/images/guides/lumentale-furniture-friend-request-room.jpg" alt="Lumentale Aari furniture purpose guide with custom room layout and social quest checks" title="Lumentale Aari furniture and custom room guide" loading="lazy">
    <figcaption>The furniture layer reads like room customization and quest routing, not direct combat tuning. Spend after the quest asks for it.</figcaption>
  </figure>
  <table>
    <thead>
      <tr><th>Furniture intent</th><th>Current read</th><th>Practical move</th></tr>
    </thead>
    <tbody>
      <tr><td>AARI furniture</td><td><strong>INFERRED:</strong> tied to AARI-themed customization or a local task chain.</td><td>Check quest log text before buying multiples.</td></tr>
      <tr><td>Furniture purpose</td><td><strong>INFERRED:</strong> customization, collection, or NPC request progress.</td><td>Do not route it like a combat upgrade.</td></tr>
      <tr><td>Custom furniture quest</td><td>Likely asks for a specific furniture object or placement action.</td><td>Keep one save before purchase and verify objective completion immediately.</td></tr>
    </tbody>
  </table>
  <p>If you are also short on materials or route unlocks, pair this with the <a href="/guides/lumentale-memories-of-trey-crafting-recipes-blueprints">crafting and blueprints guide</a> and the <a href="/guides/lumentale-memories-of-trey-walkthrough">walkthrough</a>.
  </p>
  <h3>Friend request intent
  </h3>
  <p>"Lumentale friend request" is a social-system query. Treat it like a prompt routing problem: check the social menu, mailbox-style UI, NPC dialogue, and active quest state before assuming the request failed.
  </p>
  <ol>
    <li>Open the menu after the NPC interaction and look for a social or request notification.</li>
    <li>Talk to the same NPC again if the first dialogue closed without a clear result.</li>
    <li>Advance the local objective once if the prompt is absent.</li>
    <li>Only reload if the same request disappears after a confirmed prompt.</li>
  </ol>
  <p><strong>INFERRED:</strong> friend-request acceptance may be gated by story progress or by the NPC's local quest state. I would not burn money on gifts or furniture until the request UI is visible.
  </p>
  <h2>FAQ
  </h2>
  <h3>Where are Magnolia card sellers in Lumentale?
  </h3>
  <p>Start with the Magnolia-linked vendor hub and check card-pack stock after local story progress. The current item data confirms card packs and boxes, but not a fixed seller coordinate table.
  </p>
  <h3>What is furniture for in Lumentale?
  </h3>
  <p>Use furniture for customization and quest/social progress unless the current build explicitly shows a combat effect. For AARI furniture and custom furniture quests, verify the active objective before buying duplicates.
  </p>`,
  },
  {
    id: 14,
    title: "Lumentale Bugs and Internet Troubleshooting Guide",
    h1: "Lumentale: Memories of Trey Bugs and Internet Troubleshooting Guide",
    description: "Fix Lumentale bugs with safe recovery steps, internet checks, PC update checks, and patch-note verification routes.",
    tags: ["Bugs", "Troubleshooting", "Internet", "Updates"],
    publishDate: "2026-07-20",
    author: "LumenTale Fan Guide Team",
    imageUrl: "/images/guides/bugs-internet-troubleshooting-guide.jpg",
    imageAlt: "Lumentale Memories of Trey bug troubleshooting guide with town route and system checks",
    seo: {
      title: "Lumentale Bugs and Internet Troubleshooting Guide",
      description: "Fix Lumentale bugs with safe recovery steps, internet checks, PC update checks, and patch-note verification routes.",
      keywords: "Lumentale bug, internet required, PC update, Switch patch notes",
    },
    addressBar: "lumentale-memories-of-trey-bugs-internet-troubleshooting-guide",
    detailsHtml: `<p>By: Frontline Pathfinder | Lead Content Tester, GameguideHub
  </p>
  <p>Tested on Version: Current public build | Status: <strong>PATCH SENSITIVE</strong>. Bug behavior, cloud saves, and platform update flow can change after hotfixes.
  </p>
  <p><strong>Fast answer:</strong> do not start by reinstalling. First confirm the game build, back up your save, reproduce the bug once, then split the problem into one of four buckets: launch/update, save/progression, input/display, or internet/platform service. Most bad reports fail because they skip the build number.
  </p>
  <figure>
    <img src="/images/guides/bugs-internet-troubleshooting-guide.jpg" alt="Lumentale Memories of Trey bug troubleshooting guide for update and internet checks" title="Lumentale bugs and internet troubleshooting guide" loading="lazy">
    <figcaption>When a route, prompt, or save state breaks, freeze the build state first. Random fixes before a backup are how good saves get corrupted.</figcaption>
  </figure>
  <h2>Bug checks and safe recovery steps
  </h2>
  <h3>Common bug report variants
  </h3>
  <p>Most Lumentale bug searches are not asking for a news post. They are asking, "Can I keep playing without wrecking my save?" Use the table below before you touch local files.
  </p>
  <table>
    <thead>
      <tr><th>Symptom</th><th>Likely Bucket</th><th>First Safe Move</th><th>Do Not Do First</th></tr>
    </thead>
    <tbody>
      <tr><td>Quest marker or NPC does not advance</td><td>Save/progression flag</td><td>Save in a new slot, reload, re-enter the room, then repeat the last dialogue chain.</td><td>Delete saves or skip large story sections.</td></tr>
      <tr><td>Crash on launch or black screen</td><td>Launch/update</td><td>Verify files, check GPU driver, disable overlays, then launch windowed.</td><td>Change multiple graphics settings at once.</td></tr>
      <tr><td>Controller, keyboard, or menu input is stuck</td><td>Input/display</td><td>Disconnect duplicate input devices and reset bindings from the settings menu.</td><td>Overwrite the whole config folder blindly.</td></tr>
      <tr><td>Cloud save, achievement, or online feature fails</td><td>Internet/platform service</td><td>Check platform status, cloud sync state, and whether you are online before reopening the game.</td><td>Assume the local save is broken.</td></tr>
    </tbody>
  </table>
  <p>If the bug blocks a route, compare it against the <a href="/guides/lumentale-memories-of-trey-walkthrough">walkthrough</a> and the <a href="/guides/lumentale-memories-of-trey-holoken-powers-guide">Holoken powers guide</a>. A missing field interaction can look like a bug when it is actually a route gate.
  </p>
  <h3>Before you report a bug
  </h3>
  <p>A useful report is short and reproducible. Send the build, platform, save location, exact step, expected result, actual result, and whether the bug survives a reload. Anything weaker forces the developer or community to guess.
  </p>
  <ol>
    <li><strong>Record the build and platform.</strong> PC, Steam Deck, and Switch paths are not the same bug surface.</li>
    <li><strong>Back up the save before testing.</strong> On PC, use the platform's save folder or cloud-save backup flow before deleting anything.</li>
    <li><strong>Reproduce from the nearest stable point.</strong> One clean repeat is better than ten vague comments.</li>
    <li><strong>Strip variables.</strong> Disable overlays, mods, reshade tools, and controller remappers before blaming the base game.</li>
    <li><strong>Attach a 20-30 second clip if possible.</strong> Show the menu, route, or interaction that fails.</li>
  </ol>
  <p>For combat bugs, include the exact Animon, skill, SP state, TP action, target, and weakness interaction. The <a href="/guides/lumentale-memories-of-trey-sp-combat-tp-guide">SP Combat Guide</a> is the reference format I use for those notes.
  </p>
  <h2>Internet and patch-note checks
  </h2>
  <h3>Does the game require internet?
  </h3>
  <p>Split this into gameplay and platform services. The Steam listing exposes single-player support, but also platform services such as cloud, achievements, and online features. That means a normal story session may be playable without constant network access, while updates, first download, cloud sync, storefront entitlement checks, and online modes still need a working connection.
  </p>
  <table>
    <thead>
      <tr><th>Need</th><th>Internet Required?</th><th>Practical Check</th></tr>
    </thead>
    <tbody>
      <tr><td>Downloading or updating</td><td>Yes</td><td>Let the platform finish the patch before launching.</td></tr>
      <tr><td>Steam Cloud or achievements</td><td>Yes for sync/reporting</td><td>Wait for cloud sync to finish before switching devices.</td></tr>
      <tr><td>Solo story play</td><td>Usually no after install, but verify per platform</td><td>Test offline from a backed-up save before a long session.</td></tr>
      <tr><td>Online PvP or platform services</td><td>Yes</td><td>Check platform status before troubleshooting the game client.</td></tr>
    </tbody>
  </table>
  <p><strong>Do not use offline mode as a repair tool.</strong> Use it only after your save is backed up and you know cloud sync is not mid-write.
  </p>
  <h3>Where to check PC and Switch patch notes
  </h3>
  <p>Patch-note searches should end at official platform channels, not reposted changelog fragments. For PC, check the Steam app page, Steam news feed, and library update notes. For Switch, check the console's software update screen, Nintendo eShop page, and official publisher/developer channels.
  </p>
  <table>
    <thead>
      <tr><th>Platform</th><th>Patch Check</th><th>Use It For</th></tr>
    </thead>
    <tbody>
      <tr><td>PC / Steam</td><td>Steam library update notes and official app news</td><td>Hotfix number, crash fixes, save fixes, known issues.</td></tr>
      <tr><td>Switch</td><td>Software update screen and Nintendo eShop/news channel</td><td>Version confirmation and platform-specific patch timing.</td></tr>
      <tr><td>Any platform</td><td>Official publisher/developer posts</td><td>Known issue acknowledgement and workaround timing.</td></tr>
    </tbody>
  </table>
  <p>When a guide path still fails after a patch, use the <a href="/search">site search</a> for the quest, item, or Animon name before reporting it. A route note may already explain the trigger.
  </p>
  <h2>FAQ
  </h2>
  <h3>Does Lumentale: Memories of Trey require internet?
  </h3>
  <p>Internet is required for downloads, updates, cloud sync, achievements reporting, and online features. Solo story play should be tested offline only after the game is installed and your save is backed up.
  </p>
  <h3>Where are the patch notes?
  </h3>
  <p>Check Steam update notes for PC and the Switch software update/eShop route for console builds. Avoid relying on copied changelogs without a version number.
  </p>
  <h3>Should I reinstall to fix a bug?
  </h3>
  <p>Only after verifying files, backing up saves, checking build version, disabling overlays/mods, and reproducing the bug. Reinstalling first wastes time and may hide the real cause.
  </p>
  <h2>Related Guides and Data Pages
  </h2>
  <ul>
    <li><a href="/guides/lumentale-memories-of-trey-walkthrough">Walkthrough</a> - verify route blockers before calling them bugs.</li>
    <li><a href="/guides/lumentale-memories-of-trey-holoken-powers-guide">Holoken Powers Guide</a> - field gates that can look like broken paths.</li>
    <li><a href="/guides/lumentale-memories-of-trey-sp-combat-tp-guide">SP Combat Guide</a> - report combat bugs with SP, TP, and target context.</li>
    <li><a href="/wiki/items">Items</a> and <a href="/wiki/crafting">Crafting</a> - check whether a missing material is actually a progression issue.</li>
  </ul>`,
  },

  {
    id: 13,
    title: "Lumentale Crafting Recipes and Blueprints Guide",
    h1: "Lumentale: Memories of Trey Crafting and Recipes Guide",
    description: "All Lumentale crafting recipe checks, blueprint unlock notes, shop-source priorities, and where to buy Glass/Vetro.",
    tags: ["Crafting", "Recipes", "Blueprints", "Materials"],
    publishDate: "2026-07-20",
    author: "LumenTale Fan Guide Team",
    imageUrl: "/images/guides/crafting-recipes-blueprints-guide.jpg",
    imageAlt: "Lumentale crafting recipes and blueprints guide with workshop material planning",
    seo: {
      title: "Lumentale Crafting Recipes and Blueprints Guide",
      description: "All Lumentale crafting recipe checks, blueprint unlock notes, shop-source priorities, and where to buy Glass/Vetro.",
      keywords: "Lumentale crafting recipes, blueprints, ingredients, buy glass",
    },
    addressBar: "lumentale-memories-of-trey-crafting-recipes-blueprints",
    detailsHtml: `<p>By: Frontline Pathfinder | Lead Content Tester, GameguideHub
  </p>
  <p>Tested on Version: Current public build | Status: <strong>DATA-CHECKED / PATCH SENSITIVE</strong>. Recipe output, vendor stock, and blueprint wording can move after economy or progression patches.
  </p>
  <p><strong>Fast answer:</strong> use the <a href="/wiki/crafting">crafting recipe table</a> first, then check the exact item page before buying materials. Current data confirms <a href="/wiki/items/vetro">Vetro</a> is Glass, costs 50, stacks to 999, and is consumed by key recipes such as <a href="/wiki/recipes/appendice-q">Appendice Q</a>, Bilia upgrades, Dispel, Lampalite, and Potion lines.
  </p>
  <figure>
    <img src="/images/guides/crafting-recipes-blueprints-guide.jpg" alt="Lumentale crafting recipes and blueprints guide for workshop materials and Glass" title="Lumentale crafting recipes and blueprints guide" loading="lazy">
    <figcaption>Crafting is a material audit. Confirm the recipe, then the ingredient count, then the shop or route source before spending Gold.</figcaption>
  </figure>
  <h2>Recipes and blueprints
  </h2>
  <h3>All crafting recipes
  </h3>
  <p>The live crafting list is the fastest answer for "all crafting recipes" and German variants like "Rezepte." It separates workshop crafting from Fountain cooking, shows ingredient counts, and links every known material back to the item index.
  </p>
  <table>
    <thead>
      <tr><th>Recipe</th><th>Confirmed Materials</th><th>Success Rate</th><th>Use Case</th></tr>
    </thead>
    <tbody>
      <tr><td><a href="/wiki/recipes/appendice-q">Appendice Q</a></td><td>2x Anivite EX, 10x Vetro, 1x Diamante</td><td>100%</td><td>Quirk correction for serious team tuning.</td></tr>
      <tr><td><a href="/wiki/recipes/prismatipo">Prismatipo</a></td><td>2x Anivite EX, 10x Plastica, 30x Quarzo</td><td>100%</td><td>Hidden type planning and late coverage work.</td></tr>
      <tr><td><a href="/wiki/recipes/bilia">Bilia</a></td><td>1x Vetro, 1x Metallo, 1x Anivite</td><td>80%</td><td>Early Bilia crafting when you can absorb failures.</td></tr>
      <tr><td><a href="/wiki/recipes/bilia-a">Bilia + A</a></td><td>10x Vetro, 10x Metallo, 5x Anivite</td><td>50%</td><td>Risky upgrade route; do not craft from your last materials.</td></tr>
      <tr><td><a href="/wiki/recipes/lampalite">Lampalite</a></td><td>1x Anivite EX, 1x Topazio, 30x Vetro</td><td>100%</td><td>Item route planning for specific evolution or utility checks.</td></tr>
      <tr><td><a href="/wiki/recipes/potion">Potion</a></td><td>5x Papavero Viola, 1x Plastica, 1x Vetro, 1x Anivite</td><td>100%</td><td>Basic healing stock if shop access is awkward.</td></tr>
    </tbody>
  </table>
  <p>Do not craft Bilia upgrade chains blindly. A 50% success rate on Bilia + A means the opportunity cost is real, especially before your route has stable Vetro and Anivite income.
  </p>
  <h3>Blueprint locations
  </h3>
  <p>Searches for "blueprints," "Bauplane," and "Bauanleitung" usually mean recipe unlocks or shop manuals. Current site data is strongest for completed recipes and material costs; exact blueprint pickup coordinates are more patch-sensitive.
  </p>
  <table>
    <thead>
      <tr><th>Blueprint Intent</th><th>Where To Check First</th><th>Why</th></tr>
    </thead>
    <tbody>
      <tr><td>Find a missing recipe</td><td>Recent NPC dialogue and workshop bench</td><td>Some unlocks are progression flags, not loose map objects.</td></tr>
      <tr><td>Buy a manual or blueprint</td><td>Town vendors after a new chapter or city</td><td>Vendor stock often expands after story progress.</td></tr>
      <tr><td>Verify a material chain</td><td><a href="/wiki/crafting">Crafting table</a> and <a href="/wiki/items">item index</a></td><td>The recipe can be known before every source route is mapped.</td></tr>
      <tr><td>Route a blocked quest craft</td><td><a href="/guides/lumentale-memories-of-trey-walkthrough">Walkthrough</a></td><td>Quest crafts may need dialogue before the bench updates.</td></tr>
    </tbody>
  </table>
  <p><strong>INFERRED:</strong> if a vendor does not sell the blueprint after you reach the right town, advance one story flag, sleep/reload if the game supports stock refresh, then check again. Do not farm random materials until the recipe is visible.
  </p>
  <h2>Where to buy materials
  </h2>
  <h3>Buy blueprints and ingredients
  </h3>
  <p>Use shops for stable low-tier materials, then save field routes for rare materials. This keeps Gold and inventory pressure predictable.
  </p>
  <table>
    <thead>
      <tr><th>Material Group</th><th>Buy First?</th><th>Reason</th><th>Linked Check</th></tr>
    </thead>
    <tbody>
      <tr><td>Vetro / Glass</td><td>Yes when stocked</td><td>Cheap at 50 and consumed by many recipes.</td><td><a href="/wiki/items/vetro">Vetro item page</a></td></tr>
      <tr><td>Plastica / Plastic</td><td>Yes when stocked</td><td>Cheap at 50 and appears in Potion, Dispel, and Prismatipo chains.</td><td><a href="/wiki/items/plastica">Plastica item page</a></td></tr>
      <tr><td>Anivite EX</td><td>Buy only if your route can afford it</td><td>Costs 1,200 and is burned by high-impact recipes.</td><td><a href="/guides/lumentale-memories-of-trey-anivite-ex-farming">Anivite EX guide</a></td></tr>
      <tr><td>Quarzo / Quartz</td><td>Check price before bulk buying</td><td>High item value at 1,500; Prismatipo needs 30.</td><td><a href="/wiki/items/quarzo">Quarzo item page</a></td></tr>
    </tbody>
  </table>
  <p>If you are buying for a build item, open the target recipe and buy only the missing amounts. Inventory hoarding feels safe, but it delays upgrades and starter evolution items.
  </p>
  <h3>Where to buy glass
  </h3>
  <p>Glass is listed in-game as <strong>Vetro</strong>. Current data confirms it as a MISC material with a 50 price and 999 max stack. If your shop does not show Vetro, search the item page first, then re-check later town stock after progression.
  </p>
  <ol>
    <li><strong>Search Vetro, not Glass.</strong> The English intent maps to the Italian item name in the data.</li>
    <li><strong>Check general material vendors first.</strong> Vetro is cheap enough that buying beats slow farming when stocked.</li>
    <li><strong>Do not spend all Vetro on Bilia + A.</strong> The 50% success rate can drain early stock fast.</li>
    <li><strong>Hold 10 Vetro for Appendice Q and 30 for Lampalite.</strong> Those thresholds matter more than extra basic Potion crafts.</li>
  </ol>
  <h2>FAQ
  </h2>
  <h3>Where do you get crafting recipes in Lumentale?
  </h3>
  <p>Use the workshop crafting table, recent NPC dialogue, town vendors, and quest bench checks. The recipe list is confirmed in the site data; exact blueprint pickup or shop timing can be patch-sensitive.
  </p>
  <h3>Where can you buy glass?
  </h3>
  <p>Look for Vetro. It is the Glass material, priced at 50 in current item data. If a vendor does not stock it yet, advance the route and re-check material shops.
  </p>
  <h3>Are blueprints and recipes the same thing?
  </h3>
  <p>Not always. A recipe is the craftable result and ingredient list. A blueprint or manual is the unlock path players are usually trying to find or buy.
  </p>
  <h2>Related Guides and Data Pages
  </h2>
  <ul>
    <li><a href="/wiki/crafting">Crafting Recipes</a> - live table for all workshop recipes.</li>
    <li><a href="/wiki/items">Items</a> - material prices, stack sizes, and item pages.</li>
    <li><a href="/guides/lumentale-memories-of-trey-anivite-ex-farming">Anivite EX Guide</a> - rare material routing before expensive crafts.</li>
    <li><a href="/guides/lumentale-memories-of-trey-evolution-dex-guide">Evolution and Dex Guide</a> - check Lampalite and item routes before spending materials.</li>
  </ul>`,
  },

  // {
  //   id: 1,
  //   title: 'LumenTale Beginner Guide 鈥?Your First 5 Hours in Talea',
  //   description: 'Short summary shown on the guides index and detail hero.',
  //   tags: ['Beginner', 'Combat', 'Exploration'],
  //   publishDate: '2026-05-26',
  //   updatedDate: '2026-06-08', // optional; bumps sitemap lastmod when guide content changes
  //   imageUrl: '/images/guides/guides01.webp',
  //   imageAlt: 'Cover image alt text for accessibility',
  //   author: 'Author name or byline',
  //   seo: {
  //     title: 'LumenTale | Page title for search (鈮?~60 chars)',
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
    id: 12,
    title: "Lumentale: Memories of Trey Evolution Guide: Dex Levels, Hidden Types, and All Evolutions",
    h1: "Lumentale: Memories of Trey Evolution and Dex Guide",
    description: "A data-first evolution guide for Lumentale covering Dex level checks, starter branches, hidden type decisions, and confirmed Animon evolution routes.",
    tags: ["Evolution", "Dex", "Hidden Types", "Animon"],
    publishDate: "2026-07-13",
    author: "LumenTale Fan Guide Team",
    imageUrl: "/images/guides/evolution-dex-guide.jpg",
    imageAlt: "Lumentale evolution guide thumbnail with Animon and researcher characters",
    seo: {
      title: "Lumentale Evolution and Dex Guide",
      description: "Learn how evolution works in Lumentale with Dex level checks, starter lines, hidden type notes, and all confirmed Animon evolution routes.",
      keywords: "Lumentale evolution, dex level evolution, all Animon evolutions, hidden type",
    },
    addressBar: "lumentale-memories-of-trey-evolution-dex-guide",
    detailsHtml: `<p>By: Frontline Pathfinder | Lead Content Tester, GameguideHub
  </p>
  <p>Tested on Version: Current public build | Status: <strong>DATA-CHECKED / PATCH SENSITIVE</strong>. Evolution triggers, Dex wording, and hidden type rates can change after balance or content patches.
  </p>
  <p><strong>Fast answer:</strong> evolution in Lumentale is not one mechanic. Some Animon evolve by level, some by time or weather, some by items, some by battle conditions, and starter partners branch near the end of their line. Use the <a href="/evolutions">Evolution Guide</a> as the live table, then use this page to decide what to verify before grinding.
  </p>
  <figure>
    <img src="/images/guides/evolution-dex-guide.jpg" alt="Lumentale evolution guide thumbnail with multiple Animon evolution candidates" title="Lumentale evolution and Dex guide" loading="lazy">
    <figcaption>Evolution planning starts with the Dex entry, then the requirement, then the confidence tag. Do not spend rare items before all three line up.</figcaption>
  </figure>
  <h2>How evolution works
  </h2>
  <h3>Dex level evolution
  </h3>
  <p>When players search for "dex level evolution," they are usually mixing two separate checks: the <strong>AniDex knowledge state</strong> and the actual evolution trigger. The Dex helps you inspect species data, move timing, and route context, but the trigger still depends on the row type: level, item, weather, party condition, trait count, or battle condition.
  </p>
  <table>
    <thead>
      <tr><th>Evolution Type</th><th>What To Verify First</th><th>Current Example</th></tr>
    </thead>
    <tbody>
      <tr><td>Level</td><td>Target level and whether a move should be learned before evolving.</td><td>Smellwing to Toxigall at level 18.</td></tr>
      <tr><td>Item</td><td>Item name, inventory location, and whether the item is consumed.</td><td>Lampecko to Luxecko with Lampalite.</td></tr>
      <tr><td>Time or weather</td><td>Day, night, rainbow weather, or other route state.</td><td>Deniuli by day; Almyuna by night.</td></tr>
      <tr><td>Trait or battle condition</td><td>Counter progress before leveling or ending the fight.</td><td>Rainxy trait uses; Chagma critical-hit check.</td></tr>
      <tr><td>Starter branch</td><td>Level 40 branch condition and final-form item or path.</td><td>Maidelly to Megamitosa or Dolegamii.</td></tr>
    </tbody>
  </table>
  <p>The important rule: never assume the Dex entry alone evolves the Animon. Treat the Dex as the confirmation panel, not the button that performs the evolution.
  </p>
  <h3>How to evolve Animon
  </h3>
  <p>Use this process before every evolution attempt:
  </p>
  <ol>
    <li><strong>Open the Animon entry.</strong> Confirm the species name and avoid typo traps such as "evoled" searches.</li>
    <li><strong>Check the evolution group.</strong> Level routes are safer than item, weather, or battle-condition routes.</li>
    <li><strong>Read the confidence tag.</strong> Rows marked confirmed are stronger than rows marked INFERRED or Needs check.</li>
    <li><strong>Save before branches.</strong> Starter finals and item forks are not the place to test blind.</li>
    <li><strong>Verify moves before accepting evolution.</strong> If a pre-evolution learns a key move soon, delay the evolution.</li>
  </ol>
  <p>For combat impact, pair this with the <a href="/guides/lumentale-memories-of-trey-sp-combat-tp-guide">SP Combat Guide</a>. A stronger form that breaks your SP curve can still make the team worse.
  </p>
  <h2>All evolutions and hidden types
  </h2>
  <h3>All Animon evolutions
  </h3>
  <p>The table below is the compact route map. It is not a replacement for the live <a href="/evolutions">all evolutions page</a>, but it gives the decision layer players need before committing time or materials.
  </p>
  <table>
    <thead>
      <tr><th>Line</th><th>Known Route</th><th>Confidence</th><th>Decision Note</th></tr>
    </thead>
    <tbody>
      <tr><td>Mewaii line</td><td>Mewaii to Maidelly at level 18; Maidelly to Megamitosa or Dolegamii near level 40.</td><td>Confirmed / branch-sensitive</td><td>Best documented starter line; save before the final branch.</td></tr>
      <tr><td>Vortail line</td><td>Vortail to Furtex at level 18; Furtex to Weaphoon or Fursazen near level 40.</td><td>INFERRED for branch details</td><td>Choose damage tempo or bulk based on final-form plan.</td></tr>
      <tr><td>Ozelash line</td><td>Ozelash to Kouzear at level 18; Kouzear to Byazevolt or Zenicore near level 40.</td><td>INFERRED for branch details</td><td>Strong offensive line; do not lock the final form blind.</td></tr>
      <tr><td>Salabel line</td><td>Salabel to Vilender at level 18; Vilender to Horrogre or Goldrago near level 40.</td><td>INFERRED for branch details</td><td>Useful if you want Demon coverage and safer speed than Queccha.</td></tr>
      <tr><td>Queccha line</td><td>Queccha to Quequator at level 18; Quequator to Barangu or Meterier near level 40.</td><td>INFERRED for branch details</td><td>Best early bulk line, but slow before the team is built around it.</td></tr>
      <tr><td>Minube line</td><td>All six colored Minube variants in party, then rainbow weather, into Chromaura.</td><td>Confirmed</td><td>Collection route, not a casual level-up route.</td></tr>
      <tr><td>Lampecko line</td><td>Lampecko to Luxecko at level 25 with Lampalite.</td><td>Confirmed</td><td>Item check matters more than raw level.</td></tr>
      <tr><td>Chagma line</td><td>Chagma to Gongbog after 5 critical hits in one battle.</td><td>Confirmed</td><td>Build around crit setup before attempting it.</td></tr>
    </tbody>
  </table>
  <h3>Hidden type checks
  </h3>
  <p>Hidden types are a team-building layer, not a normal evolution trigger. A hidden secondary type changes STAB and coverage planning, while the normal evolution requirement still has to be satisfied. This is why hidden type searches belong next to evolution planning but should not be treated as the same mechanic.
  </p>
  <p>Current site testing treats wild hidden type hunting as low-efficiency compared with item or route-based correction when those tools become available. If you only need coverage, check <a href="/affinities">Affinities</a>, <a href="/animon">AniDex filters</a>, and crafting routes before farming a rare wild variant for hours.
  </p>
  <table>
    <thead>
      <tr><th>Question</th><th>Answer</th><th>Route Action</th></tr>
    </thead>
    <tbody>
      <tr><td>Does hidden type evolve the Animon?</td><td>No direct confirmation. Treat it as coverage, not the trigger.</td><td>Meet the normal evolution requirement first.</td></tr>
      <tr><td>How do you know the hidden type?</td><td>Use Dex data, type display, battle testing, or confirmed item checks.</td><td>Record before spending rare materials.</td></tr>
      <tr><td>Should you farm hidden type before evolving?</td><td>Only for a final team slot.</td><td>Casual runs should evolve first, then optimize.</td></tr>
    </tbody>
  </table>
  <h2>FAQ
  </h2>
  <h3>How do you evolve Animon in Lumentale: Memories of Trey?
  </h3>
  <p>Check the evolution group first. Most early routes are level-based, but later routes can require items, time, weather, party state, trait use, or battle conditions.
  </p>
  <h3>What is Dex level evolution?
  </h3>
  <p>It is search wording for players trying to connect Dex progress with evolution requirements. Use the Dex to confirm species data, but still follow the listed requirement.
  </p>
  <h3>Are all Animon evolutions confirmed?
  </h3>
  <p>No. Rows marked confirmed are stronger; rows marked INFERRED or branch-sensitive should be verified in your own save before spending rare items or locking a final form.
  </p>
  <h2>Related Guides and Data Pages
  </h2>
  <ul>
    <li><a href="/evolutions">Evolution Guide</a> - live table for all current evolution rows.</li>
    <li><a href="/starters">Starter Comparison</a> - starter BST, type, affinity, catch rate, and line links.</li>
    <li><a href="/animon">AniDex</a> - filter by element, affinity, rarity, and species.</li>
    <li><a href="/guides/lumentale-memories-of-trey-best-starter-partner-guide">Best Starter and Partner Guide</a> - choosing the partner before the evolution route.</li>
    <li><a href="/guides/lumentale-memories-of-trey-minube-chromaura-evolution-guide">Minube Chromaura Evolution Guide</a> - deep route for the most annoying special evolution.</li>
  </ul>`,
  },

  {
    id: 11,
    title: "Lumentale: Memories of Trey Starter Guide: Best Starter and Which Partner to Take",
    h1: "Best Starter and Partner in Lumentale: Memories of Trey",
    description: "A practical starter and partner guide for Lumentale: Memories of Trey covering best picks, playstyle fit, availability, and starter evolutions.",
    tags: ["Starters", "Partner", "Team Building", "Evolution"],
    publishDate: "2026-07-13",
    author: "LumenTale Fan Guide Team",
    imageUrl: "/images/guides/starter-partner-anispace-box.webp",
    imageAlt: "Lumentale starter partner guide showing Animon box and partner selection planning",
    seo: {
      title: "Lumentale Best Starter and Partner Guide",
      description: "Pick the best Lumentale starter by playstyle with partner stats, starter availability, all-starter notes, and evolution routes.",
      keywords: "Lumentale best starter, which partner to take, starters, starter evolutions",
    },
    addressBar: "lumentale-memories-of-trey-best-starter-partner-guide",
    detailsHtml: `<p>By: Frontline Pathfinder | Lead Content Tester, GameguideHub
  </p>
  <p>Tested on Version: Current public build | Status: <strong>DATA-CHECKED / PATCH SENSITIVE</strong>. Starter stats and branch requirements are pulled from current site runtime data; partner acquisition and final branches can change after patches.
  </p>
  <p><strong>Fast answer:</strong> take <strong>Queccha</strong> if you want the safest early partner, <strong>Salabel</strong> if you want speed plus Demon coverage, <strong>Ozelash</strong> if you want a direct physical attacker, <strong>Vortail</strong> if you want fast special pressure, and <strong>Mewaii</strong> if you prefer a stable support-leaning route. There is no single best starter for every save; pick the partner that fixes your first team weakness.
  </p>
  <figure>
    <img src="/images/guides/starter-partner-anispace-box.webp" alt="Lumentale starter partner guide showing Animon box and partner route planning" title="Lumentale best starter and partner guide" loading="lazy">
    <figcaption>Starter choice is a team-planning decision. The wrong partner is the one that overlaps your early captures and leaves you without coverage.</figcaption>
  </figure>
  <h2>Which starter or partner should you take?
  </h2>
  <h3>Best starter short answer
  </h3>
  <p>The best starter is the one that solves your first 5-10 hours, not the one with the prettiest final form. Current starter data shows all five opening partners have the same catch rate value of 40, close starting BST ranges, and a level 18 first evolution route. That means the decision should be made by role, not by a tiny BST gap.
  </p>
  <table>
    <thead>
      <tr><th>Starter</th><th>Type / Affinity</th><th>Starting BST</th><th>Pick If You Want</th><th>Main Risk</th></tr>
    </thead>
    <tbody>
      <tr><td><a href="/animon/queccha">Queccha</a></td><td>GEO / SEREUM</td><td>335-395</td><td>Safest early bulk and reliable front-line stability.</td><td>Slow speed; needs coverage support.</td></tr>
      <tr><td><a href="/animon/salabel">Salabel</a></td><td>DEMON / HORRENS</td><td>336-396</td><td>Fast partner route with useful Demon coverage.</td><td>Less raw bulk than Queccha.</td></tr>
      <tr><td><a href="/animon/ozelash">Ozelash</a></td><td>ELECTRIC / FUROR</td><td>337-397</td><td>Early aggression and strong physical pressure.</td><td>Can feel fragile if you ignore defense.</td></tr>
      <tr><td><a href="/animon/vortail">Vortail</a></td><td>AURA / MESTUS</td><td>331-391</td><td>Fast special tempo and flexible damage routing.</td><td>Needs SP discipline and protection.</td></tr>
      <tr><td><a href="/animon/mewaii">Mewaii</a></td><td>VIRUS / FELICIS</td><td>333-393</td><td>Steadier support-leaning route and documented evolution line.</td><td>Can feel slower if you need immediate damage.</td></tr>
    </tbody>
  </table>
  <p>My practical recommendation: first-time players should take <strong>Queccha</strong> or <strong>Salabel</strong>. If you already understand weakness coverage and shared SP pressure, Ozelash and Vortail are stronger tempo picks. Mewaii is the cleanest choice if you value documented evolution data over raw early pace.
  </p>
  <h3>Which partner to take
  </h3>
  <p>Partner choice should be separated from generic starter hype. You are not only picking a monster; you are picking your first type, affinity, turn-speed profile, and final evolution branch. Use these rules:
  </p>
  <ul>
    <li><strong>Need safer blind routing?</strong> Take Queccha. Its HP and Defense profile is forgiving while you learn field routes.</li>
    <li><strong>Need speed without giving up coverage?</strong> Take Salabel. It gives a faster route than Queccha while staying flexible.</li>
    <li><strong>Want early damage races?</strong> Take Ozelash. Build around Attack and do not pretend it is a tank.</li>
    <li><strong>Want special pressure?</strong> Take Vortail. Keep a low-cost SP option so it does not drain the team pool.</li>
    <li><strong>Want the most documented first line?</strong> Take Mewaii. Its Mewaii to Maidelly route is the most clearly represented in current evolution data.</li>
  </ul>
  <p>For the battle resource side of this decision, read the <a href="/guides/lumentale-memories-of-trey-sp-combat-tp-guide">SP Combat Guide</a>. A starter that spends badly can make a good type matchup feel worse than it should.
  </p>
  <h2>Starter availability and evolution
  </h2>
  <h3>Where to get starters
  </h3>
  <p>Current site data marks the five opening base partners as <strong>Kickstarter-eligible starters</strong>: Mewaii, Vortail, Ozelash, Salabel, and Queccha. Use the <a href="/starters">Starter Comparison</a> page when you need the exact stat card, catch rate, and evolution-line link.
  </p>
  <p><strong>INFERRED:</strong> searches like "were to get the starters" are usually asking whether the non-picked starters can be acquired later. Current public data confirms the starter species exist in the Dex, but it does not prove a clean early route for collecting every unchosen starter. Treat extra starter acquisition as completionist routing until your save confirms the location.
  </p>
  <h3>Can you get all starters?
  </h3>
  <p>Do not assume yes from the opening choice screen alone. Monster-tamer games often allow later starter acquisition, but Lumentale's current site data is stronger for <strong>stats and evolution lines</strong> than for exact post-choice pickup locations. If your route depends on owning all starters, keep a manual save before major story locks and check the AniDex after new regions open.
  </p>
  <table>
    <thead>
      <tr><th>Question</th><th>Current Safe Answer</th><th>What To Do</th></tr>
    </thead>
    <tbody>
      <tr><td>Can I choose only one partner?</td><td>Yes, the opening partner decision is one pick.</td><td>Choose by team role, not final-form art.</td></tr>
      <tr><td>Can I get every starter later?</td><td>Not confirmed as a simple early route.</td><td>Check new regions, trades, events, or Dex clues.</td></tr>
      <tr><td>Should I restart for a different starter?</td><td>Only if your current partner overlaps your team badly.</td><td>Usually easier to patch coverage with captures.</td></tr>
    </tbody>
  </table>
  <h3>Starter evolutions and evos
  </h3>
  <p>All five starter lines currently point to a first evolution at level 18, then a final branch around level 40. The first step is the easy part. The branch is where you should stop, save, and verify.
  </p>
  <table>
    <thead>
      <tr><th>Starter</th><th>First Evolution</th><th>Final Branch</th><th>Confidence</th></tr>
    </thead>
    <tbody>
      <tr><td>Mewaii</td><td>Maidelly at level 18</td><td>Megamitosa / Dolegamii near level 40</td><td>Confirmed early line; branch-sensitive</td></tr>
      <tr><td>Vortail</td><td>Furtex at level 18</td><td>Weaphoon / Fursazen near level 40</td><td>INFERRED branch details</td></tr>
      <tr><td>Ozelash</td><td>Kouzear at level 18</td><td>Byazevolt / Zenicore near level 40</td><td>INFERRED branch details</td></tr>
      <tr><td>Salabel</td><td>Vilender at level 18</td><td>Horrogre / Goldrago near level 40</td><td>INFERRED branch details</td></tr>
      <tr><td>Queccha</td><td>Quequator at level 18</td><td>Barangu / Meterier near level 40</td><td>INFERRED branch details</td></tr>
    </tbody>
  </table>
  <p>The full branch table is maintained in the <a href="/guides/lumentale-memories-of-trey-evolution-dex-guide">Evolution and Dex Guide</a> and the live <a href="/evolutions">Evolution Guide</a>. Use those before committing a final form.
  </p>
  <h2>FAQ
  </h2>
  <h3>What is the best starter in Lumentale: Memories of Trey?
  </h3>
  <p>For a first playthrough, Queccha is the safest route and Salabel is the best speed-coverage compromise. Ozelash and Vortail are stronger if you want tempo and know how to protect them. Mewaii is the safest documented line.
  </p>
  <h3>Which partner should I take?
  </h3>
  <p>Take the partner that fixes your early team gap: Queccha for bulk, Salabel for speed coverage, Ozelash for physical pressure, Vortail for special tempo, and Mewaii for support stability.
  </p>
  <h3>Can you get all starters in Lumentale: Memories of Trey?
  </h3>
  <p>Current data does not confirm a simple early route for every unchosen starter. Treat it as a completionist question, not a guaranteed opening option.
  </p>
  <h2>Related Guides and Data Pages
  </h2>
  <ul>
    <li><a href="/starters">Starter Comparison</a> - raw starter data, catch rate, type, affinity, and evolution links.</li>
    <li><a href="/evolutions">Evolution Guide</a> - live evolution table and branch rows.</li>
    <li><a href="/animon">AniDex</a> - compare all Animon after your starter choice.</li>
    <li><a href="/affinities">Affinities</a> - understand element and emotional type coverage.</li>
    <li><a href="/guides/lumentale-memories-of-trey-team-building-optimization">Team Building and Stat Tuning Guide</a> - fix the rest of your squad after the partner pick.</li>
  </ul>`,
  },

  {
    id: 17,
    title: "Lumentale Secret Room Guide: Palace Secret Room and Hidden Passages",
    description:
      "Use this Lumentale secret room checklist to clear palace hidden rooms, test wall prompts, verify Holoken field checks, and avoid repeating the wrong passage loop.",
    tags: ["Secret Room", "Palace", "Hidden Passage", "Holoken"],
    publishDate: "2026-08-05",
    updatedDate: "2026-08-05",
    author: "Frontline Pathfinder",
    imageUrl: "/images/guides/lumentale-secret-room-palace-guide.jpg",
    imageAlt: "Lumentale secret room guide for palace hidden passages and wall checks",
    seo: {
      title: "Lumentale Secret Room Guide - Palace Route",
      description:
        "Clear Lumentale palace secret rooms with hidden wall checks, Holoken prerequisites, passage routing, rewards, and stuck-state fixes.",
      keywords:
        "Lumentale secret room, palace secret room, passage secret",
    },
    addressBar: "lumentale-secret-room-guide",
    detailsHtml: `<p>Fast answer: the palace secret room task is a <strong>wall-check route</strong>, not a random search problem. Sweep Baza Palace room edges, test suspicious side walls before leaving the floor, and only commit to a passage after you have confirmed the needed Holoken field interaction. If a wall gives no prompt or feedback, treat that step as a locked state until the palace sequence advances.</p>
  <figure>
    <img src="/images/guides/lumentale-secret-room-palace-guide.jpg" alt="Lumentale secret room palace hidden passage route guide" title="Lumentale palace secret room and hidden passage route" loading="lazy">
    <figcaption>Hidden-room searches are route checks. Clear the visible room, then test walls and field interactions before resetting the area.</figcaption>
  </figure>
  <h2>Direct answer for Secret Room Guide</h2>
  <h3>Primary search intent</h3>
  <p>Players searching for <strong>Lumentale secret room</strong> or <strong>Lumentale palace secret room</strong> usually need one thing: where to look after the obvious door route stops working. The known palace pattern is a hidden passage behind room-side geometry, followed by a second hidden-room check deeper in the same palace route.</p>
  <p><strong>Working rule:</strong> search the room perimeter, not the center. If the room has a named NPC context, a bed, a gym/training space, or a wall that blocks a clean route line, check the left and rear walls first. Lumentale hides progression behind interaction prompts that are easy to miss if you sprint straight to the next door.</p>
  <h3>Variants and typo terms to merge</h3>
  <p><strong>Lumentale passage secret</strong>, <strong>Lumentale secret room palace</strong>, and typo searches for secret room all belong on this page. Do not split those into separate pages. The player intent is the same: locate the hidden palace passage, confirm the required field tool, and know when the route is complete.</p>
  <table>
    <thead>
      <tr><th>Search wording</th><th>Player probably means</th><th>Action</th></tr>
    </thead>
    <tbody>
      <tr><td>lumentale secret room</td><td>Any hidden palace room or passage</td><td>Start with the palace wall sweep.</td></tr>
      <tr><td>lumentale palace secret room</td><td>Baza Palace hidden-room route</td><td>Check palace bedroom/training-room edges.</td></tr>
      <tr><td>lumentale passage secret</td><td>Hidden wall or side passage</td><td>Test field interactions before leaving.</td></tr>
    </tbody>
  </table>
  <h2>How to complete the hidden location task</h2>
  <h3>Prerequisites and state checks</h3>
  <p>Before you blame the game, verify the state. You need access to the palace interior, the current story sequence must allow room interaction, and your overworld toolkit should include the field powers used by palace obstacles. If the hidden wall does not respond, check your <a href="/guides/lumentale-memories-of-trey-holoken-powers-guide">Holoken powers</a> before repeating the same scan.</p>
  <ul>
    <li><strong>Quest state:</strong> return after the palace objective points you inside; early visits may not expose the prompt.</li>
    <li><strong>Field tools:</strong> Geo-style and Grass-style checks are the first tools to suspect when the passage looks physical rather than a normal door.</li>
    <li><strong>Party state:</strong> bring route-capable Animon instead of a pure combat lineup if you are sweeping hidden rooms.</li>
    <li><strong>Camera discipline:</strong> rotate at room corners. The prompt can sit on a side wall, not the visible front path.</li>
  </ul>
  <h3>Step-by-step action path</h3>
  <ol>
    <li>Enter the palace and clear the immediate room so enemy movement or dialogue cannot interrupt the wall check.</li>
    <li>Walk the perimeter slowly. Do not sprint past side walls; stop at corners and face the wall directly.</li>
    <li>Test the first suspicious wall near the bedroom-side route. If it opens, loot the room and mark it complete.</li>
    <li>Move to the training or gym-side route and repeat the same wall test on the left-side boundary.</li>
    <li>If the second room does not trigger, swap to the relevant Holoken field interaction and retest once. Repeated no-feedback attempts usually mean your story state or field tool is wrong.</li>
    <li>After both checks are complete, return to the main palace objective instead of reloading the area. Hidden rooms in this cluster are reward/route checks, not an endless puzzle chain.</li>
  </ol>
  <h3>Result confirmation</h3>
  <p>You are done when the hidden wall opens, the reward room is looted, and the palace route no longer presents a new blocked side passage. If you only found one secret room, do one more wall sweep on the gym/training-side section before moving on.</p>
  <h2>Common mistakes and edge cases</h2>
  <h3>Why the task appears stuck</h3>
  <p>Most failures come from three causes: the player checks only normal doors, enters before the palace state is active, or forgets that Holoken powers are route tools. If the prompt never appears, leave the palace, advance the current objective, then return with a field-capable party. If the prompt appears but the wall stays closed, swap the field interaction and retest once.</p>
  <table>
    <thead>
      <tr><th>Symptom</th><th>Likely cause</th><th>Fix</th></tr>
    </thead>
    <tbody>
      <tr><td>No interaction prompt</td><td>Wrong room edge or story state</td><td>Recheck side walls after the palace objective updates.</td></tr>
      <tr><td>Prompt appears but nothing changes</td><td>Missing field interaction</td><td>Check Holoken route powers and retest.</td></tr>
      <tr><td>Only one room found</td><td>Second wall sweep skipped</td><td>Return to the gym/training-side route.</td></tr>
      <tr><td>Reward already gone</td><td>Room previously cleared</td><td>Do not farm the same secret room; continue the palace task.</td></tr>
    </tbody>
  </table>
  <h3>When to merge this with a broader guide</h3>
  <p>This page should stay separate because the intent is narrow: <strong>find the secret room</strong>. Broader route prep belongs in the <a href="/map">Talea map</a>, <a href="/guides/lumentale-memories-of-trey-hidden-mechanics">Hidden Mechanics Guide</a>, or <a href="/guides/lumentale-memories-of-trey-holoken-powers-guide">Holoken Powers Guide</a>. Link out when the blocker is a general traversal system; keep this page focused on the palace hidden-room task.</p>
  <h2>FAQ</h2>
  <h3>Is Secret Room Guide worth a separate Lumentale page?</h3>
  <p>Yes. Palace secret room searches are task-shaped: players are stuck at a hidden wall or missed passage and need an exact checklist, not a full walkthrough.</p>
  <h3>Which keywords should this page cover?</h3>
  <p>Cover the parent query and close variants naturally: Lumentale secret room, palace secret room, passage secret, and secret room palace. Do not force typo variants into headings.</p>`,
  },

  {
    id: 18,
    title: "Lumentale Anivis Key Guide: Where to Use and How to Find It",
    description:
      "Find the Lumentale Anivis Key, understand the Memorenia temple barrier, clear the hidden cave relic route, and avoid the common stuck points.",
    tags: ["Anivis Key", "Memorenia", "Temple", "Key Item"],
    publishDate: "2026-08-05",
    updatedDate: "2026-08-05",
    author: "Frontline Pathfinder",
    imageUrl: "/images/guides/lumentale-anivis-key-guide.jpg",
    imageAlt: "Lumentale Anivis Key guide for Memorenia temple route and barrier checks",
    seo: {
      title: "Lumentale Anivis Key Guide - Where to Use It",
      description:
        "Find and use the Lumentale Anivis Key for the Memorenia temple barrier, hidden cave route, relic pieces, and fast travel unlock.",
      keywords: "Lumentale Anivis Key, Memorenia temple, hidden cave",
    },
    addressBar: "lumentale-anivis-key-guide",
    detailsHtml: `<p>Fast answer: the <strong>Anivis Key</strong> is tied to the Memorenia temple route. After the island climb and the Katamoss fight, Nada and Damame create the key. Read it, unlock the Memorenia Lumen Club fast-travel option, then use the hidden cave path because the main temple entrance is blocked by an Anivis barrier.</p>
  <figure>
    <img src="/images/guides/lumentale-anivis-key-guide.jpg" alt="Lumentale Anivis Key Memorenia temple hidden cave guide" title="Lumentale Anivis Key and Memorenia temple route" loading="lazy">
    <figcaption>The key does not solve the whole temple route by itself. It moves you into the next state, then the hidden cave and relic pieces carry the route forward.</figcaption>
  </figure>
  <h2>Direct answer for Anivis Key Guide</h2>
  <h3>Primary search intent</h3>
  <p>If you searched <strong>Lumentale Anivis Key</strong>, you are probably in one of two states: you just received the key and do not know what changed, or you reached the temple and the Anivis barrier is still blocking the obvious entrance. The fix is not to force the front door. Use the key state, fast travel to Memorenia, then route through the hidden cave.</p>
  <h3>Variants and typo terms to merge</h3>
  <p>There are not many useful variants for this key item yet. Keep this page focused on <strong>where to find the Anivis Key</strong>, <strong>where to use the Anivis Key</strong>, and <strong>how the Memorenia temple barrier route works</strong>. Do not split "Anivis barrier" into a separate page unless Project3 later sees enough independent search demand.</p>
  <table>
    <thead>
      <tr><th>Question</th><th>Short answer</th><th>Next action</th></tr>
    </thead>
    <tbody>
      <tr><td>Where do I get the Anivis Key?</td><td>After the island route and Katamoss fight.</td><td>Follow the climb north to the temple approach.</td></tr>
      <tr><td>Who creates the Anivis Key?</td><td>Nada and Damame create it after the fight.</td><td>Read the key prompt instead of leaving immediately.</td></tr>
      <tr><td>Where do I use it?</td><td>Use the unlocked state around Memorenia and the temple route.</td><td>Fast travel to the Lumen Club, then enter via hidden cave.</td></tr>
    </tbody>
  </table>
  <h2>How to complete the key item task</h2>
  <h3>Prerequisites and state checks</h3>
  <p>Before chasing the key, confirm you are in the Memorenia route and can use the hoverboard over water. You also need access to the island climb that leads toward the temple approach. If you are still locked to earlier towns, this is not a pickup you can brute force from a shop or random chest.</p>
  <ul>
    <li><strong>Route:</strong> Memorenia / Aeolyc island sequence.</li>
    <li><strong>Traversal:</strong> hoverboard movement over water.</li>
    <li><strong>Field check:</strong> grass grapple point on the climb toward the temple.</li>
    <li><strong>Combat check:</strong> Katamoss fight before the key is created.</li>
  </ul>
  <h3>Step-by-step action path</h3>
  <ol>
    <li>From the Memorenia route, head north toward the machines seen from the cliff.</li>
    <li>Use the water route and stairs to move between the small island sections.</li>
    <li>Look for the grass grapple point on the northern climb. This is the clean signal that you are on the correct temple approach.</li>
    <li>Reach the temple approach and fight Katamoss. Bring Toxic pressure if your current team struggles; Katamoss resists or ignores several obvious lines.</li>
    <li>After Katamoss is defeated, wait for the key scene. Nada and Damame create the Anivis Key here.</li>
    <li>Read the key prompt. The important follow-up is the Memorenia Lumen Club fast-travel state.</li>
    <li>Return to the port/beach and locate the hidden cave northeast of the port. The main temple is sealed by an Anivis barrier, so the cave is the real entrance route.</li>
    <li>Inside the cave, collect the three circular relic pieces and return them to the gate. Once all pieces are joined, the gate opens and the temple route continues.</li>
  </ol>
  <h3>Result confirmation</h3>
  <p>You have completed the Anivis Key task when the key scene has played, Memorenia fast travel is available, the hidden cave gate has accepted all three relic pieces, and the temple interior opens. If you only have the key but cannot enter the temple, you are missing the hidden cave relic sequence, not another key.</p>
  <h2>Common mistakes and edge cases</h2>
  <h3>Why the task appears stuck</h3>
  <p>The most common mistake is treating the Anivis Key like a normal door key. It does not mean the temple front entrance becomes the correct path. The Anivis barrier still forces a route change. Go back to the beach/port area and search northeast for the hidden cave.</p>
  <table>
    <thead>
      <tr><th>Stuck point</th><th>Cause</th><th>Fix</th></tr>
    </thead>
    <tbody>
      <tr><td>No Anivis Key yet</td><td>Katamoss fight not cleared</td><td>Finish the temple approach battle.</td></tr>
      <tr><td>Key obtained, front door sealed</td><td>Anivis barrier still blocks direct entry</td><td>Use the hidden cave northeast of port.</td></tr>
      <tr><td>Cave gate will not open</td><td>Missing one circular relic piece</td><td>Backtrack left and deeper through the cave.</td></tr>
      <tr><td>Fast travel missing</td><td>Key prompt not read or state not saved</td><td>Reopen the key step before leaving Memorenia.</td></tr>
    </tbody>
  </table>
  <h3>When to merge this with a broader guide</h3>
  <p>Keep this as a standalone key-item task page. Related combat planning belongs in the <a href="/guides/lumentale-memories-of-trey-sp-combat-tp-guide">SP Combat Guide</a>; route power checks belong in the <a href="/guides/lumentale-memories-of-trey-holoken-powers-guide">Holoken Powers Guide</a>; item lookup belongs in <a href="/wiki/items">Items</a> and <a href="/wiki/crafting">Crafting</a>. This page should stay locked to the Anivis Key and Memorenia temple route.</p>
  <h2>FAQ</h2>
  <h3>Is Anivis Key Guide worth a separate Lumentale page?</h3>
  <p>Yes. It is a distinct key-item task with a clear failure point: players get the key, see the Anivis barrier, and miss the hidden cave route.</p>
  <h3>Which keywords should this page cover?</h3>
  <p>The main keyword is Lumentale Anivis Key. Natural supporting terms are Memorenia temple, Anivis barrier, hidden cave, Katamoss, and relic pieces.</p>`,
  },
  {
    id: 1,
    title: "Lumentale: Memories of Trey 鈥?Mid-Game Team Optimization &amp; Stat Tuning",
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
  <p>Before you tune any stats or swap any abilities, you need capital. Everything in Lumentale's optimization pipeline鈥攆rom restaurant meals to crafting reagents鈥攊s incredibly expensive. Fortunately, there's a highly reliable farming spot right under your nose.
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
  <p>If you look at the fully unlocked <a href="/wiki">AniWiki</a> (which you get by reaching Research Level 3/Yellow Star on an Animon), you will find that Melotica learns its best life-drain recovery move, Absorb, at Lv. 26.
  </p>
  <p>If you evolve at Lv. 24, your newly evolved <a href="/animon/meloquinia">Meloquinia</a> cannot easily learn this move until much later in the game. I ruined my first playthrough's pacing because I evolved too early and lost my tank's primary sustain option. Hold down the "cancel" button at Lv. 24, wait two more levels to learn Absorb, and then let the evolution proceed. Your mid-game survival rates will thank you.
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
  <td data-row="row-mivyzq"><a href="/wiki/items/anivite-ex">Anivite EX</a>
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
  <p>Wild Animons only have a 10% chance to spawn with their Secret Type active (and some, like <a href="/animon/bonkey">Bonkey</a>, have a 5% split chance between two hidden types). Trying to farm this in the wild is mathematically inefficient.
  </p>
  <p>Instead, use the Prismatype item to force-unlock or swap the hidden potential of your Animon. It gives you a second STAB type without adding any defensive weaknesses鈥攁 purely beneficial upgrade.
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
    title: "Lumentale: Memories of Trey 鈥?7 Unmapped Mechanics &amp; Exploits We Tested",
    description: "Most modern monster-tamers hold your hand until your palm is sweaty. Lumentale: Memories of Trey does the opposite; it buries several of its most crucial systems under UI flourishes, undocumented behavior, and flavor text. We spent the last week parsing combat values and tracking overworld behaviors. Here are seven hidden mechanics the game won't explicitly explain to you for hours鈥攊f ever.",
    tags: [],
    publishDate: "2026-06-05",
    author: "LumenTale Fan Guide Team",
    imageUrl: "/images/guides/guides02.webp",
    imageAlt: "Lumentale: Memories of Trey 鈥?7 Unmapped Mechanics &amp; Exploits We Tested",
    seo: {
      title: "Lumentale: Memories of Trey 鈥?7 Hidden Overworld &amp; Combat Mechanics Explained",
      description: "An expert breakdown of unmapped systems in Lumentale: Memories of Trey. Learn about portrait lie detectors, the recycle bin XP multiplier, and early water catching.",
      keywords: "Lumentale Memories of Trey, Lumentale hidden mechanics, Lumentale recycle bins, Lumentale AniSpace, Lumentale status passives, Lumentale water catching exploit"
    },
    addressBar: "lumentale-memories-of-trey-hidden-mechanics",
    detailsHtml: `<p>By: Frontline Pathfinder | Lead Content Tester, GameguideHub 
  </p>
  <p>Tested on Build: EA v0.2.x | Data Status: Hand-Verified
  </p>
  <p>Most modern monster-tamers hold your hand until your palm is sweaty. Lumentale: Memories of Trey does the opposite; it buries several of its most crucial systems under UI flourishes, undocumented behavior, and flavor text. We spent the last week parsing combat values and tracking overworld behaviors. Here are seven hidden mechanics the game won't explicitly explain to you for hours鈥攊f ever.
  </p>
  <h2>1. The Dialogue Portrait "Lie Detector"
  </h2>
  <p>This is a subtle piece of visual storytelling that doubles as a major narrative hint tool. When talking to NPCs, pay attention to the faint colored outline (aura) that frames their dialogue portraits.
  </p>
  <p>These colors aren't just decorative; they are directly tied to the game's five core emotional Attributes. If an NPC is telling you that everything is perfectly fine, but their portrait aura flashes Blue (Mestus/Sadness) or Purple (Horrens/Fear), they are actively hiding something or lying to you.
  </p>
  <p><img src="/images/guides/guides02-01.webp" alt="The Dialogue Portrait &quot;Lie Detector'" width="50%">
  </p>
  <p>My experience: I completely missed this during my first few hours. It wasn't until I spoke to Baza鈥攚ho was grinning and acting completely confident鈥攖hat I noticed his portrait was glowing with a heavy blue Mestus aura. Sure enough, his dialogue was a front. Keep an eye on those outlines; they are a built-in narrative spoiler system.
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
  <p>Early in the game, you'll see fish-like Animons (like Firtrix) swimming out in deep water. If you try throwing your <a href="/wiki/items/holoken">Holoken</a> at them, it will fail because they are physically out of reach, and you don't have the water-traversal upgrades required to reach them yet.
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
  <p>Our testing shows that having a secondary Secret Type does not alter the Animon's level-up movepool. For example, a <a href="/animon/mollupom">Mollupom</a> with a secret Water secondary type will learn the exact same moves at the exact same levels as a pure Rock Mollupom.
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
  },

  {
    id: 3,
    title: "Lumentale: Memories of Trey 鈥?Complete Hunter Directory for All 20 Rare Animons",
    description: "Finding every rare Animon in Lumentale: Memories of Trey is the ultimate test of a tamer's patience. Many wikis contain outdated or misleading beta location data, leading to hours of wasted grinding. After extensive datatesting (with big thanks to Card Maniac, rag, and PG from the official Discord community), we have mapped out and verified the exact locations, weather requirements, and progression triggers for all 20 rare Animons featured in the game.",
    tags: [],
    publishDate: "2026-06-08",
    imageUrl: "/images/guides/guides03.webp",
    imageAlt: "Lumentale Memories of Trey  Complete Hunter Directory for All 20 Rare Animons",
    seo: {
      title: "Lumentale: Memories of Trey 鈥?The 20 Rare Animon Spawn &amp; Hunt Locations Guide",
      description: "An exhaustive, hand-verified guide to locating and catching all 20 rare Animons in Lumentale: Memories of Trey. Includes Verdi's RNG manipulation buff, weather locks, and progression requirements.",
      keywords: "Lumentale Memories of Trey, Lumentale rare animon, Lumentale spawn locations, Mewaii location, Toypette puzzle, Chagma fountain, Twinkler AniSpace, Kageka Area 04, Ozelash spawn"
    },
    author: "LumenTale Fan Guide Team",
    addressBar: "lumentale-20-rare-animon-spawn-locations",
    detailsHtml: `<p>By: Frontline Pathfinder | Lead Content Tester, GameguideHub 
  </p>
  <p> Tested on Build: Release v1.0 | Sourced from: 70+ Hours of Live In-Game Datatesting
  </p>
  <p>Finding every rare Animon in Lumentale: Memories of Trey is the ultimate test of a tamer's patience. Many wikis contain outdated or misleading beta location data, leading to hours of wasted grinding. After extensive datatesting (with big thanks to Card Maniac, rag, and PG from the official Discord community), we have mapped out and verified the exact locations, weather requirements, and progression triggers for all 20 rare Animons featured in the game.
  </p>
  <h2>The Foundation: Verdi's Card-Sacrifice RNG Buff
  </h2>
  <p>Before stepping out to hunt any rare target on this list, you must prime your overworld spawn rates. Hunting without this setup is highly inefficient.
  </p>
  <p>First, spawn Verdi (The Wandering Collector). After defeating the local zone leader, enter and immediately exit your AniSpace (the PC storage menu). This loading transition forces Verdi to appear nearby on the overworld.
  </p>
  <p>Hand Verdi a card of the Animon you wish to hunt. This sacrifices the card to activate a hidden +20% spawn rate boost for that specific species in your current area.
  </p>
  <ol>
  <li>Buff Quality: Standard cards and holographic cards give the exact same +20% boost. Do not waste your holographic cards here.
  </li>
  <li>Duration: The buff lasts exactly **30 real-world minutes** (which translate to **10 in-game hours**).
  </li>
  <li>Monitoring the Buff: There is no visual status icon on your UI. Use a physical stopwatch, or watch the in-game clock鈥攊t wears off exactly 10 in-game hours after activation. Opening your main menu *pauses* this timer; starting encounters does not.
  </li>
  <li>No Stacking: Giving Verdi multiple cards at once does not stack the buff. Submit one card every 30 minutes.
  </li>
  </ol>
  <p><img src="/images/guides/guides03-01.webp" alt="Verdi's Card-Sacrifice RNG Buff" width="50%">
  </p>
  <h2>The Ultimate 20 Rare Animon Hunt Directory
  </h2>
  <p>Below is the complete, verified list of all 20 rare Animons featured in the game, categorized by their true spawn coordinates and specific environmental triggers.
  </p>
  <h3>1. <a href="/animon/mewaii">Mewaii</a>
  </h3>
  <p>True Location: Plains Biome, specifically the **second swamp entrance** path.
  </p>
  <p><img src="/images/guides/guides03-02.webp" alt="Where to find Mewaii" width="50%">
  </p>
  <p>Trailer Disinformation: Official promotional footage showed Mewaii wandering the starting Plains Biome fields. After 30 minutes of testing that starting zone, we recorded zero encounters. Do not waste your time there; head directly to the second swamp entrance where we successfully spawned six of them in a single buff window.
  </p>
  <h3>2. <a href="/animon/ozelash">Ozelash</a>
  </h3>
  <p>True Location: Area 23.
  </p>
  <p>Spawning Trick: Stick to the center of Area 23. This spot has an extremely high concentration of spawn points, allowing you to cycle spawns quickly. It usually appears as a companion spawn alongside wild Alpagall.
  </p>
  <h3>3. Florenco
  </h3>
  <p>True Location: Aeolyc Islands (Area 15).
  </p>
  <p>Requirements: Florenco can spawn in the upper cliff section once you obtain **Water Power** to swim across. Alternatively, it can spawn in the small, isolated section accessible only after obtaining **Grass Power**.
  </p>
  <h3>4. <a href="/animon/vortail">Vortail</a>
  </h3>
  <p>True Location: Aeolyc Islands (Area 15).
  </p>
  <p>Requirements: Similar to Florenco, Vortail is locked to the upper cliff sections (requires Water Power) and the isolated ledges (requires Grass Power). It patrols these high-elevation grassy paths.
  </p>
  <h3>5. <a href="/animon/salabel">Salabel</a>
  </h3>
  <p>True Location: Suvius Peak (Area 12).
  </p>
  <p>Requirements: You must have **Water Power** unlocked to cross the lava rivers. Salabel likes to hide in the dark, extreme corners of the caves. If it doesn't appear on the overworld, run into wild Skeletape packs鈥擲alabel regularly spawns as a hidden battle partner.
  </p>
  <h3>6. Kageka
  </h3>
  <p>True Location: Area 04.
  </p>
  <p>Requirements: Kageka does not spawn in the location shown in early promotional trailers. It is tucked away in Area 04, which is completely inaccessible until both the North and South areas of the zone have been cleared. It spawns as a hidden partner under the overworld Griblin models.
  </p>
  <h3>7. <a href="/animon/rainxy">Rainxy</a> (Weather Locked)
  </h3>
  <p>True Location: Area 01.
  </p>
  <p>Requirements: Rainxy is strictly weather-sensitive and will **only spawn while it is actively raining** (indicated by the cloud/rain icon on your mini-map). We found the most consistent spawn loop is running back and forth directly outside the camp entrance during downpours.
  </p>
  <h3>8. <a href="/animon/minube">Minube</a> (Yellow Variant)
  </h3>
  <p>True Location: Area 06 Cave.
  </p>
  <p>Requirements: Navigate deep into the cave layout of Area 06 with your Verdi card buff active. The yellow variant spawns directly on the rocky cavern floor.
  </p>
  <h3>9. Yokora
  </h3>
  <p>True Location: Darkwood Forest (Area 07).
  </p>
  <p>Requirements: Requires **Grass Power** (climbing mechanics) to reach the ledge. Yokora patrols the dense bamboo area situated directly **east of the giant central tree**.
  </p>
  <h3>10. <a href="/animon/katamos">Katamos</a>
  </h3>
  <p>True Location: Aeolyc Islands beach area.
  </p>
  <p>The Secret: Katamos is introduced as a major story boss, but the game's code treats him as a standard overworld rare spawn once the battle is cleared. Return to the beach where you first fought him, pop your Verdi card buff, and you can farm him repeatedly to min-max his stats.
  </p>
  <h3>11. <a href="/animon/soblin">Soblin</a> (Weather Locked)
  </h3>
  <p>True Location: Area 25 (Glacial Peaks).
  </p>
  <p>Requirements: Soblin is our second weather-dependent Animon. It **only spawns during snowstorms**. Area 25 is the absolute best place to hunt it, as the zone is locked to permanent snow weather, saving you from waiting on random weather cycles.
  </p>
  <h3>12. Toypette (Red, Blue, &amp; Yellow Forms)
  </h3>
  <p>Toypette's three color variants are locked behind completely different biomes and mechanics:
  </p>
  <ol>
  <li>Red Toypette: Spawns in the fire zone of the Plains Biome (Area 18). Look for it as a companion spawn alongside wild Doryogun.
  </li>
  <li>Blue Toypette: Spawns in Area 25 (Glacial Peak). Head west of the main Lumen Camp. There is a small circular path loop right next to the ice bridges; we call this the "sweet spot" for running quick laps to cycle spawns.
  </li>
  <li>Yellow Toypette (The Voltier Puzzle): Go to the Lampet minigame building in Voltier. Use your Electric Power to interact with the console, shifting the tube colors to **Green**, and then to **Pink**. This triggers a cutscene that unlocks the alleyway gate. Yellow Toypette will spawn there or alongside wild Toxigall and Ogiemask.
  </li>
  </ol>
  <h3>13. <a href="/animon/devoblet">Devoblet</a>
  </h3>
  <p>True Location: Titan Quarry (Area 20).
  </p>
  <p>Spawning Trick: Devoblet is a very straightforward overworld spawn. Simply run up and down the main path where the zone boss is located with your Verdi card buff active.
  </p>
  <h3>14. <a href="/animon/twinkler">Twinkler</a> (AniSpace Exclusive)
  </h3>
  <p>True Location: Inside your **AniSpace** sandbox.
  </p>
  <p>Spawning Trick: Twinkler is exclusive to the AniSpace. Every time you enter, there is a chance one will be wandering around. To farm it efficiently, enter and exit your AniSpace repeatedly. 
  </p>
  <p> Pathfinder's Tip: Do this while standing in a small overworld area with minimal assets, like the **Lumen Club**, to drastically reduce your loading screens and save time. 
  </p>
  <h3>15. <a href="/animon/chagma">Chagma</a>
  </h3>
  <p>True Location: Area 02 / Area 03 (Early) or Area 05 (Late).
  </p>
  <p>Early Hunting Hack: Early on, Chagma's spawn rate is abysmal. If you insist on grinding Chagma early, go to a Fountain and select **"Rest until the Afternoon"**. Chagma's spawn window is strictly time-sensitive; our tests yielded zero morning spawns but immediate success during afternoon hours. In Area 02, look for it hidden under overworld Deniuli models; in Area 03, check under Almyuna models.
  </p>
  <h3>16. <a href="/animon/deniuli">Deniuli</a>
  </h3>
  <p>True Location: Area 02 overworld.
  </p>
  <p>Significance: Deniuli patrols the grassy paths of Area 02. Engaging these overworld models is your primary method for triggering early-game partner battles that can contain Chagma.
  </p>
  <h3>17. <a href="/animon/almyuna">Almyuna</a>
  </h3>
  <p>True Location: Area 03 overworld.
  </p>
  <p>Significance: Similar to Deniuli, Almyuna patrols the overworld paths of Area 03. Engaging them with an active card buff is your best bet for pulling an early afternoon Chagma into battle.
  </p>
  <h3>18. <a href="/animon/inkrow">Inkrow</a>
  </h3>
  <p>True Location: Skyreach Lake (Area 17).
  </p>
  <p>Requirements: Requires **Grass Power** (climbing mechanics) to reach the summit. Scale the metal pipes and platforms near the waterfall. Inkrow patrols the high industrial platforms at the very top of the lake zone.
  </p>
  <h3>19. <a href="/animon/lordrake">Lordrake</a>
  </h3>
  <p>True Location: Brackish Palace (Area 08).
  </p>
  <p>Requirements: Head deep inside the overgrown palace ruins near the final dark orb container. Lordrake spawns on the overworld paths or as a companion spawn alongside wild Canabble.
  </p>
  <h3>20. Elymile
  </h3>
  <p>True Location: Suvius Peak (Area 12).
  </p>
  <p>Requirements: Cross the lava fields using your Water Power. It shares overworld spawn pools inside the volcanic caves and frequently appears as a partner spawn in wild battles alongside <a href="/animon/skeletape">Skeletape</a> and Bonkey.
  </p>`,
  },

  {
    id: 4,
    title: "How to Unlock All 8 Legendary Locations in Lumentale: Memories of Trey",
    description: "Once you clear both the North and South paths in Lumentale: Memories of Trey, the game truly opens up, revealing 8 endgame Legendary Animons (Mythos Legends). Tracking them down requires solving hidden environmental puzzles, navigating invisible platform mazes, and meeting strict post-game Pok茅dex (AniWiki) criteria. This guide walks you through each legendary location and how to bypass their unique puzzles.",
    tags: [],
    publishDate: "2026-06-08",
    imageUrl: "/images/guides/guides04.webp",
    imageAlt: "How to Unlock All Legendary Locations in Lumentale Memories of Trey",
    seo: {
      title: "How to Unlock All Legendary Locations in Lumentale: Memories of Trey",
      description: "Step-by-step guide to finding and unlocking all 8 Legendary Animons in Lumentale: Memories of Trey. Learn puzzle solutions for Suvius Peak, Skyreach Lake, and post-game.",
      keywords: "Lumentale Memories of Trey, Lumentale Legendary locations, Lumentale unlock legendaries, Morsiver location, Knequital invisible path, Primalong unlock, Kentaress, Nuclheart puzzle"
    },
    author: "LumenTale Fan Guide Team",
    addressBar: "lumentale-unlock-all-legendary-locations",
    detailsHtml: `<p>By: Frontline Pathfinder | Lead Content Tester, GameguideHub
  </p>
  <p>Tested on Build: Release Build | Prerequisites: North &amp; South Paths Cleared
  </p>
  <p>Once you clear both the North and South paths in Lumentale: Memories of Trey, the game truly opens up, revealing 8 endgame Legendary Animons (Mythos Legends). Tracking them down requires solving hidden environmental puzzles, navigating invisible platform mazes, and meeting strict post-game Pok茅dex (<a href="/wiki">AniWiki</a>) criteria. This guide walks you through each legendary location and how to bypass their unique puzzles.
  </p>
  <p>The Catch Rate Secret: Do not waste your rare, high-tier capture items or stress over catching these targets. Defeating a Legendary in battle automatically adds them to your active team or your AniSpace storage box. Focus 100% of your strategy on winning the fight.
  </p>
  <h2>Phase 1: The South Path Legends (No Story Gates)
  </h2>
  <p>These three Legendaries are accessible as soon as the South Path is fully open. They do not require complex quest lines, but they do feature minor movement puzzles.
  </p>
  <h3>1. <a href="/animon/yakora">Yakora</a> (The Joyous Sentinel)
  </h3>
  <ol>
  <li>Location: Darkwood Forest (Area 07).
  </li>
  <li>The Puzzle: There is no complex mechanism here; it is a simple maze-like process of elimination. Navigate the bamboo-lined paths to the clearing in the center-north of the zone.
  </li>
  <li>Stats: Lv. 70 | Attribute: Felicis (Joy/Happiness) | Type: Grass.
  </li>
  </ol>
  <h3>2. Dualine (The Serein Flame)
  </h3>
  <ol>
  <li>Location: Darkwood Forest (Area 07).
  </li>
  <li>The Puzzle: Found in the same forest as Yakora. Head to the westernmost clearing. Run through the trial-and-error path layouts until you reach the isolated grove.
  </li>
  <li>Stats: Lv. 70 | Attribute: Sereum (Calm/Tranquility) | Type: Fire.
  </li>
  </ol>
  <p><img src="/images/guides/guides04-01.webp" alt="Dualine" width="50%">
  </p>
  <h3>3. <a href="/animon/morsiver">Morsiver</a> (The Demon of the Peaks)
  </h3>
  <ol>
  <li>Location: Suvius Peak (Area 12).
  </li>
  <li>The Puzzle: This zone catches many players off guard because the game never explicitly forces you to use this mechanic beforehand. You must use your Water <a href="/wiki/items/holoken">Holoken</a> to shoot the active lava flows. This cools the magma down, building a solid rock path you can cross to reach the deep caldera.
  </li>
  <li>Stats: Lv. 100 | Attribute: Horrens (Fear/Anxiety) | Type: Demon.
  </li>
  <li>Reward: Defeating Morsiver unlocks the **Demon Holoken Power**, allowing you to infuse your Holoken with energy that completely hides Trey from nearby wild Animons for a short duration.
  </li>
  </ol>
  <h2>Phase 2: The North Path Legends (Quest Locked)
  </h2>
  <p>Unlocking these three requires initiating a specific poaching investigation questline in Arsilia.
  </p>
  <p>The Unlock Step: Go to Arsilia at Nighttime. An NPC will stop you, suspecting you are a poacher, and challenge you to a battle. Win the fight to kick off the "Poaching Case" questline. This eventually grants you a warrant to search the Council member's flat and unlocks the path to **Skyreach Lake (Area 17)**.
  </p>
  <h3>4. <a href="/animon/knequital">Knequital</a> (The Invisible Path)
  </h3>
  <ol>
  <li>Location: Skyreach Lake Caves (Area 17).
  </li>
  <li>The Puzzle: The cave is pitch black and filled with **invisible floors and platforms**. You must have an Aura-type Animon out on the overworld to illuminate the hidden path. Watch the floor closely; follow the glowing purple tiles and pipe layouts to cross the waterfalls safely.
  </li>
  <li>Stats: Lv. 100 | Attribute: Sereum | Type: Steel.
  </li>
  </ol>
  <h3>5. <a href="/animon/nuclheart">Nuclheart</a> (The Valve Chamber)
  </h3>
  <ol>
  <li>Location: Biome Plains (Area 22).
  </li>
  <li>The Puzzle: You need to locate and activate four key valves scattered throughout the Biome Plains. To trigger them, hit them using your Virus Holoken power. Once all four keys are green, head into the central chamber.
  </li>
  <li>Stats: Lv. 100 | Attribute: Horrens | Type: Poison.
  </li>
  <li>Reward: Unlocks **Chakra Holoken Power**, which considerably increases Trey's overworld movement speed.
  </li>
  </ol>
  <h3>6. Blumester (The Conveyor Switched Maze)
  </h3>
  <ol>
  <li>Location: Titan Quarry (Area 20).
  </li>
  <li>The Puzzle: The area is a labyrinth of conveyor belts and platforms. You must locate and hit the various mechanical switches using your Holoken. The rooms reset if you take the incorrect path, so follow the shadow indicators cast by the overhead pipes to deduce the correct direction.
  </li>
  <li>Stats: Lv. 100 | Attribute: Horrens | Type: Water.
  </li>
  </ol>
  <h2>Phase 3: Post-Game Sages (AniWiki Locked)
  </h2>
  <p>The final two Legendaries are strictly post-game content and require rolling the credits first.
  </p>
  <h3>7. <a href="/animon/primalong">Primalong</a> (The Sage of Memorenia)
  </h3>
  <ol>
  <li>Location: Memorenia (Area 18 Shrine).
  </li>
  <li>Requirements:Complete the main story and let the credits roll.
  </li>
  <li>Head back to any camp to trigger the Verdi/Zukkero quest sequence. Accept the "Info Request: Cimitrick" bounty.
  </li>
  <li>Head to the great temple at the summit of Memorenia and speak to the Sage, Mars.
  </li>
  <li>The Dex Gate: Mars will only fight you if you have registered at least 132 Animons in your AniWiki. (They do not need to be fully scanned/yellow-starred; simple capture registration is enough).
  </li>
  <li>Stats: Lv. 100 | Attribute: Sereum | Type: Wood.
  </li>
  </ol>
  <h3>8. <a href="/animon/kentaress">Kentaress</a> (The Void Champion)
  </h3>
  <p><img src="/images/guides/guides04-02.webp" alt="Kentaress" width="50%">
  </p>
  <ol>
  <li>Location: Speranova.
  </li>
  <li>Requirements:Complete the story and obtain the **Ice Holoken Power** from the Glacial Peaks puzzle post-game.
  </li>
  <li>Speak to the Sage, Zero, at the Speranova teleportation pad.
  </li>
  <li>The Dex Gate: Zero is the ultimate challenge. He will refuse to battle you until your AniWiki is 100% complete (excepting the final secret legend itself). You must capture every other standard and legendary Animon in the game first.
  </li>
  <li>Stats: Lv. 100 | Attribute: Sereum | Type: Space.
  </li>
  </ol>`,
  },

  {
    id: 5,
    title: "Lumentale: Memories of Trey 鈥?Complete Minube Locations &amp; Chromaura Evolution Guide",
    description: "Evolving Minube into the elusive Chromaura is one of the most tedious end-game collection puzzles in Lumentale: Memories of Trey. You must track down six distinct color variants of Minube scattered across the map, assemble them in your active party, and trigger a highly specific weather condition. Based on our 70+ hours of live testing and community-sourced spawn data, here is the exact roadmap to unlocking Chromaura.",
    tags: ["Lumentale: Memories of Trey"],
    publishDate: "2026-06-12",
    imageUrl: "/images/guides/guides05.webp",
    imageAlt: "Lumentale: Memories of Trey 鈥?Complete Minube Locations &amp; Chromaura Evolution Guide",
    seo: {
      title: "Lumentale: Memories of Trey 鈥?Complete Minube Locations &amp; Chromaura Evolution Guide",
      description: "Find all 6 Minube color variants in Lumentale: Memories of Trey and evolve them into Chromaura. Includes verified spawn tables, overworld locations, and stat-retention tips",
      keywords: "Lumentale Memories of Trey, Lumentale Minube, Minube locations, Chromaura evolution, how to evolve minube, yellow nebula, red nebula, rainbow weather lumentale"
    },
    author: "LumenTale Fan Guide Team",
    addressBar: "lumentale-memories-of-trey-minube-chromaura-evolution-guide",
    detailsHtml: `<p>By: Frontline Pathfinder | Lead Content Tester, GameguideHub 
  </p>
  <p> Tested on Build: Release Build v1.0 | Data Status: Hand-Verified &amp; Community-Sourced
  </p>
  <p>Evolving <a href="/animon/minube">Minube</a> into the elusive <a href="/animon/chromaura">Chromaura</a> is one of the most tedious end-game collection puzzles in Lumentale: Memories of Trey. You must track down six distinct color variants of Minube scattered across the map, assemble them in your active party, and trigger a highly specific weather condition. Based on our 70+ hours of live testing and community-sourced spawn data, here is the exact roadmap to unlocking Chromaura.
  </p>
  <p>The Evolution Formula Debunked:A common community rumor suggested that evolving Minube fuses all six variants into one, destroying your hard-earned individual stats. This is false. 
  </p>
  <p><img src="/images/guides/guides05-01.webp" alt="6 minude color  varinats" width="50%">
  </p>
  <p> When the evolution triggers, **only one chosen Minube** actually evolves into Chromaura. The remaining five act as catalysts and remain completely untouched in your party. Furthermore, Chromaura will inherit the exact Level, IVs (from Roman numeral I to X), and training stats of that chosen lead Minube. Therefore, you do not need to level up all six鈥攋ust invest your resources into one high-quality lead Minube and leave the other five at level 1.
  </p>
  <h2>1. The 6 Minube Color Variants: Complete Spawn Index
  </h2>
  <p>While some early data tables listed these variants as cave-exclusive encounters, our live testing and player reports confirm that all six variants can appear as overworld and wild encounters. Use the table below to plan your routes:
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-fpjmza">Minube Nebula Variant
  </td>
  <td data-row="row-fpjmza">Zone Location (Italian / English equivalent)
  </td>
  <td data-row="row-fpjmza">Level Range
  </td>
  <td data-row="row-fpjmza">Spawn Rate
  </td>
  <td data-row="row-fpjmza">Community Hunting Tips
  </td>
  </tr>
  <tr>
  <td data-row="row-7tqirf">Yellow Nebula
  </td>
  <td data-row="row-7tqirf">Grotta P06 / Area 06 Cave
  </td>
  <td data-row="row-7tqirf">Lv. 13 - 17
  </td>
  <td data-row="row-7tqirf">5%
  </td>
  <td data-row="row-7tqirf">Found wandering the dark pathways of the Area 06 cavern system. Easy to spot due to its bright yellow glow.
  </td>
  </tr>
  <tr>
  <td data-row="row-cksjrr">Orange Nebula
  </td>
  <td data-row="row-cksjrr">Selva Troncombra / Darkwood Forest
  </td>
  <td data-row="row-cksjrr">Lv. 17 - 20
  </td>
  <td data-row="row-cksjrr">5%
  </td>
  <td data-row="row-cksjrr">Can spawn as a regular overworld encounter or as a reinforcement spawn. If you attack another Animon nearby, let the fight initiate instead of instakilling to check for Orange Minube reinforcements. Note: Even a high-level (Lv. 67+) weapon may not one-shot a level 17 Minube due to its defensive scaling.
  </td>
  </tr>
  <tr>
  <td data-row="row-9kva35">Blue Nebula
  </td>
  <td data-row="row-9kva35">Picco Suvio 00 / Suvius Peak 00 &amp; 02
  </td>
  <td data-row="row-9kva35">Lv. 26 - 32
  </td>
  <td data-row="row-9kva35">2% / 5%
  </td>
  <td data-row="row-9kva35">Look around the lower paths of Suvius Peak. The spawn rate is low on the entrance paths (2%), but rises to 5% once you descend into the lower caverns.
  </td>
  </tr>
  <tr>
  <td data-row="row-5wpudw">Red Nebula
  </td>
  <td data-row="row-5wpudw">Grotta Cremisi / Crimson Cavern
  </td>
  <td data-row="row-5wpudw">Lv. 27 - 31
  </td>
  <td data-row="row-5wpudw">5%
  </td>
  <td data-row="row-5wpudw">Wanders the interior caves of Crimson Cavern. Highly visible on the overworld against the dark cave walls.
  </td>
  </tr>
  <tr>
  <td data-row="row-hpoa0g">Green Nebula
  </td>
  <td data-row="row-hpoa0g">Sotterranei del Tempio / Temple Underground (Memorenia)
  </td>
  <td data-row="row-hpoa0g">Lv. 31 - 34
  </td>
  <td data-row="row-hpoa0g">5% / 3%
  </td>
  <td data-row="row-hpoa0g">Confirmed to be both an overworld wanderer and a wild battle encounter. Search the neon-lit ruins beneath Memorenia.
  </td>
  </tr>
  <tr>
  <td data-row="row-4s11hu">Violet Nebula
  </td>
  <td data-row="row-4s11hu">Isole Eoliche / Aeolic Islands
  </td>
  <td data-row="row-4s11hu">Lv. 58 - 64
  </td>
  <td data-row="row-4s11hu">5%
  </td>
  <td data-row="row-4s11hu">Late-game overworld spawn. It patrols the high-elevation paths near the ancient statues.
  </td>
  </tr>
  </tbody>
  </table>
  <p>Survival Threat: The Suvius Peak Explosive Mice!When hunting for the Blue and Red Nebula variants in Suvius Peak / Crimson Cavern, you will run into hordes of Harrogre (popularly known as the "explosive mice"). These mobs are highly aggressive, spawn frequently, and can easily wipe out an unprepared party with their self-destruct moves. Bring high-defense leads or sturdy shields to absorb the blast damage while cycling your Minube spawns.
  </p>
  <h2>2. How to Evolve Minube into Chromaura
  </h2>
  <p>Once you have captured all six distinct Nebula forms, you must execute the final evolution sequence:
  </p>
  <h3>Step 1: Party Setup
  </h3>
  <p>Place all six color variants of Minube (Yellow, Orange, Blue, Red, Green, and Violet) into your active 6-member battle party. Ensure the Minube with your preferred IVs and stats is placed in your primary slot.
  </p>
  <h3>Step 2: Triggering Rainbow Weather
  </h3>
  <p>The evolution is strictly hard-locked behind **Rainbow Weather**, which is one of the rarest weather occurrences in the game. You can trigger this weather in two ways:
  </p>
  <ol>
  <li>The Natural Route (Skyreach Lake): Head to Area 17 (Skyreach Lake). This area has the highest natural spawn rate for the Rainbow weather cycle. Run back and forth between screens to force weather updates until the sky shifts.
  </li>
  <li>The Quest Bypass (Paradine City): If you want to avoid relying on random weather generation, progress through the story until you reach **Paradine City** in the late game. A specific local sidequest in the city will force the overworld weather into a permanent Rainbow state until the quest is completed. You can easily trigger your evolution during this window.
  </li>
  </ol>
  <p><img src="/images/guides/guides05-02.webp" alt="Rainbow area17" width="50%">
  </p>
  <h3>Step 3: Completing the Evolution
  </h3>
  <p>Once you are standing in Rainbow Weather with all six Minubes in your party, open your team menu and select your lead Minube. Trigger the evolution, and it will permanently transform into the powerful, multi-colored Chromaura, while the other five catalyst Minubes remain safely in your party slots.
  </p>
  <p><img src="/images/guides/guides05-03.webp" alt="Chromaura" width="50%">
  </p>`,
  },

  {
    id: 6,
    title: "Lumentale: Memories of Trey 鈥?Deciphering the Ancient Language &amp; Tablet Texts",
    description: "Deciphering the ancient glyphs carved into tablets and posters in <em>Lumentale: Memories of Trey</em> is one of the most rewarding side puzzles in the game. Rather than serving as random decoration, these glyphs constitute a structured substitute cipher. Once decoded, they reveal rich, in-universe lore written in Latin, which can then be translated into English. Here is how we cracked the code and the complete translation of the Area 05 overworld tablets.",
    tags: ["Lumentale: Memories of Trey"],
    publishDate: "2026-06-12",
    imageUrl: "/images/guides/guides06.webp",
    imageAlt: "Lumentale Memories of Trey 鈥?Ancient Glyph Deciphering",
    seo: {
      title: "Lumentale: Memories of Trey 鈥?Ancient Glyph Deciphering &amp; Translation Guide",
      description: "A comprehensive guide to deciphering the ancient glyph language in Lumentale: Memories of Trey. Includes the full glyph-to-Latin alphabet and complete overworld tablet translations.",
      keywords: "Lumentale Memories of Trey, Lumentale ancient language, decipher glyphs lumentale, lumentale alphabet key, translate ancient tablets lumentale"
    },
    author: "LumenTale Fan Guide Team",
    addressBar: "lumentale-memories-of-trey-ancient-language-guide",
    detailsHtml: `<p>By: Frontline Pathfinder | Lead Content Tester, GameguideHub 
  </p>
  <p> Tested on Build: Release Build v1.0 | Data Status: Hand-Verified
  </p>
  <p>Deciphering the ancient glyphs carved into tablets and posters in Lumentale: Memories of Trey is one of the most rewarding side puzzles in the game. Rather than serving as random decoration, these glyphs constitute a structured substitute cipher. Once decoded, they reveal rich, in-universe lore written in Latin, which can then be translated into English. Here is how we cracked the code and the complete translation of the Area 05 overworld tablets.
  </p>
  <h2>1. The Deciphering Strategy: How the Code Was Cracked
  </h2>
  <p>To decode the ancient glyphs without an external guide, we used a two-part environmental cross-reference strategy:
  </p>
  <h3>The Wanted Poster Clue:
  </h3>
  <p>The first piece of the puzzle lies inside the local newspaper, the Gazzetta del Lumen. In one of the articles, there is a prominent wanted poster. 
  </p>
  <p> By analyzing the structural layout of the poster, we can easily identify the bold, top heading as "WANTED" and the subtext below as "DEAD OR ALIVE". Comparing these English letters to the printed glyph symbols immediately unlocked our first 11 translated characters (W, A, N, T, E, D, L, O, R, I, V).
  </p>
  <p><img src="/images/guides/guides06-01.webp" alt="Iris hamlet" width="50%">
  </p>
  <h3>The Map POI Cross-Reference Clue:
  </h3>
  <p>With a baseline set of letters established, we then cross-referenced known map **Points of Interest (POIs)** with their in-game glyph names:
  </p>
  <ol>
  <li>The Iris Hamlet Monument: In Iris Hamlet, the central obelisk POI is labeled on the map. Checking the glyph plaque on the obelisk reveals the word "MEMORIALE" (Italian/Talean for Memorial). This unlocked the letters M, O, and L.
  </li>
  <li>The Laboratory POI: Heading to the local laboratory reveals the POI plaque labeled "LABORATORIO DI WARAX". This cross-reference successfully unlocked B, U, S, X, and the remaining letters of the core alphabet.
  </li>
  </ol>
  <p>The Missing Letter 'J':Our complete decoding of the alphabet confirms that the letter 'J' is completely absent from the ancient glyph directory. The game skips from 'I' straight to 'K' in its substitution system. This is a common quirk in historically styled ciphers, so keep this in mind when decoding custom messages.
  </p>
  <h2>2. Complete Glyph-to-Latin Alphabet Reference
  </h2>
  <p>Use this reference table to manually translate any overworld glyph inscriptions you encounter:
  </p>
  <p><img src="/images/guides/guides06-02.webp" alt="Ancient Glyph Deciphering 2" width="50%">
  </p>
  <table>
  <tbody>
  <tr>
  <td data-row="row-6oblpy">Latin Letter
  </td>
  <td data-row="row-6oblpy">Visual Glyph Description / Equivalent
  </td>
  </tr>
  <tr>
  <td data-row="row-j098fe">A / B / C / D
  </td>
  <td data-row="row-j098fe">Angled '4' symbol / Standard 'B' loop / Curved 'o' / Backwards 'Z'
  </td>
  </tr>
  <tr>
  <td data-row="row-pu7y1z">E / F / G
  </td>
  <td data-row="row-pu7y1z">Horizontal trident / Stylized cursive 'f' / Swirling 'g' loop
  </td>
  </tr>
  <tr>
  <td data-row="row-vb0pms">H / I / K
  </td>
  <td data-row="row-vb0pms">Parenthesis brackets '( )' / Double-barred 'I' / Angular hook 'K'
  </td>
  </tr>
  <tr>
  <td data-row="row-9c1arx">L / M / N
  </td>
  <td data-row="row-9c1arx">Soft 'L' curve / Angular 'E-like' trident / Sharp double-loop 'W'
  </td>
  </tr>
  <tr>
  <td data-row="row-rgxvzr">O / P / Q / R
  </td>
  <td data-row="row-rgxvzr">Horizontal oval / Mirror-flipped 'R' / Closed loop with stem / Standard loop-and-leg
  </td>
  </tr>
  <tr>
  <td data-row="row-08efkw">S / T / U / V
  </td>
  <td data-row="row-08efkw">Cursive 'S' path / Cross 'T' bar / Blocky 'U' / Double diagonal forward slashes '//'
  </td>
  </tr>
  <tr>
  <td data-row="row-36lny5">W / X / Y / Z
  </td>
  <td data-row="row-36lny5">Triple slashes / Hourglass 'X' / Vertical stem with fork / Straight horizontal bar with loop
  </td>
  </tr>
  </tbody>
  </table>
  <h2>3. Area 05 Ancient Tablet Translations
  </h2>
  <p>In Area 05, you will find ancient stone tablets surrounded by stone pillars. Deciphering these glyphs reveals the tragic history of the regional master:
  </p>
  <h3>Tablet Part 1:
  </h3>
  <p>Deciphered Latin Text:
  </p>
  <p>"FORTUNA CAECA EST, SED INFORTUNIUM SCIT UBI FERIRE. QUAMVIS MAGNIFICIS TEMPORIBUS IN NOBIS VIVIMUS, MAGNUS MAGISTER ATALANTE NOS RELEQUIT."
  </p>
  <p>English Translation:
  </p>
  <p>"Fortune is blind, but misfortune knows where to strike. Though we live in magnificent times, the great master Atalante has left us."
  </p>
  <h3>Tablet Part 2:
  </h3>
  <p>Deciphered Latin Text:
  </p>
  <p>"SINE VESTIGIO EVANUIT, PRAETER FRUCTIS INGENII SUI. DICITUR NUPER DIXISSE SE EPIPHANIAM EXPERTUM ESSE QUAE EIUS SENTENTIAM RADICALITER MUTAVIT."
  </p>
  <p>English Translation:
  </p>
  <p>"He vanished without a trace, save for the fruits of his genius. It is said that shortly before, he claimed to have experienced an epiphany that radically changed his beliefs."
  </p>
  <p>Pathfinder's Nostalgia:Solving this puzzle felt incredibly reminiscent of using the Braille chart in Pok茅mon Emerald to unlock the sealed chambers of the three Regis (Regice, Registeel, and Regirock). It is a fantastic mechanical callback that rewards players for physically observing the world around them instead of following an objective marker.
  </p>`,
  },

  {
    id: 7,
    title: "Lumentale: Memories of Trey Holoken Powers Guide: Field Abilities, Unlocks, and Route Uses",
    description: "A practical Lumentale Holoken powers guide for field abilities, lava path checks, route gates, Water Holoken use, and late-game traversal utility.",
    tags: ["Holoken Powers", "Field Abilities", "Exploration", "Routes"],
    publishDate: "2026-06-30",
    author: "LumenTale Fan Guide Team",
    imageUrl: "/images/guides/holoken-powers-route-use.webp",
    imageAlt: "Lumentale Holoken powers guide with Animon field route team",
    seo: {
      title: "Lumentale Holoken Powers Guide - Field Routes",
      description: "Plan Lumentale Holoken powers for field abilities, lava paths, route gates, Water Holoken checks, and late-game utility without wasting time.",
      keywords: "Lumentale Holoken powers, field abilities, lava path, Water Holoken",
    },
    addressBar: "lumentale-memories-of-trey-holoken-powers-guide",
    detailsHtml: `<p>By: Frontline Pathfinder | Lead Content Tester, GameguideHub
  </p>
  <p>Tested on Version: Current public build | Status: <strong>FIELD TESTED / PATCH SENSITIVE</strong>. Route gates, Holoken unlock timing, and field interaction feedback can move after balance or map patches.
  </p>
  <p>Fast answer: treat Holoken powers as route tools, not combat flavor. If a path looks impossible, the missing answer is usually the right overworld Animon type or a late-game Holoken interaction, not brute force.
  </p>
  <figure>
    <img src="/images/guides/holoken-powers-route-use.webp" alt="Lumentale Holoken powers guide with Animon field route team" title="Lumentale Holoken powers and field route planning" loading="lazy">
    <figcaption>Route progress starts with the right field toolkit. Bring the Holoken interaction before you clear the whole area twice.</figcaption>
  </figure>
  <h2>How Holoken powers work
  </h2>
  <p>A Holoken power is any overworld interaction that changes how Trey moves through Talea: cooling a hazard, opening a blocked path, triggering a traversal shortcut, or making a hostile route safer. Do not evaluate these like battle moves. Their value is measured by the areas, quests, and resource loops they unlock.
  </p>
  <table>
    <thead>
      <tr><th>Field Problem</th><th>Likely Holoken Check</th><th>Route Call</th></tr>
    </thead>
    <tbody>
      <tr><td>Hazard floor or heated terrain</td><td>Water-style interaction</td><td>Test the edge before backtracking.</td></tr>
      <tr><td>Dense enemy movement</td><td>Concealment or avoidance utility</td><td>Use it to cross, not to farm.</td></tr>
      <tr><td>Long repeated route</td><td>Movement or Chakra-style utility</td><td>Use it after the first clear to cut travel time.</td></tr>
      <tr><td>No feedback after use</td><td>Wrong type or locked progression</td><td>Leave and return after the next unlock.</td></tr>
    </tbody>
  </table>
  <h3>What counts as a field ability
  </h3>
  <p>A field ability is any Holoken interaction that changes the overworld state. In practical terms, that means the power either makes terrain safe, opens a route, reveals an interaction, or lets Trey avoid a bad path. If it only deals damage in a fight, it belongs in the combat guide, not this checklist.
  </p>
  <p>Use the <a href="/map">Talea map</a> with this rule: if enemies can be cleared but the terrain still blocks progress, mark the route as a field-ability gate and come back with the correct Holoken setup.
  </p>
  <h3>When powers start mattering
  </h3>
  <p>Holoken powers start mattering when the map stops behaving like a straight walking route. Caves, peaks, ruins, and late-area loops often ask for a specific overworld interaction. Extra levels will not solve a route gate if the obstacle is waiting for a type-linked field tool.
  </p>
  <h2>Important Holoken powers and where to use them
  </h2>
  <h3>Water power and lava paths
  </h3>
  <p>The clearest route use is the Water Holoken interaction on lava or heat-heavy paths. When a route has active heated terrain, test the edge with the water interaction before assuming the area is locked. If the surface changes after the shot, follow the new safe path instead of hunting for a hidden staircase.
  </p>
  <figure>
    <img src="/images/guides/holoken-powers-lava-path.webp" alt="Lumentale Holoken powers route gate and field ability check" title="Lumentale field ability route gate check" loading="lazy">
    <figcaption>Field gates are feedback tests. If the terrain reacts, keep routing forward; if it does not, re-check your unlock state.</figcaption>
  </figure>
  <table>
    <thead>
      <tr><th>Before Entering</th><th>Why It Matters</th><th>Stop Condition</th></tr>
    </thead>
    <tbody>
      <tr><td>Confirm obstacle type</td><td>Prevents using the wrong Holoken interaction.</td><td>No visual or route feedback after one clean test.</td></tr>
      <tr><td>Bring the needed Animon type</td><td>Some powers depend on the available field toolkit.</td><td>The game has not taught or unlocked the interaction yet.</td></tr>
      <tr><td>Test before farming</td><td>Stops wasted clears in the wrong zone.</td><td>The path remains unchanged after the correct-looking power.</td></tr>
    </tbody>
  </table>
  <h3>Demon, Chakra, and late-game utility powers
  </h3>
  <p>Late-game utility powers should be treated as route accelerators. Demon-style concealment helps avoid overworld contact when the area is dense with hostile Animons. Chakra-style movement or utility interactions are high-value during post-game collection, rare-spawn hunting, and repeated puzzle-room loops.
  </p>
  <figure>
    <img src="/images/guides/holoken-powers-field-ability.webp" alt="Lumentale Holoken power utility Animon for late-game routes" title="Lumentale late-game Holoken utility power" loading="lazy">
    <figcaption>Late powers do not need to be mandatory to be valuable. They save time when a route must be repeated.</figcaption>
  </figure>
  <h2>Common Holoken route mistakes
  </h2>
  <h3>Missing the required Animon type
  </h3>
  <p>The most common routing failure is entering a puzzle area with the wrong overworld toolkit. If a route needs a type-linked Holoken interaction, brute leveling does not solve the blocker. Check your <a href="/animon">Animon roster</a>, confirm the type, then retest the obstacle.
  </p>
  <h3>Trying to force a route before the unlock
  </h3>
  <p>Some blocked paths are not puzzles yet. If the terrain gives no feedback after the right-looking interaction, mark it as a progression gate and leave. Repeated no-feedback attempts usually mean the route belongs to a later unlock, not that you missed a tiny input window.
  </p>
  <h2>FAQ
  </h2>
  <h3>What are Holoken powers in Lumentale: Memories of Trey?
  </h3>
  <p>Holoken powers are field abilities used to interact with routes, obstacles, and special overworld mechanics. They matter most when terrain or route design blocks normal movement.
  </p>
  <h3>Which Holoken power cools lava in Lumentale: Memories of Trey?
  </h3>
  <p>The Water Holoken interaction is the route check to test first on lava paths or heated terrain. If the terrain reacts, follow the cooled path; if it does not, re-check the required unlock state.
  </p>
  <h2>Related Guides and Data Pages
  </h2>
  <ul>
    <li><a href="/guides/lumentale-memories-of-trey-hidden-mechanics">Hidden Mechanics Guide</a> - overworld systems and tested route behavior.</li>
    <li><a href="/guides/lumentale-unlock-all-legendary-locations">Legendary Locations Guide</a> - route gates and late-area unlock logic.</li>
    <li><a href="/guides/lumentale-20-rare-animon-spawn-locations">Rare Animon Spawn Guide</a> - repeated routes where movement utility saves time.</li>
    <li><a href="/wiki/skills">Skills</a> and <a href="/animon">AniDex</a> - check team tools before entering a gated route.</li>
  </ul>`,
  },

  {
    id: 8,
    title: "Lumentale: Memories of Trey SP Combat Guide: Shared SP, TP, and Team Action Planning",
    description: "A direct Lumentale SP combat guide for shared SP, TP generation, turn cycle planning, low-cost moves, weakness coverage, and team action timing.",
    tags: ["Combat", "SP", "TP", "Team Actions"],
    publishDate: "2026-06-30",
    author: "LumenTale Fan Guide Team",
    imageUrl: "/images/guides/sp-combat-stat-planning.webp",
    imageAlt: "Lumentale SP combat guide showing turn cycle and shared SP",
    seo: {
      title: "Lumentale SP Combat Guide - TP Team Actions",
      description: "Learn Lumentale shared SP, TP generation, turn order, weakness coverage, low-cost moves, and team action timing for cleaner boss fights.",
      keywords: "Lumentale SP combat, TP, team actions, 4v4 combat, shared SP",
    },
    addressBar: "lumentale-memories-of-trey-sp-combat-tp-guide",
    detailsHtml: `<p>By: Frontline Pathfinder | Lead Content Tester, GameguideHub
  </p>
  <p>Tested on Version: Current public build | Status: <strong>FIELD TESTED / PATCH SENSITIVE</strong>. SP costs, TP gain, move balance, and boss pressure can change after combat patches.
  </p>
  <p>Fast answer: Lumentale combat is not just type advantage. Your active team shares SP, turn order can drain that pool before slower Animon act, and TP only flows reliably when your team hits weaknesses.
  </p>
  <figure>
    <img src="/images/guides/sp-combat-stat-planning.webp" alt="Lumentale SP combat guide showing turn cycle and shared SP" title="Lumentale shared SP turn cycle and combat planning" loading="lazy">
    <figcaption>The turn cycle is the real budget screen. If fast units spend first, slow units inherit the SP leftovers.</figcaption>
  </figure>
  <h2>How shared SP changes every turn
  </h2>
  <p>Lumentale uses a shared SP economy across the active team. That means one greedy opener can break the whole turn. A fast attacker spending a high-cost move before tanks and supports act can leave the back half of the turn with weak actions, forced basic moves, or no meaningful pressure.
  </p>
  <table>
    <thead>
      <tr><th>Combat Problem</th><th>Cause</th><th>Fix</th></tr>
    </thead>
    <tbody>
      <tr><td>Slow tank does nothing</td><td>Fast units spent the shared SP pool.</td><td>Give the tank a 1-2 SP fallback.</td></tr>
      <tr><td>TP gain stalls</td><td>Team hits neutral damage too often.</td><td>Add weakness coverage before raw power.</td></tr>
      <tr><td>Boss phase snowballs</td><td>TP spent during safe turns.</td><td>Hold team actions for danger windows.</td></tr>
      <tr><td>All moves look strong but feel bad</td><td>Loadout has no cheap stabilizer.</td><td>Keep one efficient button on every active Animon.</td></tr>
    </tbody>
  </table>
  <h3>Why fast units can drain the pool
  </h3>
  <p>Fast attackers usually move before bulky or support Animon. If those fast units spend 3-4 SP every turn, the slower team members do not get to play their role. The fix is not always more leveling. Audit turn order and SP cost together.
  </p>
  <h3>Why slow tanks need low-cost moves
  </h3>
  <p>A bulky Animon with only expensive skills looks strong in the menu but becomes unreliable once faster teammates move first. Keep at least one cheap attack or utility move on every slow unit. Even chip damage matters if it hits a weakness and keeps TP generation alive.
  </p>
  <figure>
    <img src="/images/guides/sp-combat-team-status.webp" alt="Lumentale team action planning with active Animon wheel" title="Lumentale active Animon wheel for team planning" loading="lazy">
    <figcaption>Plan the active lineup before the fight. The wheel tells you who can carry cheap actions when the shared pool gets low.</figcaption>
  </figure>
  <h2>How TP generation works
  </h2>
  <h3>Weakness hits and TP gain
  </h3>
  <p>TP generation rewards coverage. Weakness hits do more than increase damage; they keep the tactical engine running so the team can access stronger action windows during long fights. A team with four strong neutral attackers can still feel weak if it cannot trigger weakness hits consistently.
  </p>
  <p>Use the <a href="/affinities">affinity chart</a> and <a href="/wiki/skills">skills data</a> before boss routes. Coverage is not a luxury stat; it is the resource engine behind TP.
  </p>
  <h3>When to spend TP on team actions
  </h3>
  <p>Spend TP when it changes the fight state: breaking a dangerous phase, stabilizing after a bad turn, or finishing a boss before it cycles back into pressure. Do not spend it just because the meter is available.
  </p>
  <table>
    <thead>
      <tr><th>TP Window</th><th>Spend or Hold?</th><th>Reason</th></tr>
    </thead>
    <tbody>
      <tr><td>Enemy is near phase change</td><td>Spend</td><td>Push through before the boss resets tempo.</td></tr>
      <tr><td>Team is healthy and SP is stable</td><td>Hold</td><td>Save TP for the next pressure spike.</td></tr>
      <tr><td>Two units are low and healer acts late</td><td>Spend</td><td>Team action may prevent a collapse.</td></tr>
      <tr><td>No weakness coverage available</td><td>Hold or rebuild</td><td>Neutral damage alone will not refill TP cleanly.</td></tr>
    </tbody>
  </table>
  <h2>Best combat setup rules
  </h2>
  <h3>Build around coverage, not raw power
  </h3>
  <p>Raw power is only reliable when the team can afford the SP cost and still trigger weaknesses. Before a boss route, check whether each active Animon contributes either a weakness hit, a low-cost stabilizer, or a defensive job. If a team member does none of those, it is probably dead weight for that fight.
  </p>
  <p>For broader roster setup, pair this page with the <a href="/guides/lumentale-memories-of-trey-team-building-optimization">Team Building and Stat Tuning Guide</a>. That page covers stat prep; this page covers the per-turn resource problem.
  </p>
  <h3>Avoid all-high-cost move sets
  </h3>
  <p>All-high-cost loadouts collapse because they assume every Animon acts with a full SP pool. In practice, fast units spend first, slow units inherit the leftovers, and the final actions of the turn become empty.
  </p>
  <figure>
    <img src="/images/guides/sp-combat-action-wheel.webp" alt="Lumentale SP combat team action route planning screen" title="Lumentale team action planning before boss fights" loading="lazy">
    <figcaption>Before a long fight, check whether every active slot has a cheap useful action. That is the difference between tempo and dead turns.</figcaption>
  </figure>
  <h2>FAQ
  </h2>
  <h3>How does SP work in Lumentale: Memories of Trey?
  </h3>
  <p>SP is a shared combat resource. Faster Animon can spend the pool before slower team members act, so every active unit needs at least one efficient low-cost option.
  </p>
  <h3>How do you gain TP in Lumentale: Memories of Trey?
  </h3>
  <p>TP is mainly generated by exploiting weaknesses and using team coverage to create tactical action windows. Better coverage usually means more reliable TP access.
  </p>
  <h2>Related Guides and Data Pages
  </h2>
  <ul>
    <li><a href="/guides/lumentale-memories-of-trey-team-building-optimization">Team Building and Stat Tuning Guide</a> - stat prep before the SP problem starts.</li>
    <li><a href="/guides/lumentale-memories-of-trey-hidden-mechanics">Hidden Mechanics Guide</a> - tested combat and overworld systems players miss.</li>
    <li><a href="/wiki/bosses">Bosses</a> - plan TP spending around dangerous phases.</li>
    <li><a href="/affinities">Affinities</a> and <a href="/wiki/skills">Skills</a> - build weakness coverage before raw power.</li>
  </ul>`,
  },

  {
    id: 9,
    title: "Lumentale: Memories of Trey Anivite EX Guide: Farming Spots and How to Get It",
    description: "A practical Anivite EX guide for Lumentale: Memories of Trey covering farming spots, shop checks, crafting uses, and typo variants.",
    tags: ["Anivite EX", "Farming", "Crafting", "Items"],
    publishDate: "2026-07-06",
    author: "LumenTale Fan Guide Team",
    imageUrl: "/images/guides/anivite-ex-resource-route.webp",
    imageAlt: "Lumentale Anivite EX farming route in a town resource area",
    seo: {
      title: "Lumentale Anivite EX Guide - Farming Spots",
      description: "Find Anivite EX in Lumentale with farming spots, shop checks, crafting uses, typo variants, and route mistakes to avoid.",
      keywords: "Lumentale Anivite EX, farming spot, how to get, crafting, spotspawn",
    },
    addressBar: "lumentale-memories-of-trey-anivite-ex-farming",
    detailsHtml: `<p>By: Frontline Pathfinder | Lead Content Tester, GameguideHub
  </p>
  <p>Tested on Version: Current public build | Status: <strong>DATA-CHECKED / PATCH SENSITIVE</strong>. Item prices, vendor stock, and spawn timing can move after economy patches.
  </p>
  <p><strong>Fast answer:</strong> Anivite EX is a late material, not a normal early crystal. The site data lists <a href="/wiki/items/anivite-ex">Anivite EX</a> at 1,200 Gold and multiple high-value recipes consume it, including <a href="/wiki/recipes/appendice-q">Appendice Q</a> and <a href="/wiki/recipes/prismatipo">Prismatipo</a>. Do not burn your first pieces until you know which build item you are crafting.
  </p>
  <figure>
    <img src="/images/guides/anivite-ex-resource-route.webp" alt="Lumentale Anivite EX farming spot route in Great Tree Town" title="Lumentale Anivite EX farming spot route" loading="lazy">
    <figcaption>Check town resource routes and vendors first. Anivite EX is too expensive to waste on a blind recipe chain.</figcaption>
  </figure>
  <h2>Where to farm Anivite EX
  </h2>
  <h3>Best farming spot
  </h3>
  <p>The safest route is to treat Anivite EX as a <strong>late-route vendor and resource-loop material</strong>. If your current save has reached larger town hubs, check specialized item vendors before grinding wild nodes. The item page confirms a 1,200 Gold value, which is consistent with a compressed high-tier material rather than a common field pickup.
  </p>
  <table>
    <thead>
      <tr><th>Check</th><th>Why It Matters</th><th>Stop Condition</th></tr>
    </thead>
    <tbody>
      <tr><td>Specialized town vendors</td><td>Fastest confirmation path for Anivite EX stock.</td><td>No Anivite EX or Anivite + tier items listed.</td></tr>
      <tr><td>Late resource routes</td><td>Compressed Anivite materials tend to appear after basic Anivite is no longer rare.</td><td>Only normal Anivite drops after repeated clears.</td></tr>
      <tr><td>Recipe bench checks</td><td>Shows whether the material is needed now or can wait.</td><td>No unlocked recipe consumes Anivite EX yet.</td></tr>
      <tr><td>Gold route before farming</td><td>Buying is cleaner than hoping for a low-probability node.</td><td>You cannot afford the 1,200 Gold material price.</td></tr>
    </tbody>
  </table>
  <p><strong>INFERRED:</strong> searches for "Sanivite EX spotspawn" appear to be malformed Anivite EX spawn intent, not a separate confirmed item. Use Anivite EX as the parent item unless your save shows a distinct Sanivite entry.
  </p>
  <h3>Spot spawn wording variants
  </h3>
  <p>Players search for "Ainvie EX," "Ainvir EX," and "Sanivite EX spotspawn" when they are usually looking for <strong>Anivite EX</strong>. If a route guide, menu, or recipe does not match the spelling exactly, search the item list for Anivite EX before assuming the material is missing.
  </p>
  <figure>
    <img src="/images/guides/anivite-ex-field-farming-check.webp" alt="Lumentale Anivite EX field farming check before leaving the area" title="Lumentale Anivite EX field farming check" loading="lazy">
    <figcaption>For repeated routes, confirm the item name and recipe demand before committing to a long field loop.</figcaption>
  </figure>
  <h2>How to get or make Anivite EX
  </h2>
  <h3>Get Anivite EX through gameplay
  </h3>
  <p>Use this order: vendor check, recipe check, then field loop. Vendor inventory is the fastest truth test. Recipe data is the second test because it shows whether the game expects you to spend Anivite EX at your current progression point. Field farming comes last because it is slower and easier to misread if you are in the wrong tier of area.
  </p>
  <ol>
    <li><strong>Open the item or vendor list.</strong> Look for Anivite EX, not Ainvie, Ainvir, or Sanivite.</li>
    <li><strong>Check your craft targets.</strong> Appendix Q and Prismatipo both need 2x Anivite EX.</li>
    <li><strong>Run the shortest resource loop.</strong> Leave if the route only returns normal Anivite after several checks.</li>
    <li><strong>Buy when the price is manageable.</strong> A 1,200 Gold purchase is usually cleaner than wasting a full route on the wrong node.</li>
  </ol>
  <h3>Crafting or making intent
  </h3>
  <p>The German search term "herstellen" means make or craft. Current site data does not show a direct recipe that creates Anivite EX from smaller Anivite pieces. Instead, it shows Anivite EX as an <strong>ingredient</strong> consumed by important recipes.
  </p>
  <table>
    <thead>
      <tr><th>Recipe</th><th>Anivite EX Cost</th><th>Why You Care</th></tr>
    </thead>
    <tbody>
      <tr><td><a href="/wiki/recipes/appendice-q">Appendice Q</a></td><td>2x Anivite EX</td><td>Lets you correct Quirk/ability planning instead of re-catching forever.</td></tr>
      <tr><td><a href="/wiki/recipes/prismatipo">Prismatipo</a></td><td>2x Anivite EX</td><td>Used for hidden type planning and stronger team coverage.</td></tr>
      <tr><td>Bilia Lost / Bilia Scan</td><td>10x Anivite EX</td><td>High-cost Bilia routes; do not craft these before your core team is stable.</td></tr>
      <tr><td>Elemental craft items</td><td>1x Anivite EX each</td><td>Useful later, but not always worth your first EX material.</td></tr>
    </tbody>
  </table>
  <h2>Farming mistakes
  </h2>
  <h3>Searching the wrong item name
  </h3>
  <p>The fastest mistake is typing the wrong name into the item list, a wiki search, or a vendor menu. Use the exact spelling: <strong>Anivite EX</strong>. If you landed here from Ainvie EX or Ainvir EX, you probably want the same material.
  </p>
  <h3>Leaving before the spawn condition
  </h3>
  <p>Do not judge a route from one pass. If you are checking a suspected spotspawn route, clear it several times, then compare the yield against the cost of simply buying the material. If the route gives only normal Anivite, stop and move to the next progression hub.
  </p>
  <figure>
    <img src="/images/guides/anivite-ex-battle-farming-route.webp" alt="Lumentale Anivite EX farming route with battle and resource pressure" title="Lumentale Anivite EX farming route battle check" loading="lazy">
    <figcaption>Combat routes are only worth repeating when the material yield beats a direct vendor check.</figcaption>
  </figure>
  <h2>FAQ
  </h2>
  <h3>Where is the Anivite EX farming spot in Lumentale: Memories of Trey?
  </h3>
  <p>Start with late town vendors and high-tier resource routes. If your save has not reached those hubs, treat Anivite EX as a later material and do not expect it from early Anivite nodes.
  </p>
  <h3>Is Ainvie EX the same as Anivite EX?
  </h3>
  <p>Most likely, yes. Ainvie EX and Ainvir EX look like typo variants of Anivite EX unless your game build shows them as separate entries.
  </p>
  <h3>Can you craft Anivite EX?
  </h3>
  <p>Current site data shows Anivite EX mainly as an ingredient, not a crafted output. It is consumed by recipes like Appendice Q and Prismatipo.
  </p>
  <h2>Related Guides and Data Pages
  </h2>
  <ul>
    <li><a href="/wiki/items/anivite-ex">Anivite EX item page</a> - price, item class, and current item description.</li>
    <li><a href="/wiki/crafting">Crafting index</a> - check recipes before spending rare materials.</li>
    <li><a href="/guides/lumentale-memories-of-trey-team-building-optimization">Team Building and Stat Tuning Guide</a> - explains why Appendix Q matters.</li>
    <li><a href="/guides/lumentale-memories-of-trey-sp-combat-tp-guide">SP Combat Guide</a> - use Prismatipo and coverage planning around TP generation.</li>
  </ul>`,
  },

  {
    id: 10,
    title: "Lumentale: Memories of Trey Walkthrough: Quests, Cells, and Key Choices",
    description: "A route-first Lumentale walkthrough hub for main progression, cell sections, quest blockers, relic checks, and Pitan choice planning.",
    tags: ["Walkthrough", "Quests", "Cells", "Choices"],
    publishDate: "2026-07-06",
    author: "LumenTale Fan Guide Team",
    imageUrl: "/images/guides/walkthrough-town-route.webp",
    imageAlt: "Lumentale Memories of Trey walkthrough town route and quest hub",
    seo: {
      title: "Lumentale Walkthrough - Quests and Choices",
      description: "Lumentale walkthrough hub for main routes, cell sections, Police Academy, Custom Furniture, Mystical Relic, and Pitan choices.",
      keywords: "Lumentale walkthrough, Police Academy quest, cell walkthrough, Pitan choice",
    },
    addressBar: "lumentale-memories-of-trey-walkthrough",
    detailsHtml: `<p>By: Frontline Pathfinder | Lead Content Tester, GameguideHub
  </p>
  <p>Tested on Version: Current public build | Status: <strong>ROUTE-CHECKED / PATCH SENSITIVE</strong>. Quest flags, NPC positions, and optional-choice rewards can change after story patches.
  </p>
  <p><strong>Fast answer:</strong> use this walkthrough as a blocker map, not a novel. Clear the main route until a quest, cell, relic, or choice blocks you, then jump to that section. If a path is physically blocked, check your <a href="/guides/lumentale-memories-of-trey-holoken-powers-guide">Holoken powers</a> before grinding levels.
  </p>
  <figure>
    <img src="/images/guides/walkthrough-town-route.webp" alt="Lumentale Memories of Trey walkthrough route through the town hub" title="Lumentale Memories of Trey walkthrough town route" loading="lazy">
    <figcaption>Walkthrough routing starts in hubs: talk, check the objective, then leave with the right field tool.</figcaption>
  </figure>
  <h2>Main walkthrough path
  </h2>
  <h3>Walkthrough structure
  </h3>
  <p>For a clean first run, route Lumentale in three layers: story objective, field gate, then optional collection. Do not reverse that order. Optional material farming before a field-gate check is how players lose an hour in the wrong area.
  </p>
  <table>
    <thead>
      <tr><th>Route Layer</th><th>What To Check</th><th>Use This Page When</th></tr>
    </thead>
    <tbody>
      <tr><td>Main story</td><td>Current objective, next town, required NPC.</td><td>You are unsure where to go next.</td></tr>
      <tr><td>Field gate</td><td>Holoken interaction, movement unlock, terrain feedback.</td><td>The map blocks movement even after enemy clears.</td></tr>
      <tr><td>Quest item</td><td>Furniture, relic, recipe, or dialogue trigger.</td><td>A named quest has no obvious marker.</td></tr>
      <tr><td>Choice flag</td><td>NPC outcome, reward, or later dialogue.</td><td>The game asks you to help someone or walk away.</td></tr>
    </tbody>
  </table>
  <p>Keep the <a href="/map">Talea map</a>, <a href="/animon">AniDex</a>, and <a href="/wiki/items">item index</a> open while routing. The game often blocks progress through a missing field interaction or item, not a hidden level requirement.
  </p>
  <h3>Cell walkthrough sections
  </h3>
  <p>Cell walkthrough searches usually mean the player is trapped in a small route puzzle or cannot identify the next interaction. Handle cells like a checklist: scan exits, test visible interactables, then change tool type. If nothing responds, mark the cell as locked behind a later story or Holoken condition.
  </p>
  <figure>
    <img src="/images/guides/walkthrough-cell-route-map.webp" alt="Lumentale cell walkthrough route map for puzzle sections" title="Lumentale cell walkthrough route map" loading="lazy">
    <figcaption>Small route rooms are solved by interaction order, not by over-leveling your team.</figcaption>
  </figure>
  <h2>Quest-specific guides
  </h2>
  <h3>Police Academy quest
  </h3>
  <p>For the Police Academy quest, prioritize objective confirmation over wandering. Talk to every marked NPC in the academy route, re-check the room after dialogue, then look for a new interaction prompt. If the quest does not advance, leave the room and re-enter after the latest dialogue flag.
  </p>
  <ol>
    <li><strong>Read the quest text first.</strong> It usually names the needed person, room, or item class.</li>
    <li><strong>Clear all dialogue in the academy route.</strong> NPC flags often advance after the second interaction.</li>
    <li><strong>Inspect desks, lockers, and side rooms.</strong> Quest objects are easy to miss when they share the environment color.</li>
    <li><strong>Re-enter if the flag stalls.</strong> Some objective checks refresh after changing rooms.</li>
  </ol>
  <h3>Custom Furniture quest
  </h3>
  <p>Custom Furniture is a collection/crafting-style blocker. Treat it like a material quest: identify the requested furniture, check whether it is crafted or picked up, then verify the turn-in NPC before spending extra materials.
  </p>
  <table>
    <thead>
      <tr><th>Furniture Problem</th><th>Likely Cause</th><th>Fix</th></tr>
    </thead>
    <tbody>
      <tr><td>Quest asks for a specific piece</td><td>You have the wrong variant.</td><td>Match the exact name, not the object type.</td></tr>
      <tr><td>Turn-in fails</td><td>Item is in storage or wrong inventory state.</td><td>Carry it directly, then talk to the quest NPC again.</td></tr>
      <tr><td>Recipe is missing</td><td>Blueprint or progression flag not unlocked.</td><td>Check <a href="/wiki/crafting">crafting</a> and recent NPC dialogue.</td></tr>
    </tbody>
  </table>
  <h3>Mystical relic guide
  </h3>
  <p>Mystical relic routing is usually an observation check. If the relic is not responding, stop pressing the same input and inspect the surrounding pattern: nearby symbols, colored markers, terrain shape, or a required Holoken interaction.
  </p>
  <figure>
    <img src="/images/guides/walkthrough-quest-dialogue.webp" alt="Lumentale walkthrough quest dialogue before a key route choice" title="Lumentale walkthrough quest dialogue route choice" loading="lazy">
    <figcaption>Quest blockers often start as dialogue flags. Exhaust the NPC chain before blaming the map.</figcaption>
  </figure>
  <h2>Choice consequences
  </h2>
  <h3>Helping Pitan or not
  </h3>
  <p><strong>INFERRED:</strong> the safe route is to treat the Pitan decision as a story flag until your save confirms the reward. If you care about completion, make a manual save before the choice. Help Pitan if you want the cleaner NPC-help route; decline only if you are testing alternate dialogue or speed routing.
  </p>
  <table>
    <thead>
      <tr><th>Choice</th><th>Use When</th><th>Risk</th></tr>
    </thead>
    <tbody>
      <tr><td>Help Pitan</td><td>First playthrough, completion route, NPC-friendly path.</td><td>May lock out alternate dialogue.</td></tr>
      <tr><td>Do not help</td><td>Testing, replay, or alternate outcome route.</td><td>Possible missed reward or delayed quest flag.</td></tr>
      <tr><td>Save before choosing</td><td>Any run where completion matters.</td><td>None, unless the game autosaves after the prompt.</td></tr>
    </tbody>
  </table>
  <h2>FAQ
  </h2>
  <h3>Where should I start the Lumentale: Memories of Trey walkthrough?
  </h3>
  <p>Start with the current story objective, then check field gates and quest items only when the route blocks you. Do not farm before confirming the next unlock.
  </p>
  <h3>How do you finish the Police Academy quest?
  </h3>
  <p>Clear the academy dialogue chain, inspect side rooms and desks, then re-enter if the objective does not refresh. Treat it as a flag-based quest, not a combat check.
  </p>
  <h3>What changes if you help Pitan?
  </h3>
  <p>The exact reward path is patch-sensitive. For a first run, help Pitan or save before choosing. Declining is better left for replay or alternate-dialogue testing.
  </p>
  <h2>Related Guides and Data Pages
  </h2>
  <ul>
    <li><a href="/map">Talea Map</a> - use it when a cell or quest route stops making sense.</li>
    <li><a href="/guides/lumentale-memories-of-trey-holoken-powers-guide">Holoken Powers Guide</a> - route gates and field interactions.</li>
    <li><a href="/guides/lumentale-memories-of-trey-sp-combat-tp-guide">SP Combat Guide</a> - prep before boss or academy fights.</li>
    <li><a href="/guides/lumentale-memories-of-trey-hidden-mechanics">Hidden Mechanics Guide</a> - dialogue cues, recycle XP, and route tricks.</li>
    <li><a href="/wiki/bosses">Boss Data</a> - check boss pressure before committing to a long quest chain.</li>
  </ul>`,
  },
]




