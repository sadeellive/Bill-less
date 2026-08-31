export interface Provider {
  slug: string;
  name: string;
  category: 'internet' | 'wireless' | 'tv';
  summary: string;
  commonCharges: { name: string; type: string; description: string }[];
  questionChecklist: string[];
  tips: string[];
}

export interface ResourceArticle {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  category: string;
  body: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
}

export interface FAQItem {
  q: string;
  a: string;
  category?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  unit: string;
  for: string;
  highlight?: boolean;
  features: string[];
}

export const providersList: Provider[] = [
  {
    slug: 'xfinity',
    name: 'Xfinity',
    category: 'internet',
    summary: 'Residential internet and cable bills often combine promotional pricing, equipment rental and regional line items that expire on different timelines.',
    commonCharges: [
      { name: 'Gigabit / Connect Internet Tier', type: 'Recurring base', description: 'The fundamental internet service plan rate.' },
      { name: 'xFi Complete Gateway Rental', type: 'Recurring hardware', description: 'Monthly modem/router hardware lease, often $15–$25/mo.' },
      { name: 'Regional Sports & Broadcast TV Fee', type: 'Recurring surcharge', description: 'Provider surcharge that scales up every year.' },
      { name: 'Unlimited Data Add-on', type: 'Optional add-on', description: 'Additional data cap removal fee.' },
      { name: 'Expired 12/24-mo Promotional Discount', type: 'Credit expired', description: 'Discount line item that drops off automatically after contract.' },
    ],
    questionChecklist: [
      'When did my promotional discount expire or when is it scheduled to expire?',
      'Can I switch to customer-owned modem equipment to eliminate the $15-$25/mo rental?',
      'Are there newer everyday pricing tiers available for existing customers?',
      'Which add-on packs (e.g. streaming packs, security) are currently active and unused?'
    ],
    tips: [
      'Xfinity frequently rolls off 12-month promotional credits without notifying you in the body of an email.',
      'Check if you are renting an xFi Gateway when an approved retail DOCSIS 3.1 modem would pay for itself in 6–9 months.',
      'Always ask for the "Loyalty / Customer Retention" department rather than basic billing support.'
    ]
  },
  {
    slug: 'spectrum',
    name: 'Spectrum',
    category: 'internet',
    summary: 'Spectrum bills typically reflect bundled discounts that roll off in stages at month 12 and month 24, alongside standard equipment and WiFi fees.',
    commonCharges: [
      { name: 'Spectrum Internet Ultra/Gig', type: 'Recurring base', description: 'Standard internet rate after promotional discount steps.' },
      { name: 'WiFi Service Fee', type: 'Recurring optional', description: 'Separate fee charged specifically for activating the router WiFi broadcast.' },
      { name: 'Broadcast TV Surcharge', type: 'Recurring surcharge', description: 'Steadily increasing programming transmission fee on TV packages.' },
      { name: 'Spectrum TV Select Package', type: 'Recurring bundle', description: 'Cable television tier often bundled during initial signup.' }
    ],
    questionChecklist: [
      'Is my current bill reflecting standard rate card or is a promotional credit still applied?',
      'Can I avoid the separate WiFi router charge by using my own wireless router?',
      'What are the current loyalty promotions for existing accounts in my market?'
    ],
    tips: [
      'Spectrum provides free modem units, but charges $5–$7/mo for WiFi router functionality.',
      'Spectrum bills have step-up pricing at 12 and 24 months before hitting full standard rate card.'
    ]
  },
  {
    slug: 'cox',
    name: 'Cox',
    category: 'internet',
    summary: 'Cox statements often include Panoramic Wifi equipment fees, data usage charges, and expiring contract credits.',
    commonCharges: [
      { name: 'Panoramic Wifi Gateway', type: 'Recurring hardware', description: 'Monthly rental fee for Cox hardware.' },
      { name: 'Cox Complete Care', type: 'Optional tech support', description: 'Monthly insurance fee for wiring and technical visits.' },
      { name: '500GB / Unlimited Data Plan', type: 'Optional data add-on', description: 'Additional charge for high-volume data allowances.' }
    ],
    questionChecklist: [
      'What date does my term agreement end?',
      'Do I have Cox Complete Care on my bill and is it required?',
      'What is my monthly data usage compared to the standard data limit?'
    ],
    tips: [
      'Check whether Cox Complete Care was added during a previous technician dispatch and never removed.'
    ]
  },
  {
    slug: 'optimum',
    name: 'Optimum',
    category: 'internet',
    summary: 'Optimum (Altice) statements feature gateway rentals, network enhancement fees, and auto-pay incentive adjustments.',
    commonCharges: [
      { name: 'Altice Gateway / WiFi 6 Extender', type: 'Recurring hardware', description: 'Hardware lease per unit.' },
      { name: 'Network Enhancement Fee', type: 'Provider fee', description: 'Internal operational infrastructure fee.' },
      { name: 'Paper Statement Fee', type: 'Administrative', description: 'Monthly fee for physical paper bill delivery.' }
    ],
    questionChecklist: [
      'Am I receiving the full AutoPay & Paperless billing discount ($5–$10/mo)?',
      'Are there inactive cable boxes or WiFi extenders still billed to the account?',
      'What 1-year loyalty retention rate is available for my speed tier?'
    ],
    tips: [
      'Verify that unused secondary TV boxes or extenders returned to a store were officially cleared from the serial number ledger.'
    ]
  },
  {
    slug: 'att',
    name: 'AT&T',
    category: 'wireless',
    summary: 'AT&T statements for wireless and fiber often include installment plans, device protection, autopay discounts, and line access fees.',
    commonCharges: [
      { name: 'AT&T Unlimited Premium / Extra', type: 'Recurring plan', description: 'Base plan tier per active voice line.' },
      { name: 'AT&T Protect Advantage (Insurance)', type: 'Optional insurance', description: '$14–$17/mo per line device insurance.' },
      { name: 'Next Up Early Upgrade Option', type: 'Optional feature', description: '$6/mo add-on allowing early device trade-in.' },
      { name: 'Installment Device Balance', type: 'Equipment installment', description: 'Monthly phone financing with or without bill credits.' }
    ],
    questionChecklist: [
      'Do any paid-off devices still have insurance or Next Up add-ons enabled?',
      'Is the AutoPay discount being maximized with debit/bank account vs credit card?',
      'Are all promotional trade-in credits applying correctly each month?'
    ],
    tips: [
      'AT&T changed AutoPay policy so that credit cards only receive $5/line discount while debit/checking receives $10/line.',
      'Check if older phones that are fully paid off still have insurance billed monthly.'
    ]
  },
  {
    slug: 'verizon',
    name: 'Verizon',
    category: 'wireless',
    summary: 'Verizon wireless statements itemize plan perks, Mobile Protect insurance, line access charges, and 36-month device financing credits.',
    commonCharges: [
      { name: 'Unlimited Plus / Welcome', type: 'Recurring plan', description: 'Current or legacy mix-and-match tier.' },
      { name: 'Verizon Mobile Protect / Wireless Protection', type: 'Optional insurance', description: '$17–$19/mo device protection.' },
      { name: 'Perk Add-ons (Disney Bundle, Apple One)', type: 'Subscription add-on', description: '$10/mo perks added during checkout.' },
      { name: 'Economic Adjustment Charge / Regulatory Fee', type: 'Carrier surcharge', description: 'Telco administrative recovery charge.' }
    ],
    questionChecklist: [
      'Are we paying for perks or streaming bundles that we already receive through other services?',
      'Are old smartwatch or tablet connected lines still active but no longer used?',
      'When do 36-month device installment credits conclude?'
    ],
    tips: [
      'Check the "Connected Devices" section of your bill for old iPad or Apple Watch cellular lines ($10-$20/mo each) that no one uses.'
    ]
  },
  {
    slug: 't-mobile',
    name: 'T-Mobile',
    category: 'wireless',
    summary: 'T-Mobile bills emphasize taxes-included or taxes-excluded tiers, Protection 360, and monthly bill credits on device promotions.',
    commonCharges: [
      { name: 'Go5G Plus / Magenta / Essentials', type: 'Recurring plan', description: 'Tier determining high-speed hotspot and trade-in eligibility.' },
      { name: 'Protection<360>', type: 'Optional insurance', description: '$13–$18/mo phone warranty & AppleCare.' },
      { name: 'Regulatory Programs Fee (Essentials)', type: 'Surcharge (non-inclusive plans)', description: 'Taxes and fees applied to Essentials tier.' }
    ],
    questionChecklist: [
      'Is my plan on taxes-included (Go5G) or taxes-excluded (Essentials)?',
      'Are third-line-free or promotional line credits registering on every statement?',
      'Are any roaming passes or international add-ons lingering after past travel?'
    ],
    tips: [
      'T-Mobile promotional device credits require maintaining eligible rate plans; changing tiers can accidentally forfeit device credits.'
    ]
  },
  {
    slug: 'frontier',
    name: 'Frontier',
    category: 'internet',
    summary: 'Frontier Fiber and DSL statements include router charges, internet infrastructure surcharges, and legacy service maintenance line items.',
    commonCharges: [
      { name: 'FiberOptic 500/1000 Tier', type: 'Recurring base', description: 'Base synchronous fiber internet speed plan.' },
      { name: 'Internet Infrastructure Surcharge', type: 'Provider fee', description: 'Company operational surcharge.' },
      { name: 'Premium Tech Pro', type: 'Optional support', description: 'Monthly computer support add-on.' }
    ],
    questionChecklist: [
      'Is my address eligible for newly launched Frontier Fiber pricing?',
      'Can non-essential tech support and security suites be removed?'
    ],
    tips: [
      'Frontier fiber often has major loyalty rate adjustments if newer competing fiber has entered your neighborhood.'
    ]
  },
  {
    slug: 'directv',
    name: 'DIRECTV',
    category: 'tv',
    summary: 'DIRECTV satellite and stream bills often feature steep second-year price hikes, regional sports network fees, and receiver connection charges.',
    commonCharges: [
      { name: 'Choice / Ultimate / Premier Package', type: 'Recurring base', description: 'Channel package base tier.' },
      { name: 'Regional Sports Network (RSN) Fee', type: 'Recurring surcharge', description: 'Up to $15.99/mo depending on ZIP code.' },
      { name: 'Advanced Receiver Service (HD/DVR)', type: 'Recurring hardware', description: 'Fee for DVR functionality and multi-room viewing.' },
      { name: 'Additional TV Client Fee', type: 'Hardware per-room', description: '$7/mo for each Genie mini receiver.' }
    ],
    questionChecklist: [
      'What date does the promotional discount conclude?',
      'Are there receivers in guest bedrooms that can be disconnected?',
      'Is the Regional Sports Network fee applicable if our household does not watch live sports?'
    ],
    tips: [
      'DIRECTV bills almost double after the initial 12-month promotional contract period. Contacting before month 12 is essential.'
    ]
  },
  {
    slug: 'dish',
    name: 'DISH',
    category: 'tv',
    summary: 'DISH Network statements combine 2-year TV price guarantees with Hopper DVR fees, Joey client fees, and DISH Protect maintenance packages.',
    commonCharges: [
      { name: 'America\'s Top 120 / 200 Plan', type: 'Recurring base', description: 'Base channel tier.' },
      { name: 'Hopper 3 DVR Service Fee', type: 'Recurring hardware', description: 'Master DVR rental and service charge.' },
      { name: 'Joey Client Connection Fee', type: 'Hardware per-room', description: 'Monthly fee per secondary television unit.' },
      { name: 'DISH Protect Silver/Gold', type: 'Optional insurance', description: 'Equipment and in-home wiring protection.' }
    ],
    questionChecklist: [
      'When is the 2-Year Price Guarantee expiration date?',
      'Can DISH Protect be cancelled without impacting hardware warranty?',
      'What credits are available to match streaming alternatives?'
    ],
    tips: [
      'DISH Protect is frequently added for free for 6 months during installation and converts to $11.99/mo automatically.'
    ]
  }
];

export const resourcesList: ResourceArticle[] = [
  {
    slug: 'how-to-read-your-internet-bill',
    title: 'How to read your internet bill line by line',
    description: 'A plain-language walkthrough of the sections on a typical U.S. internet statement and what each line item usually represents.',
    readTime: '6 min read',
    category: 'Bill basics',
    body: [
      {
        heading: 'Start with the summary page',
        paragraphs: [
          'Most statements open with a summary that shows the previous balance, payments received, new charges and the amount due. The summary is useful for spotting a change month over month, but it rarely explains why a total moved.',
          'If your total changed and you did not change your service, the explanation is almost always further into the statement on pages 2 or 3.'
        ]
      },
      {
        heading: 'Separate recurring charges from one-time charges',
        paragraphs: [
          'Recurring charges repeat every cycle: the service tier, equipment rental and any add-ons. One-time charges appear once: installation, a service call, a late fee or a prorated adjustment after a mid-cycle change.'
        ],
        bullets: [
          'Recurring: plan tier, equipment rental, add-on packages, per-line access charges',
          'One-time: activation, installation, prorated adjustments, late fees',
          'Taxes and government fees: set by jurisdiction, not by the provider'
        ]
      },
      {
        heading: 'Find the promotional end date',
        paragraphs: [
          'Promotional pricing usually appears as a credit applied against the standard rate. When the credit ends, the standard rate remains. Many statements print the promotional end date in small type near the service description (e.g. "Includes $30 discount through Oct 14, 2026").',
          'Knowing that date in advance is the single most useful piece of information on the statement to avoid unexpected bill shock.'
        ]
      },
      {
        heading: 'Write down your questions before you call',
        paragraphs: [
          'A short written list of specific line items is far more effective than a general request for a lower bill. Bring the exact charge names and amounts as they appear on the statement.'
        ]
      }
    ]
  },
  {
    slug: 'questions-to-ask-your-provider',
    title: 'Questions to ask your provider before you renew',
    description: 'A checklist of neutral, specific questions you can ask when a promotional period ends or a contract term comes up for renewal.',
    readTime: '5 min read',
    category: 'Preparation',
    body: [
      {
        heading: 'Ask about dates, not discounts',
        paragraphs: [
          'Questions about dates produce concrete answers. Ask when the current pricing ends, when the contract term ends, and what the standard rate will be on the next cycle.'
        ],
        bullets: [
          'What is the exact end date of my current promotional pricing?',
          'What will my monthly total be after that date if no changes are made?',
          'Which charges on my statement are optional vs required for service?',
          'What plans and promotions are currently published for existing customers in my area?'
        ]
      },
      {
        heading: 'Ask what is optional',
        paragraphs: [
          'Equipment rentals, protection plans and add-on packages are usually optional. Asking which line items are optional gives you a clear list to decide on rather than a stressful yes-or-no negotiation.'
        ]
      },
      {
        heading: 'Record what you are told',
        paragraphs: [
          'Note the date, the representative’s name or badge ID, and any interaction ticket reference number. If an adjustment is agreed, ask which statement it will appear on and confirm on that statement.'
        ]
      }
    ]
  },
  {
    slug: 'understanding-common-fees',
    title: 'Understanding common fees on U.S. service bills',
    description: 'What equipment rentals, regional surcharges, protection plans and administrative fees generally are, and which ones tend to be optional.',
    readTime: '7 min read',
    category: 'Bill basics',
    body: [
      {
        heading: 'Equipment rental',
        paragraphs: [
          'Modems, gateways, routers and set-top boxes are often rented monthly ($10–$25/mo). Some providers allow customer-owned equipment on approved model lists; others require their hardware for certain services.'
        ]
      },
      {
        heading: 'Regional and broadcast surcharges',
        paragraphs: [
          'These are provider-set line items tied to content or regional costs. They are typically part of the service rather than a government tax, even though they appear near the tax section.'
        ]
      },
      {
        heading: 'Protection and insurance add-ons',
        paragraphs: [
          'Device protection is generally optional and continues to bill after a device is paid off unless it is removed. Reviewing which lines carry protection is a common first step.'
        ]
      },
      {
        heading: 'Taxes and government fees',
        paragraphs: [
          'Taxes, 911 fees and universal-service charges are set by federal, state or local rules. They are not negotiable, though they can change if your plan or service address changes.'
        ]
      }
    ]
  },
  {
    slug: 'what-we-cannot-promise',
    title: 'What a bill review can and cannot do',
    description: 'An honest description of the limits of third-party bill review, including outcomes that depend entirely on the provider.',
    readTime: '4 min read',
    category: 'Transparency',
    body: [
      {
        heading: 'No outcome is guaranteed',
        paragraphs: [
          'Every pricing decision belongs to your provider. A review can identify charges worth questioning and prepare a clear request, but no third party can require a provider to change your rate.',
          'Any service that promises a specific dollar amount or a guaranteed reduction before reviewing your account is describing something it cannot control.'
        ]
      },
      {
        heading: 'What is within our control',
        paragraphs: [
          'We control the quality of the review: reading the statement carefully, identifying which items are recurring, flagging expired promotional pricing and preparing a specific, documented request.'
        ],
        bullets: [
          'A line-by-line summary of your statement in plain language',
          'A written list of items worth questioning with supporting context',
          'A prepared request you can send or read aloud to customer retention',
          'A permanent written record of what was requested and when'
        ]
      },
      {
        heading: 'You stay in control of your account',
        paragraphs: [
          'Bill Less America is independent. We are not affiliated with any provider, and we do not change your service without your explicit written approval of the specific request.'
        ]
      }
    ]
  }
];

export const faqList: FAQItem[] = [
  {
    q: 'Can you guarantee my bill will go down?',
    a: 'No. Every pricing decision belongs to your provider. We guarantee the work — a careful review, a written explanation, and a documented request — not how your provider responds.',
    category: 'Guarantees & Scope'
  },
  {
    q: 'How are you paid?',
    a: 'Households pay us a flat, published fee up front. We accept no commissions, referral payments, kickbacks, or revenue share from any service provider.',
    category: 'Independence & Fees'
  },
  {
    q: 'Why do you charge a flat fee instead of a percentage of savings?',
    a: 'Percentage-of-savings models create incentives to claim "theoretical" savings over long timelines or push service changes that might not fit your household. A flat fee means our only job is an honest review.',
    category: 'Independence & Fees'
  },
  {
    q: 'Will you call my provider without me knowing?',
    a: 'Never. You receive the exact draft request first. Nothing is submitted, sent, or communicated to any provider without your explicit written authorization and approval.',
    category: 'Process & Security'
  },
  {
    q: 'What types of statements do you review?',
    a: 'We review residential internet, cable TV, wireless cell phone, and satellite statements from all major U.S. carriers (Xfinity, Spectrum, AT&T, Verizon, T-Mobile, Cox, Optimum, DIRECTV, Frontier, DISH, and others).',
    category: 'Guarantees & Scope'
  },
  {
    q: 'What information do I need to share?',
    a: 'Just a recent statement (PDF or clear photo). We redact or do not require sensitive payment methods, and we only need to understand what services your household actively uses.',
    category: 'Process & Security'
  },
  {
    q: 'How long does a review take?',
    a: 'Standard reviews are completed within 1 to 2 business days. You receive an alert as soon as your written summary and provider request document are ready.',
    category: 'Process & Security'
  },
  {
    q: 'What if my bill is already as low as possible?',
    a: 'If our reviewer inspects every line item and finds that your pricing is already optimized and no items are worth questioning, we tell you that plainly in writing so you have complete peace of mind.',
    category: 'Guarantees & Scope'
  }
];

export const pricingTiers: PricingTier[] = [
  {
    name: 'Single bill review',
    price: '$29',
    unit: 'per statement',
    for: 'One internet, TV, or wireless statement.',
    features: [
      'Line-by-line plain-language summary',
      'Flagged item list with reasons & evidence',
      'One prepared request draft for your approval',
      'Written record of what was requested',
      'Delivered in 1–2 business days'
    ]
  },
  {
    name: 'Household review',
    price: '$79',
    unit: 'one time',
    for: 'Up to four statements across the household.',
    highlight: true,
    features: [
      'Everything in Single bill review, for up to 4 statements',
      'Cross-bill duplicate-service & bundle check',
      'Consolidated household expense overview',
      'Renewal & promotional end-date calendar tracker',
      'Priority turnaround & dedicated review specialist'
    ]
  },
  {
    name: 'Annual watch',
    price: '$149',
    unit: 'per year',
    for: 'Households that want a scheduled check each cycle.',
    features: [
      'Two full household reviews per year (up to 8 statements total)',
      'Scheduled proactive reminders before promotional end dates',
      'Re-review after any unannounced provider price increases',
      'Direct phone access to senior bill analyst for questions'
    ]
  }
];

export const demoBillReviewData = {
  accountName: 'Household Statement #9842',
  provider: 'Xfinity (Comcast)',
  statementDate: 'February 12, 2026',
  totalBilled: '$184.50',
  summaryText: 'We completed a line-by-line review of your residential statement. 3 charges appear to warrant questioning: an expired 24-month promotional credit, an unreturned legacy streaming box rental, and an optional tech support add-on.',
  lineItems: [
    { name: 'Gigabit Extra Internet Tier (Up to 1200 Mbps)', amount: '$110.00', category: 'Recurring base', status: 'standard', note: 'Standard rate card tier' },
    { name: 'Expired 24-Mo Promo Credit ($30.00 discount)', amount: '-$0.00', category: 'Expired credit', status: 'flag', note: 'Expired on Jan 15, 2026. Caused +$30/mo jump.' },
    { name: 'xFi Complete Gateway & Unlimited Data', amount: '$25.00', category: 'Hardware & Data', status: 'review', note: 'Hardware lease. Retail modem purchase could save $25/mo.' },
    { name: 'Flex 4K Streaming Box Rental (2nd Unit)', amount: '$5.00', category: 'Hardware', status: 'flag', note: 'Unused secondary device reported by household.' },
    { name: 'Regional Sports Network Fee', amount: '$14.25', category: 'Surcharge', status: 'standard', note: 'Mandatory provider surcharge on video tiers.' },
    { name: 'Broadcast TV Surcharge', amount: '$21.00', category: 'Surcharge', status: 'standard', note: 'Carrier programming transmission fee.' },
    { name: 'State & Local Regulatory Fees / 911', amount: '$9.25', category: 'Taxes & Gov Fees', status: 'neutral', note: 'Government fee; non-negotiable.' }
  ],
  flaggedItems: [
    {
      title: 'Promotional discount expired (+ $30.00/mo)',
      description: 'Your 24-month $30/mo contract incentive ended last billing cycle. Xfinity currently publishes new 12-month tier promotions for existing accounts in your area.',
      recommendation: 'Request customer loyalty to match current published 1-year contract extension rates.'
    },
    {
      title: 'Secondary Flex Streaming Device ($5.00/mo)',
      description: 'The account reflects a second streaming receiver active on the billing ledger.',
      recommendation: 'Return the second box to a local store or drop-off location to remove this recurring line item permanently.'
    },
    {
      title: 'xFi Gateway Lease ($25.00/mo vs owned hardware)',
      description: 'You are currently paying $300/year to lease the xFi Gateway with Unlimited data bundle.',
      recommendation: 'Evaluate if a standalone DOCSIS 3.1 modem ($130 one-time) fits your household usage patterns.'
    }
  ],
  preparedDraftRequest: `Dear Xfinity Billing & Loyalty Team,

Account Number: XXXXXX-XXXX-01
Service Address: 742 Evergreen Terrace

I am contacting you regarding a billing review of my recent statement dated Feb 12, 2026.

1. Promotional Pricing Expiration: My 24-month promotional credit of $30.00 expired as of January. I value my service and would like to review available 12-to-24-month loyalty promotions or renewal agreements for Gigabit internet in my area.
2. Equipment Return: I have unhooked the secondary Flex streaming device and wish to remove the $5.00/mo rental fee from my active statement.
3. Plan Alignment: Please provide a list of existing-customer rate card options currently available for my household.

Please confirm the adjusted monthly rate and the effective date of any applied credits.

Thank you,
Household Account Holder`,
  timeline: [
    { date: 'Feb 14, 2026 - 10:15 AM', event: 'Statement uploaded by customer' },
    { date: 'Feb 14, 2026 - 02:40 PM', event: 'Line-by-line audit completed by senior analyst' },
    { date: 'Feb 15, 2026 - 09:30 AM', event: '3 flagged items identified and draft request prepared' },
    { date: 'Feb 15, 2026 - 11:00 AM', event: 'Review package delivered to client for approval' }
  ]
};
