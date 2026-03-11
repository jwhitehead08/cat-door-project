export interface ArticleSection {
  heading?: string;
  body: string;
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishDate: string;
  sections: ArticleSection[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'how-to-choose-a-pet-door',
    title: 'How to Choose the Right Pet Door for Your Home',
    description:
      'Not all pet doors are created equal. Here\'s what to evaluate before buying — from sizing and material to installation type and energy efficiency.',
    category: 'Buying Guide',
    readTime: '6 min read',
    publishDate: 'February 12, 2026',
    sections: [
      {
        body: 'A pet door is a permanent modification to your home. Choose the wrong size, material, or installation type and you\'ll be living with the consequences — drafts, security gaps, or a door your pet simply won\'t use. This guide covers the decisions that matter before you buy.',
      },
      {
        heading: 'Start With Accurate Sizing',
        body: 'The most common mistake pet owners make is guessing their pet\'s size. Manufacturers publish sizing charts, but the real measurement that matters is your pet\'s shoulder width and the height from the floor to the top of their back — not just weight or breed category.',
        bullets: [
          'Measure shoulder width: this determines the door\'s opening width',
          'Measure back height at the withers for opening height',
          'Add 2 inches to each dimension as a comfort margin',
          'For growing puppies, size up one category',
          'Multi-pet homes should size for the largest animal',
        ],
      },
      {
        heading: 'Flap vs. Electronic / Microchip Door',
        body: 'Standard flap doors are the most affordable option and work well for single-pet homes in low-traffic areas. Electronic and microchip-activated doors are worth the upgrade if you have multiple pets, live in an area with wildlife intrusion (raccoons, opossums), or want app-based access control.',
        bullets: [
          'Flap doors: lower cost, no batteries, pet learns quickly',
          'Microchip doors: reads your pet\'s existing implanted chip — no collar required',
          'RFID collar-tag doors: slightly lower cost than microchip, but relies on the collar staying on',
          'App-controlled doors: remote lock/unlock, curfew scheduling, entry history',
        ],
      },
      {
        heading: 'In-Door vs. In-Wall Installation',
        body: 'Where you install the door determines the difficulty of the project, the type of door you can use, and whether the modification is reversible. In-door installs (cutting through the door panel) are the most common and easiest to reverse. In-wall installs require a tunnel unit and a structural cut through the wall, but give you placement flexibility — especially useful for sliding glass door homes or when you want the entry point in a specific room.',
      },
      {
        heading: 'Insulation and Energy Efficiency',
        body: 'A pet door is a hole in your building envelope. Poorly insulated flaps will cost you in heating and cooling bills, especially in climates with temperature extremes. Look for these features:',
        bullets: [
          'Double- or triple-flap designs that trap an air buffer',
          'Magnetic seal closures that prevent flap flutter in wind',
          'Foam or rubber weatherstripping around the frame',
          'Energy Star certification or published U-factor ratings for premium units',
        ],
      },
      {
        heading: 'Wall Material Changes the Installation Entirely',
        body: 'Cutting through drywall is straightforward. Cutting through brick, stucco, or siding requires specialized tools, a tunnel extension to fill the wall depth, and finish work to match the existing surface. If your exterior wall is anything other than standard wood-framed drywall, factor professional installation into your budget — the finish work alone is where most DIY installs fall short.',
      },
      {
        heading: 'The Case for Professional Installation',
        body: 'A pet door installed by a professional comes with a finished edge, weatherproof seal, and a trim that matches your existing paint or stain. More importantly, a professional will identify structural elements — studs, pipes, wiring — before making any cut. The cost of a bad DIY cut into a load-bearing element or an electrical run far exceeds the cost of having it done right the first time.',
      },
    ],
  },
  {
    slug: 'cat-door-vs-dog-door',
    title: 'Cat Door vs. Dog Door: What\'s the Difference?',
    description:
      'Cat doors and dog doors look similar on the shelf, but the differences in size, security features, and installation options are significant. Here\'s how to tell them apart.',
    category: 'Pet Owners',
    readTime: '5 min read',
    publishDate: 'January 28, 2026',
    sections: [
      {
        body: 'Walk into any home improvement store and you\'ll find cat doors and dog doors on the same shelf. They look similar — a frame, a flap, some mounting hardware. But the differences in size range, flap construction, security technology, and installation options are significant enough that choosing the wrong category will cost you.',
      },
      {
        heading: 'Size and Flap Construction',
        body: 'Cat doors are sized for animals roughly 5–18 lbs and feature lighter, flexible flaps that respond to a cat\'s nudge. Dog doors span a much wider range — from small breed panels that aren\'t much larger than a cat door, up to extra-large openings for 100+ lb breeds that require reinforced, heavy-duty flaps designed to withstand repeated impact.',
        bullets: [
          'Cat doors: typically 6"–8" wide opening, soft flexible flap',
          'Small dog doors: 7"–10" wide, medium-weight flap',
          'Large/XL dog doors: 12"–16"+ wide, rigid or dual-flap construction',
          'Heavy flaps are a safety feature — they resist wind pressure and raccoon entry',
        ],
      },
      {
        heading: 'Security and Smart Features',
        body: 'Cat doors were the first to widely adopt microchip-activated locking because raccoons, opossums, and neighborhood cats are all small enough to squeeze through a cat-sized opening. Most modern cat doors now offer microchip sensing as a standard or available upgrade. Dog doors are catching up, but fewer models offer microchip reading at larger door sizes — RFID collar tags remain more common for large-breed smart doors.',
      },
      {
        heading: 'Location and Interior Use Cases',
        body: 'Cat doors are frequently installed on interior doors — between rooms, between floors, or leading to a litter box area — because controlling a cat\'s room access is a common household need. Dog doors are almost exclusively installed on exterior doors or walls as an outside access point. This changes the product design: interior cat doors often have no weatherstripping and lighter frames, while exterior dog doors are built to seal against the elements.',
      },
      {
        heading: 'Tunnel Depth for Wall Installations',
        body: 'If you\'re cutting through an exterior wall rather than a door, the wall tunnel depth matters. Standard exterior walls are 4"–6" deep (2x4 or 2x6 framing). Cat door tunnel kits are designed for this range. Dog doors for large breeds may require extended tunnel kits for walls thicker than standard, especially in older homes with added insulation layers. Always measure wall depth before purchasing.',
      },
      {
        heading: 'Can You Use a Dog Door for a Cat?',
        body: 'Technically, yes — a small dog door will work for most cats. But a larger opening means a less secure seal, a heavier flap your cat may resist pushing, and a wider entry point for wildlife. If the household has both cats and dogs, the right move is usually to install the dog door as the primary access point and train both animals to use it, rather than cutting two separate openings.',
      },
      {
        heading: 'Bottom Line',
        body: 'Match the door to the animal. If you have cats only — especially if security from strays or wildlife is a concern — invest in a microchip-activated cat door. If you have dogs, size to your largest breed and evaluate whether smart features justify the cost difference. And if you have both, a professional consultation is worth the time before you make any cuts.',
      },
    ],
  },
  {
    slug: 'pet-doors-texas-summers',
    title: 'Pet Doors for Texas Summers: What You Need to Know',
    description:
      'Texas heat puts unique demands on pet door insulation. Here\'s what to look for — and what to avoid — if you\'re installing in College Station, Austin, Houston, or anywhere else in the South.',
    category: 'Texas Homeowners',
    readTime: '5 min read',
    publishDate: 'January 14, 2026',
    sections: [
      {
        body: 'Installing a pet door in a Texas home is different from installing one in Minneapolis or Seattle. The summer heat index regularly pushes past 105°F across Central and South Texas, and your HVAC is working against a much larger thermal gradient. A poorly insulated pet door flap can become a surprisingly significant drain on your energy bill — and your home\'s comfort.',
      },
      {
        heading: 'Why Texas Heat Changes the Equation',
        body: 'In moderate climates, a single-flap pet door with a basic magnetic closure is often fine. In Texas summers, that same door becomes a direct thermal exchange point between a 105°F exterior and a 74°F interior. The temperature differential (ΔT) drives continuous heat transfer through the flap material, the frame seal, and any gaps in the installation. Multiply that by the hours per day the door sits unused and you\'re looking at real energy loss.',
      },
      {
        heading: 'What to Look for in a Hot Climate',
        body: 'Texas installations benefit from several features that are optional elsewhere but functionally important in a hot climate:',
        bullets: [
          'Double-flap designs: two flaps with an air gap between them act as a thermal buffer',
          'Insulated rigid flaps: foam-core or rigid panels hold up better to heat than soft vinyl',
          'Magnetic perimeter seals: prevent flap flutter and close gaps that let conditioned air escape',
          'White or light-colored exterior trim: reduces solar heat absorption at the frame',
          'Tunnel insulation: for in-wall installs, insulated tunnel kits prevent conductive heat transfer through the wall cavity',
        ],
      },
      {
        heading: 'The Impact on Your HVAC',
        body: 'A single uninsulated pet door in a well-sealed home can add 8–15% to your cooling load on peak summer days, according to energy auditors in hot-humid climates. For a central Texas home running a 4-ton HVAC system, that\'s meaningful. An insulated double-flap door, properly installed with a weatherproof frame seal, reduces that impact to near zero.',
      },
      {
        heading: 'College Station and Bryan: Specific Considerations',
        body: 'Homes in College Station and Bryan face the full range of Central Texas weather — not just summer heat, but winter cold snaps that can drop below freezing in January and February. The insulation investment that protects against summer heat transfer pays double dividends in winter. Additionally, many Bryan-College Station homes have brick or stucco exterior walls rather than wood siding, which means an in-wall installation requires a concrete or masonry cut — work that requires the right tools and finish skills to do cleanly.',
      },
      {
        heading: 'Smart Doors and Heat Management',
        body: 'App-controlled pet doors offer a feature that\'s particularly valuable in Texas: curfew mode and scheduled locking. During peak heat hours (typically 2–6 PM), a smart door can be set to lock automatically, reducing the thermal impact during the hottest part of the day. Your pet stays in the air conditioning and the door stays closed. This is a legitimate quality-of-life feature in a hot climate, not just a tech novelty.',
      },
      {
        heading: 'What to Avoid',
        body: 'A few common mistakes Texas homeowners make when selecting pet doors:',
        bullets: [
          'Buying a door rated for northern climates without checking the flap material (vinyl degrades faster in UV exposure)',
          'Skipping the tunnel insulation kit on wall installations',
          'Choosing light-duty magnetic closures that won\'t hold against Texas wind and pressure differentials',
          'Installing on a south- or west-facing wall without shade coverage — direct afternoon sun accelerates flap wear',
        ],
      },
    ],
  },
  {
    slug: 'in-wall-vs-in-door-installation',
    title: 'In-Wall vs. In-Door Pet Door Installation: Which Is Right for You?',
    description:
      'Two ways to install a pet door — each with real trade-offs. Here\'s how to decide based on your home type, renter status, and long-term plans.',
    category: 'Installation Guide',
    readTime: '5 min read',
    publishDate: 'December 30, 2025',
    sections: [
      {
        body: 'When it comes to pet door installation, most homeowners face the same first decision: put it in the door or cut through the wall? Both options work. But they suit different homes, different situations, and different long-term plans. Here\'s how to think through the choice.',
      },
      {
        heading: 'In-Door Installation: The Most Common Choice',
        body: 'Cutting through a door panel — whether hollow-core interior, solid wood exterior, or fiberglass — is the most straightforward installation type. The door provides a flat, accessible surface, the depth is minimal, and the installation doesn\'t involve your home\'s structural envelope. Most pet door manufacturers design their products primarily for this installation type.',
        bullets: [
          'Easier and faster to install — typically under 2 hours',
          'Works on most door types: wood, fiberglass, steel-skin',
          'Easier to reverse: fill the opening and replace or repaint the door panel',
          'Smaller tunnel depth — no extension kit required in most cases',
          'Lower labor cost for professional installation',
        ],
      },
      {
        heading: 'The Sliding Glass Door Exception',
        body: 'If your pet\'s natural exit point is a sliding glass door, an in-glass cut or a panel insert are your two options. Glass cutting requires a professional with the right equipment and is only practical for tempered glass panels. Panel inserts — pre-framed panels that fill the sliding door track with a built-in pet door — are the most popular solution for renters and homeowners who want a clean, non-destructive installation. The trade-off is a slight reduction in door clearance height.',
      },
      {
        heading: 'In-Wall Installation: More Flexibility, More Complexity',
        body: 'Installing through an exterior wall decouples the pet door location from your existing door and window placement. This is useful when your door configuration doesn\'t work for a pet door — a steel door with a foam core that can\'t be cut, a French door you don\'t want to modify, or a configuration where the natural exit point is in the middle of a wall.',
        bullets: [
          'Placement flexibility: put the door anywhere on an exterior wall',
          'Better option for homes with no suitable door panel',
          'Permanent — not easily reversed without patching and repainting',
          'Requires a tunnel extension kit matched to your wall depth',
          'Stud finding, thermal imaging, and utility checks before cutting',
          'Finish work (trim, caulking, painting) is more involved',
        ],
      },
      {
        heading: 'Structural and Safety Considerations for Wall Cuts',
        body: 'Before any wall cut, a professional installer will check for studs, electrical runs, plumbing, and insulation batt orientation. Cutting through a load-bearing wall or hitting an electrical line are the two worst outcomes of a DIY wall installation. A thermal imaging scan identifies hidden hazards before the first cut is made. This is the primary reason in-wall installations are better suited to professional work than in-door installations.',
      },
      {
        heading: 'Renters: Your Options Are More Limited Than You Think',
        body: 'If you\'re renting, any permanent cut — through a door panel or a wall — typically requires landlord written approval, and many landlords won\'t grant it. Your practical options as a renter are panel inserts for sliding glass doors (no permanent modification) and some in-door options if your landlord approves and you restore the door at move-out. An in-wall cut is generally off the table without written permission.',
      },
      {
        heading: 'Which Should You Choose?',
        body: 'Default to in-door if you have a suitable door and don\'t have a strong reason to go through the wall. It\'s faster, cheaper, more reversible, and the range of available products is larger. Choose in-wall when your door configuration genuinely doesn\'t work, or when you need placement flexibility that only a wall cut can provide. Either way, have a professional assess your specific situation before buying hardware — the right answer depends on what\'s behind your walls.',
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
