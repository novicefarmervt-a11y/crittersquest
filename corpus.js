/* ------------------------------------------------------------------
   Critters Quest knowledge base — demo corpus
   Built from https://critters-quest-1.gitbook.io/critters-quest-docs/
   Snapshot taken 2026-08-09. Regenerate with ingest.mjs.
   ------------------------------------------------------------------ */

const B = "https://critters-quest-1.gitbook.io/critters-quest-docs/";

const DOCS = [

/* ============================ GETTING STARTED ============================ */
{
  page: "Quick Start", url: B + "how-to-play/quick-start",
  title: "The first eight steps in Valdara",
  tags: ["quick start", "new player", "beginner", "how do i start", "first steps", "tutorial"],
  body: `1. Place your town, then you enter the game on the **World Map**.
2. Find mineable items and click the Shovel, Pickaxe or Axe to gather from them.
3. Select a Critter to walk to that spot and start gathering.
4. While Critters gather, explore the **Town Map** (Town icon, bottom right).
5. Walk to the **Mystic Mirror** and build it to identify recipes — the first upgrade is free.
6. Build the other workshops, like the Muddy Anvil, to create tools that gather faster.
7. Upgrade your Town to unlock new resources on the world map and higher-level workshops.
8. Progress by gathering resources fastest.`
},
{
  page: "TLDR", url: B + "how-to-play/tldr",
  title: "The core loop in one line",
  tags: ["tldr", "core loop", "summary", "what is the game", "gameplay loop", "overview"],
  body: `Gather resources on the World Map → swap them in your Town Bank → upgrade to progress. Medieval critters race to gather, grow and swap resources for $QUEST.`
},
{
  page: "About", url: B + "about",
  title: "What Critters Quest is",
  tags: ["about", "what is critters quest", "4x", "defi", "genre", "premise"],
  body: `Critters Quest is a DeFi-infused 4X experience (explore, expand, exploit, exterminate). Medieval critters compete to gather resources, grow towns, and claim control of a World Bank. Master collectibles double as engines of value: token-bound assets anchor the system, cloned editions scale it, and $QUEST powers it all.`
},

/* ============================ TOWN PLACEMENT ============================ */
{
  page: "Town Placement & Relocation", url: B + "critter-quest-guides/town-placement-and-relocation",
  title: "First town placement — who pays and how much",
  tags: ["place town", "first placement", "initial placement", "locked quest", "500", "cost to place"],
  body: `Your **first** town placement is paid by the critter you choose to populate the town, out of that critter's **Locked $QUEST** — minimum **500**. This special payment method applies only to the very first placement; every later move is paid from the Town Bank instead. Choose the critter carefully, because it loses that $QUEST.`
},
{
  page: "Town Placement & Relocation", url: B + "critter-quest-guides/town-placement-and-relocation",
  title: "Where to place your first town",
  tags: ["where to place town", "placement strategy", "best location", "faction bonus", "tier 1 resources"],
  body: `Four things to weigh:
- **Resource accessibility** — look for several Tier 1 resources nearby.
- **Faction bonuses** — placing on land matching your critter's faction gives **+15% movement speed**.
- **Future growth** — consider proximity to higher-tier resources you unlock later.
- **Expansion room** — leave space for future buildings.`
},
{
  page: "Town Placement & Relocation", url: B + "critter-quest-guides/town-placement-and-relocation",
  title: "Relocating your town — requirements and cost",
  tags: ["move town", "relocate", "relocation", "town bank quest", "500 quest", "how to move"],
  body: `After the first placement, all relocations are paid from **Town Bank $QUEST** (not critter Locked $QUEST), and you need **500+ $QUEST** to execute a move.

Before you can move:
- **Every critter must be home** — none gathering, travelling, or on a mission.
- No crafting or building operations pending critter involvement.
- All critters showing "idle" or "at home".
- Enough $QUEST in the Town Bank to cover the destination's cost.`
},
{
  page: "Town Placement & Relocation", url: B + "critter-quest-guides/town-placement-and-relocation",
  title: "Relocation pricing by distance from the World Bank",
  tags: ["relocation cost", "world bank distance", "outer rim", "central zone", "price scaling"],
  body: `Cost scales sharply with how close you move to the central World Bank:

| Zone | Distance from World Bank | Relative cost |
|---|---|---|
| Outer Rim | Furthest | Lowest |
| Mid Zone | Moderate | Medium |
| Inner Zone | Close | High |
| Central Zone | Adjacent | Highest |

The increase is **exponential** — central plots can cost **10x+** more than outer rim locations.`
},
{
  page: "Tiles & Land", url: B + "critter-quest-guides/tiles-and-land",
  title: "Tile prices across the map",
  tags: ["tiles", "land", "buy land", "tile price", "40000 tiles", "how much is land"],
  body: `The world map is divided into **40,000 tiles**. You can buy tiles to secure land; price depends on how central and contested the zone is.

| Zone band | Price per tile ($QUEST) |
|---|---|
| Outer / frontier | 250 |
| | 350 |
| | 450 |
| | 550 |
| | 650 |
| | 800 |
| | 1,000 |
| | 1,150 |
| | 1,300 |
| Center / prime | 1,500 |

The default price for unlisted tiles is **250 $QUEST**. Most of the map sits in the cheaper bands.`
},

/* ============================ POPULATION ============================ */
{
  page: "Town Population Management", url: B + "critter-quest-guides/town-population-management",
  title: "Adding critters to your town population",
  tags: ["population", "add critter", "populate town", "activate critter", "town icon"],
  body: `Only critters added to your town population can gather or perform actions — critters outside the population are inactive.

Eligible: **Master Edition Critters** and **Clone Critters** you own as NFTs in your connected wallet. There is no town-level restriction on adding them.

To add: click the **Town Icon** at the top of the HUD → Population tab → select critters → confirm. Added critters can be deployed immediately, can equip tools, and can use their Locked $QUEST.`
},
{
  page: "Town Population Management", url: B + "critter-quest-guides/town-population-management",
  title: "Removing critters — and why the option is greyed out",
  tags: ["remove critter", "cannot remove", "greyed out", "idle status", "troubleshooting population"],
  body: `A critter can only be removed while it is **physically in your town and idle**. You cannot remove one that is gathering, travelling, or crafting.

If removal is greyed out: wait for the critter to finish and walk home, then check it shows "idle". Removed critters keep all equipped items and stats, keep their NFT status, and can be re-added at any time.

If a critter won't appear in the *add* list: verify you own the NFT in the connected wallet, check it isn't already in another town, and refresh or reconnect the wallet.`
},

/* ============================ GATHERING ============================ */
{
  page: "Resource Gathering", url: B + "critter-quest-guides/resource-gathering",
  title: "What determines gathering power",
  tags: ["gathering power", "gather faster", "atk", "gathering speed", "how to gather faster", "gp"],
  body: `Gathering effectiveness comes from three sources:
- **Base ATK** — every critter's attack stat is the foundation of gathering power.
- **Equipment bonuses** — amulets and boots with ATK add to total gathering power.
- **Tool bonuses** — tools add power, but only for their own resource type. Pickaxes boost mining (stone/rock), Axes boost chopping (wood/tree), Shovels boost digging (soil).

Gathering time is **inversely** related to power: doubling your gathering power roughly halves gathering time.`
},
{
  page: "Resource Gathering", url: B + "critter-quest-guides/resource-gathering",
  title: "Travel time, march speed and faction lands",
  tags: ["travel time", "march speed", "faction", "15%", "movement bonus", "distance"],
  body: `Before gathering, a critter must travel to the node. Travel time depends on **distance** and **march speed**.

- Critters move **15% faster** on lands matching their own faction (e.g. Verdant critters on Verdant land). Other factions move at normal speed there.
- Upgrading your **town level** gives a march speed bonus to all your critters regardless of faction or destination.`
},
{
  page: "Resource Gathering", url: B + "critter-quest-guides/resource-gathering",
  title: "Node access, spawning and depletion",
  tags: ["resource nodes", "node tier", "town level resources", "daily rotation", "node depletion"],
  body: `Node access is gated by town level: a Level 1 town sees Tier 1 resources only, Level 2 sees Tier 1–2, Level 3 sees Tier 1–3, and so on.

Node behaviour:
- **Daily rotation** — nodes move to new locations every day.
- **Limited uses** — each node has finite gathering attempts before it depletes.
- **Shared** — multiple players can gather from the same node simultaneously.

With Tier 3+ tools you unlock **Resource Level Control**: set the difficulty on any node you can access. Higher levels yield more but take longer.`
},

/* ============================ TOOLS ============================ */
{
  page: "Tools & Equipping", url: B + "critter-quest-guides/tools-and-equipping",
  title: "Tool tiers — damage, luck, durability and sockets",
  tags: ["tool tiers", "wood stone steel diamond emerald", "tool stats", "tool durability", "tool table"],
  body: `| Tier | Tool | Damage | Luck | Durability | Sockets | Notes |
|---|---|---|---|---|---|---|
| 1 | Wood | 20–40 | 0% | 172,800–259,200 | 0 | Basic gathering only |
| 3 | Stone | 60–100 | 2.5–5% | 345,600–518,400 | 0–1 | **Resource Level Control unlocked** |
| 5 | Steel | 120–180 | 5–10% | 604,800–777,600 | 0–1 | Enhanced level control and yields |
| 7 | Diamond | 200–300 | 7.5–15% | 2,592,000–3,456,000 | 0–2 | Superior gathering power |
| 9 | Emerald | 325–475 | 10–20% | 5,184,000–6,912,000 | 1–2 | Elite-tier efficiency |
| 11 | Advanced | 500–700 | 12.5–25% | 1,173,690–1,509,030 | 1–3 | **Level 11+ resource access** |

Tier 11 Advanced Tools can only be crafted at **The Glowing COG** (Ancient Tech Lab).`
},
{
  page: "Tools & Equipping", url: B + "critter-quest-guides/tools-and-equipping",
  title: "Tool crafting cost and time by tier",
  tags: ["tool cost", "craft tool", "muddy anvil cost", "pickaxe cost", "crafting time"],
  body: `| Tier | Location | Cost ($QUEST) | Craft time |
|---|---|---|---|
| 1 (Wood) | The Muddy Anvil | 10 | 1 hour |
| 3 (Stone) | The Muddy Anvil | 110 | 3 hours |
| 5 (Steel) | The Muddy Anvil | 375 | 8 hours |
| 7 (Diamond) | The Muddy Anvil | 1,350 | 24 hours |
| 9 (Emerald) | The Muddy Anvil | 2,400 | 48 hours |
| 11 (Advanced) | The Glowing COG | 8,000–12,000 | 69 hours |

Costs shown are for pickaxes; axes and shovels cost slightly more at each tier. Recipes use a small number of materials (mostly 1 of each), not large stacks.`
},
{
  page: "Tools & Equipping", url: B + "critter-quest-guides/tools-and-equipping",
  title: "Resource Level Control by tool tier",
  tags: ["resource level control", "yield multiplier", "difficulty", "tier 3 tools", "yields"],
  body: `| Tool tier | Level control | Yield multiplier |
|---|---|---|
| 1 (Basic) | None | 1x (base yield) |
| 3–5 (Intermediate) | Levels 1–5 | 1x – 5x |
| 7–9 (Advanced) | Levels 1–10 | 1x – 9x |
| 11 (Elite) | Levels 1–11+ | 1x – 11x |

Tier 1–2 tools gather only at a node's default level with standard yields. Tier 3+ lets you set custom difficulty: higher levels give significantly more resources but take proportionally longer.`
},
{
  page: "Tools & Equipping", url: B + "critter-quest-guides/tools-and-equipping",
  title: "Equipping tools — slots and rules",
  tags: ["equip tools", "3 tools", "tool slots", "unequip", "in town only"],
  body: `Each critter can equip up to **3 tools at once**: 1 Pickaxe, 1 Axe, 1 Shovel.

Rules:
- Tools can only be equipped or unequipped while the critter is **in your town**.
- You cannot modify equipment on a critter that is gathering or travelling.
- **No stacking** — tools don't combine power. Each only helps its own resource type.
- Moving tools between critters in town is free, with no cooldown.`
},
{
  page: "Tools & Equipping", url: B + "critter-quest-guides/tools-and-equipping",
  title: "WARNING: selling a critter sells its equipped tools",
  tags: ["sell critter", "marketplace warning", "lose tools", "unequip before selling", "risk"],
  body: `**Critical warning.** If you sell a critter while it has tools equipped, all equipped items are sold with it. You cannot separate them once listed, the loss is permanent, and there are no refunds.

Always unequip everything before listing a critter for sale, and verify the critter's inventory is empty first. Keep valuable tools in general inventory rather than equipped.`
},

/* ============================ BUILDINGS: SUMMARY ============================ */
{
  page: "Building Upgrade Costs", url: B + "critter-quest-guides/building-upgrade-costs",
  title: "Every building at a glance — levels and total cost to max",
  tags: ["building summary", "total cost", "max everything", "1836625", "building levels", "how much to max"],
  body: `| Building | Levels | Total $QUEST to max | First level | Top level | Requires to start |
|---|---|---|---|---|---|
| Town Hall | 20 | 512,275 | 0 | 42,000 | — |
| Walls | 19 | 482,750 | 150 | 40,000 | Town L1 |
| Bank | 10 | 72,550 | 200 | 30,000 | Town L1 |
| Muddy Anvil (Blacksmith) | 10 | 119,350 | 175 | 37,500 | Town L1 |
| Mystic Mirror (Oracle) | 10 | 103,200 | 100 | 42,000 | Town L1 |
| Bubbling Barrel (Alchemist) | 10 | 138,500 | 1,000 | 36,000 | Town L3 |
| Gleaming Nest (Jeweler) | 10 | 194,000 | 2,500 | 41,000 | Town L5 |
| Glowing COG (Ancient Tech Lab) | 6 | 214,000 | 25,000 | 42,000 | Town L9 |
| **Everything maxed** | | **1,836,625** | | | |

Maxing every building costs **1,836,625 $QUEST** in upgrade fees alone, before materials. All figures come from live on-chain program data.`
},
{
  page: "Building Upgrade Costs", url: B + "critter-quest-guides/building-upgrade-costs",
  title: "Town Hall levels 1–10 — cost, time, materials",
  tags: ["town hall", "town level", "upgrade town", "town hall cost", "squads", "early town"],
  body: `The Town Hall sets your overall town level (1–20) and unlocks resource tiers, squad slots and buildings.

| Lvl | Name | $QUEST | Time | Squads | Map | Dur. | Materials | Requires |
|---|---|---|---|---|---|---|---|---|
| 1 | Frontier Settlement | — | — | 1 | 1 | 100 | — | — |
| 2 | Small Hamlet | 150 | 6h | 1 | 1 | 50 | Wood ×20, Stone ×10, Clay ×5 | Blacksmith L1, Walls L1, Oracle L1 |
| 3 | Growing Village | 325 | 12h | 2 | 2 | 50 | Wood ×50, Stone ×30, Clay ×15, Tree Sap ×10 | Blacksmith L2, Walls L2, Bank L2 |
| 4 | Established Village | 1,200 | 18h | 2 | 2 | 100 | Wood ×100, Stone ×75, Clay ×25, Iron Ore ×5, Coal ×20 | Blacksmith L3, Alchemist L2, Walls L2 |
| 5 | Market Town | 5,400 | 24h | 3 | 3 | 100 | Wood ×150, Stone ×100, Iron Ingot ×10, Copper Ore ×5, Gold Dust ×1 | Blacksmith L4, Alchemist L3, Walls L3 |
| 6 | Trading Hub | 8,200 | 36h | 3 | 3 | 150 | Wood ×200, Stone ×150, Iron Ingot ×20, Copper Ingot ×10, Gold Dust ×3, Refined Sap ×5 | Blacksmith L5, Alchemist L4, Jeweler L3, Walls L4, Bank L5 |
| 7 | Small City | 15,000 | 2d | 3 | 3 | 150 | Wood ×300, Stone ×200, Iron Ingot ×30, Steel Ingot ×5, Gold Ore ×2, Diamond Fragment ×10 | Blacksmith L6, Walls L5, Jeweler L4, Oracle L4 |
| 8 | Prosperous City | 28,000 | 2.5d | 4 | 4 | 250 | Wood ×400, Stone ×300, Iron Ingot ×50, Steel Ingot ×10, Gold Ingot ×5, Diamond Fragment ×20, Ruby Fragment ×10 | Blacksmith L7, Jeweler L5, Walls L6 |
| 9 | Grand City | 32,000 | 3d | 4 | 5 | 250 | Wood ×500, Stone ×400, Iron Ingot ×75, Steel Ingot ×20, Gold Ingot ×10, Cut Diamond ×1, Light Essence ×5 | Blacksmith L6, Alchemist L6, Jeweler L6, Oracle L6, Bank L6, Walls L7 |
| 10 | Capital City | 38,000 | 3.5d | 4 | 5 | 300 | Wood ×600, Stone ×500, Iron Ingot ×100, Steel Ingot ×30, Gold Ingot ×15, Cut Diamond ×3, Cut Ruby ×3, Light Essence ×10 | Blacksmith L7, Alchemist L7, Jeweler L7, Oracle L7, Ancient Tech Lab L1, Walls L9, Bank L7 |

**Unlocks:** L1 Blacksmith, Walls, Oracle · L3 Alchemist · L5 Jeweler · L9 Ancient Tech Lab`
},
{
  page: "Building Upgrade Costs", url: B + "critter-quest-guides/building-upgrade-costs",
  title: "Town Hall levels 11–20 — cost, time, materials",
  tags: ["town hall late game", "level 20", "eternal citadel", "metropolis", "endgame town"],
  body: `| Lvl | Name | $QUEST | Time | Squads | Map | Dur. | Materials | Requires |
|---|---|---|---|---|---|---|---|---|
| 11 | Metropolis | 38,000 | 4d | 5 | 6 | 300 | Wood ×700, Stone ×600, Iron Ingot ×150, Steel Ingot ×50, Gold Ingot ×20, Cut Diamond ×5, Cut Emerald ×5, Crystal Core ×2 | Blacksmith L8, Alchemist L8, Jeweler L8, Oracle L8, Tech Lab L2, Walls L10, Bank L8 |
| 12 | Advanced Metropolis | 38,000 | 5d | 5 | 6 | 350 | Wood ×800, Stone ×700, Iron Ingot ×200, Steel Ingot ×75, Gold Ingot ×30, Polished Diamond ×1, Polished Ruby ×1, Crystal Core ×3 | Blacksmith L9, Alchemist L9, Jeweler L9, Oracle L9, Tech Lab L3, Bank L9 |
| 13 | Tech City | 38,000 | 6d | 5 | 7 | 350 | Wood ×900, Stone ×800, Iron Ingot ×250, Steel Ingot ×100, Gold Ingot ×40, Polished Emerald ×1, Power Core ×1, Tech Fragment ×5 | All workshops L10, Tech Lab L4, Walls L12, Bank L10 |
| 14 | Magical Metropolis | 38,000 | 7d | 5 | 7 | 400 | Wood ×1000, Stone ×900, Iron Ingot ×300, Steel Ingot ×125, Gold Ingot ×50, Polished Diamond ×1, Polished Sapphire ×1, Ethereal Essence ×1 | Tech Lab L5 |
| 15 | Crystal Citadel | 38,000 | 8d | 5 | 8 | 400 | Wood ×1100, Stone ×1000, Iron Ingot ×350, Steel Ingot ×150, Gold Ingot ×60, Polished Diamond ×5, Crystal Core ×5, Power Unit ×2 | Tech Lab L6, Walls L14 |
| 16 | Legendary Fortress | 38,000 | 9d | 5 | 8 | 450 | Wood ×1200, Stone ×1100, Iron Ingot ×400, Steel Ingot ×175, Gold Ingot ×70, Perfect Diamond ×1, Perfect Ruby ×1, Power Unit ×3 | All workshops max, Walls L15 |
| 17 | Ancient Stronghold | 38,000 | 10d | 5 | 9 | 500 | Wood ×1300, Stone ×1200, Iron Ingot ×450, Steel Ingot ×200, Gold Ingot ×80, Perfect Emerald ×1, Perfect Sapphire ×1, Ancient Relic ×5 | Walls L16 |
| 18 | Ethereal Empire | 38,000 | 11d | 5 | 9 | 550 | Wood ×1400, Stone ×1300, Iron Ingot ×500, Steel Ingot ×225, Gold Ingot ×90, Perfect Amethyst ×1, Ultimate Essence ×1, Ethereal Essence ×5 | Walls L17 |
| 19 | Dimensional Nexus | 38,000 | 12d | 5 | 10 | 650 | Wood ×1500, Stone ×1400, Iron Ingot ×550, Steel Ingot ×250, Gold Ingot ×100, Ultimate Essence ×5, Crystal Core ×10, Power Unit ×5 | Walls L18 |
| 20 | Eternal Citadel | 42,000 | 14d | 6 | 10 | 750 | Wood ×2000, Stone ×1500, Iron Ingot ×600, Steel Ingot ×300, Gold Ingot ×150, Ultimate Essence ×10, Power Unit ×10 | Walls L19 |`
},
{
  page: "Building Upgrade Costs", url: B + "critter-quest-guides/building-upgrade-costs",
  title: "Walls — cost, durability and materials (levels 1–19)",
  tags: ["walls", "wall upgrade", "durability", "defense", "wall cost", "level 19"],
  body: `Walls add durability and defensive strength. Walls top out at **level 19**, not 20.

| Lvl | $QUEST | Time | Durability | Materials | Requires |
|---|---|---|---|---|---|
| 1 | 150 | 2h | 100 | Wood ×25, Stone ×15, Clay ×8 | Town L1 |
| 2 | 400 | 4h | 200 | Wood ×40, Stone ×25, Clay ×15, Coal ×3 | Town L2 |
| 3 | 700 | 8h | 250 | Wood ×60, Stone ×40, Clay ×25, Coal ×8, Tree Sap ×3 | Town L3 |
| 4 | 1,500 | 12h | 300 | Wood ×85, Stone ×60, Clay ×35, Coal ×12, Tree Sap ×8, Iron Ore ×5 | Town L4 |
| 5 | 3,000 | 16h | 350 | Wood ×115, Stone ×80, Clay ×50, Coal ×18, Tree Sap ×12, Iron Ingot ×12 | Town L5 |
| 6 | 6,000 | 20h | 400 | Wood ×150, Stone ×105, Clay ×70, Coal ×25, Tree Sap ×18, Iron Ingot ×20, Gold Dust ×5 | Town L6 |
| 7 | 12,000 | 24h | 500 | + Steel Ingot ×8, Gold Dust ×12 | Town L7 |
| 8 | 24,000 | 28h | 600 | + Steel Ingot ×18, Gold Dust ×20 | Town L8 |
| 9 | 35,000 | 32h | 700 | + Gold Ingot ×30, Steel Ingot ×28 | Town L9 |
| 10 | 40,000 | 36h | 800 | + Cut Diamond ×8 | Town L10 |
| 11 | 40,000 | 40h | 900 | + Cut Diamond ×15 | Town L11 |
| 12 | 40,000 | 44h | 1,000 | + Polished Diamond ×6, Crystal Fragment ×8 | Town L12 |
| 13 | 40,000 | 2d | 1,100 | + Polished Diamond ×10, Crystal Fragment ×18 | Town L13 |
| 14 | 40,000 | ~2.17d | 1,200 | + Polished Diamond ×15, Crystal Fragment ×28 | Town L14 |
| 15 | 40,000 | ~2.33d | 1,300 | + Crystal Core ×8, Light Essence ×40 | Town L15 |
| 16 | 40,000 | 2.5d | 1,400 | + Crystal Core ×12, Light Essence ×50 | Town L16 |
| 17 | 40,000 | ~2.67d | 1,500 | + Crystal Core ×17, Light Essence ×62 | Town L17 |
| 18 | 40,000 | ~2.83d | 1,600 | + Crystal Core ×23, Light Essence ×77 | Town L18 |
| 19 | 40,000 | 3d | 1,700 | + Crystal Core ×30, Light Essence ×95 | Town L19 |`
},
{
  page: "Building Upgrade Costs", url: B + "critter-quest-guides/building-upgrade-costs",
  title: "Bank — daily withdrawal limits and raid protection",
  tags: ["bank", "withdrawal limit", "daily limit", "protection", "bank upgrade", "12:00 utc"],
  body: `The Bank sets your **daily withdrawal limit** and how much of your resources are protected in a raid. There is no separate withdrawal fee and no lifetime cap — the daily limit is a cap that **resets at 12:00 UTC**.

| Lvl | $QUEST | Time | Daily withdrawal | Protection | Materials | Requires |
|---|---|---|---|---|---|---|
| 1 | 200 | 4h | 100 | 10% | Wood ×10, Stone ×8, Clay ×3 | Town L1 |
| 2 | 400 | 24h | 160 | 15% | Wood ×20, Stone ×15, Clay ×8, Coal ×2 | Town L2 |
| 3 | 800 | 30h | 250 | 20% | Wood ×35, Stone ×25, Clay ×15, Coal ×5, Tree Sap ×3 | Town L3 |
| 4 | 1,200 | 36h | 400 | 25% | Wood ×50, Stone ×35, Clay ×25, Coal ×8, Tree Sap ×5, Iron Ore ×3 | Town L4 |
| 5 | 2,075 | 42h | 620 | 30% | Wood ×75, Stone ×50, Clay ×35, Coal ×12, Tree Sap ×8, Iron Ingot ×8 | Town L5 |
| 6 | 3,575 | 2d | 975 | 35% | + Gold Dust ×3 | Town L6 |
| 7 | 6,200 | 2.25d | 1,550 | 40% | + Gold Dust ×8, Steel Ingot ×3 | Town L7 |
| 8 | 10,400 | 2.5d | 2,400 | 45% | + Gold Dust ×12, Steel Ingot ×8 | Town L8 |
| 9 | 17,700 | 2.75d | 3,800 | 50% | + Gold Ingot ×15, Steel Ingot ×12 | Town L9 |
| 10 | 30,000 | 3d | 6,000 | 60% | + Gold Ingot ×20, Steel Ingot ×15, Polished Diamond ×3 | Town L10 |`
},
{
  page: "Building Upgrade Costs", url: B + "critter-quest-guides/building-upgrade-costs",
  title: "Muddy Anvil (Blacksmith) — levels and craft slots",
  tags: ["muddy anvil", "blacksmith", "craft slots", "anvil upgrade", "forge"],
  body: `Standard battle gear and tools. Each level adds a crafting slot (1 at L1 up to 10 at L10).

| Lvl | $QUEST | Time | Slots | Materials |
|---|---|---|---|---|
| 1 | 175 | 4h | 1 | Wood ×15, Stone ×10, Clay ×5 |
| 2 | 425 | 12h | 2 | Wood ×25, Stone ×15, Clay ×10, Coal ×5, Tree Sap ×2 |
| 3 | 750 | 20h | 3 | + Iron Ore ×10 |
| 4 | 2,000 | 30h | 4 | + Copper Ore ×12, Iron Ore ×15 |
| 5 | 4,500 | 36h | 5 | + Copper Ingot ×8, Iron Ingot ×20, Gold Dust ×3 |
| 6 | 8,000 | 42h | 6 | + Steel Ingot ×12, Gold Dust ×8, Diamond Fragment ×3 |
| 7 | 14,000 | 2d | 7 | + Gold Ingot ×5, Diamond Fragment ×5 |
| 8 | 22,000 | 2.25d | 8 | + Polished Diamond ×8, Crystal Fragment ×12, Light Essence ×5 |
| 9 | 30,000 | 2.5d | 9 | + Crystal Core ×5, Ancient Wood ×20, Ancient Relic ×15 |
| 10 | 37,500 | ~2.88d | 10 | + Power Core ×8, Crystal Core ×5, Power Unit ×2 |

All levels require the matching Town level (L1 needs Town L1, L10 needs Town L10).`
},
{
  page: "Building Upgrade Costs", url: B + "critter-quest-guides/building-upgrade-costs",
  title: "Mystic Mirror (Oracle) — identification slots",
  tags: ["mystic mirror", "oracle", "identify recipes", "id slots", "mirror upgrade", "free first upgrade"],
  body: `Identifies unknown recipes. Identification slots rise from 1 to 20. **Level 1 costs 100 $QUEST with no materials and no wait.**

| Lvl | $QUEST | Time | ID slots | Materials |
|---|---|---|---|---|
| 1 | 100 | — | 1 | — |
| 2 | 100 | 24h | 3 | Wood ×25, Stone ×15, Clay ×10, Coal ×5 |
| 3 | 250 | 2d | 5 | + Herbs ×8, Mushroom ×8, Tree Sap ×3 |
| 4 | 750 | ~2.88d | 7 | + Magical Spore ×5, Mushroom ×12, Tree Sap ×8, Gold Dust ×3 |
| 5 | 2,000 | 4d | 9 | + Magical Spore ×8, Tree Sap ×12, Gold Dust ×5 |
| 6 | 4,000 | 5d | 10 | + Tree Sap ×15, Gold Dust ×8 |
| 7 | 8,000 | ~6.67d | 12 | + Tree Sap ×18, Gold Dust ×12 |
| 8 | 16,000 | ~7.92d | 14 | + Light Essence ×5, Ancient Relic ×8, Gold Dust ×15 |
| 9 | 30,000 | ~9.17d | 16 | + Ethereal Essence ×2, Crystal Core ×5, Refined Sap ×25 |
| 10 | 42,000 | ~10.4d | 20 | + Power Unit ×1, Crystal Core ×1, Perfect Ruby ×1, Perfect Diamond ×1 |

Your Mirror level determines which recipe tiers you can reveal: a Level 1 Mirror identifies Tier 1 recipes only; a Level 10 Mirror can potentially reveal any tier through weighted probability.`
},
{
  page: "Building Upgrade Costs", url: B + "critter-quest-guides/building-upgrade-costs",
  title: "Bubbling Barrel (Alchemist) — levels and unlocks",
  tags: ["bubbling barrel", "alchemist", "potions", "brewing", "alchemy lab", "town level 3"],
  body: `Potions and glass vials. **Requires Town Level 3 to begin.**

| Lvl | $QUEST | Time | Slots |
|---|---|---|---|
| 1 | 1,000 | 4h | 1 |
| 2 | 1,500 | 12h | 2 |
| 3 | 2,500 | 20h | 2 |
| 4 | 5,000 | 30h | 3 |
| 5 | 8,500 | 36h | 3 |
| 6 | 13,000 | 42h | 6 |
| 7 | 18,000 | 2d | 6 |
| 8 | 23,000 | 2.25d | 8 |
| 9 | 30,000 | 2.5d | 8 |
| 10 | 36,000 | ~2.88d | 10 |

**Unlocks by level:** L1 Minor Health Potion · L2 Mid Health Potion · L3 Tree Sap Refinement, Bone Grinding, Essence Extraction · L4 Major Health Potion, Warrior's Fury, Iron Hide · L5 Light Essence Refining (and Titan's Shield) · L6 Renewal Tear, Noctis Draught · L7 Ancient Relic Extraction · L8 Warlord's Might, Hunter's Vision, Master Thief Brew · L9 Dimensional Infusion · L10 Revival Essence, Aegis Potion, Godly Essence, +50% brewing speed`
},
{
  page: "Building Upgrade Costs", url: B + "critter-quest-guides/building-upgrade-costs",
  title: "Gleaming Nest (Jeweler) — socket success rate by level",
  tags: ["gleaming nest", "jeweler", "socket success", "gem cutting", "town level 5", "100% success"],
  body: `Gem cutting and socketing. Socketing success climbs from **50% at L1 to 100% at L10**. **Requires Town Level 5.**

| Lvl | $QUEST | Time | Slots | Socket success |
|---|---|---|---|---|
| 1 | 2,500 | 4h | 1 | 50% |
| 2 | 5,500 | 12h | 2 | 55% |
| 3 | 8,000 | 20h | 3 | 60% |
| 4 | 12,000 | 30h | 4 | 65% |
| 5 | 15,000 | 36h | 5 | 70% |
| 6 | 20,000 | 42h | 6 | 75% |
| 7 | 25,000 | 2d | 7 | 80% |
| 8 | 30,000 | 2.25d | 8 | 85% |
| 9 | 35,000 | 2.5d | 9 | 90% |
| 10 | 41,000 | ~2.88d | 10 | 100% |

**Unlocks:** L1 Rough Diamond · L3 Cut Diamond · L4 Rough Emerald & Sapphire · L5 Gem Setting (Basic), Cut Emerald & Sapphire · L6 Rough Amethyst, Cut Ruby, Gem Removal, Polished Diamond · L7 Polished Emerald · L8 Polished Ruby & Sapphire, Advanced Gem Setting · L9 Polished Amethyst, Crystal Core · L10 All Perfect Gems, +50% crafting speed`
},
{
  page: "Building Upgrade Costs", url: B + "critter-quest-guides/building-upgrade-costs",
  title: "Glowing COG (Ancient Tech Lab) — only 6 levels",
  tags: ["glowing cog", "ancient tech lab", "tier 11 tools", "laser pickaxe", "town level 9", "tech"],
  body: `Advanced tools and tech components. Only **6 levels**, and requires **Town Level 9** to begin. Level 1 costs 25,000 $QUEST with no materials and no wait.

| Lvl | $QUEST | Time | Slots | Materials |
|---|---|---|---|---|
| 1 | 25,000 | — | 1 | — |
| 2 | 30,000 | 24h | 3 | Wood ×300, Stone ×225, Clay ×175, Coal ×150, Tech Fragment ×15, Iron Ingot ×8, Crystal Fragment ×3 |
| 3 | 35,000 | 2d | 5 | + Energy Cell ×5, Gold Dust ×3 |
| 4 | 40,000 | ~2.88d | 7 | + Energy Cell ×8, Steel Ingot ×5, Laser Pickaxe Blueprint ×1 |
| 5 | 42,000 | 4d | 9 | + Power Core ×5, Chainsaw-Axe Blueprint ×1 |
| 6 | 42,000 | 5d | 10 | + Power Unit ×3, Crystal Core ×5, Geo-Scanner Blueprint ×1 |

**Unlocks:** L1 Tech Fragment analysis · L2 Circuit Assembly, Energy Cell · L3 Power Core, Power Unit · L4 Laser Pickaxe · L5 Chainsaw-Axe · L6 Geo-Scanner`
},

/* ============================ FEES ============================ */
{
  page: "Fees & Taxes", url: B + "critter-quest-guides/fees-and-taxes",
  title: "The gather tax — what it costs to send a critter out",
  tags: ["gather tax", "movement cost", "0.25 per tile", "gathering fee", "distance cost", "speed discount"],
  body: `Sending a critter to gather costs $QUEST based on distance:

- Base rate is **0.25 $QUEST per tile** of travel.
- That base is multiplied by the node's **spot level** and **yield level** (each 1–10), so a high-level gather can cost up to **100× the base per tile**.
- A critter's speed can discount the movement cost by up to **75%**.

A short trip to a low-level node is nearly free; a long haul to a maxed high-yield node is a real investment that pays off in materials.`
},
{
  page: "Fees & Taxes", url: B + "critter-quest-guides/fees-and-taxes",
  title: "All other fees, and where fee revenue goes",
  tags: ["fees", "looting cost", "rename town", "attribute reset", "quick shield cost", "fee split", "world bank"],
  body: `**Looting** (claiming a sleeping critter's rewards) costs **0.05 $QUEST per tile**, with no level multiplier.

| Action | Fee |
|---|---|
| Mining action | 0.002 $QUEST |
| Leaving a captured building | 10% of accrued earnings |
| Renaming your town | 2,500 $QUEST |
| Attribute reset | 85 $QUEST (30-day cooldown) |
| Quick Shield | 100 $QUEST per charge |
| Marketplace purchase | 1% buyer fee |

**Every fee is split the same way: 50% World Bank, 20% Mining pool, 25% Monster pool, 5% Team.** That split is what funds the World Bank and the monster and mining reward pools you can win back through play.`
},

/* ============================ PVP / RAIDING ============================ */
{
  page: "Raiding & PvP", url: B + "how-to-play/raiding-and-pvp",
  title: "How attacking another town works",
  tags: ["attack", "raid", "pvp", "4v4", "25 rounds", "how to raid", "war fever"],
  body: `Send an attacking squad of up to **4 critters** at another town on the world map. Combat is **4v4** and resolves in one atomic battle of up to **25 rounds**.

- You cannot attack a shielded town, and you cannot attack your own.
- There is **no attack cooldown**, but attacking starts a **War Fever** timer on your own town that blocks you from shielding for up to 30 minutes.
- Attacking also **immediately drops any shield you were holding**. You cannot attack from behind a wall.`
},
{
  page: "Raiding & PvP", url: B + "how-to-play/raiding-and-pvp",
  title: "What you loot when a raid succeeds",
  tags: ["loot", "30%", "15%", "wipe win", "hp win", "maturity", "ripeness", "how much can i steal"],
  body: `- A **wipe win** (you knock out the whole defending squad) steals up to **30%** of the defender's Town Bank $QUEST.
- An **HP win** (you finish ahead on health) steals up to half that — **15%**.
- Any other result loots **nothing**.

The exact percentage scales with the target town's **maturity** (loot-ripeness). A freshly raided town has little ripe loot and regenerates ripeness over about a day, so repeat-raiding the same target quickly yields less each time.

Up to **3 of the defender's resource-token vaults** are looted at the same rate. Winning also earns PvP XP for your surviving attackers.`
},
{
  page: "Raiding & PvP", url: B + "how-to-play/raiding-and-pvp",
  title: "Setting up town defence rosters",
  tags: ["defence", "defense roster", "6 rosters", "0.001 sol", "grace window", "undefended"],
  body: `Set a defending squad of up to **4 critters** from the Town Defence menu.

- You can store up to **6 rosters**; how many you can keep active is tied to your town level.
- Defenders must be parked in your town's custody.
- Changing a roster leaves a **15-minute grace window** where the old roster still defends, which stops last-second dodging.
- Each critter added to a defence roster locks a **0.001 SOL deposit**, refunded when you remove it.
- A town with **no defenders set is undefended** — any attacker walks over it.`
},
{
  page: "Raiding & PvP", url: B + "how-to-play/raiding-and-pvp",
  title: "Town wear from losing a defence",
  tags: ["town wear", "durability loss", "walkover", "15%", "7%", "30%", "walls damage"],
  body: `Losing a defence damages your town's durability:

| Result | Durability cost |
|---|---|
| Defended wipe loss | 15% |
| HP loss | 7% |
| Draw | 5% |
| Undefended walkover | up to 30% (decaying toward 1% on repeat hits) |

**Walls only take wear if the attacker's combat power is at least 30% of yours**, so weak griefing attacks do no structural damage. Durability also buffs your defenders' DEF in battle, so a well-kept town defends harder.`
},
{
  page: "Raiding & PvP", url: B + "how-to-play/raiding-and-pvp",
  title: "Star loss and clone burning — the real PvP risk",
  tags: ["burn", "burned", "star loss", "0.2 stars", "revival essence", "master edition safe", "lose critter"],
  body: `- A defeated critter loses **0.2 stars**.
- If a defeated **clone** would drop below 0 stars, it is **burned** (destroyed) and its bound $QUEST is redistributed.
- **Master Editions never burn** — they floor at 0 stars.
- A **Revival Essence** potion protects a critter from star loss and burning **once**.
- Gear on a burned critter is not lost forever: it goes to a global lost-items pool recoverable through beach chests.
- Equipment takes durability wear each battle; broken gear gives no stats until repaired.`
},

/* ============================ SHIELDS ============================ */
{
  page: "Town Shields & Raid Protection", url: B + "how-to-play/town-shields-and-raid-protection",
  title: "The free Newcomer Shield (72 hours)",
  tags: ["newcomer shield", "free shield", "72 hours", "new player protection", "starting shield"],
  body: `When you place your town for the first time it is automatically protected for **72 hours**. No cost, nothing to click — it applies the moment your town is created.

- It applies **once, on first placement only**.
- Moving or re-placing a town later does **not** grant a new free shield.

Use this window to build your walls, bank your $QUEST, and set a defence squad before you become raidable.`
},
{
  page: "Town Shields & Raid Protection", url: B + "how-to-play/town-shields-and-raid-protection",
  title: "Quick Shield — cost, duration and rolling charges",
  tags: ["quick shield", "100 quest", "4 hours", "2 charges", "buy shield", "24 hour cap"],
  body: `| Detail | Value |
|---|---|
| Cost | **100 $QUEST** per charge |
| Duration | **4 hours** per charge |
| Charges | **2 rolling charges** |
| Charge refresh | Each charge frees up **24 hours after you use it** |
| Maximum coverage | Shielded up to **24 hours** ahead at once |
| Paid from | Town Bank $QUEST or connected wallet |

Charges recharge on their own 24-hour timer from the moment you spend them, not on a fixed daily reset. Buying extends your current shield rather than replacing it, but can never push protection more than 24 hours into the future — if a purchase wouldn't extend your shield, the game blocks it so you don't waste a charge.

Quick Shield cannot be paid from a critter's locked $QUEST. Town protection is a town-level cost.`
},
{
  page: "Town Shields & Raid Protection", url: B + "how-to-play/town-shields-and-raid-protection",
  title: "Automatic shields you earn after a raid",
  tags: ["post raid shield", "automatic shield", "1 hour", "undefended grace", "15 minutes"],
  body: `| Shield | Duration | Trigger |
|---|---|---|
| Post-raid shield | **1 hour** | Your town was raided |
| Undefended grace | **15 minutes** | Your town was taken in a walkover with no defenders set |
| Titan's Shield (potion) | **24 hours** | You brew and drink a Titan's Shield |`
},
{
  page: "Town Shields & Raid Protection", url: B + "how-to-play/town-shields-and-raid-protection",
  title: "War Fever — why you can't shield after attacking",
  tags: ["war fever", "cannot shield", "war timer active", "10 minutes", "30 minutes", "turtling"],
  body: `Attacking another town starts a **War Fever** timer on your own. While it's active you cannot raise any shield — Quick Shield or Titan's Shield. This closes the tactic of raiding someone and immediately turtling up.

- Each attack you launch adds **10 minutes** of War Fever.
- War Fever is capped at **30 minutes** from the present moment.
- Launching an attack also immediately drops your own active shield.

If you go on the offensive you are exposed for up to half an hour after your last attack. Plan raids for when you can afford to be counter-attacked.`
},
{
  page: "Town Shields & Raid Protection", url: B + "how-to-play/town-shields-and-raid-protection",
  title: "Shield error messages and what they mean",
  tags: ["error message", "town is shielded", "war timer active", "no charges available", "shield wouldn't extend", "troubleshooting"],
  body: `| Message | What it means |
|---|---|
| Town is shielded | The town you tried to attack is protected right now. Pick another target. |
| War timer active | You attacked recently and cannot shield yet. Wait out War Fever (up to 30 min). |
| No charges available | Both Quick Shield charges are on cooldown. Wait 24h from each one's last use. |
| Shield wouldn't extend | Buying now would not add time to your current shield, so the charge was not spent. |`
},

/* ============================ TOWN REPAIR ============================ */
{
  page: "Town Repair", url: B + "critter-quest-guides/town-repair",
  title: "Durability basics and the 15% threshold",
  tags: ["durability", "15%", "town broken", "repair", "impaired", "max durability"],
  body: `Your town and walls each contribute to a single **maximum durability pool** that grows every time you upgrade them. A town stays **fully operational while durability is at or above 15%** of maximum. Below that, functionality is impaired until you repair.

Because the maximum grows with town and wall levels, a higher-level town has more durability to lose, so a full repair costs proportionally more.

**Full Repair** restores everything in one action. **Partial Repair** restores a chosen number of points via a slider — useful for topping up when you can't afford a full repair.`
},
{
  page: "Town Repair", url: B + "critter-quest-guides/town-repair",
  title: "Repair cost per durability point",
  tags: ["repair cost", "0.025 quest", "repair materials", "cost per point", "how much to repair"],
  body: `Cost **per durability point restored**:

| Material | Cost per point | Required from town level |
|---|---|---|
| $QUEST | 0.025 | 1 |
| Wood | 0.015 | 1 |
| Stone | 0.015 | 1 |
| Clay | 0.005 | 1 |
| Coal | 0.005 | 2 |
| Copper Ingot | 0.0005 | 3 |
| Tree Sap | 0.005 | 4 |
| Iron Ingot | 0.0005 | 5 |
| Gold Dust | 0.0025 | 6 |
| Steel Ingot | 0.00025 | 7 |

At town level 7 and above every repair draws on all ten. No new materials are added beyond level 7.

**Worked example:** a level 7 town missing 700 durability pays about **17.5 $QUEST** (700 × 0.025), plus 10.5 Wood, 3.5 Clay, 0.35 Copper Ingot, and so on. Repair 100 points instead and every number scales down tenfold.

Repairs can be paid from Town Bank $QUEST or your connected wallet; the material portion always comes from the Town Bank.`
},

/* ============================ POTIONS ============================ */
{
  page: "Potions & Titan's Shield", url: B + "critter-quest-guides/potions-and-titans-shield",
  title: "Health potions — heal amounts, cost and vials",
  tags: ["health potion", "healing", "minor mid major mythical", "hp restore", "800 hp", "potion cost"],
  body: `Health potions restore a **flat** amount of HP — not a percentage. A Mythical always restores 800 HP whether the critter is barely scratched or nearly down.

| Potion | Heals | Alchemist level | $QUEST | Craft time | Vial |
|---|---|---|---|---|---|
| Minor Health Potion | +75 HP | 1 | 5 | 2h | Basic Glass Vial |
| Mid Health Potion | +150 HP | 3 | 8 | 4h | Basic Glass Vial |
| Major Health Potion | +300 HP | 6 | 12 | 8h | Enhanced Glass Vial |
| Mythical Health Potion | +800 HP | 9 | 18 | 24h | Crystal Glass Vial |

Each recipe also consumes raw materials and a glass vial, which you blow at the Bubbling Barrel.`
},
{
  page: "Potions & Titan's Shield", url: B + "critter-quest-guides/potions-and-titans-shield",
  title: "Titan's Shield — 24 hours of town raid immunity",
  tags: ["titan's shield", "titans shield", "24 hours", "250 quest", "raid immunity", "alchemist level 5"],
  body: `| Detail | Value |
|---|---|
| Effect | **24 hours** of town raid immunity |
| Unlocks at | **Alchemist Level 5** (Tier 5 recipe) |
| $QUEST cost | **250** |
| Craft time | **12 hours** |
| Materials | **Steel Ingot** + **Enhanced Glass Vial** |
| Dosing | Single dose only, cannot be stacked or double-applied |

Re-applying always resets protection to 24 hours from now; it never extends beyond a single day. Like every shield, it **cannot be applied during War Fever** (right after you've attacked someone).

Crafting flow: upgrade the Bubbling Barrel to L5 → blow an Enhanced Glass Vial → get a Steel Ingot from the Muddy Anvil → start the brew, paying 250 $QUEST from the Town Bank → wait 12 hours → apply it.`
},

/* ============================ COMBAT / MONSTERS ============================ */
{
  page: "Building Squads", url: B + "how-to-play/fight-monsters/building-squads",
  title: "How many squads you get by town level",
  tags: ["squads", "squad slots", "how many squads", "town level squads", "unlock squads"],
  body: `Squads unlock with Town level:

| Town level | Squads |
|---|---|
| 1–2 | 1 |
| 3–4 | 2 |
| 5–7 | 3 |
| 8–10 | 4 |
| 11–19 | 5 |
| 20 | 6 |

Squad rules: all critters must be available (not gathering) to enter battle, critters must have an HP value to be added and attack, return times are standard, and CT values affect how quickly a critter can attack again.

Build high-CP squads — a common pattern is **2 defensive + 2 offensive** critters.`
},
{
  page: "Monsters, Skills & Attacks", url: B + "how-to-play/fight-monsters/monsters-skills-and-attacks",
  title: "Rock Monster — heavy tank and defence shredder",
  tags: ["rock monster", "boulder throw", "earthquake", "stone skin", "defense ignore", "tank"],
  body: `**Role:** Heavy tank + defence shredder. **Rewards:** Winners-take-all.

Attacks:
- **Boulder Throw** — single-target
- **Earthquake** — AoE + defence ignore, **ignores 50% of defence**
- **Stone Skin** — **+50% DEF for 2 rounds**

Because Earthquake ignores half your defence, stacking DEF alone is a weak answer to this fight.`
},
{
  page: "Monsters, Skills & Attacks", url: B + "how-to-play/fight-monsters/monsters-skills-and-attacks",
  title: "Mushroom Monster — poison and bleed damage over time",
  tags: ["mushroom monster", "spore shot", "toxic spore cloud", "spore burst", "poison", "bleed", "dot"],
  body: `**Role:** DoT dealer (poison + bleed). **Rewards:** Winners-take-all.

Attacks:
- **Spore Shot** — single-target damage
- **Toxic Spore Cloud** — AoE poison, **50 poison damage × 3 rounds**
- **Spore Burst** — bleed burst on frontline, **60 bleed damage per round** (2 stacks × 30)

Poison ticks at the start of each round, so high-HP critters and healing matter more than raw defence here.`
},
{
  page: "Monsters, Skills & Attacks", url: B + "how-to-play/fight-monsters/monsters-skills-and-attacks",
  title: "Goblin King — legendary multi-phase boss",
  tags: ["goblin king", "boss", "royal strike", "command attack", "enraged assault", "legendary", "120 bleed"],
  body: `**Role:** Legendary multi-phase boss with debuffs + bleed. **Rewards:** Winners-take-all.

Attacks:
- **Royal Strike** — targets your strongest enemy
- **Command: Attack!** — AoE + attack down, **-20% ATK for 2 rounds**
- **Enraged Assault** — massive frontline damage + bleed, **triggers below 50% HP**, **120 bleed damage per round × 3 rounds**

The phase change below 50% HP is the danger point — Enraged Assault's bleed is the heaviest DoT in the monster list.`
},
{
  page: "Monsters, Skills & Attacks", url: B + "how-to-play/fight-monsters/monsters-skills-and-attacks",
  title: "Goblin Warrior and Goblin Coward",
  tags: ["goblin warrior", "goblin coward", "dual slash", "whirlwind", "escape chance", "proportional rewards"],
  body: `**Goblin Warrior** — agile attacker with bleed on AoE. **Rewards: Proportional.**
- **Dual Slash** — dual hit on frontline
- **Whirlwind** — AoE spin + bleed, **20 bleed damage per round**

**Goblin Coward** — escape-focused rare encounter. **Rewards: Proportional.**
- No attacks at all
- **15% chance to flee after each combat round**

Note the reward difference: Goblins pay out *proportionally*, while the Rock Monster, Mushroom Monster and Goblin King are *winners-take-all*.`
},
{
  page: "Monsters, Skills & Attacks", url: B + "how-to-play/fight-monsters/monsters-skills-and-attacks",
  title: "Monster maturity — why waiting pays",
  tags: ["monster maturity", "monster rewards increase", "mature monsters", "strategy"],
  body: `Monsters **mature as they spend more time on the map**, and as they mature their rewards increase. A monster that has been sitting on the map a while is worth more than a freshly spawned one.`
},
{
  page: "Risks & Rewards", url: B + "how-to-play/fight-monsters/risks-and-rewards",
  title: "What you risk and win fighting monsters",
  tags: ["monster risk", "monster rewards", "winner take all", "proportional", "xp", "lose clone"],
  body: `**Risks:** Cloned Critters can be lost in battle. Master Editions can lose stars, but can heal.

**Rewards:** Battling monsters earns you $QUEST and XP. Rewards can be **proportional** or **winner-take-all** — always check the specific monster before committing a squad.`
},

/* ============================ EQUIPMENT ============================ */
{
  page: "Battle Equipment", url: B + "critter-quest-guides/battle-equipment",
  title: "How to read stat rolls",
  tags: ["stat rolls", "atk def hp cc cd ct", "sockets", "durability", "rolled stats", "stat abbreviations"],
  body: `Every item is minted with randomly rolled stats, drawn **uniformly** between a min and max (both ends possible, equal chance). "ATK 6-20" means any whole number from 6 to 20. If min equals max, the stat is fixed.

| Key | Meaning |
|---|---|
| ATK | Attack |
| DEF | Defense |
| HP | Health |
| CC | Critical Chance |
| CD | Critical Damage |
| CT | Turn time — **negative means the critter acts sooner** |
| Sockets | Gem slots that roll ("0-1" = 50/50 chance of 0 or 1) |
| Durability | Uses before a repair is needed |
| Move | Move-speed bonus (basis points) |

Stats marked with an asterisk in the docs currently cap at **255** in-game.`
},
{
  page: "Battle Equipment", url: B + "critter-quest-guides/battle-equipment",
  title: "Gems — what each one does in tools vs equipment",
  tags: ["gems", "diamond sapphire amethyst emerald ruby", "gem effects", "tool vs equipment", "20 gems"],
  body: `There are **5 gem families across 4 tiers — 20 gems total**. The same gem does different things depending on where it's socketed.

| Gem | In a Tool (gathering) | In Equipment (combat) |
|---|---|---|
| Diamond | + Mining Damage | + Attack |
| Sapphire | + Durability | + Defense |
| Amethyst | + All gathering stats | + Health |
| Emerald | + Luck | + Critical Chance |
| Ruby | + Drop rates | + Critical Damage |

Tiers go **Rough → Cut → Polished → Perfect**.`
},
{
  page: "Battle Equipment", url: B + "critter-quest-guides/battle-equipment",
  title: "Gem values in equipment and in tools",
  tags: ["gem values", "gem percentages", "perfect gem", "60%", "rough cut polished perfect", "gem table"],
  body: `**Equipment (combat) values**

| Gem and stat | Rough | Cut | Polished | Perfect |
|---|---|---|---|---|
| Diamond, Attack | +15% | +25% | +40% | +60% |
| Sapphire, Defense | +15% | +25% | +40% | +60% |
| Amethyst, Health | +15% | +25% | +40% | +60% |
| Emerald, Crit Chance | +1.5% | +2.5% | +4% | +6% |
| Ruby, Crit Damage | +15% | +25% | +40% | +60% |

**Tool (gathering) values**

| Gem and effect | Rough | Cut | Polished | Perfect |
|---|---|---|---|---|
| Diamond, Mining Damage | +15% | +25% | +40% | +60% |
| Sapphire, Durability | +15% | +25% | +40% | +60% |
| Amethyst, All Stats | +5% | +10% | +20% | +30% |
| Emerald, Luck | +1.5% | +2.5% | +4% | +7.77% |
| Ruby, Drop Rate | Uncommon +15%, Rare +1.5% | +25%, +2.5% | +40%, +4% | Resource +1, Rare +10% |

Note Amethyst is weaker in tools (+30% at Perfect) than in equipment (+60%).`
},
{
  page: "Battle Equipment", url: B + "critter-quest-guides/battle-equipment",
  title: "Socketing rules — which gems fit which slots",
  tags: ["socketing rules", "which gem where", "amulet flexible", "boots no crit", "weapon no defense"],
  body: `**A combat gem only fits equipment that already has the stat it boosts.**

- **Attack gems (Diamond)** fit Weapons and most Amulets. Shields, Hats and Boots have no Attack.
- **Defense gems (Sapphire)** cannot go in Weapons, which have no Defense.
- **Crit gems (Emerald, Ruby)** cannot go in Boots, which have no Crit Chance or Crit Damage.
- **Amulets are the most flexible** — most carry Attack and Crit.`
},
{
  page: "Gems & Socketing", url: B + "critter-quest-guides/gems-and-socketing",
  title: "Socketing service costs at the Jeweler",
  tags: ["socket cost", "gem setting", "gem removal", "20 quest", "50 quest", "85 quest", "jeweler services"],
  body: `| Service | Cost ($QUEST) | Jeweler level |
|---|---|---|
| Basic gem setting | 20 | 5 |
| Advanced gem setting | 50 | 8 |
| Gem removal | 85 | 6 |

Sockets appear **randomly on tools and equipment when they are crafted**; higher-tier gear rolls more sockets. A socketed gem can be **removed and moved to another item**, so you can carry your best gems forward as you upgrade.

Cutting gems rises through Rough → Cut → Polished → Perfect. Each grade costs more $QUEST and needs a higher Jeweler level, and the Jeweler's success rate improves from 50% at L1 to 100% at L10.`
},
{
  page: "Battle Equipment", url: B + "critter-quest-guides/battle-equipment",
  title: "Equipment sets — the nine 5/5 set bonuses",
  tags: ["equipment sets", "set bonus", "5/5", "lunar bio hazard blizzard justice nightmare ember throne pixies ghost"],
  body: `There are **9 sets**, each made of 5 pieces (Hat, Shield, Weapon, Amulet, Boots). Wearing all 5 unlocks the **5/5 Set Bonus** on top of each piece's own rolls. Set pieces drop from gacha, have their own rolled stats and 0–2 sockets, but **no individual skill** — the payoff is the full set.

| Set | ATK | DEF | HP | CC | CD | CT | Move |
|---|---|---|---|---|---|---|---|
| Lunar | – | – | +15 | +20 | +30 | -900 | +500 |
| Bio Hazard | +40 | – | – | +10 | +15 | -750 | – |
| Blizzard | – | +50 | +60 | +5 | – | -600 | +500 |
| Justice | +35 | +40 | +70 | +10 | +15 | -750 | – |
| Nightmare | +50 | – | – | +12 | +40 | -800 | – |
| Ember | +38 | – | – | +12 | +22 | -700 | -200 |
| Throne | +32 | +45 | +65 | +8 | +18 | -700 | – |
| Pixies | – | – | +25 | +15 | +35 | -1000 | +1500 |
| Ghost | +28 | +38 | +55 | +6 | +16 | -750 | +1000 |

**Nightmare** is the highest raw ATK set; **Pixies** is the fastest (CT -1000, Move +1500); **Justice** is the most balanced all-rounder.`
},
{
  page: "Battle Equipment", url: B + "critter-quest-guides/battle-equipment",
  title: "Set pieces — which items belong to which set",
  tags: ["set pieces", "set list", "which items", "lunar pieces", "set collection"],
  body: `| Set | Hat | Shield | Weapon | Amulet | Boots |
|---|---|---|---|---|---|
| Lunar | Horns of the Crescent Helm | Escape Guardian | Lunar's Edge | Lunar's Embrace | Infinity Explorer |
| Bio Hazard | Crown of Waste | Hazardous Wall | Toxic Blade | Hazard of the Drake | The Dreadful Boots |
| Blizzard | Horns of the Storm | Frozen Scales of Protection | Tundra's Scorn | The Ice Pinnacle | Boots of the Glacier |
| Justice | Helm of Might and Glory | Radiant Will of Protection | The Radiant | Fang of the Glimmering Hydra | Boots of the Empire |
| Nightmare | Gift from the Shadows | The Veil of Night | Shadow's Touch | Collector of Lost Dreams | Shadow's Steps |
| Ember | Helm of Inferno | Guardian of Flame | Heroic Saber of Blaze | The Flame Amulet of Fire | Claws of the Drake |
| Throne | Midas's Helm | The Royal Guard | Throne's Justice | Lust of the King | Boots of Royalty |
| Pixies | The Shimmering Cap | Guardian of Harmony | Infinity Gleam | The Neverending Promise | Enchanted Trotters |
| Ghost | Phantom's Guard | Protector of the Immortal | Bringer of Silence | Claw of the Nether | Boots of Silence |`
},
{
  page: "Battle Equipment", url: B + "critter-quest-guides/battle-equipment",
  title: "Legendary weapons — stats and abilities",
  tags: ["legendary weapons", "planet splitter", "reaper's claw", "lazer axe", "gacha weapons", "apex"],
  body: `Gacha gold-wheel drops. Each is one item with rolled stats, sockets and one combat Skill.

| Item | ATK | CC | CD | CT | Sockets | Ability |
|---|---|---|---|---|---|---|
| Planet Splitter (Apex) | 60-80 | 7-10 | 50-70 | -1200 to -800 | 0-3 | Cosmic Rift: on hit (15%), **Stun for 1 turn** |
| Reaper's Claw | 53-70 | 7-10 | 44-60 | -1100 to -700 | 0-3 | Death Mark: on crit (20%), +50% damage |
| Serpent's Fang | 55-70 | 4-7 | 42-57 | -700 to -300 | 0-3 | Venom Strike: on hit (25%), Poison 8/turn ×3 |
| Lazer Axe | 52-68 | 6-9 | 42-58 | -1050 to -650 | 0-3 | Laser Beam: on hit (20%), +30% damage |
| Sky Blade | 52-67 | 6-8 | 38-53 | -900 to -500 | 0-3 | Aerial Assault: on crit (20%), +35% crit damage |
| Flame of the Ruby | 50-65 | 6-8 | 40-55 | -1000 to -600 | 0-3 | Inferno: on hit (30%), Bleed 8/turn ×3 |
| War Hammer | 50-65 | 3-6 | 40-55 | -600 to -200 | 0-2 | Crushing Blow: on hit (30%), -20 target ATK for 2 turns |
| Shadow of the Moon | 49-64 | 6-9 | 40-56 | -1000 to -600 | 0-3 | Moonlight Slash: on hit (25%), Heal 20% |
| Blade of the Holy Flames | 48-63 | 5-8 | 38-53 | -950 to -550 | 0-3 | Divine Purge: on hit (20%), +25% damage |
| Twin Blade | 48-63 | 5-7 | 35-50 | -1000 to -600 | 0-2 | Double Strike: on hit (15%), +50% damage |
| Skull Axe | 47-62 | 5-8 | 37-52 | -850 to -450 | 0-2 | Soul Reap: on kill (25%), +15% damage ×3 turns |
| Feather of the Phoenix | 46-61 | 5-7 | 36-51 | -900 to -500 | 0-2 | Phoenix Rebirth: when hit (15%), Immunity 1 turn |
| Shark Bite | 46-61 | 5-8 | 38-53 | -900 to -500 | 0-2 | Bleeding Bite: on hit (30%), Bleed 10/turn ×3 |
| Warrior Blade | 45-60 | 5-7 | 36-51 | -850 to -450 | 0-2 | Battle Fury: passive, +12% damage |
| Heart of the Glacier | 44-59 | 4-7 | 34-49 | -850 to -450 | 0-2 | Frostbite: on hit (25%), +20 Speed 2 turns |
| Skull Spear | 44-59 | 6-8 | 35-50 | -900 to -500 | 0-2 | Piercing Strike: passive on crit, +25% crit damage |
| Dreadspire | 43-58 | 5-8 | 35-50 | -800 to -400 | 0-2 | Dread Curse: on hit (25%), -15 target ATK 3 turns |
| Key of the Underworld | 16-24 | 7-10 | 28-43 | -600 to -200 | 0-3 | Death's Door: on crit (25%), Heal 25% |
| Key of the Kingdom | 13-21 | 5-7 | 19-34 | -550 to -150 | 0-2 | Unlock Potential: above 50% HP, +12% crit chance |
| Light of the Sun | 13-21 | 5-8 | 21-36 | -700 to -300 | 0-3 | Solar Blessing: on hit (20%), Heal 10% |`
},
{
  page: "Battle Equipment", url: B + "critter-quest-guides/battle-equipment",
  title: "Legendary hats, shields, boots and amulets",
  tags: ["legendary hats", "legendary shields", "legendary boots", "legendary amulets", "gacha gear abilities"],
  body: `**Hats** (DEF / HP / CC / CD / CT, 0-1 sockets) — Blood Oath Cap 22-32 / 40-60 (Blood Pact: below 40% HP, +25% damage) · Haunted Captain Greybeard's Hat 20-30 / 38-58 (Ghostly Curse: when hit 25%, -10 ATK 3 turns) · Golden Skull Cap 20-30 / 35-55 (Golden Death: on crit 20%, +30% crit damage) · War Cap 20-30 / 35-55 (Battle Hardened: passive +15% defense) · Crown of the Devout 18-28 / 35-55 (Divine Protection: when hit 15%, Immunity) · Skull Cap 17-27 / 28-48 · Captain Greybeard's Hat 16-26 / 32-52 · Caster's Will 16-26 / 30-50 · Crown of the Fallen 15-25 / 30-50 · Jester Hat 14-24 / 25-45 (Fool's Gambit: on hit 30%, +25% damage) · Genie's Wisdom 12-20 / 20-35

**Shields** (DEF / HP, 0-1 sockets) — Castle Door Shield 30-45 / 50-70 (Fortress Wall: above 60% HP, +20% defense) · Diamond Shield 28-43 / 45-65 (Diamond Barrier: when hit 18%, +40% defense) · Treasure from the Grave 27-42 / 42-62 (Cursed Protection: when hit 25%, Heal 15%) · Laser Shield 26-41 / 38-58 · The Beloved Guard 26-40 / 45-65 · All Seeing Eye Shield 25-40 / 40-60 (Foresight: when hit 20%, Immunity) · Power Shield 24-38 / 40-60 · Inferno Shield 23-37 / 38-58 · Radiant Diamond Shield 22-35 / 35-55

**Boots** — Spirit of the Forest (Move +1000, Nature's Swiftness: passive +20 Speed) · Alien Boots (Move +650, Warp Speed: passive +15% crit chance) · Golden Boots (Move +600) · Power Boots (Move +550) · Heavy Boots (DEF 25-40, Immovable: when hit 40%, +25% defense) · Tundra Stompers (Frozen Ground: when hit 20%, Stun attacker) · Jester Feet (Trickster's Dance: when hit 20%, +50% damage)

**Amulets** (0-2 sockets) — Call of Power ATK 15-23 (Power Surge: above 60% HP, +20% damage) · Blood of the Beast ATK 15-25 (Bloodlust: below 50% HP, +20% damage) · King's Blessing ATK 14-22 · Shadow Pendant ATK 12-20 (Soul Drain: on kill 30%, Heal 15%) · Fairy's Eye ATK 12-20 · Venom Tears ATK 10-18 (Toxic Touch: on hit 30%, Poison 6/turn ×4) · Locket of the Sacred Heart DEF 15-25 (Sacred Protection: below 30% HP, +30% defense)`
},
{
  page: "Battle Equipment", url: B + "critter-quest-guides/battle-equipment",
  title: "Crafted weapons from the Blacksmith",
  tags: ["crafted weapons", "blacksmith weapons", "saberstaff", "scythe", "sword", "wand", "weapon tiers"],
  body: `Weapons roll ATK, CC and CD. They have **no DEF or HP**.

| Item | Tier | ATK | CC | CD | Sockets | Durability |
|---|---|---|---|---|---|---|
| Saberstaff | 9 | 195-255* | 15-36 | 45-120 | 1-2 | 22k-28k |
| Scythe | 8 | 150-255* | 6-16 | 20-60 | 1-2 | 17k-22k |
| Magic Wand | 7 | 45-120 | 15-36 | 45-120 | 1-2 | 13k-17k |
| Jade Axe | 5 | 90-195 | 4-12 | 16-44 | 0-1 | 7.5k-10k |
| Hammer | 4 | 50-110 | 0-2 | 3-12 | 0-1 | 5k-7.5k |
| Steel Scimitar | 4 | 44-100 | 2-8 | 5-18 | 0-1 | 5k-7.5k |
| Steel Short Sword | 4 | 40-90 | 2-8 | 5-18 | 0-1 | 5k-7.5k |
| Ruby Spear | 4 | 36-84 | 4-10 | 16-44 | 0-1 | 5k-7.5k |
| Throwing Knife | 4 | 30-70 | 6-16 | 20-50 | 0-1 | 5k-7.5k |
| Candle | 4 | 16-40 | 8-20 | 24-60 | 0-1 | 5k-7.5k |
| Sabers (Blue/Green/Pink/Red) | 4 | 14-46 | 0-4 | 5-15 | 0-1 | 5k-7.5k |
| Closed Saber | 3 | 30-70 | 2-6 | 5-15 | 0-1 | 3.5k-5k |
| Sorcerer Wands (Orange/Purple/Red) | 3 | 10-32 | 6-14 | 16-40 | 0-1 | 3.5k-5k |
| Aluminum Baseball Bat | 2 | 24-56 | 0-1 | 0-5 | 0 | 2k-3.5k |
| Stone Long Sword / Steel Axe | 2 | 20-50 | 0-2 | 2-10 | 0 | 2k-3.5k |
| Stone Axe | 2 | 16-40 | 0-2 | 0-8 | 0 | 2k-3.5k |
| Stone Spear | 2 | 14-36 | 2-6 | 0-5 | 0 | 2k-3.5k |
| Wooden Baseball Bat | 1 | 10-30 | 0 | 0-3 | 0 | 1k-2k |
| Wooden Long Sword | 1 | 8-24 | 0-1 | 0-5 | 0 | 1k-2k |
| Wooden Short Sword | 1 | 6-20 | 0-1 | 0-5 | 0 | 1k-2k |
| Oak Wood Wand | 1 | 4-16 | 2-6 | 3-8 | 0 | 1k-2k |

Stats marked * cap at 255 in-game. Wands trade ATK for crit — the Magic Wand rolls only 45-120 ATK but 15-36 CC and 45-120 CD.`
},
{
  page: "Battle Equipment", url: B + "critter-quest-guides/battle-equipment",
  title: "Crafted hats, shields, boots and amulets",
  tags: ["crafted armor", "hats", "shields", "boots", "amulets", "sauron", "viking", "groot", "blood cross"],
  body: `**Hats** (DEF / HP) — Viking T8 105-240 / 150-255* · Golden King Crown T6 75-180 / 105-255 · Blue King Crown T6 66-165 / 90-225 · Sailor T6 54-135 / 75-195 · Queen Crown T4 20-56 / 30-80 · Octopus T4 16-44 / 24-70 · Construction T3 16-40 / 20-60 · Wizard T3 10-30 / 16-50 · Fedora T2 6-20 / 10-36 · Bitcoin & Solana Cap T2 2-8 / 16-44 · Top Hat T1 1-5 / 6-20

**Shields** (DEF / HP) — Thing T9 180-255* / 120-255* · Groot T9 165-255* / 135-255* · Diamond T8 135-255* / 105-255 · Confusion T7 105-240 / 75-195 · Goblin T7 96-225 / 90-216 · Earthquake T5 84-195 / 24-76 · Royal T5 75-174 / 36-96 · Aqua Veil / Verdant Guard T5 66-156 · Gold Aegis / Blood Iron T4 36-84 · Azure T4 30-76 · Crimson T3 20-50 / 16-44 · Onyx T2 16-40 · Oak T1 4-16

**Boots** (all Tier 5, negative CT to act sooner) — Torrent Sandals -1800 to -500 CT · Royal Slippers -1500 to -360 · Divine Sandals -1600 to -400 · Golden Slippers -1300 to -300

**Amulets** (most flexible slot) — Sauron T10 ATK 150-255*, DEF 20-60, HP 75-195, CC 24-54, CD 60-165, 2-3 sockets · Blood Cross T9 ATK 105-240, CC 15-36, CD 45-120 · Hades Key T8 ATK 75-180 · Enchanters Gem T8 CC 15-36, CD 36-105 · Sunfire Ember T7 ATK 54-135 · Tempest Ember T7 ATK 45-120 · Gaia T7 DEF 20-60, HP 90-225 · Storm T7 ATK 24-70, CC 8-20, CD 20-56 · Crimson Ember T6 ATK 24-64 · Celestial Prism T6 DEF 16-44, HP 60-165 · Amethyst Prism T6 CC 8-20, CD 16-44 · Gold Cross T5 ATK 16-44

**Sauron is the strongest crafted item in the game** — it's the only Tier 10 piece and the only one with 3 possible sockets.`
},

/* ============================ GACHA ============================ */
{
  page: "Gacha Wheels", url: B + "critter-quest-guides/gacha-wheels",
  title: "Blue Wheel odds and pity",
  tags: ["blue wheel", "free spins", "gacha odds", "gold wheel spin", "pity", "100 spins"],
  body: `The Blue Wheel is **free**. Most prizes are resource vouchers and crafting materials. Its rarest prize is a Gold Wheel Spin token.

| Prize | Odds |
|---|---|
| Resource Vouchers | 25% |
| Healing Potions | 20% |
| Raw Metals Vouchers | 17% |
| Processed Material Vouchers | 13% |
| Refined Metals | 10% |
| Vial Vouchers | 6% |
| Tool Tokens | 4.5% |
| Rough Gems | 3% |
| Gold Wheel Spin | 1.5% |

**Pity:** after 100 Blue spins without a Gold Wheel Spin, your next spin is guaranteed to be one.`
},
{
  page: "Gacha Wheels", url: B + "critter-quest-guides/gacha-wheels",
  title: "Gold Wheel odds, Planet Splitter and Bag of Goodies",
  tags: ["gold wheel", "planet splitter", "bag of goodies", "town skin", "gacha odds", "200 spins", "pity"],
  body: `Spun with a Gold Wheel Spin token won on the Blue Wheel. Prizes are exclusive equipment, town skins, and the rarest items in the game.

| Prize | Odds |
|---|---|
| Weapon | 20% |
| Hat | 18% |
| Shield | 17% |
| Boots | 16% |
| Amulet | 15% |
| Town Skin | 10% |
| 2 Free Gold Spins | 2% |
| Planet Splitter | 1% |
| Bag of Goodies | 0.5% |

**Top prizes:** Planet Splitter is an **Apex-tier legendary weapon**. Bag of Goodies is a **full set of equipment, a town skin, an Emerald Tool, and a Perfect Gem**.

**Pity:** after 200 Gold spins without a Bag of Goodies, your next spin is guaranteed to be one.

Equipment won on the Gold Wheel has randomly rolled stats and sockets, the same as crafted gear.`
},
{
  page: "Vouchers", url: B + "critter-quest-guides/vouchers",
  title: "Vouchers — transferable until you redeem them",
  tags: ["vouchers", "redeem", "nft voucher", "transfer", "burn voucher", "spending order"],
  body: `Vouchers come from Blue Wheel spins or other in-game rewards. Each holds a stack of a single material — a resource, ore, processed material, or vial.

- A voucher is an **NFT**. While it stays a voucher you can **transfer or trade it**.
- Redeem it from the **Events page → Redeem**. Redeeming **burns** the voucher and adds its materials to your town.
- **Once redeemed, the materials are in-game only** — usable for crafting and repairs, but they cannot be sold or transferred.
- Crafting and repair costs are paid from your **redeemed voucher materials first**, then from your regular stock.

So if you plan to trade, don't redeem early.`
},

/* ============================ BEACH CHESTS ============================ */
{
  page: "Beach Chests & Lost Items", url: B + "how-to-play/beach-chests-and-lost-items",
  title: "Cracking beach chests — rules and cooldowns",
  tags: ["beach chest", "crack chest", "runner", "24 hour cooldown", "level 5", "3 chests"],
  body: `Gear lost when a critter is defeated in PvP flows into a shared pool other players can win back by cracking **beach chests**.

- Every town has **3 beach chests**. Visit another player's town, send a critter (a "runner") to a chest, and crack it.
- **Both your home town and the town you're visiting must be level 5 or higher.**
- Each attempt puts a **24-hour cooldown** on the critter that ran it (and on that chest). Rotate several critters to get more chances per day.`
},
{
  page: "Beach Chests & Lost Items", url: B + "how-to-play/beach-chests-and-lost-items",
  title: "Beach chest odds and multiplier items",
  tags: ["chest odds", "60 30 10", "multiplier item", "50 multiplier", "lost items pool", "drop chance"],
  body: `| Outcome | Base chance |
|---|---|
| Nothing | 60% |
| Resource | 30% |
| Item (from the lost-items pool) | 10% |

A **multiplier item** (worth 10, 25, or 50) shifts the odds away from "nothing" toward "item". At **multiplier 50 the nothing chance drops to 10% and the item chance rises to 60%**. The resource chance stays at 30%. Multiplier items are consumed when used.

Resource wins pay 1–3 units, weighted toward Wood and Stone. The item tier pulls a real piece of gear out of the lost-items pool; if the pool is empty it falls back to a resource.`
},
{
  page: "Beach Chests & Lost Items", url: B + "how-to-play/beach-chests-and-lost-items",
  title: "The Reaper's Hoard and the Graveyard",
  tags: ["reaper's hoard", "graveyard", "lost items vault", "tombstone", "recent tab", "dead critters"],
  body: `**The Reaper's Hoard** lists every piece of gear currently sitting in the lost-items pool, pulled from critters that fell in PvP. Browse it to see what's up for grabs, sort by stat, and check durability, sockets and gems before hunting for it in chests. A **Recent** tab shows a live 24-hour feed of chest opens across all players.

**The Graveyard** is where critters destroyed in PvP come to rest. Each tombstone keeps the critter's rolled stats and the gear it was carrying, so you can see exactly what was lost and where it went. From a tombstone you can jump to the raider's town on the map.`
},

/* ============================ LEVELING / PROMOTION ============================ */
{
  page: "Glossary", url: B + "glossary",
  title: "Leveling up — XP cost per level band",
  tags: ["level up", "xp", "level cost", "level 100", "6742 quest", "leveling"],
  body: `You earn XP through gameplay, then spend $QUEST to apply level upgrades. Costs scale:

| Levels | $QUEST per level |
|---|---|
| 1–10 | 8 |
| 11–20 | 17 |
| 21–30 | 25 |
| 31–40 | 33 |
| 41–50 | 50 |
| 51–60 | 67 |
| 61–70 | 83 |
| 71–80 | 100 |
| 81–90 | 125 |
| 91–100 | 167 |

Reaching **level 100 costs about 6,742 $QUEST** in total. All leveling and promotion costs come from the **individual critter's $QUEST balance**, not the town balance.`
},
{
  page: "Glossary", url: B + "glossary",
  title: "Attribute points — what each point buys and the caps",
  tags: ["attribute points", "stat points", "atk def hp caps", "attribute reset", "85 quest", "max stats"],
  body: `Each level grants spendable attribute points:

| Stat | Per point | Cap |
|---|---|---|
| ATK | +1 | +100 |
| DEF | +1 | +100 |
| HP | +5 | +500 |
| CC (Critical Chance) | +0.1% | +10% |
| CD (Critical Damage) | +2% | +200% |
| CT (Cooldown Time) | +100s | +10,000s |

**Attribute reset** costs **85 $QUEST** with a **30-day cooldown**, so plan your build before spending.`
},
{
  page: "Glossary", url: B + "glossary",
  title: "Star Promotion System — costs and clone consumption",
  tags: ["promotion", "stars", "5 stars", "22951 quest", "consume clone", "promote critter", "refresh"],
  body: `Advance through fractional star levels from **0.2 up to 5.0 stars — 25 promotion stages**. Each 0.2 increment is a separate promotion. Full stars at 1.0, 2.0, 3.0, 4.0 and 5.0 are significant power jumps.

| Milestone | Cost | Cumulative |
|---|---|---|
| 0.2 Stars | 17 $QUEST | 17 |
| 1.0 Star | 83 $QUEST | 200 |
| 2.0 Stars | 250 $QUEST | 950 |
| 3.0 Stars | 667 $QUEST | 3,117 |
| 4.0 Stars | 1,667 $QUEST | 8,784 |
| 5.0 Stars | 4,167 $QUEST | **22,951 total** |

**Clone consumption:** the first promotion (0.2 stars) can use ANY critter clone except a clone of itself. Every later promotion requires a **specific edition number**. You get **3 refreshes** to reroll the required edition, at an incremental $QUEST cost paid from the critter's balance; refreshes reset every 3 days or immediately on a successful promotion.

**Consumed clones are permanently destroyed.** Each promotion adds permanent multipliers to all the critter's stats.`
},
{
  page: "Glossary", url: B + "glossary",
  title: "Reading the stats display",
  tags: ["stats display", "base lvl promo equip total", "stat breakdown", "gathering vs combat"],
  body: `The stats panel breaks down each stat by source:

- **BASE** — original critter base attributes
- **LVL** — bonuses from level-up attribute point allocation
- **PROMO** — multipliers from the star promotion system
- **EQUIP** — bonuses from equipped items (hats, boots, accessories)
- **TOTAL** — final calculated stat, with cumulative bonus in parentheses

Important: **equipment bonuses apply to combat stats only.** Gathering efficiency is calculated separately.`
},

/* ============================ NFTs / ECONOMY ============================ */
{
  page: "Glossary", url: B + "glossary",
  title: "Master Editions vs Cloned Editions",
  tags: ["master edition", "clone", "cloned edition", "difference", "indestructible", "royalties", "which should i buy"],
  body: `**Master Editions** — the sovereign critters:
- Can mint **15 Cloned Editions**
- Earn **royalties from mints and secondary sales**
- Receive partner airdrops into their Token Bound Wallet
- **Permanent and indestructible** — never burn, floor at 0 stars
- On-chain renaming and ability management, which reflect on all clones

**Cloned Editions** — born from Masters:
- Inherit base stats, visual characteristics and name from the Master
- Fully participate in all gaming activities
- **Can be lost or burned in PvP**
- Can be consumed to transfer contents or experience to another Critter
- Have their own Token Bound Wallet

Both have individual treasure chests (token-bound wallets), can equip unique gear, and earn rewards independently. The trade-off is simple: **Masters are lower-risk long-term value; Clones are higher-risk tactical flexibility.**`
},
{
  page: "Clone Minting", url: B + "critter-quest-guides/clone-minting",
  title: "Setting up a clone mint",
  tags: ["clone minting", "mint clones", "15 clones", "bonding curve", "mint price", "sol", "launch date"],
  body: `Master Editions can mint clones for other players to buy and play.

- A Master Edition can have up to **15 clones in circulation at once**.
- You set the **mint price in SOL** and the supply. There is no fixed price table — the price is yours to choose.
- You choose how bound $QUEST is allocated: either a **fixed amount per clone** or a **bonding curve** where earlier mints receive more $QUEST than later ones.
- You can set a launch date (**24-hour minimum delay**) and an optional end date (**minimum 24 hours active**).

Allocating $QUEST to your clones makes them more useful to buyers, since players need $QUEST inside a clone to level and promote it.`
},
{
  page: "Clone Minting", url: B + "critter-quest-guides/clone-minting",
  title: "What you earn from clone mints",
  tags: ["clone revenue", "5% royalty", "secondary sales", "clone dashboard", "earnings", "boost"],
  body: `- Each clone sale pays you in **SOL**, split between you and the collector based on your configured boost.
- You earn a **5% royalty on secondary sales** of your clones.
- Manage active mints and claim earnings from the **Clone Dashboard**.

The Cloning tab also shows **demand metrics** — how many players need your specific critter for their own promotions, which is the main driver of clone demand.`
},
{
  page: "Glossary", url: B + "glossary",
  title: "Token Bound Accounts — how ownership works",
  tags: ["token bound", "tba", "treasure chest", "nft wallet", "asset ownership", "smart contract wallet"],
  body: `Token Bound Accounts (TBAs) are smart contract wallets that let an NFT directly own and control assets, rather than everything sitting in your main wallet.

In Critters Quest both **Critter NFTs and Town NFTs use TBAs**. Resources, tools, equipment and progress are stored on the NFT itself. That means:
- Clear asset separation between different characters and towns you own
- No accidental transfers of character-specific items
- You can sell an **entire equipped character or developed town as a complete package**`
},
{
  page: "Glossary", url: B + "glossary",
  title: "The Swap — how resources become $QUEST",
  tags: ["swap", "liquidity pool", "meteora", "dlmm", "price discovery", "sell resources", "resource tokens"],
  body: `The Swap lets you exchange resource tokens for $QUEST inside your Town Bank, with no external wallet needed. It's built on **Meteora's DLMM** (Dynamic Liquidity Market Maker).

Resource pools are **bootstrapped with one-sided $QUEST liquidity** — the game supplies $QUEST but no resource tokens. As players gather materials they mint new resource tokens into circulation for the first time, and natural price discovery happens from there: scarce resources from difficult locations command higher prices, abundant materials settle lower.

This means resource values reflect actual gameplay scarcity rather than artificial pricing, and prices fluctuate with gathering patterns and crafting demand.`
},
{
  page: "Glossary", url: B + "glossary",
  title: "Privy — wallets without the crypto friction",
  tags: ["privy", "wallet", "login", "email login", "onboarding", "no seed phrase"],
  body: `Privy is the wallet infrastructure behind Critters Quest login. Instead of setting up a crypto wallet manually, you create an account with **email, phone, or social login**, and Privy generates and manages a blockchain wallet in the background.

No wallet extensions, no seed phrases, no buying crypto for gas before you can start — while still keeping full on-chain ownership of your in-game assets.`
},
{
  page: "Marketplace", url: B + "how-to-play/marketplace",
  title: "The in-game Marketplace",
  tags: ["marketplace", "buy gear", "bruno", "1% fee", "buyer fee", "sell", "listings"],
  body: `Buy gear, tools and critters other players have listed, without leaving the game. Find it at the market stalls in town or by talking to **Bruno**, the market bear.

- Browse listings for equipment (Hat, Weapon, Shield, Amulet, Boots, Book), tools and critters.
- Filter by gear slot and currency, and sort to find what you need.
- A **1% buyer fee** is added on top of the listed price at checkout.
- Purchases are paid in **$QUEST**.

**Tips:** check rolled stats, durability and sockets before buying — a cheaper item with better rolls is often the smarter pick. Critters listed for sale **include whatever gear is equipped on them**, so read the full loadout.`
},

/* ============================ TOWN / WORKSHOPS REFERENCE ============================ */
{
  page: "Glossary", url: B + "glossary",
  title: "The four workshops and what they do",
  tags: ["workshops", "muddy anvil", "bubbling barrel", "gleaming nest", "mystic mirror", "what does each building do"],
  body: `- **Muddy Anvil (Blacksmith)** — crafts tools and battle gear, repairs tools, smelts raw ores into refined metals. Your most-visited building.
- **Bubbling Barrel (Alchemist)** — brews potions, blows glass vials, discovers rare alchemical materials. Unlocks at Town L3.
- **Gleaming Nest (Jeweler)** — cuts gems, combines lower-tier gems into higher-tier ones, and sockets gems into gear. Unlocks at Town L5.
- **Mystic Mirror (Oracle)** — identifies unknown recipes found while gathering. Your Mirror level caps which recipe tiers you can reveal.
- **Glowing COG (Ancient Tech Lab)** — Tier 11 Advanced Tools and tech components. Unlocks at Town L9.`
},
{
  page: "Glossary", url: B + "glossary",
  title: "Recipes — consumed, not unlocked",
  tags: ["recipes", "tier 1 to tier 10", "consumed", "identify", "crafting components"],
  body: `Recipes are required for creating weapons, armor, consumables and tools. Every crafting action consumes a recipe of the appropriate tier — Tier 1 for basic equipment, scaling to Tier 10 for legendary gear.

**Recipes are consumed during crafting, not permanently unlocked.** That creates ongoing demand as you progress. Even at maximum progression you'll still need lower-tier recipes for common consumables, tools and standard replacements.

Unidentified recipes found while gathering are revealed at the Mystic Mirror.`
},
{
  page: "Glossary", url: B + "glossary",
  title: "Hero Critter vs PFP Critter",
  tags: ["hero critter", "pfp critter", "difference", "profile pic", "walk around town"],
  body: `Your **Hero Critter** is the one you walk around your Town with. Your **PFP Critter** is the one shown as your in-game profile picture. They're set separately.`
},
{
  page: "Glossary", url: B + "glossary",
  title: "Sockets — where they come from",
  tags: ["sockets", "socket slots", "random roll", "crafting sockets", "transfer gems"],
  body: `Sockets are enhancement slots that appear **randomly on tools, weapons and equipment during crafting**. When an item rolls a socket it can be enhanced with a gem at the Gleaming Nest.

Your Gleaming Nest level determines which gem tiers you can socket and how powerful the enhancement is. Gems can be **removed and transferred between items**, so you carry valuable gems forward as you upgrade gear. Socketed items are meaningfully more valuable than their plain counterparts.`
},
{
  page: "Glossary", url: B + "glossary",
  title: "The World Map and the World Bank",
  tags: ["world map", "world bank", "valdara", "regions", "world boss", "territorial"],
  body: `The World Map is the open world of Valdara — the arena for resource collection, PvP and territorial control, shared by all players.

It contains resource nodes, other players' towns, **world bosses** that need strategic planning and powerful critters, roaming monsters for PvE, and the **World Bank** — a major territorial objective and focal point for large-scale PvP.

Access to new regions unlocks as your town level rises. Each **Region** holds a Titan's legacy, and Region bosses are the Titans themselves returned in spirit.`
},
{
  page: "Glossary", url: B + "glossary",
  title: "Birds Eye Viewing (beta camera mode)",
  tags: ["birds eye", "camera mode", "overhead view", "drag navigation", "town navigation"],
  body: `A camera mode that toggles an overhead perspective of your town. Click and drag to move around without your character walking, and click buildings directly to interact instantly. Currently in beta testing for player feedback.`
},
{
  page: "Glossary", url: B + "glossary",
  title: "Beta Points and the leaderboard",
  tags: ["beta points", "leaderboard", "daily login", "streak", "rewards", "rankings"],
  body: `The Beta Points System logs player activity, verified by the Central Bank. Earn points by playing and completing activities, with a **daily login streak multiplier** that grows with consecutive logins. A live leaderboard shows top players, ranks and total points. The full point values are in the Rewards Structure tab. Leaderboard rewards are yet to be announced.`
},
{
  page: "Glossary", url: B + "glossary",
  title: "Genesis Quest",
  tags: ["genesis quest", "staking", "master edition holders", "unlock quest", "tge", "tool milestones"],
  body: `Genesis Quest lets Master Edition holders unlock their bound $QUEST tokens and put them to work. Staking releases $QUEST at a steady rate and earns access to **tool claim milestones, multiplier boosts and special rewards** tied to activity.

During the Token Generation Event, a share of SOL raised flows back to staked Masters in proportion to their $QUEST contributions.`
},
{
  page: "Critters Hub", url: B + "how-to-play/interface/14.-critters-hub",
  title: "The Critters Hub — three tabs",
  tags: ["critters hub", "manage tab", "gathering tab", "cloning tab", "interface", "dashboard"],
  body: `A dedicated Critters button with a three-tab system:

**Manage** — view all critters with equipment slots (tool, hat, boots, accessory), level, star rating and gathering power (G.P.). Search by name; manage equipment through interactive icon slots.

**Gathering** — real-time overview of active critters, availability statistics, a potential $QUEST earnings tracker, and per-critter detail: location, time remaining, estimated rewards and HP status.

**Cloning** — clone revenue dashboard, demand metrics (how many players need your critter for promotion), and controls to start, stop and claim clone mint earnings.`
}

];
