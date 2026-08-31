export interface Testimonial {
  id: string;
  providerSlug: 'xfinity' | 'att' | 'spectrum' | 'verizon' | 'cox' | 'all';
  providerName: string;
  providerCategory: 'Internet & TV' | 'Wireless & Mobile' | 'Fiber & Internet' | 'Mobile & Bundle';
  author: string;
  location: string;
  rating: number;
  monthlySavings: number;
  annualSavings: number;
  serviceDetails: string;
  headline: string;
  review: string;
  actionsTaken: string[];
  date: string;
}

export const testimonialsList: Testimonial[] = [
  {
    id: 'xfinity-1',
    providerSlug: 'xfinity',
    providerName: 'Xfinity',
    providerCategory: 'Internet & TV',
    author: 'Marcus T.',
    location: 'Philadelphia, PA',
    rating: 5,
    monthlySavings: 58,
    annualSavings: 696,
    serviceDetails: 'Gigabit Internet + Popular TV Plan',
    headline: 'Renewed my expired 2-year promo rate without changing my speed',
    review: 'My Xfinity internet bill quietly crept up from $70 to over $130 after my 2-year contract expired. Bill Less America caught the expired promo line item immediately and gave me the exact retention script. Within one call, my rate was locked back down to $72/month with the exact same gigabit speed. Incredible service!',
    actionsTaken: [
      'Reinstated $40/mo promotional loyalty discount',
      'Eliminated $15/mo unreturned gateway rental fee',
      'Preserved full Gigabit download speeds'
    ],
    date: 'Verified Review'
  },
  {
    id: 'att-1',
    providerSlug: 'att',
    providerName: 'AT&T',
    providerCategory: 'Wireless & Mobile',
    author: 'David & Sarah K.',
    location: 'Dallas, TX',
    rating: 5,
    monthlySavings: 74,
    annualSavings: 888,
    serviceDetails: 'Unlimited Premium (4 Family Lines)',
    headline: 'Removed 3 stealth insurance fees and optimized our AutoPay discounts',
    review: 'We had 4 lines on AT&T and had no idea we were still paying $17/month for device insurance on phones we paid off two years ago! The Bill Less America team highlighted every ghost charge and advised us to switch our AutoPay method. Our monthly bill dropped by $74 right away.',
    actionsTaken: [
      'Removed $34/mo in legacy device protection on paid-off phones',
      'Restored $20/mo debit AutoPay discount ($5 extra per line)',
      'Applied $20/mo corporate signature discount'
    ],
    date: 'Verified Review'
  },
  {
    id: 'spectrum-1',
    providerSlug: 'spectrum',
    providerName: 'Spectrum',
    providerCategory: 'Internet & TV',
    author: 'Elena R.',
    location: 'Tampa, FL',
    rating: 5,
    monthlySavings: 52,
    annualSavings: 624,
    serviceDetails: 'Spectrum Internet Ultra (500 Mbps) + TV Select',
    headline: 'Lowered our bill after the year 2 price step-up with zero hassle',
    review: 'Spectrum hit us with a $50 jump after our promotional period ended. I was dreading spending hours on hold with customer service. Bill Less America gave us an exact audit of local competitor pricing and a tailored retention strategy. Spectrum lowered our tier to the active retention promo in minutes.',
    actionsTaken: [
      'Secured $45/mo retention loyalty promotion credit',
      'Waived $7/mo standalone WiFi router service fee',
      'Retained all favorite sports & news channels'
    ],
    date: 'Verified Review'
  },
  {
    id: 'xfinity-2',
    providerSlug: 'xfinity',
    providerName: 'Xfinity',
    providerCategory: 'Fiber & Internet',
    author: 'Amanda W.',
    location: 'Chicago, IL',
    rating: 5,
    monthlySavings: 45,
    annualSavings: 540,
    serviceDetails: 'Superfast 800 Mbps Internet Only',
    headline: 'Eliminated modem rental fees and trimmed unnecessary add-on packages',
    review: 'I had been paying $15/month for Xfinity’s router plus a $10 tech security fee I never opted into. Bill Less America reviewed my PDF statement and showed me how to remove the add-on and buy my own approved modem. I am saving $45 every single month now!',
    actionsTaken: [
      'Eliminated $15/mo equipment rental charge',
      'Removed $10/mo unrequested security add-on pack',
      'Secured $20/mo 12-month retention credit'
    ],
    date: 'Verified Review'
  },
  {
    id: 'att-2',
    providerSlug: 'att',
    providerName: 'AT&T',
    providerCategory: 'Fiber & Internet',
    author: 'Carlos V.',
    location: 'Houston, TX',
    rating: 5,
    monthlySavings: 62,
    annualSavings: 744,
    serviceDetails: 'AT&T Fiber 1000 + Wireless Plan',
    headline: 'Resolved missing trade-in bill credits and fixed bundled rate',
    review: 'My trade-in credits had mysteriously dropped off two bills in a row and customer support was giving me the runaround. The Bill Less America team gave me the exact billing escalation path and documentation. AT&T credited back $180 and permanently lowered my monthly combined bill by $62.',
    actionsTaken: [
      'Recovered $180 in missing historical device credits',
      'Synchronized $20/mo Fiber + Wireless combination discount',
      'Removed $14/mo unnecessary Next Up feature'
    ],
    date: 'Verified Review'
  },
  {
    id: 'spectrum-2',
    providerSlug: 'spectrum',
    providerName: 'Spectrum',
    providerCategory: 'Internet & TV',
    author: 'Brian & Lisa H.',
    location: 'Charlotte, NC',
    rating: 5,
    monthlySavings: 65,
    annualSavings: 780,
    serviceDetails: 'Internet Gig + TV Choice Bundle',
    headline: 'Cut out $65/month in TV broadcast surcharges and outdated packages',
    review: 'Our Spectrum package was up to $185/month for basic cable and internet. Bill Less America showed us how the Broadcast TV surcharge and outdated cable box leases were inflating our costs. We restructured to Spectrum Choice, kept our favorite channels, and saved $65 every month.',
    actionsTaken: [
      'Replaced $25/mo broadcast fee with streamlined TV Choice tier',
      'Returned 2 legacy cable boxes ($20/mo) in favor of Spectrum TV App',
      'Applied $20/mo high-speed internet promo'
    ],
    date: 'Verified Review'
  }
];
