/**
 * Comprehensive Odisha Heritage Knowledge Base
 * 290 unique SEO keywords and topic pages
 */

export type Lang = 'en' | 'or' | 'hi';

export type Category = 'built' | 'cultural' | 'natural' | 'arts' | 'history' | 'trivia';

export interface HeritageItem {
  id: string;
  name: { en: string; or: string; hi: string };
  category: Category;
  subCategory?: string;
  era?: 'ancient' | 'medieval' | 'recent';
  year?: string;
  wikiUrl?: string;
}

export const HERO_HOOKS = [
  {
    fact: {
      en: "Odisha houses four variants of the 108 Karanas—ancient dance poses frozen in temple stone.",
      or: "ଓଡ଼ିଶାର ମନ୍ଦିର ଗୁଡିକରେ ୧୦୮ କରଣ ବା ନୃତ୍ୟ ମୁଦ୍ରାର ସୂକ୍ଷ୍ମ କଳା ଖୋଦିତ ହୋଇଛି ।",
      hi: "ओडिशा के मंदिरों में 108 करणों के चार रूप हैं—प्राचीन नृत्य मुद्राएं मंदिर के पत्थर में जमी हुई हैं।"
    },
    context: { en: "The Stone Lexicon", or: "ପଥରର ପୁରାଣ", hi: "पत्थर का शब्दकोश" }
  },
  {
    fact: {
      en: "The Bhauma-Kara dynasty saw six sovereign queens rule Odisha for nearly a century.",
      or: "ନବମ ଶତାବ୍ଦୀରେ ପ୍ରାୟ ୧୦୦ ବର୍ଷ ଧରି ୬ ଜଣ ଶକ୍ତିଶାଳୀ ରାଣୀ ଓଡ଼ିଶା ଶାସନ କରିଥିଲେ ।",
      hi: "9वीं शताब्दी में भौम-कर वंश ने लगभग एक शताब्दी तक छह संप्रभु रानियों को ओडिशा पर शासन करते देखा।"
    },
    context: { en: "Matriarchal Legacy", or: "ନାରୀ ସଶକ୍ତିକରଣ", hi: "मातृसत्तात्मक विरासत" }
  }
];

// 1. Built Heritage (70 Pages)
const BUILT_LINKS: Record<string, string> = {
  "Konark Sun Temple": "https://en.wikipedia.org/wiki/Konark_Sun_Temple",
  "Jagannath Temple Puri": "https://en.wikipedia.org/wiki/Jagannath_Temple,_Puri",
  "Lingaraja Temple Bhubaneswar": "https://en.wikipedia.org/wiki/Lingaraja_Temple",
  "Mukteswara Temple": "https://en.wikipedia.org/wiki/Muktesvara_Deula",
  "Rajarani Temple": "https://en.wikipedia.org/wiki/Rajarani_Temple",
  "Udayagiri Jain Caves": "https://en.wikipedia.org/wiki/Udayagiri_and_Khandagiri_Caves",
  "Khandagiri Caves": "https://en.wikipedia.org/wiki/Udayagiri_and_Khandagiri_Caves",
  "Dhauli Shanti Stupa": "https://en.wikipedia.org/wiki/Dhauli",
  "Ratnagiri Buddhist Excavations": "https://en.wikipedia.org/wiki/Ratnagiri",
  "Lalitgiri Buddhist Complex": "https://en.wikipedia.org/wiki/Lalitgiri",
  "Puspagiri Vihara": "https://en.wikipedia.org/wiki/Pushpagiri_vihara",
  "Barabati Fort Cuttack": "https://en.wikipedia.org/wiki/Barabati_Fort",
  "Chausath Yogini Temple Hirapur": "https://en.wikipedia.org/wiki/Chausath_Yogini_Temple,_Hirapur",
  "Chausath Yogini Temple Ranipur Jharial": "https://en.wikipedia.org/wiki/Ranipur-Jharial",
  "Brahmeshwara Temple": "https://en.wikipedia.org/wiki/Brahmeswara_Temple",
  "Ananta Vasudeva Temple": "https://en.wikipedia.org/wiki/Ananta_Vasudeva_Temple",
  "Parasurameswara Temple": "https://en.wikipedia.org/wiki/Parasurameswara_Temple",
  "Vaital Deula": "https://en.wikipedia.org/wiki/Vaital_Deula",
  "Kedareswar Temple": "https://en.wikipedia.org/wiki/Kedareswar_Temple",
  "Ram Mandir Bhubaneswar": "https://en.wikipedia.org/wiki/Ram_Mandir,_Bhubaneswar",
  "Samaleswari Temple Sambalpur": "https://en.wikipedia.org/wiki/Samaleswari_Temple",
  "Huma Leaning Temple": "https://en.wikipedia.org/wiki/Huma_Temple",
  "Harishankar Temple Bolangir": "https://en.wikipedia.org/wiki/Harishankar_Temple",
  "Nrusinghanath Temple Bargarh": "https://en.wikipedia.org/wiki/Nrusinghanath_Temple",
  "Kichakeswari Temple Khiching": "https://en.wikipedia.org/wiki/Kichakeswari_Temple",
  "Taratarini Temple Ganjam": "https://en.wikipedia.org/wiki/Taratarini_Temple",
  "Asurgarh Fort Ruins": "https://en.wikipedia.org/wiki/Asurgarh",
  "Chudanga Gada Fort": "https://en.wikipedia.org/wiki/Chudanga_Gada",
  "Sisupalgarh Ruined City": "https://en.wikipedia.org/wiki/Sisupalgarh",
  "Jaugada Rock Edicts": "https://en.wikipedia.org/wiki/Jaugada",
  "Kuruma Buddhist Site": "https://en.wikipedia.org/wiki/Kuruma",
  "Langaleswar Buddhist Site": "https://en.wikipedia.org/wiki/Langaleswar",
  "Kalinga Architecture Style": "https://en.wikipedia.org/wiki/Kalinga_architecture",
  "Rekha Deula Architecture": "https://en.wikipedia.org/wiki/Kalinga_architecture",
  "Pidha Deula Architecture": "https://en.wikipedia.org/wiki/Kalinga_architecture",
  "Khakhara Deula Architecture": "https://en.wikipedia.org/wiki/Kalinga_architecture",
  "Vimana Temple Structure": "https://en.wikipedia.org/wiki/Vimana_(architectural_feature)",
  "Jagamohana Porch": "https://en.wikipedia.org/wiki/Jagamohana",
  "Natamandira Dance Hall": "https://en.wikipedia.org/wiki/Natamandir",
  "Bhogamandapa Offering Hall": "https://en.wikipedia.org/wiki/Kalinga_architecture",
  "Jaugada Fort": "https://en.wikipedia.org/wiki/Jaugada",
  "Raibania Fort Balasore": "https://en.wikipedia.org/wiki/Raibania_Fort",
  "Potagarh Fort": "https://en.wikipedia.org/wiki/Potagarh",
  "Mayurbhanj Palace (Belgadia Palace)": "https://en.wikipedia.org/wiki/Belgadia_Palace",
  "Kalahandi Palace": "https://en.wikipedia.org/wiki/Kalahandi",
  "Nilagiri Palace": "https://en.wikipedia.org/wiki/Nilagiri,_Odisha",
  "Jeypore Palace": "https://en.wikipedia.org/wiki/Jeypore",
  "Dhenkanal Palace": "https://en.wikipedia.org/wiki/Dhenkanal_Palace",
  "Parlakhemundi Palace": "https://en.wikipedia.org/wiki/Parlakhemundi",
  "Keonjhar Palace": "https://en.wikipedia.org/wiki/Keonjhar",
  "Khariar Palace": "https://en.wikipedia.org/wiki/Khariar",
  "Athagarh Palace": "https://en.wikipedia.org/wiki/Athgarh",
  "Nayagarh Palace": "https://en.wikipedia.org/wiki/Nayagarh,_Odisha",
  "Dashashwamedh Ghat Jajpur": "https://en.wikipedia.org/wiki/Jajpur",
  "Biraja Temple Jajpur": "https://en.wikipedia.org/wiki/Biraja_Temple",
  "Akhandalamani Temple": "https://en.wikipedia.org/wiki/Akhandalamani_Temple",
  "Kapilash Temple Dhenkanal": "https://en.wikipedia.org/wiki/Kapilash_Temple",
  "Chandrabhaga Temple Ruins": "https://en.wikipedia.org/wiki/Chandrabhaga",
  "Gangeswari Temple": "https://en.wikipedia.org/wiki/Gangeswari_Temple",
  "Manikeshwari Temple Bhawanipatna": "https://en.wikipedia.org/wiki/Manikeswari_Temple",
  "Pataleshwar Shiva Temple": "https://en.wikipedia.org/wiki/Pataleshwar",
  "Raghunath Temple": "https://en.wikipedia.org/wiki/Raghunath_Temple",
  "Gundicha Temple Puri": "https://en.wikipedia.org/wiki/Gundicha_Temple",
  "Sakhi Gopal Temple": "https://en.wikipedia.org/wiki/Sakhigopal_Temple",
  "Alarnath Temple": "https://en.wikipedia.org/wiki/Alarnath_Temple",
  "Baladevjew Temple Kendrapara": "https://en.wikipedia.org/wiki/Baladevjew_Temple",
  "Khirachora Gopinatha Temple": "https://en.wikipedia.org/wiki/Khirachora_Gopinatha_Temple",
  "Chandaneswar Temple Balasore": "https://en.wikipedia.org/wiki/Chandaneswar_Temple",
  "Panchalingeshwar Temple": "https://en.wikipedia.org/wiki/Panchalingeswar",
  "Gupteswar Cave Temple": "https://en.wikipedia.org/wiki/Gupteswar_Cave"
};

export const BUILT_HERITAGE: HeritageItem[] = [
  "Konark Sun Temple", "Jagannath Temple Puri", "Lingaraja Temple Bhubaneswar", "Mukteswara Temple", "Rajarani Temple",
  "Udayagiri Jain Caves", "Khandagiri Caves", "Dhauli Shanti Stupa", "Ratnagiri Buddhist Excavations", "Lalitgiri Buddhist Complex",
  "Puspagiri Vihara", "Barabati Fort Cuttack", "Chausath Yogini Temple Hirapur", "Chausath Yogini Temple Ranipur Jharial", "Brahmeshwara Temple",
  "Ananta Vasudeva Temple", "Parasurameswara Temple", "Vaital Deula", "Kedareswar Temple", "Ram Mandir Bhubaneswar",
  "Samaleswari Temple Sambalpur", "Huma Leaning Temple", "Harishankar Temple Bolangir", "Nrusinghanath Temple Bargarh", "Kichakeswari Temple Khiching",
  "Taratarini Temple Ganjam", "Asurgarh Fort Ruins", "Chudanga Gada Fort", "Sisupalgarh Ruined City", "Jaugada Rock Edicts",
  "Kuruma Buddhist Site", "Langaleswar Buddhist Site", "Kalinga Architecture Style", "Rekha Deula Architecture", "Pidha Deula Architecture",
  "Khakhara Deula Architecture", "Vimana Temple Structure", "Jagamohana Porch", "Natamandira Dance Hall", "Bhogamandapa Offering Hall",
  "Jaugada Fort", "Raibania Fort Balasore", "Potagarh Fort", "Mayurbhanj Palace (Belgadia Palace)", "Kalahandi Palace",
  "Nilagiri Palace", "Jeypore Palace", "Dhenkanal Palace", "Parlakhemundi Palace", "Keonjhar Palace",
  "Khariar Palace", "Athagarh Palace", "Nayagarh Palace", "Dashashwamedh Ghat Jajpur", "Biraja Temple Jajpur",
  "Akhandalamani Temple", "Kapilash Temple Dhenkanal", "Chandrabhaga Temple Ruins", "Gangeswari Temple", "Manikeshwari Temple Bhawanipatna",
  "Pataleshwar Shiva Temple", "Raghunath Temple", "Gundicha Temple Puri", "Sakhi Gopal Temple", "Alarnath Temple",
  "Baladevjew Temple Kendrapara", "Khirachora Gopinatha Temple", "Chandaneswar Temple Balasore", "Panchalingeshwar Temple", "Gupteswar Cave Temple"
].map(name => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, '_'),
  name: { en: name, or: name, hi: name }, 
  category: 'built',
  wikiUrl: BUILT_LINKS[name]
}));

// 2. Cultural Heritage (50 Pages)
const CULT_LINKS: Record<string, string> = {
  "Rath Yatra Puri": "https://en.wikipedia.org/wiki/Ratha_Yatra",
  "Bahuda Yatra": "https://en.wikipedia.org/wiki/Bahuda_Yatra",
  "Snana Yatra": "https://en.wikipedia.org/wiki/Snana_Yatra",
  "Chandan Yatra": "https://en.wikipedia.org/wiki/Chandan_Yatra",
  "Dola Purnima": "https://en.wikipedia.org/wiki/Dol_Purnima",
  "Bali Jatra Cuttack": "https://en.wikipedia.org/wiki/Bali_Jatra",
  "Nuakhai Festival": "https://en.wikipedia.org/wiki/Nuakhai",
  "Raja Parba (Mithuna Sankranti)": "https://en.wikipedia.org/wiki/Raja_festival",
  "Makar Sankranti": "https://en.wikipedia.org/wiki/Makar_Sankranti",
  "Prathamastami": "https://en.wikipedia.org/wiki/Prathamastami",
  "Kumar Purnima": "https://en.wikipedia.org/wiki/Kumar_Purnima",
  "Chhatia Bata Mela": "https://en.wikipedia.org/wiki/Jajpur_district",
  "Magha Saptami (Chandrabhaga Mela)": "https://en.wikipedia.org/wiki/Magha_Saptami",
  "Dhanu Jatra Bargarh": "https://en.wikipedia.org/wiki/Dhanu_Jatra",
  "Sital Sasthi": "https://en.wikipedia.org/wiki/Sital_Sasthi",
  "Chhau Festival Mayurbhanj": "https://en.wikipedia.org/wiki/Mayurbhanj_Chhau",
  "Konark Dance Festival": "https://en.wikipedia.org/wiki/Konark_Dance_Festival",
  "Mukteswar Dance Festival": "https://en.wikipedia.org/wiki/Mukteswar_Dance_Festival",
  "Rajarani Music Festival": "https://en.wikipedia.org/wiki/Rajarani_Music_Festival",
  "Toshali National Crafts Mela": "https://en.wikipedia.org/wiki/Toshali_National_Crafts_Mela",
  "Adivasi Mela": "https://en.wikipedia.org/wiki/Adivasi_Mela",
  "Pattachitra Painting": "https://en.wikipedia.org/wiki/Pattachitra",
  "Pipli Applique Work": "https://en.wikipedia.org/wiki/Appliqué",
  "Sambalpuri Ikat Weaving": "https://en.wikipedia.org/wiki/Sambalpuri_sari",
  "Khandua Silk Saree": "https://en.wikipedia.org/wiki/Khandua",
  "Bomkai Saree": "https://en.wikipedia.org/wiki/Bomkai_saree",
  "Berhampuri Patta": "https://en.wikipedia.org/wiki/Berhampur_silk",
  "Kotpad Handloom": "https://en.wikipedia.org/wiki/Kotpad_sari",
  "Cuttack Silver Filigree (Tarakasi)": "https://en.wikipedia.org/wiki/Tarakasi",
  "Stone Carving of Bhubaneswar": "https://en.wikipedia.org/wiki/Kalinga_architecture",
  "Wood Carving of Puri (Rath Making)": "https://en.wikipedia.org/wiki/Jagannath_Temple,_Puri",
  "Horn Work of Gajapati": "https://en.wikipedia.org/wiki/Handicrafts_of_Odisha",
  "Brass and Bell Metal Work (Dhokra)": "https://en.wikipedia.org/wiki/Dhokra",
  "Terracotta Art of Odisha": "https://en.wikipedia.org/wiki/Handicrafts_of_Odisha",
  "Golden Grass Craft Kendrapara": "https://en.wikipedia.org/wiki/Handicrafts_of_Odisha",
  "Coir Craft of Puri": "https://en.wikipedia.org/wiki/Handicrafts_of_Odisha",
  "Palm Leaf Engraving (Tala Patra Chitra)": "https://en.wikipedia.org/wiki/Palm-leaf_manuscript",
  "Sand Art of Odisha": "https://en.wikipedia.org/wiki/Sand_animation",
  "Mahaprasad of Jagannath Temple": "https://en.wikipedia.org/wiki/Mahaprasad",
  "Chappan Bhog Tradition": "https://en.wikipedia.org/wiki/Chhappan_Bhog",
  "Dalma Traditional Recipe": "https://en.wikipedia.org/wiki/Dalma_(dish)",
  "Rasagola of Odisha (GI Tag)": "https://en.wikipedia.org/wiki/Rasgulla",
  "Chhena Poda": "https://en.wikipedia.org/wiki/Chhena_poda",
  "Arisa Pitha": "https://en.wikipedia.org/wiki/Arisa_pitha",
  "Enduri Pitha": "https://en.wikipedia.org/wiki/Enduri_Pitha",
  "Kakara Pitha": "https://en.wikipedia.org/wiki/Kakara_pitha",
  "Lord Jagannath Cult (Jagannath Sanskruti)": "https://en.wikipedia.org/wiki/Jagannath",
  "Tribal Culture of Bonda Tribe": "https://en.wikipedia.org/wiki/Bonda_people",
  "Dongria Kondh Art and Culture": "https://en.wikipedia.org/wiki/Dongria_Kondh",
  "Santhal Tribe Traditions": "https://en.wikipedia.org/wiki/Santali_people"
};

export const CULTURAL_HERITAGE: HeritageItem[] = [
  "Rath Yatra Puri", "Bahuda Yatra", "Snana Yatra", "Chandan Yatra", "Dola Purnima",
  "Bali Jatra Cuttack", "Nuakhai Festival", "Raja Parba (Mithuna Sankranti)", "Makar Sankranti", "Prathamastami",
  "Kumar Purnima", "Chhatia Bata Mela", "Magha Saptami (Chandrabhaga Mela)", "Dhanu Jatra Bargarh", "Sital Sasthi",
  "Chhau Festival Mayurbhanj", "Konark Dance Festival", "Mukteswar Dance Festival", "Rajarani Music Festival", "Toshali National Crafts Mela",
  "Adivasi Mela", "Pattachitra Painting", "Pipli Applique Work", "Sambalpuri Ikat Weaving", "Khandua Silk Saree",
  "Bomkai Saree", "Berhampuri Patta", "Kotpad Handloom", "Cuttack Silver Filigree (Tarakasi)", "Stone Carving of Bhubaneswar",
  "Wood Carving of Puri (Rath Making)", "Horn Work of Gajapati", "Brass and Bell Metal Work (Dhokra)", "Terracotta Art of Odisha", "Golden Grass Craft Kendrapara",
  "Coir Craft of Puri", "Palm Leaf Engraving (Tala Patra Chitra)", "Sand Art of Odisha", "Mahaprasad of Jagannath Temple", "Chappan Bhog Tradition",
  "Dalma Traditional Recipe", "Rasagola of Odisha (GI Tag)", "Chhena Poda", "Arisa Pitha", "Enduri Pitha",
  "Kakara Pitha", "Lord Jagannath Cult (Jagannath Sanskruti)", "Tribal Culture of Bonda Tribe", "Dongria Kondh Art and Culture", "Santhal Tribe Traditions"
].map(name => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, '_'),
  name: { en: name, or: name, hi: name },
  category: 'cultural',
  wikiUrl: CULT_LINKS[name]
}));

// 3. Natural Heritage (50 Pages)
const NAT_LINKS: Record<string, string> = {
  "Similipal National Park": "https://en.wikipedia.org/wiki/Simlipal_National_Park",
  "Bhitarkanika National Park": "https://en.wikipedia.org/wiki/Bhitarkanika_National_Park",
  "Chilika Lake (Nalabana Bird Sanctuary)": "https://en.wikipedia.org/wiki/Chilika_Lake",
  "Gahirmatha Marine Sanctuary": "https://en.wikipedia.org/wiki/Gahirmatha_Marine_Sanctuary",
  "Satkosia Tiger Reserve": "https://en.wikipedia.org/wiki/Satkosia_Tiger_Reserve",
  "Debrigarh Wildlife Sanctuary": "https://en.wikipedia.org/wiki/Debrigarh_Wildlife_Sanctuary",
  "Sunabeda Wildlife Sanctuary": "https://en.wikipedia.org/wiki/Sunabeda_Wildlife_Sanctuary",
  "Kotagarh Wildlife Sanctuary": "https://en.wikipedia.org/wiki/Kotagarh_Wildlife_Sanctuary",
  "Chandaka-Dampara Elephant Sanctuary": "https://en.wikipedia.org/wiki/Chandaka_Elephant_Sanctuary",
  "Hadgarh Wildlife Sanctuary": "https://en.wikipedia.org/wiki/Hadgarh_Wildlife_Sanctuary",
  "Karlapat Wildlife Sanctuary": "https://en.wikipedia.org/wiki/Karlapat_Wildlife_Sanctuary",
  "Khalasuni Wildlife Sanctuary": "https://en.wikipedia.org/wiki/Khalasuni_Wildlife_Sanctuary",
  "Kuldiha Wildlife Sanctuary": "https://en.wikipedia.org/wiki/Kuldiha_Wildlife_Sanctuary",
  "Lakhari Valley Wildlife Sanctuary": "https://en.wikipedia.org/wiki/Lakhari_Valley_Wildlife_Sanctuary",
  "Nandankanan Zoological Park": "https://en.wikipedia.org/wiki/Nandankanan_Zoological_Park",
  "Baisipalli Wildlife Sanctuary": "https://en.wikipedia.org/wiki/Baisipalli_Wildlife_Sanctuary",
  "Balukhand-Konark Wildlife Sanctuary": "https://en.wikipedia.org/wiki/Balukhand-Konark_Wildlife_Sanctuary",
  "Badrama (Ushakothi) Wildlife Sanctuary": "https://en.wikipedia.org/wiki/Ushakothi_Wildlife_Sanctuary",
  "Kapilash Wildlife Sanctuary": "https://en.wikipedia.org/wiki/Kapilash_Wildlife_Sanctuary",
  "Mangalajodi Ecotourism": "https://en.wikipedia.org/wiki/Mangalajodi",
  "Ansupa Lake": "https://en.wikipedia.org/wiki/Ansupa_Lake",
  "Tampara Lake": "https://en.wikipedia.org/wiki/Tampara_Lake",
  "Hirakud Reservoir": "https://en.wikipedia.org/wiki/Hirakud_Dam",
  "Barehipani Waterfall": "https://en.wikipedia.org/wiki/Barehipani_Falls",
  "Joranda Waterfall": "https://en.wikipedia.org/wiki/Joranda_Falls",
  "Duduma Waterfall": "https://en.wikipedia.org/wiki/Duduma_Falls",
  "Khandadhar Waterfall": "https://en.wikipedia.org/wiki/Khandadhar_Falls",
  "Badaghagara Waterfall": "https://en.wikipedia.org/wiki/Badaghagara_Falls",
  "Sanaghagara Waterfall": "https://en.wikipedia.org/wiki/Sanaghagara_Falls",
  "Devkund Waterfall": "https://en.wikipedia.org/wiki/Devkund_Waterfalls",
  "Harishankar Waterfall": "https://en.wikipedia.org/wiki/Harishankar_Temple",
  "Phurli Jharan Waterfall": "https://en.wikipedia.org/wiki/Phulbani",
  "Putudi Waterfall": "https://en.wikipedia.org/wiki/Putudi_Falls",
  "Khandualamali Waterfalls": "https://en.wikipedia.org/wiki/Khandualamali",
  "Puri Golden Beach": "https://en.wikipedia.org/wiki/Puri",
  "Chandrabhaga Beach": "https://en.wikipedia.org/wiki/Chandrabhaga_Beach",
  "Gopalpur-on-Sea": "https://en.wikipedia.org/wiki/Gopalpur-on-Sea",
  "Chandipur Beach (Vanishing Sea)": "https://en.wikipedia.org/wiki/Chandipur",
  "Talasari Beach": "https://en.wikipedia.org/wiki/Talasari",
  "Astaranga Beach": "https://en.wikipedia.org/wiki/Astaranga",
  "Aryapalli Beach": "https://en.wikipedia.org/wiki/Aryapalli",
  "Rushikulya Turtle Rookery": "https://en.wikipedia.org/wiki/Rushikulya_River",
  "Daringbadi (Kashmir of Odisha)": "https://en.wikipedia.org/wiki/Daringbadi",
  "Taptapani Hot Spring": "https://en.wikipedia.org/wiki/Taptapani",
  "Atri Hot Spring": "https://en.wikipedia.org/wiki/Atri,_Odisha",
  "Taralo Hot Spring": "https://en.wikipedia.org/wiki/Deulajhari",
  "Deulajhari Hot Spring": "https://en.wikipedia.org/wiki/Deulajhari",
  "Mahendragiri Hills": "https://en.wikipedia.org/wiki/Mahendragiri",
  "Malayagiri Peak": "https://en.wikipedia.org/wiki/Malayagiri",
  "Gandhamardan Hills": "https://en.wikipedia.org/wiki/Gandhamardan_hills"
};

export const NATURAL_HERITAGE: HeritageItem[] = [
  "Similipal National Park", "Bhitarkanika National Park", "Chilika Lake (Nalabana Bird Sanctuary)", "Gahirmatha Marine Sanctuary", "Satkosia Tiger Reserve",
  "Debrigarh Wildlife Sanctuary", "Sunabeda Wildlife Sanctuary", "Kotagarh Wildlife Sanctuary", "Chandaka-Dampara Elephant Sanctuary", "Hadgarh Wildlife Sanctuary",
  "Karlapat Wildlife Sanctuary", "Khalasuni Wildlife Sanctuary", "Kuldiha Wildlife Sanctuary", "Lakhari Valley Wildlife Sanctuary", "Nandankanan Zoological Park",
  "Baisipalli Wildlife Sanctuary", "Balukhand-Konark Wildlife Sanctuary", "Badrama (Ushakothi) Wildlife Sanctuary", "Kapilash Wildlife Sanctuary", "Mangalajodi Ecotourism",
  "Ansupa Lake", "Tampara Lake", "Hirakud Reservoir", "Barehipani Waterfall", "Joranda Waterfall",
  "Duduma Waterfall", "Khandadhar Waterfall", "Badaghagara Waterfall", "Sanaghagara Waterfall", "Devkund Waterfall",
  "Harishankar Waterfall", "Phurli Jharan Waterfall", "Putudi Waterfall", "Khandualamali Waterfalls", "Puri Golden Beach",
  "Chandrabhaga Beach", "Gopalpur-on-Sea", "Chandipur Beach (Vanishing Sea)", "Talasari Beach", "Astaranga Beach",
  "Aryapalli Beach", "Rushikulya Turtle Rookery", "Daringbadi (Kashmir of Odisha)", "Taptapani Hot Spring", "Atri Hot Spring",
  "Taralo Hot Spring", "Deulajhari Hot Spring", "Mahendragiri Hills", "Malayagiri Peak", "Gandhamardan Hills"
].map(name => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, '_'),
  name: { en: name, or: name, hi: name },
  category: 'natural',
  wikiUrl: NAT_LINKS[name]
}));

// 4. Performing Arts (30 Pages)
const ARTS_LINKS: Record<string, string> = {
  "Odissi Classical Dance": "https://en.wikipedia.org/wiki/Odissi",
  "Gotipua Dance": "https://en.wikipedia.org/wiki/Gotipua",
  "Mayurbhanj Chhau Dance": "https://en.wikipedia.org/wiki/Mayurbhanj_Chhau",
  "Sambalpuri Folk Dance": "https://en.wikipedia.org/wiki/Sambalpuri_dance",
  "Dalkhai Dance": "https://en.wikipedia.org/wiki/Dalkhai",
  "Ghumura Dance": "https://en.wikipedia.org/wiki/Ghumura_Dance",
  "Ranapa Dance (Stilt Dance)": "https://en.wikipedia.org/wiki/Ranapa_Dance",
  "Jodi Sankha Dance": "https://en.wikipedia.org/wiki/Dance_in_Odisha",
  "Chaiti Ghoda Dance (Dummy Horse)": "https://en.wikipedia.org/wiki/Chaiti_Ghoda",
  "Bagha Nacha (Tiger Dance)": "https://en.wikipedia.org/wiki/Bagha_Nacha",
  "Paika Nrutya (Martial Dance)": "https://en.wikipedia.org/wiki/Paika_Nritya",
  "Prahallad Nataka": "https://en.wikipedia.org/wiki/Prahallada_Nataka",
  "Danda Nata": "https://en.wikipedia.org/wiki/Danda_Nata",
  "Karma Naach (Tribal)": "https://en.wikipedia.org/wiki/Karma_dance",
  "Jhumair Dance": "https://en.wikipedia.org/wiki/Jhumair",
  "Koya Dance": "https://en.wikipedia.org/wiki/Koya_people",
  "Paraja Dance": "https://en.wikipedia.org/wiki/Paraja_people",
  "Sakhi Kandhei (String Puppetry)": "https://en.wikipedia.org/wiki/Puppetry_in_India",
  "Ravana Chhaya (Shadow Puppetry)": "https://en.wikipedia.org/wiki/Ravana_Chhaya",
  "Daskathia (Folk Ballad)": "https://en.wikipedia.org/wiki/Daskathia",
  "Pala (Folk Theatre)": "https://en.wikipedia.org/wiki/Pala_(theatre)",
  "Dhanu Yatra Theatre": "https://en.wikipedia.org/wiki/Dhanu_Jatra",
  "Chutku Chuta": "https://en.wikipedia.org/wiki/Dance_in_Odisha",
  "Bajasal": "https://en.wikipedia.org/wiki/Odisha_music",
  "Kela Keluni": "https://en.wikipedia.org/wiki/Kela_people",
  "Laudi Khela": "https://en.wikipedia.org/wiki/Dance_in_Odisha",
  "Dhap Dance": "https://en.wikipedia.org/wiki/Dhap",
  "Rasarkeli": "https://en.wikipedia.org/wiki/Rasarkeli",
  "Odissi Classical Music": "https://en.wikipedia.org/wiki/Odia_music",
  "Mardala (Percussion Instrument)": "https://en.wikipedia.org/wiki/Mardala"
};

export const PERFORMING_ARTS: HeritageItem[] = [
  "Odissi Classical Dance", "Gotipua Dance", "Mayurbhanj Chhau Dance", "Sambalpuri Folk Dance", "Dalkhai Dance",
  "Ghumura Dance", "Ranapa Dance (Stilt Dance)", "Jodi Sankha Dance", "Chaiti Ghoda Dance (Dummy Horse)", "Bagha Nacha (Tiger Dance)",
  "Paika Nrutya (Martial Dance)", "Prahallad Nataka", "Danda Nata", "Karma Naach (Tribal)", "Jhumair Dance",
  "Koya Dance", "Paraja Dance", "Sakhi Kandhei (String Puppetry)", "Ravana Chhaya (Shadow Puppetry)", "Daskathia (Folk Ballad)",
  "Pala (Folk Theatre)", "Dhanu Yatra Theatre", "Chutku Chuta", "Bajasal", "Kela Keluni",
  "Laudi Khela", "Dhap Dance", "Rasarkeli", "Odissi Classical Music", "Mardala (Percussion Instrument)"
].map(name => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, '_'),
  name: { en: name, or: name, hi: name },
  category: 'arts',
  wikiUrl: ARTS_LINKS[name]
}));

// 5. History (90 Pages)
export const HISTORY_TIMELINE: HeritageItem[] = [
  // Ancient
  "Rule of Nanda Dynasty in Kalinga", "The Kalinga War (261 BCE)", "Emperor Ashoka's Conquest of Kalinga", "Creation of Ashoka's Rock Edicts at Dhauli and Jaugada", "Rise of Mahameghavahana Dynasty",
  "Reign of Emperor Kharavela (1st Century BCE)", "Creation of Hathigumpha Inscription", "Kalinga Maritime Trade with Southeast Asia", "Samudragupta's South Indian Campaign", "Rule of the Mathara Dynasty",
  "Rule of the Sharabhapuriya Dynasty", "Rise of the Shailodbhava Dynasty", "Hiuen Tsang's Visit to Odra (639 CE)", "Reign of Bhauma-Kara Dynasty", "Rule of Tribhuvana Mahadevi (First Female Ruler, 845 CE)",
  "Rise of the Somavamsi Dynasty", "Janmejaya I Establishes Somavamsi Rule", "Construction of Lingaraj Temple (11th Century)", "Establishment of Eastern Ganga Dynasty (1038 CE)", "Chodaganga Deva Shifts Capital to Kataka (1135 CE)",
  "Construction of Puri Jagannath Temple Begins", "Reign of Anangabhima Deva III", "Construction of Ananta Vasudeva Temple by Queen Chandrika (1278 CE)", "Reign of Narasimhadeva I", "Construction of Konark Sun Temple (1250 CE)",
  "Foundation of Gajapati Empire by Kapilendra Deva (1434 CE)", "Expansion of Gajapati Empire to the South", "Reign of Purushottama Deva", "Reign of Prataparudra Deva", "Creation of Odia Mahabharata by Sarala Das",
  // Medieval
  "Krishnadevaraya's Invasion of Udayagiri (1513)", "Quli Qutb Shah's Invasion (1522)", "Foundation of Bhoi Dynasty by Govinda Vidyadhara (1541)", "Afghan Invasion by Kalapahad (1568)", "Death of Mukunda Deva (Last Independent Hindu King, 1568)",
  "Sultan Sulaiman Khan Karrani Conquers Odisha (1568)", "Battle of Raj Mahal (1576)", "Establishment of Mughal Rule in Odisha", "Odisha Separated from Bengal by Jahangir (1606)", "East India Company Factory at Haripur (1633)",
  "Free Trade Granted to EIC by Aurangzeb (1671)", "Odisha Passes to Naib Nazims of Bengal (1703)", "Maratha Conquest of Odisha (1751)", "British Conquest of Odisha (1803)", "Khurda Rebellion Led by Jayi Rajguru (1804)",
  "Execution of Jayi Rajguru (1806)", "Paika Bidroha (Paika Rebellion) under Buxi Jagabandhu (1817)", "Surrender of Buxi Jagabandhu (1825)", "Ghumsur Uprising (1835)", "Surendra Sai's Revolt in Sambalpur (1857)",
  "Kandha Tribal Uprising", "Bhuyan Uprising in Keonjhar", "The Great Odisha Famine (Na'Anka Durbhiksha) (1866)", "Introduction of Printing Press in Odisha", "Publication of Utkal Deepika (1866)",
  "Establishment of Ravenshaw College (1868)", "Formation of Utkal Sabha (1882)", "Growth of Odia Nationalism Movement", "Fakir Mohan Senapati's Literary Renaissance", "Sambalpur Added to Odisha Division (1895)",
  // Recent
  "Formation of Utkal Sammilani by Madhusudan Das (1903)", "Bihar and Orissa Province Formation (1912)", "Publication of \"The Oriya\" Newspaper (1917)", "Satyabadi School Founded by Gopabandhu Das", "Non-Cooperation Movement in Odisha (1920)",
  "Visit of Mahatma Gandhi to Odisha (1921)", "Salt Satyagraha at Inchudi, Balasore (1930)", "Formation of Separate Province of Odisha (1 April 1936)", "First Election to Odisha Legislative Assembly (1937)", "Prajamandal Movement in Princely States (1938)",
  "Eram Massacre (Rakta Tirtha) During Quit India Movement (1942)", "Laxman Nayak's Martyrdom (1943)", "Merger of Princely States with Odisha (1948)", "Foundation Stone of Hirakud Dam Laid (1948)", "Shifting of State Capital to Bhubaneswar (1948)",
  "Biju Patnaik's Rescue Mission in Indonesia (1948)", "Mayurbhanj Merges with Odisha (1949)", "Institution of Kalinga Prize by Biju Patnaik (1952)", "Establishment of Rourkela Steel Plant (1955)", "Inauguration of Hirakud Dam (1957)",
  "Official Language Act Passes in Assembly", "Establishment of Odisha Sahitya Academy", "Nandankanan Zoological Park Established (1960)", "Paradip Port Inauguration (1966)", "Albert Ekka's Heroism in Bangladesh War (1971)",
  "Super Cyclone Hits Odisha (1999)", "Phailin Cyclone (2013)", "Recognition of Odia as a Classical Language (2014)", "Hosting of Men's FIH Hockey World Cup (2018)", "Inauguration of Birsa Munda International Hockey Stadium (2023)"
].map((name, index) => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, '_'),
  name: { en: name, or: name, hi: name },
  category: 'history',
  era: index < 30 ? 'ancient' : index < 60 ? 'medieval' : 'recent'
}));

export const ALL_HERITAGE_ITEMS = [
  ...BUILT_HERITAGE,
  ...CULTURAL_HERITAGE,
  ...NATURAL_HERITAGE,
  ...PERFORMING_ARTS,
  ...HISTORY_TIMELINE
];

export const UI_STRINGS = {
  hero: {
    title: { en: "Kalinga", or: "କଳିଙ୍ଗ", hi: "कलिंग" },
    subtitle: { en: "The Eternal Legacy", or: "ଚିରନ୍ତନ ଐତିହ୍ୟ", hi: "सदाबहार विरासत" }
  },
  tabs: {
    hero: { en: "Landmark", or: "ମୁଖ୍ୟ", hi: "प्रमुख" },
    built: { en: "Built", or: "ସ୍ଥାପତ୍ୟ", hi: "निर्मित" },
    cultural: { en: "Cultural", or: "ସାଂସ୍କୃତିକ", hi: "सांस्कृतिक" },
    natural: { en: "Natural", or: "ପ୍ରାକୃତିକ", hi: "प्राकृतिक" },
    arts: { en: "Arts", or: "କଳା", hi: "कला" },
    history: { en: "History", or: "ଇତିହାସ", hi: "इतिहास" },
    trivia: { en: "Trivia", or: "ଜିଜ୍ଞାସା", hi: "प्रश्नोत्तरी" }
  },
  common: {
    back: { en: "Back", or: "ପଛକୁ", hi: "पीछे" },
    next: { en: "Next", or: "ଆଗକୁ", hi: "आगे" },
    status: { en: "Authentic Records", or: "ପ୍ରାମାଣିକ ନଥି", hi: "प्रामाणिक रिकॉर्ड" },
    deepDive: { en: "Deep Dive", or: "ଅଧିକ ଜାଣନ୍ତୁ", hi: "गहराई से जानें" }
  }
};

export const TRIVIA_DATA = [
  {
    question: {
      en: "How many massive stone wheels are carved on the Konark Sun Temple’s chariot structure?",
      or: "କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିରର ରଥ ସଂରଚନାରେ କେତୋଟି ବିଶାଳ ପଥର ଚକ ଖୋଦିତ ହୋଇଛି?",
      hi: "कोणार्क सूर्य मंदिर के रथ की संरचना पर कितने विशाल पत्थर के पहिये खुदे हुए हैं?"
    },
    options: {
      en: ["8", "12", "24", "32"],
      or: ["୮", "୧୨", "୨୪", "୩୨"],
      hi: ["8", "12", "24", "32"]
    },
    answer: { en: "24", or: "୨୪", hi: "24" },
    dive: {
      en: "The 13th-century Konark Sun Temple is designed as Surya’s colossal stone chariot, featuring 24 ornately carved wheels symbolising the 24 hours of the day. Each wheel has eight principal spokes functioning as sundials.",
      or: "୧୩ଶ ଶତାବ୍ଦୀର କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର ସୂର୍ଯ୍ୟଙ୍କ ଏକ ବିଶାଳ ପଥର ରଥ ଭାବରେ ପରିକଳ୍ପିତ, ଯେଉଁଥିରେ ଦିନର ୨୪ ଘଣ୍ଟାକୁ ସୂଚାଉଥିବା ୨୪ଟି ଅଳଙ୍କାରିକ ଖୋଦିତ ଚକ ରହିଛି ।",
      hi: "13वीं शताब्दी के कोणार्क सूर्य मंदिर को सूर्य के विशाल पत्थर के रथ के रूप में डिजाइन किया गया है, जिसमें दिन के 24 घंटों का प्रतीक 24 अलंकृत नक्काशीदार पहिये हैं।"
    }
  },
  {
    question: {
      en: "The Konark Sun Temple is depicted as Surya’s chariot drawn by horses. How many stone horses pull this chariot?",
      or: "କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିର ସୂର୍ଯ୍ୟଙ୍କ ରଥ ଭଳି ଦେଖାଯାଏ । ଏହି ରଥକୁ କେତୋଟି ପଥର ଘୋଡା ଟାଣୁଛନ୍ତି?",
      hi: "कोणार्क सूर्य मंदिर को घोड़ों द्वारा खींचे जाने वाले सूर्य के रथ के रूप में दर्शाया गया है। कितने पत्थर के घोड़े इस रथ को खींचते हैं?"
    },
    options: {
      en: ["4", "6", "7", "8"],
      or: ["୪", "୬", "୭", "୮"],
      hi: ["4", "6", "7", "8"]
    },
    answer: { en: "7", or: "୭", hi: "7" },
    dive: {
      en: "The Sun Temple’s base shows seven galloping stone horses, representing the seven days of the week and the sun’s chariot as per Hindu mythology.",
      or: "ମନ୍ଦିରର ପୀଠରେ ସାତୋଟି ଦୌଡୁଥିବା ପଥର ଘୋଡା ଦର୍ଶାଯାଇଛି, ଯାହା ସପ୍ତାହର ସାତ ଦିନକୁ ସୂଚାଉଛି ।",
      hi: "सूर्य मंदिर का आधार सात सरपट दौड़ते हुए पत्थर के घोड़ों को दिखाता है, जो हिंदू पौराणिक कथाओं के अनुसार सप्ताह के सात दिनों और सूर्य के रथ का प्रतिनिधित्व करते हैं।"
    }
  },
  {
    question: {
      en: "Approximately how tall is the main spire (vimana) of the Lingaraja Temple?",
      or: "ଲିଙ୍ଗରାଜ ମନ୍ଦିରର ମୁଖ୍ୟ ଶିଖର (ବିମାନ) ର ଉଚ୍ଚତା ପ୍ରାୟ କେତେ?",
      hi: "लिंगराज मंदिर के मुख्य शिखर (विमान) की ऊंचाई लगभग कितनी है?"
    },
    options: {
      en: ["148 feet (45 m)", "100 feet (30 m)", "64 feet (19.5 m)", "214 feet (65 m)"],
      or: ["୧୪୮ ଫୁଟ (୪୫ ମିଟର)", "୧୦୦ ଫୁଟ (୩୦ ମିଟର)", "୬୪ ଫୁଟ (୧୯.୫ ମିଟର)", "୨୧୪ ଫୁଟ (୬୫ ମିଟର)"],
      hi: ["148 फीट (45 मीटर)", "100 फीट (30 मीटर)", "64 फीट (19.5 मीटर)", "214 फीट (65 मीटर)"]
    },
    answer: { en: "148 feet (45 m)", or: "୧୪୮ ଫୁଟ (୪୫ ମିଟର)", hi: "148 फीट (45 मीटर)" },
    dive: {
      en: "Lingaraja Temple’s central tower soars about 148 feet (45 metres) high, making it the tallest historic temple in Bhubaneswar.",
      or: "ଲିଙ୍ଗରାଜ ମନ୍ଦିରର ମୁଖ୍ୟ ମନ୍ଦିର ପ୍ରାୟ ୧୪୮ ଫୁଟ (୪୫ ମିଟର) ଉଚ୍ଚ, ଯାହା ଭୁବନେଶ୍ୱରର ସବୁଠାରୁ ଉଚ୍ଚ ପ୍ରାଚୀନ ମନ୍ଦିର ।",
      hi: "लिंगराज मंदिर का केंद्रीय टावर लगभग 148 फीट (45 मीटर) ऊंचा है, जो इसे भुवनेश्वर का सबसे ऊंचा ऐतिहासिक मंदिर बनाता है।"
    }
  },
  {
    question: {
      en: "Roughly how many subsidiary shrines (minor temples) are present within the Lingaraja Temple complex courtyard?",
      or: "ଲିଙ୍ଗରାଜ ମନ୍ଦିର ବେଢା ମଧ୍ୟରେ ପ୍ରାୟ କେତୋଟି କ୍ଷୁଦ୍ର ମନ୍ଦିର ଅଛି?",
      hi: "लिंगराज मंदिर परिसर के आंगन में लगभग कितने सहायक मंदिर (छोटे मंदिर) मौजूद हैं?"
    },
    options: {
      en: ["64", "108", "150", "200"],
      or: ["୬୪", "୧୦୮", "୧୫୦", "୨୦୦"],
      hi: ["64", "108", "150", "200"]
    },
    answer: { en: "150", or: "୧୫୦", hi: "150" },
    dive: {
      en: "The Lingaraja Temple complex houses around 150 minor shrines within its compound walls, a dense concentration showcasing centuries of devotional additions.",
      or: "ଲିଙ୍ଗରାଜ ମନ୍ଦିର ପରିସର ମଧ୍ୟରେ ପ୍ରାୟ ୧୫୦ଟି ଛୋଟ ମନ୍ଦିର ଅଛି ।",
      hi: "लिंगराज मंदिर परिसर में इसकी दीवारों के भीतर लगभग 150 छोटे मंदिर हैं।"
    }
  },
  {
    question: {
      en: "How many steps comprise the Baisi Pahacha at Puri’s Jagannath Temple?",
      or: "ପୁରୀ ଜଗନ୍ନାଥ ମନ୍ଦିରର ବାଇଶି ପାହାଚରେ କେତୋଟି ପାହାଚ ଅଛି?",
      hi: "पुरी के जगन्नाथ मंदिर में बाइसी पहाचा में कितनी सीढ़ियाँ हैं?"
    },
    options: {
      en: ["12", "18", "22", "24"],
      or: ["୧୨", "୧୮", "୨୨", "୨୪"],
      hi: ["12", "18", "22", "24"]
    },
    answer: { en: "22", or: "୨୨", hi: "22" },
    dive: {
      en: "The Baisi Pahacha translates literally to “22 steps” in Odia. Pilgrims climb these steps at the Lion’s Gate to shed worldly vices.",
      or: "ବାଇଶି ପାହାଚର ଅର୍ଥ ହେଉଛି ୨୨ଟି ପାହାଚ । ଭକ୍ତମାନେ ଶ୍ରଦ୍ଧାର ସହ ଏହି ପାହାଚ ଗୁଡିକ ଅତିକ୍ରମ କରନ୍ତି ।",
      hi: "बाइसी पहाचा का ओड़िया में शाब्दिक अर्थ '22 सीढ़ियाँ' है। तीर्थयात्री सांसारिक बुराइयों को त्यागने के लिए सिंह द्वार पर इन सीढ़ियों को चढ़ते हैं।"
    }
  },
  {
    question: {
      en: "During the Rath Yatra festival in Puri, how many chariots are pulled through the streets?",
      or: "ପୁରୀ ରଥଯାତ୍ରା ସମୟରେ କେତୋଟି ରଥ ଟଣାଯାଏ?",
      hi: "पुरी में रथ यात्रा उत्सव के दौरान सड़कों पर कितने रथ खींचे जाते हैं?"
    },
    options: {
      en: ["1", "2", "3", "4"],
      or: ["୧", "୨", "୩", "୪"],
      hi: ["1", "2", "3", "4"]
    },
    answer: { en: "3", or: "୩", hi: "3" },
    dive: {
      en: "The Rath Yatra features three colossal chariots – one for each principal deity: Lord Jagannath, Lord Balabhadra, and Devi Subhadra.",
      or: "ରଥଯାତ୍ରାରେ ତିନୋଟି ବିଶାଳ ରଥ ରହିଥାଏ - ଜଗନ୍ନାଥ, ବଳଭଦ୍ର ଏବଂ ସୁଭଦ୍ରାଙ୍କ ପାଇଁ ଗୋଟିଏ ଲେଖାଏଁ ।",
      hi: "रथ यात्रा में तीन विशाल रथ होते हैं - प्रत्येक मुख्य देवता के लिए एक: भगवान जगन्नाथ, भगवान बलभद्र और देवी सुभद्रा।"
    }
  },
  {
    question: {
      en: "How many different food items traditionally make up the famous Mahaprasad (Chappan Bhog) offered daily to Lord Jagannath?",
      or: "ଭଗବାନ ଜଗନ୍ନାଥଙ୍କୁ ପ୍ରତିଦିନ ଅର୍ପଣ କରାଯାଉଥିବା ମହାପ୍ରସାଦ (ଛପନ ଭୋଗ) ରେ କେତୋଟି ଖାଦ୍ୟ ସାମଗ୍ରୀ ଥାଏ?",
      hi: "भगवान जगन्नाथ को प्रतिदिन अर्पित किए जाने वाले प्रसिद्ध महाप्रसाद (छप्पन भोग) में पारंपरिक रूप से कितने विभिन्न खाद्य पदार्थ होते हैं?"
    },
    options: {
      en: ["16", "28", "56", "84"],
      or: ["୧୬", "୨୮", "୫୬", "୮୪"],
      hi: ["16", "28", "56", "84"]
    },
    answer: { en: "56", or: "୫୬", hi: "56" },
    dive: {
      en: "Mahaprasad consiste of 56 distinct dishes offered to Jagannath daily, cooked in earthen pots in the temple’s massive kitchen.",
      or: "ଜଗନ୍ନାଥଙ୍କୁ ପ୍ରତିଦିନ ୫୬ ପ୍ରକାରର ପୂଜାବିଧି ଅନୁଯାୟୀ ପ୍ରସ୍ତୁତ ଭୋଗ ଅର୍ପଣ କରାଯାଏ, ଯାହାକୁ ଛପନ ଭୋଗ କୁହାଯାଏ ।",
      hi: "महाप्रसाद में जगन्नाथ को प्रतिदिन 56 अलग-अलग व्यंजन अर्पित किए जाते हैं, जिन्हें मंदिर की विशाल रसोई में मिट्टी के बर्तनों में पकाया जाता है।"
    }
  },
  {
    question: {
      en: "How many caves in total (Udayagiri + Khandagiri) are known to exist near Bhubaneswar?",
      or: "ଭୁବନେଶ୍ୱର ନିକଟରେ ଥିବା ଉଦୟଗିରି ଏବଂ ଖଣ୍ଡଗିରିରେ ମୋଟ କେତୋଟି ଗୁମ୍ଫା ଅଛି?",
      hi: "भुवनेश्वर के पास उदयगिरि और खंडगिरि की कुल कितनी गुफाएं मौजूद हैं?"
    },
    options: {
      en: ["18", "15", "27", "33"],
      or: ["୧୮", "୧୫", "୨୭", "୩୩"],
      hi: ["18", "15", "27", "33"]
    },
    answer: { en: "33", or: "୩୩", hi: "33" },
    dive: {
      en: "Modern surveys document 33 caves in total on Udayagiri (18 caves) and Khandagiri (15 caves) hills, excavated as monastic cells under King Kharavela.",
      or: "ଉଦୟଗିରିରେ ୧୮ଟି ଏବଂ ଖଣ୍ଡଗିରିରେ ୧୫ଟି, ମୋଟ ୩୩ଟି ଗୁମ୍ଫା ରହିଛି ।",
      hi: "आधुनिक सर्वेक्षणों में उदयगिरि (18 गुफाएं) और खंडगिरि (15 गुफाएं) पहाड़ियों पर कुल 33 गुफाएं दर्ज हैं।"
    }
  },
  {
    question: {
      en: "How many of Ashoka’s Major Rock Edicts are found in the Odisha region (ancient Kalinga)?",
      or: "ଓଡ଼ିଶା ଅଞ୍ଚଳରେ ଅଶୋକଙ୍କର କେତୋଟି ମୁଖ୍ୟ ଶିଳାଲେଖ ମିଳିଛି?",
      hi: "ओडिशा क्षेत्र (प्राचीन कलिंग) में अशोक के कितने प्रमुख शिलालेख पाए जाते हैं?"
    },
    options: {
      en: ["None", "2", "4", "14"],
      or: ["କିଛି ନାହିଁ", "୨", "୪", "୧୪"],
      hi: ["कोई नहीं", "2", "4", "14"]
    },
    answer: { en: "2", or: "୨", hi: "2" },
    dive: {
      en: "Two of Ashoka’s Major Rock Edicts were carved in Kalinga: one set at Dhauli and another at Jaugada.",
      or: "ଅଶୋକଙ୍କର ଦୁଇଟି ମୁଖ୍ୟ ଶିଳାଲେଖ ଓଡ଼ିଶାରେ ଅଛି: ଗୋଟିଏ ଧଉଳି ଏବଂ ଅନ୍ୟଟି ଜଉଗଡ଼ଠାରେ ।",
      hi: "कलिंग में अशोक के दो प्रमुख शिलालेख खुदे हुए थे: एक धौली में और दूसरा जौगढ़ में।"
    }
  },
  {
    question: {
      en: "How many lines of writing does the Hathigumpha Inscription of King Kharavela famously contain?",
      or: "ରାଜା ଖାରବେଳଙ୍କ ହାତୀଗୁମ୍ଫା ଶିଳାଲେଖରେ ପ୍ରସିଦ୍ଧ ଭାବରେ କେତୋଟି ଧାଡି ଲେଖା ଅଛି?",
      hi: "राजा खारवेल के हाथीगुम्फा शिलालेख में प्रसिद्ध रूप से कितनी पंक्तियां हैं?"
    },
    options: {
      en: ["4", "11", "17", "25"],
      or: ["୪", "୧୧", "୧୭", "୨୫"],
      hi: ["4", "11", "17", "25"]
    },
    answer: { en: "17", or: "୧୭", hi: "17" },
    dive: {
      en: "The Hathigumpha Inscription consists of 17 lines of deep-cut Prakrit text in Brahmi script, dated to the 1st century BCE.",
      or: "ଖ୍ରୀଷ୍ଟପୂର୍ବ ପ୍ରଥମ ଶତାବ୍ଦୀର ହାତୀଗୁମ୍ଫା ଶିଳାଲେଖରେ ୧୭ଟି ଧାଡି ରହିଛି ।",
      hi: "हाथीगुम्फा शिलालेख में ब्राह्मी लिपि में गहरे कटे हुए प्राकृत पाठ की 17 पंक्तियाँ हैं, जो पहली शताब्दी ईसा पूर्व की हैं।"
    }
  },
  {
    question: {
      en: "Approximately how large is the diameter of each giant stone wheel of Konark’s Sun Temple?",
      or: "କୋଣାର୍କ ସୂର୍ଯ୍ୟ ମନ୍ଦିରର ପ୍ରତ୍ୟେକ ବିଶାଳ ପଥର ଚକର ବ୍ୟାସ ପ୍ରାୟ କେତେ?",
      hi: "कोणार्क के सूर्य मंदिर के प्रत्येक विशाल पत्थर के पहिये का व्यास लगभग कितना है?"
    },
    options: {
      en: ["~3 feet", "~9 feet 9 inches", "~15 feet", "~30 feet"],
      or: ["~୩ ଫୁଟ", "~୯ ଫୁଟ ୯ ଇଞ୍ଚ", "~୧୫ ଫୁଟ", "~୩୦ ଫୁଟ"],
      hi: ["~3 फीट", "~9 फीट 9 इंच", "~15 फीट", "~30 फीट"]
    },
    answer: { en: "~9 feet 9 inches", or: "~୯ ଫୁଟ ୯ ଇଞ୍ଚ", hi: "~9 फीट 9 इंच" },
    dive: {
      en: "The carved wheels of Konark’s chariot each measure about 9 feet 9 inches across. They are meticulously sculpted with concentric spokes and elaborate hub medallions.",
      or: "କୋଣାର୍କ ରଥର ପ୍ରତ୍ୟେକ ଚକର ଚଉଡା ପ୍ରାୟ ୯ ଫୁଟ ୯ ଇଞ୍ଚ ।",
      hi: "कोणार्क के रथ के नक्काशीदार पहिये प्रत्येक लगभग 9 फीट 9 इंच के हैं। उन्हें संकेंद्रित स्पोक और विस्तृत हब पदकों के साथ सावधानीपूर्वक तैयार किया गया है।"
    }
  },
  {
    question: {
      en: "How do the number of wheels on the Sun Temple’s chariot connect to the design symbolism?",
      or: "ସୂର୍ଯ୍ୟ ମନ୍ଦିରର ରଥରେ ଥିବା ଚକ ସଂଖ୍ୟା କେଉଁ ପ୍ରତୀକ ସହ ଜଡିତ?",
      hi: "सूर्य मंदिर के रथ पर पहियों की संख्या डिजाइन प्रतीकवाद से कैसे जुड़ती है?"
    },
    options: {
      en: ["7 days of the week", "12 zodiac signs", "12 months (12 pairs)", "4 lunar phases"],
      or: ["୭ ଦିନ", "୧୨ ରାଶି", "୧୨ ମାସ (୧୨ ଯୋଡ଼ା)", "୪ ଚନ୍ଦ୍ର ପର୍ଯ୍ୟାୟ"],
      hi: ["सप्ताह के 7 दिन", "12 राशियाँ", "12 महीने (12 जोड़े)", "4 चंद्र चरण"]
    },
    answer: { en: "12 months (12 pairs)", or: "୧୨ ମାସ (୧୨ ଯୋଡ଼ା)", hi: "12 महीने (12 जोड़े)" },
    dive: {
      en: "Konark’s stone chariot carries 12 pairs of wheels (24 wheels total), a deliberate symbolic reference to the 12 months of the year.",
      or: "କୋଣାର୍କର ପଥର ରଥରେ ୧୨ ଯୋଡ଼ା ଚକ (ମୋଟ ୨୪ଟି ଚକ) ରହିଛି, ଯାହା ବର୍ଷର ୧୨ ମାସକୁ ସୂଚାଏ ।",
      hi: "कोणार्क के पत्थर के रथ में 12 जोड़ी पहिये (कुल 24 पहिये) हैं, जो वर्ष के 12 महीनों के लिए एक जानबूझकर प्रतीकात्मक संदर्भ है।"
    }
  },
  {
    question: {
      en: "How many black stone yogini images are still intact at the Chausath Yogini Temple at Hirapur today?",
      or: "ହିରାପୁରର ଚୌଷଠି ଯୋଗିନୀ ମନ୍ଦିରରେ ଆଜି କେତୋଟି କଳା ପଥରର ଯୋଗିନୀ ମୂର୍ତ୍ତି ଅକ୍ଷତ ଅବସ୍ଥାରେ ଅଛି?",
      hi: "हीरापुर के चौसठ योगिनी मंदिर में आज भी काले पत्थर की कितनी योगिनी प्रतिमाएं बरकरार हैं?"
    },
    options: {
      en: ["64", "63", "56", "48"],
      or: ["୬୪", "୬୩", "୫୬", "୪୮"],
      hi: ["64", "63", "56", "48"]
    },
    answer: { en: "56", or: "୫୬", hi: "56" },
    dive: {
      en: "While the temple’s name signifies 64 yoginis, only 56 of those carved idols remain standing in their niches today.",
      or: "ମନ୍ଦିରର ନାମ ୬୪ ଯୋଗିନୀ ହୋଇଥିଲେ ମଧ୍ୟ, ବର୍ତ୍ତମାନ କେବଳ ୫୬ଟି ମୂର୍ତ୍ତି ସୁରକ୍ଷିତ ଅଛି ।",
      hi: "जबकि मंदिर का नाम 64 योगिनियों का प्रतीक है, उन नक्काशीदार मूर्तियों में से केवल 56 आज भी अपने स्थानों पर खड़ी हैं।"
    }
  },
  {
    question: {
      en: "Approximately how many GI-tagged products did Odisha have registered by 2025?",
      or: "୨୦୨୫ ସୁଦ୍ଧା ଓଡ଼ିଶାର କେତୋଟି ଉତ୍ପାଦ ଜି.ଆଇ. (GI) ଟ୍ୟାଗ୍ ପାଇଛି?",
      hi: "ओडिशा के पास 2025 तक लगभग कितने जीआई-टैग वाले उत्पाद पंजीकृत थे?"
    },
    options: {
      en: ["About 8", "Around 17", "Over 25", "Nearly 50"],
      or: ["ପ୍ରାୟ ୮", "ପ୍ରାୟ ୧୭", "୨୫ ରୁ ଅଧିକ", "ପ୍ରାୟ ୫୦"],
      hi: ["लगभग 8", "लगभग 17", "25 से अधिक", "लगभग 50"]
    },
    answer: { en: "Over 25", or: "୨୫ ରୁ ଅଧିକ", hi: "25 से अधिक" },
    dive: {
      en: "By 2025, Odisha had over two dozen products granted GI status, including Pipili Appliqué, Sambalpuri Ikat, and Odisha Rasagola.",
      or: "୨୦୨୫ ସୁଦ୍ଧା ପିପିଲି ଚାନ୍ଦୁଆ, ସମ୍ବଲପୁରୀ ଇକତ୍ ସମେତ ୨୫ରୁ ଅଧିକ ଉତ୍ପାଦ ଜି.ଆଇ. ଷ୍ଟାଟସ୍ ପାଇଥିଲା ।",
      hi: "2025 तक, ओडिशा में पिपली एप्लिक, संबलपुरी इकत और ओडिशा रसगुल्ला सहित दो दर्जन से अधिक उत्पादों को जीआई दर्जा दिया गया था।"
    }
  },
  {
    question: {
      en: "How many earthen cooking pots are traditionally stacked in layers when preparing the Jagannath Mahaprasad?",
      or: "ଜଗନ୍ନାଥ ମହାପ୍ରସାଦ ପ୍ରସ୍ତୁତ କରିବା ସମୟରେ ପାରମ୍ପରିକ ଭାବରେ କେତୋଟି ମାଟି ପାତ୍ର ସ୍ତର ସ୍ତର ହୋଇ ରଖାଯାଏ?",
      hi: "जगन्नाथ महाप्रसाद तैयार करते समय पारंपरिक रूप से कितनी मिट्टी के खाना पकाने के बर्तन परतों में रखे जाते हैं?"
    },
    options: {
      en: ["2", "3", "7", "9"],
      or: ["୨", "୩", "୭", "୯"],
      hi: ["2", "3", "7", "9"]
    },
    answer: { en: "7", or: "୭", hi: "7" },
    dive: {
      en: "Seven earthen pots are traditionally stacked atop one another on a single wood-fire oven. Remarkably, the top pot cooks first.",
      or: "ଏକ ଆଶ୍ଚର୍ଯ୍ୟଜନକ ବିଧି ଅନୁଯାୟୀ, ୭ଟି ମାଟି ହାଣ୍ଡି ଗୋଟିଏ ଉପରେ ଗୋଟିଏ ରଖାଯାଇ ରନ୍ଧାଯାଏ ଏବଂ ଉପର ହାଣ୍ଡି ପ୍ରଥମେ ରନ୍ଧା ହୁଏ ।",
      hi: "पारंपरिक रूप से एक लकड़ी की आग वाले ओवन पर सात मिट्टी के बर्तन एक दूसरे के ऊपर रखे जाते हैं। उल्लेखनीय रूप से, सबसे ऊपर का बर्तन पहले पकता है।"
    }
  },
  {
    question: {
      en: "About how often does the rare Nabakalebara ceremony at Jagannath Temple typically take place?",
      or: "ଜଗନ୍ନାଥ ମନ୍ଦିରରେ ଦୁର୍ଲଭ ନବକଳେବର ଉତ୍ସବ ପ୍ରାୟ କେତେ ବର୍ଷ ଅନ୍ତରରେ ହୁଏ?",
      hi: "जगन्नाथ मंदिर में दुर्लभ नवकलेवर समारोह आमतौर पर कितनी बार होता है?"
    },
    options: {
      en: ["Every 12–19 years", "Every 5 years", "Every 50 years", "Every year"],
      or: ["ପ୍ରତି ୧୨-୧୯ ବର୍ଷରେ", "ପ୍ରତି ୫ ବର୍ଷରେ", "ପ୍ରତି ୫୦ ବର୍ଷରେ", "ପ୍ରତି ବର୍ଷ"],
      hi: ["प्रत्येक 12-19 वर्ष में", "प्रत्येक 5 वर्ष में", "प्रत्येक 50 वर्ष में", "हर साल"]
    },
    answer: { en: "Every 12–19 years", or: "ପ୍ରତି ୧୨-୧୯ ବର୍ଷରେ", hi: "प्रत्येक 12-19 वर्ष में" },
    dive: {
      en: "Nabakalebara is observed irregularly, roughly every 12 to 19 years, when there is an extra Adhika Ashadha month in the Hindu calendar.",
      or: "ନବକଳେବର ଅନିୟମିତ ଭାବେ ହୋଇଥାଏ, ପ୍ରାୟ ୧୨ ରୁ ୧୯ ବର୍ଷରେ ଥରେ ।",
      hi: "नवकलेवर को अनियमित रूप से देखा जाता है, लगभग हर 12 से 19 साल में।"
    }
  },
  {
    question: {
      en: "How many silver ingots were unearthed in the hidden hoard at Puri’s Emar Matha in 2011?",
      or: "୨୦୧୧ ମସିହାରେ ପୁରୀର ଏମାର ମଠରୁ କେତୋଟି ରୁପା ଗୋଟିକ୍ସ (ଇଙ୍ଗଟ୍‌ସ) ମିଳିଥିଲା?",
      hi: "2011 में पुरी के एमार मठ में छिपे हुए खजाने में चांदी की कितनी सिल्लियां खुदाई में मिली थीं?"
    },
    options: {
      en: ["18", "87", "522", "2,251"],
      or: ["୧୮", "୮୭", "୫୨୨", "୨,୨୫୧"],
      hi: ["18", "87", "522", "2,251"]
    },
    answer: { en: "522", or: "୫୨୨", hi: "522" },
    dive: {
      en: "A staggering 522 silver ingots weighing about 18 tonnes were discovered hidden under a storeroom floor of Emar Matha in 2011.",
      or: "୨୦୧୧ ମସିହାରେ ଏମାର ମଠରୁ ୫୨୨ଟି ରୁପା ଗୋଟିକ୍ସ ମିଳିଥିଲା ଯାହାର ଓଜନ ପ୍ରାୟ ୧୮ ଟନ ।",
      hi: "2011 में एमार मठ के एक स्टोररूम के फर्श के नीचे छिपी 522 चांदी की सिल्लियां मिली थीं, जिनका कुल वजन लगभग 18 टन था।"
    }
  },
  {
    question: {
      en: "According to Ashoka’s Rock Edict XIII, about how many people were killed in the Kalinga War?",
      or: "ଅଶୋକଙ୍କ ୧୩ଶ ଶିଳାଲେଖ ଅନୁଯାୟୀ, କଳିଙ୍ଗ ଯୁଦ୍ଧରେ ପ୍ରାୟ କେତେ ଲୋକ ମୃତ୍ୟୁବରଣ କରିଥିଲେ?",
      hi: "अशोक के शिलालेख XIII के अनुसार, कलिंग युद्ध में लगभग कितने लोग मारे गए थे?"
    },
    options: {
      en: ["10,000", "100,000", "250,000", "1,000,000"],
      or: ["୧୦,୦୦୦", "୧୦୦,୦୦୦", "୨୫୦,୦୦୦", "୧,୦୦୦,୦୦୦"],
      hi: ["10,000", "100,000", "250,000", "1,000,000"]
    },
    answer: { en: "100,000", or: "୧୦୦,୦୦୦", hi: "100,000" },
    dive: {
      en: "Ashoka’s Rock Edict XIII states that 100,000 people were slain in the Kalinga War of 261 BCE.",
      or: "ସମ୍ରାଟ ଅଶୋକଙ୍କ ୧୩ଶ ଶିଳାଲେଖ ଅନୁଯାୟୀ କଳିଙ୍ଗ ଯୁଦ୍ଧରେ ୧ ଲକ୍ଷ ଲୋକ ନିହତ ହୋଇଥିଲେ ।",
      hi: "अशोक का शिलालेख XIII बताता है कि 261 ईसा पूर्व के कलिंग युद्ध में 100,000 लोग मारे गए थे।"
    }
  },
  {
    question: {
      en: "Approximately how many temples stood in Bhubaneswar at its historical zenith?",
      or: "ଭିନ୍ନ ଭିନ୍ନ ଐତିହାସିକ ତଥ୍ୟ ଅନୁଯାୟୀ, ଗୋଟିଏ ସମୟରେ ଭୁବନେଶ୍ୱରରେ ପ୍ରାୟ କେତୋଟି ମନ୍ଦିର ଥିଲା?",
      hi: "भुवनेश्वर के ऐतिहासिक चरमोत्कर्ष पर वहां लगभग कितने मंदिर थे?"
    },
    options: {
      en: ["About 50", "Around 700", "Nearly 1,000", "Over 2,000"],
      or: ["ପ୍ରାୟ ୫୦", "ପ୍ରାୟ ୭୦୦", "ପ୍ରାୟ ୧୦୦୦", "୨୦୦୦ ରୁ ଅଧିକ"],
      hi: ["लगभग 50", "लगभग 700", "लगभग 1,000", "2,000 से अधिक"]
    },
    answer: { en: "Around 700", or: "ପ୍ରାୟ ୭୦୦", hi: "लगभग 700" },
    dive: {
      en: "Medieval texts suggest that Bhubaneswar (Ekamra Kshetra) had around 700 temples at one time. Today, roughly 50 ancient temples survive.",
      or: "ଏକାମ୍ର କ୍ଷେତ୍ର ବା ଭୁବନେଶ୍ୱରରେ ଏକଦା ୭୦୦ ମନ୍ଦିର ଥିଲା ବୋଲି ବର୍ଣ୍ଣନା କରାଯାଇଛି ।",
      hi: "मध्यकालीन ग्रंथों से पता चलता है कि भुवनेश्वर (एकाम्र क्षेत्र) में एक समय में लगभग 700 मंदिर थे।"
    }
  },
  {
    question: {
      en: "How many times is the sacred flag atop Puri’s Jagannath Temple customarily replaced each day?",
      or: "ଜଗନ୍ନାଥ ମନ୍ଦିର ଉପରେ ଥିବା ପତିତପାବନ ବାନା ପ୍ରତିଦିନ କେତେଥର ବଦଳାଯାଏ?",
      hi: "पुरी के जगन्नाथ मंदिर के ऊपर पवित्र ध्वज को पारंपरिक रूप से प्रत्येक दिन कितनी बार बदला जाता है?"
    },
    options: {
      en: ["Once", "Twice", "Four times", "Seven times"],
      or: ["ଥରେ", "ଦୁଇଥର", "ଚାରିଥର", "ସାତଥର"],
      hi: ["एक बार", "दो बार", "चार बार", "सात बार"]
    },
    answer: { en: "Twice", or: "ଦୁଇଥର", hi: "दो बार" },
    dive: {
      en: "Twice every day, specially designated servitors climb 214 feet to the spire to replace the flag, once in morning and once before sunset.",
      or: "ଜଗନ୍ନାଥ ମନ୍ଦିରର ଶିଖରରେ ପ୍ରତିଦିନ ଦୁଇଥର ପତାକା ବା ବାନା ବଦଳାଯାଏ ।",
      hi: "हर दिन दो बार, विशेष रूप से नामित सेवक झंडा बदलने के लिए शिखर पर चढ़ते हैं, एक बार सुबह और एक बार सूर्यास्त से पहले।"
    }
  },
  {
    question: {
      en: "According to legend, what was the approximate weight of the lodestone at Konark’s peak?",
      or: "କିମ୍ବଦନ୍ତୀ ଅନୁଯାୟୀ, କୋଣାର୍କ ମନ୍ଦିରର ଶୀର୍ଷରେ ଥିବା ଚୁମ୍ବକୀୟ ପଥରର ଓଜନ ପ୍ରାୟ କେତେ ଥିଲା?",
      hi: "किंवदंती के अनुसार, कोणार्क के शिखर पर स्थित चुंबक का अनुमानित वजन कितना था?"
    },
    options: {
      en: ["5 kg", "50 kg", "500 kg", "5,000 kg"],
      or: ["୫ କେଜି", "୫୦ କେଜି", "୫୦୦ କେଜି", "୫୦୦୦ କେଜି"],
      hi: ["5 किलो", "50 किलो", "500 किलो", "5,000 किलो"]
    },
    answer: { en: "500 kg", or: "୫୦୦ କେଜି", hi: "500 किलो" },
    dive: {
      en: "Ancient lore claims that Konark’s main tower had a giant 500-kg lodestone at its apex, acting like a magnetic keystone.",
      or: "ଲୋକକଥା ଅନୁଯାୟୀ କୋଣାର୍କ ମନ୍ଦିର ଶିଖରରେ ଏକ ୫୦୦ କେଜି ଓଜନର ଚୁମ୍ବକ ଥିଲା ।",
      hi: "प्राचीन किंवदंती का दावा है कि कोणार्क के मुख्य टावर के शीर्ष पर 500 किलो का एक विशाल चुंबक था।"
    }
  },
  {
    question: {
      en: "How many decorative tiers of sculptures does the arched gateway (torana) of Mukteswar Temple contain?",
      or: "ମୁକ୍ତେଶ୍ୱର ମନ୍ଦିରର ତୋରଣରେ କେତୋଟି ଅଳଙ୍କାରିକ ସ୍ତର ରହିଛି?",
      hi: "मुक्तेश्वर मंदिर के तोरण में मूर्तियों की कितनी सजावटी परतें हैं?"
    },
    options: {
      en: ["1", "2", "3", "9"],
      or: ["୧", "୨", "୩", "୯"],
      hi: ["1", "2", "3", "9"]
    },
    answer: { en: "3", or: "୩", hi: "3" },
    dive: {
      en: "The Mukteswar Temple’s torana is carved in three stacked tiers of intricate scrollwork and divine figures.",
      or: "ମୁକ୍ତେଶ୍ୱର ମନ୍ଦିରର ତୋରଣଟି ତିନୋଟି ସ୍ତରରେ ଅତି ସୁନ୍ଦର ଭାବେ ଖୋଦିତ ହୋଇଛି ।",
      hi: "मुक्तेश्वर मंदिर का तोरण जटिल स्क्रॉलवर्क और दिव्य आकृतियों की तीन परतों में खुदा हुआ है।"
    }
  },
  {
    question: {
      en: "Approximately how many devotees visit Lingaraja Temple each day on average (outside major festivals)?",
      or: "ପର୍ବପର୍ବାଣି ବ୍ୟତୀତ ସାଧାରଣ ଦିନମାନଙ୍କରେ ଲିଙ୍ଗରାଜ ମନ୍ଦିରକୁ ପ୍ରତିଦିନ ପ୍ରାୟ କେତେ ଭକ୍ତ ଆସନ୍ତି?",
      hi: "प्रमुख त्योहारों के बाहर औसतन प्रत्येक दिन कितने श्रद्धालु लिंगराज मंदिर आते हैं?"
    },
    options: {
      en: ["A few hundred", "Around 6,000", "Over 100,000", "1,000"],
      or: ["କିଛି ଶହ", "ପ୍ରାୟ ୬,୦୦୦", "୧ ଲକ୍ଷରୁ ଅଧିକ", "୧,୦୦୦"],
      hi: ["कुछ सौ", "लगभग 6,000", "100,000 से अधिक", "1,000"]
    },
    answer: { en: "Around 6,000", or: "ପ୍ରାୟ ୬,୦୦୦", hi: "लगभग 6,000" },
    dive: {
      en: "The Lingaraj Temple typically sees about 6,000 visitors daily, ballooning to hundreds of thousands during festivals like Mahashivaratri.",
      or: "ସାଧାରଣ ଦିନରେ ପ୍ରାୟ ୬ ହଜାର ଭକ୍ତ ମନ୍ଦିର ଦର୍ଶନ ପାଇଁ ଆସିଥାନ୍ତି ।",
      hi: "लिंगराज मंदिर में आमतौर पर प्रतिदिन लगभग 6,000 आगंतुक आते हैं।"
    }
  },
  {
    question: {
      en: "Roughly how many devotees can be fed per day with food prepared in Jagannath Temple’s kitchen?",
      or: "ଜଗନ୍ନାଥ ମନ୍ଦିର ରୋଷେଇ ଶାଳରେ ପ୍ରସ୍ତୁତ ଖାଦ୍ୟରେ ଦୈନିକ ପ୍ରାୟ କେତେ ଜଣ ଭକ୍ତଙ୍କୁ ଭୋଜନ ଦିଆଯାଇପାରିବ?",
      hi: "जगन्नाथ मंदिर की रसोई में तैयार भोजन से प्रतिदिन लगभग कितने श्रद्धालुओं को खिलाया जा सकता है?"
    },
    options: {
      en: ["1,000", "10,000", "25,000+", "100,000"],
      or: ["୧,୦୦୦", "୧୦,୦୦୦", "୨୫,୦୦୦+", "୧୦୦,୦୦୦"],
      hi: ["1,000", "10,000", "25,000+", "100,000"]
    },
    answer: { en: "25,000+", or: "୨୫,୦୦୦+", hi: "25,000+" },
    dive: {
      en: "Puri’s Jagannath Temple kitchen is the largest in the world, with capacity to feed over 25,000 people daily.",
      or: "ଜଗନ୍ନାଥ ମନ୍ଦିର ରୋଷଶାଳା ବିଶ୍ୱର ସବୁଠାରୁ ବଡ ରୋଷେଇ ଶାଳ ଭାବେ ପରିଚିତ ।",
      hi: "पुरी का जगन्नाथ मंदिर रसोईघर दुनिया का सबसे बड़ा मंदिर रसोईघर है।"
    }
  },
  {
    question: {
      en: "From what unique alloy is the Nilachakra atop Jagannath Temple’s spire crafted?",
      or: "ଜଗନ୍ନାଥ ମନ୍ଦିର ଶିଖରରେ ଥିବା ନୀଳଚକ୍ର କେଉଁ ମିଶ୍ରିତ ଧାତୁରେ ନିର୍ମିତ?",
      hi: "जगन्नाथ मंदिर के शिखर पर स्थित नीलचक्र किस अद्वितीय मिश्र धातु से बना है?"
    },
    options: {
      en: ["Pure gold", "Ashtadhatu (eight-metal)", "Bronze", "Iron"],
      or: ["ଶୁଦ୍ଧ ସୁନା", "ଅଷ୍ଟଧାତୁ", "କାଂସ୍ୟ", "ଲୁହା"],
      hi: ["शुद्ध सोना", "अष्टधातु (आठ-धातु)", "कांस्य", "लोहा"]
    },
    answer: { en: "Ashtadhatu (eight-metal)", or: "ଅଷ୍ଟଧାତୁ", hi: "अष्टधातु (आठ-धातु)" },
    dive: {
      en: "The Nilachakra is forged from ashtadhatu, a sacred eight-metal alloy including gold, silver, copper, and iron.",
      or: "ନୀଳଚକ୍ରଟି ଅଷ୍ଟଧାତୁରେ ନିର୍ମିତ, ଯେଉଁଥିରେ ସୁନା, ରୁପା, ତମ୍ବା ସମେତ ୮ଟି ଧାତୁର ମିଶ୍ରଣ ରହିଛି ।",
      hi: "नीलचक्र अष्टधातु से बना है, जो सोना, चांदी, तांबा और लोहे सहित एक पवित्र आठ-धातु मिश्र धातु है।"
    }
  },
  {
    question: {
      en: "Approximately how many years of recorded history does the Madalapanji chronicle cover?",
      or: "ମାଦଳା ପାଞ୍ଜି ପ୍ରାୟ କେତେ ବର୍ଷର ଇତିହାସ ବିଷୟରେ ସୂଚନା ଦିଏ?",
      hi: "मादलापंजी इतिहास लगभग कितने वर्षों के दर्ज इतिहास को कवर करता है?"
    },
    options: {
      en: ["~400 years", "~800 years", "~1,200 years", "~2,500 years"],
      or: ["~୪୦୦ ବର୍ଷ", "~୮୦୦ ବର୍ଷ", "~୧,୨୦୦ ବର୍ଷ", "~୨,୫୦୦ ବର୍ଷ"],
      hi: ["~400 वर्ष", "~800 वर्ष", "~1,200 वर्ष", "~2,500 वर्ष"]
    },
    answer: { en: "~800 years", or: "~୮୦୦ ବର୍ଷ", hi: "~800 वर्ष" },
    dive: {
      en: "The Madalapanji (Temple Chronicle) has been maintained since the 12th century, covering roughly 800–900 years of history.",
      or: "ମାଦଳା ପାଞ୍ଜିରେ ପ୍ରାୟ ୮୦୦ ରୁ ୯୦୦ ବର୍ଷର ମନ୍ଦିର ଇତିହାସ ଓ ପାରମ୍ପରିକ ବିଧି ବର୍ଣ୍ଣିତ ଅଛି ।",
      hi: "मादलापंजी (मंदिर का इतिहास) 12वीं शताब्दी से बनाए रखा गया है।"
    }
  },
  {
    question: {
      en: "Approximately how much gold did King Anangabhima III dedicate to Jagannath Temple in 1230 CE?",
      or: "୧୨୩୦ ମସିହାରେ ରାଜା ଅନଙ୍ଗଭୀମ ଦେବ ଜଗନ୍ନାଥ ମନ୍ଦିରକୁ ପ୍ରାୟ କେତେ ସୁନା ଦାନ କରିଥିଲେ?",
      hi: "1230 ईस्वी में राजा अनंगभीम तृतीय ने जगन्नाथ मंदिर को लगभग कितना सोना समर्पित किया था?"
    },
    options: {
      en: ["108 tolas", "1,008 tolas", "10,000 tolas", "1,00,000 tolas"],
      or: ["୧୦୮ ତୋଳା", "୧,୦୦୮ ତୋଳା", "୧୦,୦୦୦ ତୋଳା", "୧,୦୦,୦୦୦ ତୋଳା"],
      hi: ["108 तोला", "1,008 तोला", "10,000 तोला", "1,00,000 तोला"]
    },
    answer: { en: "10,000 tolas", or: "୧୦,୦୦୦ ତୋଳା", hi: "10,000 तोला" },
    dive: {
      en: "In 1230 CE, King Anangabhima III recorded a lavish donation of 10,000 tolas of gold (equivalent to ~117 kg).",
      or: "ରାଜା ଅନଙ୍ଗଭୀମ ଦେବ ମନ୍ଦିରକୁ ପ୍ରାୟ ୧୦,୦୦୦ ତୋଳା ବା ୧୧୭ କେଜି ସୁନା ଦାନ କରିଥିବା ଉଲ୍ଲେଖ ଅଛି ।",
      hi: "1230 ईस्वी में, राजा अनंगभीम तृतीय ने 10,000 तोले सोने (लगभग 117 किलोग्राम के बराबर) का भारी दान दिया था।"
    }
  },
  {
    question: {
      en: "How many ingredients traditionally compose the iconic Alarnath 'Chaturdashi' sweet drink?",
      or: "ଅଲାରନାଥଙ୍କ ପ୍ରସିଦ୍ଧ 'ଚତୁର୍ଦ୍ଦଶୀ' ପାନୀୟରେ ପାରମ୍ପରିକ ଭାବରେ କେତୋଟି ସାମଗ୍ରୀ ବ୍ୟବହୃତ ହୁଏ?",
      hi: "अलारनाथ के प्रसिद्ध 'चतुर्दशी' पेय में पारंपरिक रूप से कितनी सामग्री शामिल होती है?"
    },
    options: {
      en: ["5", "8", "14", "21"],
      or: ["୫", "୮", "୧୪", "୨୧"],
      hi: ["5", "8", "14", "21"]
    },
    answer: { en: "14", or: "୧୪", hi: "14" },
    dive: {
      en: "Alarnath Temple’s legendary Chaturdashi sweet drink blends 14 ingredients, including milk, fruits, and spices.",
      or: "ଚତୁର୍ଦ୍ଦଶୀ ପାନୀୟରେ କ୍ଷୀର, ଫଳ ଏବଂ ମସଲା ସମେତ ୧୪ଟି ସାମଗ୍ରୀର ମିଶ୍ରଣ କରାଯାଏ ।",
      hi: "अलारनाथ मंदिर के महान चतुर्दशी पेय में दूध, फल और मसालों सहित 14 सामग्रियां मिश्रित होती हैं।"
    }
  },
  {
    question: {
      en: "Approximately how many votive stupas have been found recently at the Ratnagiri Buddhist site?",
      or: "ରତ୍ନଗିରି ବୌଦ୍ଧ କ୍ଷେତ୍ରରୁ ବର୍ତ୍ତମାନ ପ୍ରାୟ କେତୋଟି ପଥର ସ୍ତୂପ (ଭୋଟିଭ୍ ସ୍ତୂପ) ମିଳିଛି?",
      hi: "रत्नागिरी बौद्ध स्थल पर हाल ही में लगभग कितने मिन्नत स्तूप पाए गए हैं?"
    },
    options: {
      en: ["Nearly 50", "Several hundred", "A few dozen", "Over 1,000"],
      or: ["ପ୍ରାୟ ୫୦", "କିଛି ଶହ", "କିଛି ଡଜନ", "୧୦୦୦ ରୁ ଅଧିକ"],
      hi: ["लगभग 50", "कई सौ", "कुछ दर्जन", "1,000 से अधिक"]
    },
    answer: { en: "Several hundred", or: "କିଛି ଶହ", hi: "कई सौ" },
    dive: {
      en: "Archaeologists have unearthed several hundreds of votive stupas at Ratnagiri during recent excavations (2022–2025).",
      or: "ନିକଟରେ ହୋଇଥିବା ପ୍ରତ୍ନତାତ୍ତ୍ୱିକ ଖନନରୁ ରତ୍ନଗିରିରୁ ଅନେକ ଛୋଟ ଛୋଟ ପଥର ସ୍ତୂପ ମିଳିଛି ।",
      hi: "पुरातत्वविदों ने हालिया खुदाई (2022-2025) के दौरान रत्नागिरी में कई सौ मिन्नत स्तूपों का पता लगाया है।"
    }
  },
  {
    question: {
      en: "How many queens ruled one after another during the Bhauma-Kara dynasty of Odisha?",
      or: "ଓଡ଼ିଶାର ଭୌମକର ବଂଶ ଶାସନ କାଳରେ ଜଣଙ୍କ ପରେ ଜଣେ କେତେ ଜଣ ରାଣୀ ଶାସନ କରିଥିଲେ?",
      hi: "ओडिशा के भौम-कर वंश के दौरान एक के बाद एक कितनी रानियों ने शासन किया?"
    },
    options: {
      en: ["2", "4", "6", "9"],
      or: ["୨", "୪", "୬", "୯"],
      hi: ["2", "4", "6", "9"]
    },
    answer: { en: "6", or: "୬", hi: "6" },
    dive: {
      en: "The Bhauma-Kara dynasty saw an unprecedented six queens ascend the throne in succession (c. 843–940 CE).",
      or: "ଭୌମକର ବଂଶରେ ୬ ଜଣ ରାଣୀ କ୍ରମାଗତ ଭାବେ ଓଡ଼ିଶାରେ ଶାସନ କରିଥିଲେ ।",
      hi: "भौम-कर वंश में छह रानियों ने एक के बाद एक सिंहासन संभाला था।"
    }
  },
  {
    question: {
      en: "How many major port towns in Kalinga are mentioned in Ptolemy’s 2nd-century Geographia?",
      or: "ଟଲେମିଙ୍କ ୨ୟ ଶତାବ୍ଦୀର ଭୂଗୋଳ ବୃତ୍ତାନ୍ତରେ କଳିଙ୍ଗର କେତୋଟି ପ୍ରମୁଖ ବନ୍ଦର ବିଷୟରେ ଉଲ୍ଲେଖ ଅଛି?",
      hi: "टोलेमी की दूसरी शताब्दी के भूगोल में कलिंग के कितने प्रमुख बंदरगाह शहरों का उल्लेख है?"
    },
    options: {
      en: ["1", "2", "4", "6"],
      or: ["୧", "୨", "୪", "୬"],
      hi: ["1", "2", "4", "6"]
    },
    answer: { en: "4", or: "୪", hi: "4" },
    dive: {
      en: "Ptolemy’s Geographia (c. 150 CE) lists four major port locales on the Kalinga coast, including Paloura.",
      or: "ଟଲେମି କଳିଙ୍ଗର ୪ଟି ପ୍ରମୁଖ ସାମୁଦ୍ରିକ ବନ୍ଦର ବିଷୟରେ ଲେଖିଥିଲେ ।",
      hi: "टोलेमी के भूगोल (लगभग 150 ईस्वी) में कलिंग तट पर चार प्रमुख बंदरगाह स्थलों की सूची है।"
    }
  },
  {
    question: {
      en: "How many colors traditionally feature in authentic Manjusha folk art of Odisha?",
      or: "ଓଡ଼ିଶାର ମଞ୍ଜୁଷା କଳାରେ ପାରମ୍ପରିକ ଭାବେ କେତୋଟି ରଙ୍ଗ ବ୍ୟବହୃତ ହୁଏ?",
      hi: "ओडिशा की प्रामाणिक मंजूषा लोक कला में पारंपरिक रूप से कितने रंग होते हैं?"
    },
    options: {
      en: ["3", "5", "7", "9"],
      or: ["୩", "୫", "୭", "୯"],
      hi: ["3", "5", "7", "9"]
    },
    answer: { en: "5", or: "୫", hi: "5" },
    dive: {
      en: "Manjusha art traditionally uses five colors: red, yellow, green, blue, and black, derived from natural sources.",
      or: "ମଞ୍ଜୁଷା କଳାରେ ନାଲି, ହଳଦିଆ, ସବୁଜ, ନୀଳ ଏବଂ କଳା - ଏହି ୫ଟି ରଙ୍ଗ ବ୍ୟବହାର ହୁଏ ।",
      hi: "मंजूषा कला में पारंपरिक रूप से पांच रंगों का उपयोग किया जाता है: लाल, पीला, हरा, नीला और काला।"
    }
  },
  {
    question: {
      en: "How many letters are there in the modern Odia alphabet (vowels and consonants)?",
      or: "ଆଧୁନିକ ଓଡ଼ିଆ ବର୍ଣ୍ଣମାଳାରେ ସ୍ୱର ଏବଂ ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣ ମିଶି ମୋଟ କେତୋଟି ଅକ୍ଷର ଅଛି?",
      hi: "आधुनिक ओड़िया वर्णमाला (स्वर और व्यंजन) में कितने अक्षर हैं?"
    },
    options: {
      en: ["26", "36", "49", "52"],
      or: ["୨୬", "୩୬", "୪୯", "୫୨"],
      hi: ["26", "36", "49", "52"]
    },
    answer: { en: "52", or: "୫୨", hi: "52" },
    dive: {
      en: "The Odia alphabet comprises 52 letters: traditionally 12 vowels and 40 consonants.",
      or: "ଓଡ଼ିଆ ବର୍ଣ୍ଣମାଳାରେ ୧୨ଟି ସ୍ୱର ଏବଂ ୪୦ଟି ବ୍ୟଞ୍ଜନ ବର୍ଣ୍ଣକୁ ମିଶାଇ ମୋଟ ୫୨ଟି ଅକ୍ଷର ଅଛି ।",
      hi: "ओड़िया वर्णमाला में 52 अक्षर होते हैं: पारंपरिक रूप से 12 स्वर और 40 व्यंजन।"
    }
  },
  {
    question: {
      en: "Approximately how tall is the historic Gopalpur Lighthouse on Odisha’s coast?",
      or: "ଓଡ଼ିଶା ଉପକୂଳରେ ଥିବା ଐତିହାସିକ ଗୋପାଳପୁର ଲାଇଟ୍ ହାଉସ୍ (ବତୀଘର) ର ଉଚ୍ଚତା ପ୍ରାୟ କେତେ?",
      hi: "ओडिशा के तट पर स्थित ऐतिहासिक गोपालपुर लाइटहाउस लगभग कितना ऊँचा है?"
    },
    options: {
      en: ["15 m", "30 m", "50 m", "75 m"],
      or: ["୧୫ ମିଟର", "୩୦ ମିଟର", "୫୦ ମିଟର", "୭୫ ମିଟର"],
      hi: ["15 मीटर", "30 मीटर", "50 मीटर", "75 मीटर"]
    },
    answer: { en: "30 m", or: "୩୦ ମିଟର", hi: "30 m" },
    dive: {
      en: "The Gopalpur Lighthouse stands about 30 metres (98 feet) tall, built in 1871 by the British.",
      or: "ଗୋପାଳପୁର ଲାଇଟ୍ ହାଉସ୍ ପ୍ରାୟ ୩୦ ମିଟର ଉଚ୍ଚ, ଯାହା ୧୮୭୧ ମସିହାରେ ନିର୍ମିତ ହୋଇଥିଲା ।",
      hi: "गोपालपुर लाइटहाउस लगभग 30 मीटर लंबा है, जिसे 1871 में अंग्रेजों द्वारा बनाया गया था।"
    }
  },
  {
    question: {
      en: "What is the approximate area of Chilika Lake during the monsoon peak versus the dry season?",
      or: "ବର୍ଷା ଋତୁ ଏବଂ ଖରା ଦିନରେ ଚିଲିକା ହ୍ରଦର କ୍ଷେତ୍ରଫଳ ପ୍ରାୟ କେତେ ଥାଏ?",
      hi: "शुष्क मौसम बनाम मानसून के चरम के दौरान चिल्का झील का अनुमानित क्षेत्रफल क्या है?"
    },
    options: {
      en: ["300 vs 100 km²", "1,165 vs 740 km²", "1,100 vs 900 km²", "5,000 vs 3,000 km²"],
      or: ["୩୦୦ ବନାମ ୧୦୦ ବର୍ଗ କିମି", "୧,୧୬୫ ବନାମ ୭୪୦ ବର୍ଗ କିମି", "୧,୧୦୦ ବନାମ ୯୦୦ ବର୍ଗ କିମି", "୫,୦୦୦ ବନାମ ୩,୦୦୦ ବର୍ଗ କିମି"],
      hi: ["300 बनाम 100 वर्ग किमी", "1,165 बनाम 740 वर्ग किमी", "1,100 बनाम 900 वर्ग किमी", "5,000 बनाम 3,000 वर्ग किमी"]
    },
    answer: { en: "1,165 vs 740 km²", or: "୧,୧୬୫ ବନାମ ୭୪୦ ବର୍ଗ କିମି", hi: "1,165 बनाम 740 वर्ग किमी" },
    dive: {
      en: "Chilika Lake sprawls roughly 1,165 square kilometres in the rainy season, shrinking to about 740 square kilometres in the dry season.",
      or: "ବର୍ଷା ଦିନେ ଚିଲିକାର କ୍ଷେତ୍ରଫଳ ପ୍ରାୟ ୧୧୬୫ ବର୍ଗ କିଲୋମିଟର ହୋଇଥାଏ ଏବଂ ଖରା ଦିନେ ଏହା ୭୪୦ ବର୍ଗ କିଲୋମିଟରକୁ କମିଯାଏ ।",
      hi: "चिल्का झील बरसात के मौसम में लगभग 1,165 वर्ग किलोमीटर में फैली होती है, जो शुष्क मौसम में घटकर लगभग 740 वर्ग किलोमीटर रह जाती है।"
    }
  },
  {
    question: {
      en: "In which script were Ashoka’s rock edicts in Odisha (Dhauli and Jaugada) written?",
      or: "ଓଡ଼ିଶାର ଧଉଳି ଏବଂ ଜଉଗଡ଼ରେ ଥିବା ଅଶୋକଙ୍କ ଶିଳାଲେଖ କେଉଁ ଲିପିରେ ଲେଖାଯାଇଛି?",
      hi: "ओडिशा (धौली और जौगढ़) में अशोक के शिलालेख किस लिपि में लिखे गए थे?"
    },
    options: {
      en: ["Brahmi", "Kharoshthi", "Devanagari", "Odia"],
      or: ["ବ୍ରାହ୍ମୀ", "ଖରୋଷ୍ଠୀ", "ଦେବନାଗରୀ", "ଓଡ଼ିଆ"],
      hi: ["ब्राह्मी", "खरोष्ठी", "देवनागरी", "ओड़िया"]
    },
    answer: { en: "Brahmi", or: "ବ୍ରାହ୍ମୀ", hi: "ब्राह्मी" },
    dive: {
      en: "Ashoka’s Major Rock Edicts in Odisha are inscribed in the region’s Prakrit dialect using the Brahmi script.",
      or: "ଅଶୋକଙ୍କ ଶିଳାଲେଖ ଗୁଡିକ ବ୍ରାହ୍ମୀ ଲିପିରେ ପ୍ରାକୃତ ଭାଷାରେ ଲେଖାଯାଇଛି ।",
      hi: "ओडिशा में अशोक के प्रमुख शिलालेख ब्राह्मी लिपि का उपयोग करके क्षेत्र की प्राकृत बोली में लिखे गए हैं।"
    }
  }
];
