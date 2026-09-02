export interface Provider {
  slug: string;
  name: string;
  category: string;
  typicalSavings: string;
  commonFees: string[];
  description: string;
  negotiationTips: string[];
  benchmarkPrice: string;
  logoLetter: string;
}

export interface Resource {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string;
  date: string;
}

export interface FAQItem {
  q: string;
  a: string;
  category?: string;
}

export const providersList: Provider[] = [
  {
    slug: 'xfinity',
    name: 'Xfinity / Comcast',
    category: 'Cable & Internet',
    typicalSavings: '$35 – $75 / mo',
    benchmarkPrice: '$55 – $80 / mo for 500Mbps–1Gbps',
    commonFees: [
      'xFi Complete / Gateway Rental ($15 – $25/mo)',
      'Broadcast TV Fee ($18 – $29/mo)',
      'Regional Sports Fee ($12 – $19/mo)',
      'Late payment & reactivation fees ($10 – $30)'
    ],
    description: 'Xfinity frequently rolls off 12-month and 24-month promotional rates, causing monthly statements to rise abruptly by 40% to 80% without clear customer warning.',
    negotiationTips: [
      'Ask specifically for the active "Loyalty / Customer Retention" department rather than billing.',
      'Audit your gateway equipment: purchasing a certified DOCSIS 3.1 modem saves $180–$300 annually.',
      'Check if ACP or local municipal competitor fiber rates can be matched on your current tier.'
    ],
    logoLetter: 'X'
  },
  {
    slug: 'att',
    name: 'AT&T / AT&T Fiber',
    category: 'Fiber, Wireless & Internet',
    typicalSavings: '$25 – $65 / mo',
    benchmarkPrice: '$55 – $80 / mo for Fiber 300–1000',
    commonFees: [
      'Administrative Fee per line ($3.30/line on wireless)',
      'Regulatory Cost Recovery Fee',
      'Missing AutoPay / Paperless Discount ($5–$10/line difference with debit/ACH vs credit)',
      'Device Protection / Insurance ($14 – $17/line)'
    ],
    description: 'AT&T wireless accounts often carry legacy protection features and missed AutoPay tier requirements (switch to debit/checking to reclaim $5-$10/line discounts).',
    negotiationTips: [
      'Link eligible Fiber and Wireless accounts to trigger the 20% cross-product monthly credit.',
      'Audit legacy insurance: cancel third-party coverage on paid-off devices older than 2 years.',
      'Verify corporate / union / alumni signature discount codes on your account.'
    ],
    logoLetter: 'A'
  },
  {
    slug: 'spectrum',
    name: 'Spectrum (Charter)',
    category: 'Cable, Internet & Mobile',
    typicalSavings: '$30 – $70 / mo',
    benchmarkPrice: '$49.99 – $69.99 / mo for 300–500Mbps',
    commonFees: [
      'Broadcast TV Surcharge ($22 – $25.75/mo)',
      'WiFi Service Fee ($5 – $7/mo on standard standalone routers)',
      'Outdated Cable Box Rental Fees ($10.99/box per month)',
      'Post-promo rate adjustments of +$30/mo after month 12 and month 24'
    ],
    description: 'Spectrum relies heavily on step-up promotional pricing where discounts expire in stages. Cable box fees can be replaced by using the free Spectrum TV app on smart TVs.',
    negotiationTips: [
      'Request the Spectrum One promotional renewal if competitor fiber has expanded in your ZIP.',
      'Return physical set-top boxes and switch to Apple TV, Roku, or Samsung TV native apps.',
      'Opt out of the $7/mo standalone WiFi charge by supplying your own WiFi 6 router.'
    ],
    logoLetter: 'S'
  },
  {
    slug: 'verizon',
    name: 'Verizon / Fios',
    category: 'Wireless & 5G Home / Fios',
    typicalSavings: '$20 – $55 / mo',
    benchmarkPrice: '$49.99 – $89.99 / mo for Fios 300–1Gbps',
    commonFees: [
      'Telco Recovery Charge & Admin Charge ($3.30/line)',
      'Verizon Mobile Protect ($17 – $19/line)',
      'Legacy Mix & Match plan surcharges',
      'Router rental fees on older grandfathered Fios accounts ($15 – $18/mo)'
    ],
    description: 'Verizon Wireless often has users on older "Unlimited" tiers that carry newly imposed $3–$5/line grandfathering penalties compared to current "myPlan" options.',
    negotiationTips: [
      'Audit lines for old "Do More / Play More" plans vs modern "Unlimited Plus / Welcome".',
      'Ensure Paperless + Debit ACH payment is active for $10/line discount.',
      'Check Verizon Mobile + Home Rewards for $10–$25 monthly multi-service discounts.'
    ],
    logoLetter: 'V'
  },
  {
    slug: 'cox',
    name: 'Cox Communications',
    category: 'Cable & Internet',
    typicalSavings: '$30 – $60 / mo',
    benchmarkPrice: '$49.99 – $70 / mo for 250–500Mbps',
    commonFees: [
      'Panoramic Wifi Gateway Rental ($14 – $15/mo)',
      'Data Cap Overages ($10 per 50GB over 1.25TB limit)',
      'Broadcast Surcharge & Regional Sports Fee',
      'Cox Complete Care ($10/mo support subscription)'
    ],
    description: 'Cox frequently attaches monthly Panoramic WiFi rentals and optional tech support subscriptions that can easily be audited and removed.',
    negotiationTips: [
      'Check if your usage warrants the 1.25TB cap before paying for unlimited data add-ons.',
      'Ask for loyalty retention terms matching local 5G home internet alternatives (T-Mobile/Verizon).',
      'Cancel unnecessary recurring protection line items.'
    ],
    logoLetter: 'C'
  },
  {
    slug: 'tmobile',
    name: 'T-Mobile / 5G Home',
    category: 'Wireless & 5G Home Internet',
    typicalSavings: '$15 – $40 / mo',
    benchmarkPrice: '$30 – $50 / mo for 5G Home Internet with voice line',
    commonFees: [
      'Protection 360 Tiered Insurance ($14 – $18/line)',
      'International / Third-Party App Subscriptions',
      'Missed AutoPay discount ($5/line if paid via credit card instead of debit/bank)'
    ],
    description: 'While T-Mobile includes taxes and fees on many plans, accounts frequently accumulate unused add-on features and credit-card AutoPay penalty fees.',
    negotiationTips: [
      'Verify that AutoPay is connected to a debit card or bank account to keep the $5/line discount.',
      'Check Insider Discount codes or Work Perks for 15%–20% off Magenta/Go5G Plus plans.',
      'Consolidate standalone data lines into free/discounted promotion lines.'
    ],
    logoLetter: 'T'
  }
];

export const resourcesList: Resource[] = [
  {
    slug: 'how-to-negotiate-xfinity-cable-internet-bill',
    title: 'How to Negotiate Your Xfinity Bill in 2026 (Word-for-Word Script)',
    category: 'Negotiation Strategy',
    readTime: '6 min read',
    date: 'Updated Feb 2026',
    summary: 'The exact step-by-step retention phone script, competitor comparison formulas, and gateway equipment check to reduce your Comcast bill by $30 to $70 every month.',
    content: `
### Why Your Xfinity Bill Jumps

Comcast/Xfinity uses promotional term contracts (typically 12 or 24 months). Once that period ends, your monthly bill defaults to the standard "everyday rate," which can increase your monthly cost by $30 to $75 for the exact same speed and channels.

### The 4 Step Audit Before You Call

1. **Locate your promotional discount line item**: Look on page 3 of your statement under "Regular Monthly Charges". Check if there is an expiration date shown.
2. **Audit equipment rental fees**: Xfinity charges $15/month for standard xFi Gateways. Purchasing your own DOCSIS 3.1 modem ($120–$160 one-time) eliminates this fee forever.
3. **Check local competitor speeds**: Look up AT&T Fiber, Quantum Fiber, Google Fiber, or T-Mobile 5G Home Internet in your ZIP code. Having their exact pricing ($50-$70/mo) gives you leverage.
4. **Identify broadcast & regional sports fees**: If you have cable TV, these surcharges often add $30–$45/mo on top of advertised rates.

### The Word-for-Word Retention Script

When calling **(832) 554-6367** or your provider's retention department, say:

> *"Hello, I am reviewing my household telecom budget and noticed my promotional rate has rolled off. My bill increased from $65 to $115, whereas competitor fiber in my area is offering equivalent speeds at $60 with no equipment rental. I have been a loyal customer for [X] years and would prefer not to go through the switching hassle. What active retention promotions or loyalty tier credits can we apply to bring my statement back down to my previous rate?"*

If the first representative says no: politely ask to speak with the Customer Loyalty / Account Retention team.
    `
  },
  {
    slug: 'avoid-spectrum-broadcast-tv-and-wifi-fees',
    title: 'How to Eliminate Spectrum WiFi Fees & Cut Cable Box Charges',
    category: 'Fee Reduction',
    readTime: '5 min read',
    date: 'Updated Jan 2026',
    summary: 'Learn how to remove the $7/month standalone WiFi fee, return outdated $11/mo cable boxes, and use the Spectrum TV App to keep your favorite channels for less.',
    content: `
### Spectrum’s Sneakiest Line-Item Charges

Spectrum statements have three major areas where customers overpay without realizing:

1. **The $7.00/month WiFi fee**: Spectrum provides modems for free, but charges $7.00 per month just to activate WiFi on their combo unit. Supplying your own router saves $84 per year.
2. **Cable box rental charges ($10.99/ea)**: A household with 3 TVs pays over $395 annually just to rent plastic set-top boxes.
3. **The Broadcast TV Surcharge ($25.75/mo)**: This fee has risen by over 300% in recent years.

### How to Fix It Today

- Return your physical cable boxes to a local Spectrum Store or UPS Drop-off (save your receipt!).
- Download the free **Spectrum TV App** on Apple TV, Samsung Smart TVs, Roku, or Xbox. You get identical live channels, on-demand, and DVR access with zero box rentals.
- Call retention and request the **Spectrum Choice** package if you only watch local and select cable channels.
    `
  },
  {
    slug: 'att-autopay-credit-card-changes-guide',
    title: 'AT&T AutoPay Discount Rules: How to Reclaim $10/Line Every Month',
    category: 'Billing Policy',
    readTime: '4 min read',
    date: 'Updated Feb 2026',
    summary: 'AT&T cut AutoPay discounts in half for credit card users. Here is how to safely set up debit or bank payments to restore the maximum $10/line monthly savings.',
    content: `
### The New AutoPay Discount Policy

Major carriers including AT&T, Verizon, and T-Mobile have tightened their paperless and AutoPay billing policies:

- **Paid with Credit Card**: AutoPay discount reduced to $5/line (or $0/line on certain older tiers).
- **Paid with Debit Card or ACH Checking**: Full $10/line discount maintained.

For a family with 4 lines on Unlimited Premium or Extra, paying with a credit card costs an extra **$20 to $40 every month ($240 to $480 per year)**.

### How to Protect Yourself with Bank Payments

1. Use a dedicated sub-checking account with a low balance or debit card from an online bank (like Ally or Capital One) to isolate telecom billing.
2. Ensure paperless billing remains toggled **ON** in your online portal.
3. Check your billing cycle date: the full discount applies on the next statement cycle after updating.
    `
  }
];

export const faqList: FAQItem[] = [
  {
    q: 'How does Bill Less America work?',
    a: 'Bill Less America helps consumers lower eligible recurring household bills by negotiating with service providers on their behalf. You submit your recent bill statement and sign a digital Letter of Authorization (LOA). Our experienced negotiation team communicates directly with your provider to seek lower rates, promotional renewals, loyalty discounts, and fee removals. We do the negotiating so you don’t have to.'
  },
  {
    q: 'How does your 25% success-based pricing work?',
    a: 'Our pricing is simple and success-based: our one-time service fee is 25% of the verified savings we successfully obtain for you. If we do not obtain qualifying savings, your fee is $0. There are no upfront fees, no subscription charges, and no hidden costs.'
  },
  {
    q: 'How are "Verified Savings" calculated?',
    a: 'Verified savings is the difference between your previous recurring monthly cost and your new negotiated recurring monthly cost, multiplied by the confirmed savings period (up to 12 months). For example, if we lower your bill by $40/month for 12 months, your total verified savings is $480. Our 25% fee is $120, and you keep the remaining $360 in your pocket.'
  },
  {
    q: 'What if you cannot save me money?',
    a: 'No qualifying savings = No success fee. If your provider refuses to apply discounts or if you are already on the absolute lowest available rate, you owe nothing. The review is 100% free.'
  },
  {
    q: 'Do you need my online account login password?',
    a: 'NO. We NEVER ask for, store, or accept your online portal login passwords. To communicate with your provider on your behalf, we use your account number, customer name, and the standard telephone verification PIN/passcode required by carrier phone representatives, backed by your signed digital Letter of Authorization.'
  },
  {
    q: 'Will my service speed, channels, or features be downgraded?',
    a: 'Never without your explicit approval. Our primary focus is securing discounts, promotional loyalty rates, and fee waivers on your current service tier or upgrading your speed for less. If a plan change is available that saves money with different features, we will contact you for authorization before making any alterations.'
  },
  {
    q: 'What if my service provider removes or fails to honor the discount?',
    a: 'We back our service with a 60-Day Savings Guarantee. If your provider fails to apply the confirmed discount or rescinds it on your next statement, submit your statement to us and we will re-contact the provider to fix it, or issue an immediate 100% refund of your success fee.'
  },
  {
    q: 'What providers and bills do you negotiate?',
    a: 'We negotiate eligible recurring bills across major US providers, including Internet & Fiber, Mobile / Wireless, Cable & Satellite TV, Home Phone, and Bundled services from Xfinity/Comcast, AT&T/DirecTV, Spectrum/Charter, Verizon, Cox, Frontier, CenturyLink/Brightspeed, and more.'
  },
  {
    q: 'Can I speak with a specialist right now?',
    a: 'Yes! You can call our direct customer hotline at (832) 554-6367 Monday through Friday, 8:00 AM – 7:00 PM CST, and Saturday 9:00 AM – 3:00 PM CST.'
  }
];
