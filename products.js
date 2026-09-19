/**
 * AURA — Central Product Catalog Database
 * 40 Curated Items (10 Women, 10 Men, 10 Accessories, 10 Footwear)
 */
const AURA_PRODUCTS = [
  /* ==========================================================
     1. WOMEN'S COLLECTION (10 ITEMS)
     ========================================================== */
  {
    id: 'w-01',
    name: 'Atelier Double-Breasted Wool Coat',
    category: 'women',
    price: 380.00,
    oldPrice: 460.00,
    discount: '18% OFF',
    rating: 4.9,
    reviewsCount: 52,
    isNew: true,
    isFeatured: true,
    description: 'Tailored from virgin Italian wool with structured lapels, horn buttons, and a relaxed architectural silhouette.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Oatmeal', 'Onyx Black', 'Camel']
  },
  {
    id: 'w-02',
    name: 'Silk Bias-Cut Evening Slip Dress',
    category: 'women',
    price: 290.00,
    oldPrice: 350.00,
    discount: '17% OFF',
    rating: 4.9,
    reviewsCount: 43,
    isNew: true,
    isFeatured: true,
    description: '100% heavy mulberry silk woven with subtle luster. Flows naturally with a fluid cowl neckline and low-cut back.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Champagne Gold', 'Noir', 'Emerald']
  },
  {
    id: 'w-03',
    name: 'Cashmere Oversized Turtleneck Knit',
    category: 'women',
    price: 260.00,
    oldPrice: null,
    discount: null,
    rating: 4.8,
    reviewsCount: 38,
    isNew: false,
    isFeatured: true,
    description: 'Ultra-soft Mongolian grade-A cashmere in a cocooning silhouette with dropped shoulders and ribbed cuffs.',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S', 'M', 'L'],
    colors: ['Chalk White', 'Heather Gray', 'Warm Beige']
  },
  {
    id: 'w-04',
    name: 'Pleated High-Waisted Wide-Leg Trousers',
    category: 'women',
    price: 210.00,
    oldPrice: 250.00,
    discount: '16% OFF',
    rating: 4.7,
    reviewsCount: 29,
    isNew: false,
    isFeatured: false,
    description: 'Woven from fluid tropical wool with sharp front pleats, hidden front closure, and tailored slash pockets.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Sandstone', 'Midnight Navy', 'Black']
  },
  {
    id: 'w-05',
    name: 'Structured Gabardine Trench Coat',
    category: 'women',
    price: 420.00,
    oldPrice: 500.00,
    discount: '16% OFF',
    rating: 5.0,
    reviewsCount: 61,
    isNew: true,
    isFeatured: true,
    description: 'Weather-resistant organic cotton gabardine featuring storm flaps, storm collar, and a belted cinched waist.',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Classic Honey', 'Sage Green', 'Dark Olive']
  },
  {
    id: 'w-06',
    name: 'Sculpted Waist Hourglass Blazer',
    category: 'women',
    price: 330.00,
    oldPrice: null,
    discount: null,
    rating: 4.8,
    reviewsCount: 24,
    isNew: false,
    isFeatured: false,
    description: 'Architectural tailoring with a defined waistline, peak lapels, and custom matte horn buttons.',
    image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Charcoal Black', 'Ivory Cream']
  },
  {
    id: 'w-07',
    name: 'Asymmetric Ribbed Midi Dress',
    category: 'women',
    price: 220.00,
    oldPrice: 275.00,
    discount: '20% OFF',
    rating: 4.7,
    reviewsCount: 19,
    isNew: true,
    isFeatured: false,
    description: 'Form-fitting ribbed stretch knit with an asymmetrical neckline and modern side slit for ease of movement.',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Terracotta', 'Black', 'Taupe']
  },
  {
    id: 'w-08',
    name: 'Fine Gauge Merino Cardigan',
    category: 'women',
    price: 195.00,
    oldPrice: null,
    discount: null,
    rating: 4.6,
    reviewsCount: 31,
    isNew: false,
    isFeatured: false,
    description: 'Spun from extra-fine 19.5 micron merino wool. Features delicate mother-of-pearl buttons and a neat crew neck.',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Soft Taupe', 'Navy', 'Alabaster']
  },
  {
    id: 'w-09',
    name: 'Raw Linen Popover Shirt',
    category: 'women',
    price: 175.00,
    oldPrice: 210.00,
    discount: '16% OFF',
    rating: 4.8,
    reviewsCount: 22,
    isNew: false,
    isFeatured: false,
    description: 'Breezy French Normandy flax linen pre-washed for a supple, effortless handle and relaxed collar drape.',
    image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Pure White', 'Sky Blue', 'Sand']
  },
  {
    id: 'w-10',
    name: 'Sunray Accordion Pleat Maxi Skirt',
    category: 'women',
    price: 240.00,
    oldPrice: 290.00,
    discount: '17% OFF',
    rating: 4.9,
    reviewsCount: 45,
    isNew: true,
    isFeatured: false,
    description: 'Precision permanent sunray pleating with a smooth elasticated grosgrain waistband and fluid movement.',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Liquid Champagne', 'Matte Black', 'Olive']
  },

  /* ==========================================================
     2. MEN'S COLLECTION (10 ITEMS)
     ========================================================== */
  {
    id: 'm-01',
    name: 'Minimalist Relaxed Linen Blazer',
    category: 'men',
    price: 280.00,
    oldPrice: 340.00,
    discount: '17% OFF',
    rating: 4.8,
    reviewsCount: 39,
    isNew: true,
    isFeatured: true,
    description: 'Unstructured summer tailoring crafted from breathable French organic flax linen with soft natural shoulders.',
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Chalk White', 'Sage', 'Navy']
  },
  {
    id: 'm-02',
    name: 'Cashmere Ribbed Knit Mockneck',
    category: 'men',
    price: 240.00,
    oldPrice: null,
    discount: null,
    rating: 4.9,
    reviewsCount: 34,
    isNew: false,
    isFeatured: true,
    description: 'Grade-A Mongolian cashmere with featherweight thermal warmth, seamless neck knit, and tailored cuffs.',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Alabaster', 'Camel']
  },
  {
    id: 'm-03',
    name: 'Structured Double-Faced Wool Topcoat',
    category: 'men',
    price: 490.00,
    oldPrice: 580.00,
    discount: '15% OFF',
    rating: 5.0,
    reviewsCount: 68,
    isNew: true,
    isFeatured: true,
    description: 'Hand-finished double-faced wool construction without bulky linings. Features deep patch pockets and back vent.',
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Camel Heather', 'Onyx', 'Navy']
  },
  {
    id: 'm-04',
    name: 'Pleated Wool Flannel Trousers',
    category: 'men',
    price: 230.00,
    oldPrice: 270.00,
    discount: '15% OFF',
    rating: 4.7,
    reviewsCount: 27,
    isNew: false,
    isFeatured: false,
    description: 'Spun by Vitale Barberis Canonico with classic single pleats, side adjusters, and a clean tapered hem.',
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['30', '32', '34', '36'],
    colors: ['Medium Gray', 'Midnight Navy', 'Espresso']
  },
  {
    id: 'm-05',
    name: 'Brushed Suede Overshirt Jacket',
    category: 'men',
    price: 520.00,
    oldPrice: null,
    discount: null,
    rating: 4.9,
    reviewsCount: 42,
    isNew: true,
    isFeatured: false,
    description: 'Buttery soft goat suede tailored with minimal chest pockets, satin interior lining, and matte gunmetal snaps.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Tobacco Brown', 'Olive Suede', 'Black']
  },
  {
    id: 'm-06',
    name: 'Egyptian Giza Cotton Poplin Shirt',
    category: 'men',
    price: 165.00,
    oldPrice: 195.00,
    discount: '15% OFF',
    rating: 4.8,
    reviewsCount: 51,
    isNew: false,
    isFeatured: false,
    description: '120/2 two-ply long-staple Egyptian cotton. Silky crisp hand with semi-spread collar and real Australian mother-of-pearl buttons.',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Optic White', 'Pale Sky Blue', 'Pink Fine Stripe']
  },
  {
    id: 'm-07',
    name: 'Heavyweight Loopback Cotton Sweatshirt',
    category: 'men',
    price: 150.00,
    oldPrice: null,
    discount: null,
    rating: 4.7,
    reviewsCount: 33,
    isNew: false,
    isFeatured: false,
    description: '500 GSM organic loopback French terry jersey with flatlock stitching and ribbed side gussets.',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Washed Charcoal', 'Heather Ash', 'Raw Cream']
  },
  {
    id: 'm-08',
    name: 'Relaxed Silk-Cotton Camp Collar Shirt',
    category: 'men',
    price: 185.00,
    oldPrice: 220.00,
    discount: '16% OFF',
    rating: 4.8,
    reviewsCount: 29,
    isNew: true,
    isFeatured: false,
    description: 'A 55% silk, 45% cotton blend creating an ultra-lightweight summer drape with a Cuban open collar.',
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Dusty Sage', 'Almond', 'Midnight']
  },
  {
    id: 'm-09',
    name: 'Waxed Canvas Field Jacket',
    category: 'men',
    price: 360.00,
    oldPrice: 420.00,
    discount: '14% OFF',
    rating: 4.9,
    reviewsCount: 46,
    isNew: false,
    isFeatured: false,
    description: 'British Millerain waxed cotton canvas with corduroy collar facing and antiqued brass two-way zipper.',
    image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Dark Pine', 'Rustic Brown']
  },
  {
    id: 'm-10',
    name: 'Merino Wool Milanaise Zip Cardigan',
    category: 'men',
    price: 270.00,
    oldPrice: null,
    discount: null,
    rating: 4.8,
    reviewsCount: 21,
    isNew: true,
    isFeatured: false,
    description: 'Structured compact milano stitch offering the jacket-like shape of tailoring with the comfort of pure knitwear.',
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Deep Navy', 'Stone']
  },

  /* ==========================================================
     3. ACCESSORIES COLLECTION (10 ITEMS)
     ========================================================== */
  {
    id: 'acc-01',
    name: 'Sculptural Calfskin Shoulder Bag',
    category: 'accessories',
    price: 490.00,
    oldPrice: 580.00,
    discount: '15% OFF',
    rating: 5.0,
    reviewsCount: 78,
    isNew: true,
    isFeatured: true,
    description: 'Handcrafted in Florence from smooth vegetable-tanned calfskin. Features custom brushed gold hardware.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['One Size'],
    colors: ['Cognac', 'Midnight Black', 'Ivory']
  },
  {
    id: 'acc-02',
    name: 'Riviera Polarized Acetate Sunglasses',
    category: 'accessories',
    price: 195.00,
    oldPrice: 230.00,
    discount: '15% OFF',
    rating: 4.7,
    reviewsCount: 36,
    isNew: true,
    isFeatured: true,
    description: 'Hand-beveled Japanese Mazzucchelli acetate frames featuring 100% UVA/UVB category 3 polarized lenses.',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['Standard Fit'],
    colors: ['Amber Tortoise', 'Gloss Black', 'Champagne Clear']
  },
  {
    id: 'acc-03',
    name: 'Grained Leather Weekender Duffle',
    category: 'accessories',
    price: 580.00,
    oldPrice: 690.00,
    discount: '16% OFF',
    rating: 5.0,
    reviewsCount: 47,
    isNew: false,
    isFeatured: true,
    description: 'Spacious cabin-compliant travel duffle crafted with full-grain pebbled leather, brass hardware, and canvas lining.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['45L Carry-On'],
    colors: ['Mocha Brown', 'Black Onyx']
  },
  {
    id: 'acc-04',
    name: 'Minimalist Bridle Leather Dress Belt',
    category: 'accessories',
    price: 130.00,
    oldPrice: null,
    discount: null,
    rating: 4.8,
    reviewsCount: 42,
    isNew: false,
    isFeatured: false,
    description: 'Hand-burnished English bridle leather featuring a seamless beveled profile and matte palladium buckle.',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['85cm', '90cm', '95cm', '100cm'],
    colors: ['Espresso', 'Black', 'Tan']
  },
  {
    id: 'acc-05',
    name: 'Cashmere-Silk Woven Scarf',
    category: 'accessories',
    price: 180.00,
    oldPrice: 220.00,
    discount: '18% OFF',
    rating: 4.9,
    reviewsCount: 31,
    isNew: true,
    isFeatured: false,
    description: '70% cashmere, 30% silk jacquard weave with eyelash fringe edges. Lightweight enough for year-round styling.',
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['200 x 70 cm'],
    colors: ['Oatmeal Melange', 'Charcoal', 'Burgundy']
  },
  {
    id: 'acc-06',
    name: '18k Vermeil Ribbed Cuff Bracelet',
    category: 'accessories',
    price: 210.00,
    oldPrice: null,
    discount: null,
    rating: 4.9,
    reviewsCount: 54,
    isNew: false,
    isFeatured: false,
    description: 'Thick 18-karat gold vermeil over recycled 925 sterling silver with a satin polished fluted design.',
    image: 'https://images.unsplash.com/photo-1611591475152-4c09a33a4042?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611591475152-4c09a33a4042?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['Small (16cm)', 'Medium (18cm)'],
    colors: ['Yellow Gold', 'Sterling Silver']
  },
  {
    id: 'acc-07',
    name: 'Folded Nappa Leather Cardholder',
    category: 'accessories',
    price: 95.00,
    oldPrice: 120.00,
    discount: '20% OFF',
    rating: 4.8,
    reviewsCount: 63,
    isNew: false,
    isFeatured: false,
    description: 'Slim cardholder featuring four exterior slots and a central bill fold with gold foil monogram embossment.',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['One Size'],
    colors: ['Forest Green', 'Saddle Tan', 'Black']
  },
  {
    id: 'acc-08',
    name: 'Hand-Rolled Silk Twill Square Foulard',
    category: 'accessories',
    price: 145.00,
    oldPrice: null,
    discount: null,
    rating: 4.7,
    reviewsCount: 18,
    isNew: true,
    isFeatured: false,
    description: '90x90cm pure silk twill illustrated with subtle architectural geometry and hand-rolled, hand-stitched borders.',
    image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['90 x 90 cm'],
    colors: ['Ivory / Ochre', 'Navy / Champagne']
  },
  {
    id: 'acc-09',
    name: 'Cashmere Lined Suede Driving Gloves',
    category: 'accessories',
    price: 160.00,
    oldPrice: 195.00,
    discount: '18% OFF',
    rating: 4.9,
    reviewsCount: 25,
    isNew: false,
    isFeatured: false,
    description: 'Italian velvet suede outer lined with pure Scottish cashmere for exceptional thermal comfort and tactile grip.',
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['7.5', '8.0', '8.5', '9.0'],
    colors: ['Chestnut', 'Black']
  },
  {
    id: 'acc-10',
    name: 'Minimalist Ceramic Dial Dress Watch',
    category: 'accessories',
    price: 380.00,
    oldPrice: 450.00,
    discount: '15% OFF',
    rating: 4.9,
    reviewsCount: 57,
    isNew: true,
    isFeatured: false,
    description: '38mm sandblasted surgical grade 316L steel case with anti-reflective sapphire crystal and Swiss quartz movement.',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['38mm Dial'],
    colors: ['Silver / Black Leather', 'Gold / Tan Leather']
  },

  /* ==========================================================
     4. FOOTWEAR COLLECTION (10 ITEMS)
     ========================================================== */
  {
    id: 'ft-01',
    name: 'Verona Chelsea Hand-Burnished Boots',
    category: 'footwear',
    price: 340.00,
    oldPrice: 410.00,
    discount: '17% OFF',
    rating: 4.9,
    reviewsCount: 64,
    isNew: true,
    isFeatured: true,
    description: 'Sleek slip-on silhouette with Goodyear-welted rubber-injected leather soles and French box calfskin.',
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Espresso Brown', 'Matte Black']
  },
  {
    id: 'ft-02',
    name: 'Monaco Minimalist Nappa Leather Mules',
    category: 'footwear',
    price: 260.00,
    oldPrice: 310.00,
    discount: '16% OFF',
    rating: 4.8,
    reviewsCount: 39,
    isNew: true,
    isFeatured: true,
    description: 'Supple lambskin nappa leather lined with cushioned memory foam footbeds and a sculpted kitten heel.',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['36', '37', '38', '39', '40'],
    colors: ['Off-White', 'Black', 'Caramel']
  },
  {
    id: 'ft-03',
    name: 'Court Low-Top Calfskin Sneakers',
    category: 'footwear',
    price: 210.00,
    oldPrice: null,
    discount: null,
    rating: 4.9,
    reviewsCount: 82,
    isNew: false,
    isFeatured: true,
    description: 'Clean Scandinavian silhouette with Margom Italian rubber cupsole, soft calf lining, and waxed organic cotton laces.',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: ['Monochrome White', 'White / Gum', 'Black / White']
  },
  {
    id: 'ft-04',
    name: 'Suede Penny Loafers',
    category: 'footwear',
    price: 290.00,
    oldPrice: 340.00,
    discount: '15% OFF',
    rating: 4.8,
    reviewsCount: 45,
    isNew: false,
    isFeatured: false,
    description: 'Unlined water-repellent suede offering immediate glove-like comfort, apron hand-stitching, and flex leather soles.',
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Snuff Suede', 'Navy Suede', 'Dark Brown']
  },
  {
    id: 'ft-05',
    name: 'Square-Toe Block Heel Ankle Boots',
    category: 'footwear',
    price: 360.00,
    oldPrice: 420.00,
    discount: '14% OFF',
    rating: 4.9,
    reviewsCount: 37,
    isNew: true,
    isFeatured: false,
    description: 'Contemporary architectural square toe, fitted shaft with hidden side zip, and a 65mm stable leather-wrapped block heel.',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: ['Gloss Burgundy', 'Black Box', 'Cream']
  },
  {
    id: 'ft-06',
    name: 'Minimalist Two-Strap Leather Slides',
    category: 'footwear',
    price: 165.00,
    oldPrice: null,
    discount: null,
    rating: 4.6,
    reviewsCount: 28,
    isNew: false,
    isFeatured: false,
    description: 'Molded anatomical leather footbeds wrapped in smooth calfskin with adjustable minimal buckle straps.',
    image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['37', '38', '39', '40', '41', '42', '43'],
    colors: ['Natural Tan', 'Black']
  },
  {
    id: 'ft-07',
    name: 'Chunky Lug Sole Commando Derby',
    category: 'footwear',
    price: 320.00,
    oldPrice: 380.00,
    discount: '16% OFF',
    rating: 4.8,
    reviewsCount: 49,
    isNew: true,
    isFeatured: false,
    description: 'Brushed polished leather paired with an ultra-lightweight extruded EVA commando lug tread sole.',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Black Polished', 'Oxblood']
  },
  {
    id: 'ft-08',
    name: 'Strappy Architectural Leather Sandals',
    category: 'footwear',
    price: 230.00,
    oldPrice: 280.00,
    discount: '18% OFF',
    rating: 4.7,
    reviewsCount: 31,
    isNew: false,
    isFeatured: false,
    description: 'Delicate tubular calf leather straps crisscrossing the instep with an angled square sole edge.',
    image: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['36', '37', '38', '39', '40'],
    colors: ['Chocolate', 'Off-White', 'Noir']
  },
  {
    id: 'ft-09',
    name: 'Full-Grain Leather Oxford Brogues',
    category: 'footwear',
    price: 330.00,
    oldPrice: null,
    discount: null,
    rating: 4.9,
    reviewsCount: 41,
    isNew: false,
    isFeatured: false,
    description: 'Classic closed lacing constructed with 5-eyelet closed facings, subtle medallion perforations, and oak bark leather soles.',
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Deep Cognac', 'Black']
  },
  {
    id: 'ft-10',
    name: 'Knit Ribbed Sock Booties',
    category: 'footwear',
    price: 275.00,
    oldPrice: 320.00,
    discount: '14% OFF',
    rating: 4.8,
    reviewsCount: 35,
    isNew: true,
    isFeatured: false,
    description: 'Second-skin engineered ribbed stretch knit upper with pointed leather toe cap and contoured heel.',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80'
    ],
    sizes: ['36', '37', '38', '39', '40'],
    colors: ['Pitch Black', 'Almond Sand']
  }
];