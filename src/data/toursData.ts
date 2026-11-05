export interface TourStop {
  placeId: string;
  title: string;
  subtitle: string;
  description: string;
  targetLat: number;
  targetLng: number;
  cameraElevation: number; // camera distance / altitude in 3D world units
  pitchAngleDeg: number;   // scenic camera angle
  headingDeg: number;      // azimuth rotation
  dwellDurationSeconds: number;
}

export interface GuidedTour {
  id: string;
  name: string;
  odiaName: string;
  tagline: string;
  region: string;
  accentColor: string;
  stops: TourStop[];
}

export const GUIDED_TOURS: GuidedTour[] = [
  {
    id: 'golden-triangle',
    name: 'The Golden Triangle',
    odiaName: 'ସ୍ୱର୍ଣ୍ଣ ତ୍ରିଭୁଜ ଯାତ୍ରା',
    tagline: 'Sun Chariots, Sacred Vimanas & Ancient Monasteries',
    region: 'Coastal Puri & Khurda',
    accentColor: '#F59E0B',
    stops: [
      {
        placeId: 'lingaraja-temple',
        title: 'Bhubaneswar: The Temple City',
        subtitle: 'Lingaraja, Mukteswara & Rajarani Temples',
        description: 'Rising across the Daya river basin, the towering 55m Rekha Deula of Lingaraja and the gem-like carved Torana of Mukteswara encapsulate the Golden Age of Kalinga masonry.',
        targetLat: 20.24,
        targetLng: 85.83,
        cameraElevation: 22,
        pitchAngleDeg: 42,
        headingDeg: 35,
        dwellDurationSeconds: 8
      },
      {
        placeId: 'dhauli-shanti-stupa',
        title: 'Dhauli: The Transformative War',
        subtitle: 'Ashokan Rock Edict & Daya River Plains',
        description: 'Here at Dhauli hill overlooking the Daya River in 261 BCE, Emperor Ashoka renounced bloodshed after the devastating Kalinga War and embraced Ahimsa (Universal Peace).',
        targetLat: 20.19,
        targetLng: 85.84,
        cameraElevation: 20,
        pitchAngleDeg: 38,
        headingDeg: 45,
        dwellDurationSeconds: 8
      },
      {
        placeId: 'pipli-applique-craft',
        title: 'Pipli: The Royal Canopy Weavers',
        subtitle: 'Vibrant Chanduwa Craftsmanship',
        description: 'Dating back centuries, master artisans stitch brilliant multi-colored appliqué tapestries, royal umbrellas, and sacred canopies for the triad of Lord Jagannath.',
        targetLat: 20.11,
        targetLng: 85.83,
        cameraElevation: 18,
        pitchAngleDeg: 40,
        headingDeg: 60,
        dwellDurationSeconds: 7
      },
      {
        placeId: 'raghurajpur-heritage-village',
        title: 'Raghurajpur: Living Pattachitra Village',
        subtitle: 'Palm-Leaf Scroll Art & Gotipua Masters',
        description: 'A heritage settlement where every family preserves the thousand-year-old art of Pattachitra cloth paintings, stone filigree, and acrobatic Gotipua dance.',
        targetLat: 19.88,
        targetLng: 85.83,
        cameraElevation: 16,
        pitchAngleDeg: 45,
        headingDeg: 75,
        dwellDurationSeconds: 8
      },
      {
        placeId: 'jagannath-temple-puri',
        title: 'Puri: Shreekhetra & Char Dham',
        subtitle: 'Spiritual Epicenter of Lord Jagannath',
        description: 'Overlooking the Bay of Bengal, the sacred 12th-century shrine of Jagannath attracts millions during the legendary chariot procession of Ratha Yatra.',
        targetLat: 19.80,
        targetLng: 85.81,
        cameraElevation: 20,
        pitchAngleDeg: 36,
        headingDeg: 120,
        dwellDurationSeconds: 9
      },
      {
        placeId: 'konark-sun-temple',
        title: 'Konark: Black Pagoda on the Coast',
        subtitle: 'UNESCO World Heritage Sun Chariot',
        description: 'King Narasimhadeva I carved a colossal stone chariot of the Sun God Surya on the Chandrabhaga coast with 24 giant sundial wheels and 7 surging stallions.',
        targetLat: 19.88,
        targetLng: 86.09,
        cameraElevation: 18,
        pitchAngleDeg: 35,
        headingDeg: 140,
        dwellDurationSeconds: 9
      }
    ]
  },
  {
    id: 'diamond-buddhist-circuit',
    name: 'Diamond Buddhist Circuit',
    odiaName: 'ହୀରକ ବୌଦ୍ଧ ତ୍ରିଭୁଜ',
    tagline: 'Ancient Vajrayana Monasteries of Kalinga',
    region: 'Jajpur & Cuttack',
    accentColor: '#3B82F6',
    stops: [
      {
        placeId: 'ratnagiri-buddhist-complex',
        title: 'Ratnagiri: The Hill of Jewels',
        subtitle: 'Vajrayana Buddhist Monastery & Sculptures',
        description: 'Excavated on an isolated hill between the Birupa and Brahmani rivers, Ratnagiri holds world-renowned green chlorite doorway carvings and colossal Buddha sculptures.',
        targetLat: 20.64,
        targetLng: 86.33,
        cameraElevation: 20,
        pitchAngleDeg: 38,
        headingDeg: 50,
        dwellDurationSeconds: 8
      },
      {
        placeId: 'barabati-fort',
        title: 'Barabati Citadel & Cuttack Millennia',
        subtitle: 'Mahanadi Waterways & Tarakasi Silver',
        description: 'Located at the apex of the Mahanadi delta, historic Cuttack guarded the maritime river gateway and nurtured 500 years of silver filigree (Tarakasi).',
        targetLat: 20.48,
        targetLng: 85.86,
        cameraElevation: 22,
        pitchAngleDeg: 42,
        headingDeg: 90,
        dwellDurationSeconds: 8
      },
      {
        placeId: 'bali-jatra-cuttack',
        title: 'Bali Jatra & Maritime Legacy',
        subtitle: 'Voyages to Bali, Sumatra & Sri Lanka',
        description: 'Every Kartika Purnima, sailors known as Sadhavas set sail in Boita vessels, commemorated today by Asia largest open-air cultural and trade mela.',
        targetLat: 20.49,
        targetLng: 85.86,
        cameraElevation: 18,
        pitchAngleDeg: 35,
        headingDeg: 110,
        dwellDurationSeconds: 8
      }
    ]
  },
  {
    id: 'wild-northern-highlands',
    name: 'Wild Northern Highlands',
    odiaName: 'ଉତ୍ତର ସବୁଜ ଶୃଙ୍ଗ ଓ ଅଭୟାରଣ୍ୟ',
    tagline: 'Tiger Sanctuaries, Cascades & Mangrove Labyrinths',
    region: 'Mayurbhanj & Kendrapara',
    accentColor: '#10B981',
    stops: [
      {
        placeId: 'similipal-national-park',
        title: 'Similipal Biosphere Reserve',
        subtitle: 'Dense Sal Canopies & Tiger Corridors',
        description: 'Sprawling over 2,750 sq km of red laterite hills, Similipal shelters Royal Bengal tigers, wild elephants, and lush valleys dense with orchids and silk-cotton trees.',
        targetLat: 21.66,
        targetLng: 86.33,
        cameraElevation: 30,
        pitchAngleDeg: 40,
        headingDeg: 25,
        dwellDurationSeconds: 9
      },
      {
        placeId: 'barehipani-waterfall',
        title: 'Barehipani: The 399m Canyon Cascade',
        subtitle: 'India Second Highest Waterfall',
        description: 'Deep inside Similipal, the Budhabalanga river leaps across Meghasani cliff in two tiered sheets into an abyss carpeted with rainforest flora.',
        targetLat: 21.93,
        targetLng: 86.38,
        cameraElevation: 22,
        pitchAngleDeg: 45,
        headingDeg: 35,
        dwellDurationSeconds: 8
      },
      {
        placeId: 'mayurbhanj-chhau-dance',
        title: 'Baripada: Capital of Mayurbhanj Chhau',
        subtitle: 'Maskless Martial Acrobatics & Rhythms',
        description: 'The ancient capital where Chhau dance was elevated under royal Bhanja patronage into a soaring martial art form with dhol rhythms and acrobatic footwork.',
        targetLat: 21.93,
        targetLng: 86.73,
        cameraElevation: 20,
        pitchAngleDeg: 40,
        headingDeg: 70,
        dwellDurationSeconds: 8
      },
      {
        placeId: 'bhitarkanika-national-park',
        title: 'Bhitarkanika: India Mangrove Amazon',
        subtitle: 'Saltwater Crocodiles & Tidal Estuaries',
        description: 'Tidal creeks flanked by 62 species of dense mangroves protect giant saltwater crocodiles, spotted deer, and eight species of kingfishers.',
        targetLat: 20.72,
        targetLng: 86.86,
        cameraElevation: 24,
        pitchAngleDeg: 35,
        headingDeg: 120,
        dwellDurationSeconds: 8
      },
      {
        placeId: 'gahirmatha-marine-sanctuary',
        title: 'Gahirmatha: The Great Turtle Arribada',
        subtitle: 'World Largest Olive Ridley Sea Turtle Haven',
        description: 'Where the Brahmani-Baitarani rivers reach the sea, hundreds of thousands of Olive Ridley turtles emerge in synchronized mass nesting across the sands.',
        targetLat: 20.73,
        targetLng: 86.99,
        cameraElevation: 22,
        pitchAngleDeg: 30,
        headingDeg: 135,
        dwellDurationSeconds: 8
      }
    ]
  },
  {
    id: 'western-heritage-trail',
    name: 'Western Heritage & Folk Trail',
    odiaName: 'ପଶ୍ଚିମ ଓଡ଼ିଶା ଲୋକକଳା ଯାତ୍ରା',
    tagline: 'Sambalpuri Ikat, Dam Seas & Open-Air Theatre',
    region: 'Sambalpur & Bargarh',
    accentColor: '#EC4899',
    stops: [
      {
        placeId: 'hirakud-reservoir',
        title: 'Hirakud: The Mahanadi Inland Sea',
        subtitle: 'World Longest Major Earthen Dam (25.8 km)',
        description: 'Taming the fierce monsoon torrents of the Mahanadi, Hirakud creates a breathtaking inland reservoir that shelters 200,000 Siberian migratory birds.',
        targetLat: 21.57,
        targetLng: 83.87,
        cameraElevation: 26,
        pitchAngleDeg: 38,
        headingDeg: 300,
        dwellDurationSeconds: 8
      },
      {
        placeId: 'debrigarh-wildlife-sanctuary',
        title: 'Debrigarh: Barapahad Sanctuary',
        subtitle: 'Indian Gaur (Bison) & Veer Surendra Sai Fort',
        description: 'The dense teak forests overlooking Hirakud served as the impenetrable fortress of legendary freedom fighter Veer Surendra Sai in the 1857 resistance.',
        targetLat: 21.61,
        targetLng: 83.66,
        cameraElevation: 24,
        pitchAngleDeg: 42,
        headingDeg: 285,
        dwellDurationSeconds: 8
      },
      {
        placeId: 'sambalpuri-ikat-weaving',
        title: 'Sambalpur: Master Bandha Weavers',
        subtitle: 'Geometric Ikat Silk & Mathematical Dyeing',
        description: 'World-renowned tie-and-dye weaving crafted with intricate curvilinear passapali and floral motifs that reflect generations of Western Odishan folklore.',
        targetLat: 21.46,
        targetLng: 83.98,
        cameraElevation: 20,
        pitchAngleDeg: 45,
        headingDeg: 315,
        dwellDurationSeconds: 8
      },
      {
        placeId: 'dhanu-jatra-bargarh',
        title: 'Bargarh: World Largest Open-Air Theatre',
        subtitle: 'Living Kingdom of Kamsa Spanning 6 km',
        description: 'During Dhanu Jatra, the town transforms into mythological Mathura. King Kamsa holds real municipal sway over citizens in an epic theatrical tradition.',
        targetLat: 21.33,
        targetLng: 83.61,
        cameraElevation: 22,
        pitchAngleDeg: 40,
        headingDeg: 270,
        dwellDurationSeconds: 9
      }
    ]
  },
  {
    id: 'southern-ghats-chilika',
    name: 'Southern Ghats & Chilika Waters',
    odiaName: 'ଦକ୍ଷିଣ ପର୍ବତମାଳା ଓ ଚିଲିକା',
    tagline: 'High Peaks, Irrawaddy Dolphins & Tribal Canyons',
    region: 'Koraput, Ganjam & Puri',
    accentColor: '#8B5CF6',
    stops: [
      {
        placeId: 'deomali-peak',
        title: 'Deomali: The Roof of Odisha',
        subtitle: '1,672m Eastern Ghats Shola Crest',
        description: 'The towering pinnacle of the Chandragiri-Pottangi hills overlooking valleys of the Kandha and Paraja indigenous tribes and sweeping rolling mist.',
        targetLat: 18.66,
        targetLng: 82.98,
        cameraElevation: 28,
        pitchAngleDeg: 40,
        headingDeg: 220,
        dwellDurationSeconds: 9
      },
      {
        placeId: 'duduma-waterfall',
        title: 'Duduma: Machkund Thunder Fall',
        subtitle: '175m Horsetail Plunge into Machkund Gorge',
        description: 'Cascading through sacred tribal gorges, Duduma forms a dramatic canyon bordered by ancient forests of the Bonda people.',
        targetLat: 18.51,
        targetLng: 82.41,
        cameraElevation: 24,
        pitchAngleDeg: 45,
        headingDeg: 200,
        dwellDurationSeconds: 8
      },
      {
        placeId: 'satkosia-tiger-reserve',
        title: 'Satkosia Gorge: The Mahanadi Cleft',
        subtitle: '22 km Canyon Carved Through Mountain Ridges',
        description: 'Where the Mahanadi forces its way through the Eastern Ghats in a deep 22 km gorge, home to critically endangered Gharial crocodiles and river birds.',
        targetLat: 20.58,
        targetLng: 84.85,
        cameraElevation: 25,
        pitchAngleDeg: 38,
        headingDeg: 310,
        dwellDurationSeconds: 8
      },
      {
        placeId: 'chilika-lake-nalabana',
        title: 'Chilika: Asia Largest Brackish Lagoon',
        subtitle: 'Irrawaddy Dolphins & 1 Million Waterfowl',
        description: 'Spanning over 1,100 sq km between coastal sandbars and inland hills, Chilika is a Ramsar sanctuary where rare Irrawaddy dolphins play and migratory flocks nest.',
        targetLat: 19.71,
        targetLng: 85.31,
        cameraElevation: 26,
        pitchAngleDeg: 32,
        headingDeg: 150,
        dwellDurationSeconds: 9
      }
    ]
  }
];
