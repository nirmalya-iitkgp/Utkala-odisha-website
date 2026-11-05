export interface DistrictData {
  id: string;
  name: string;
  odiaName: string;
  headquarters: string;
  lat: number;
  lng: number;
  region: 'Coastal' | 'Northern' | 'Western' | 'Southern' | 'Central';
  boundary: [number, number][]; // [lat, lng] array forming closed or smooth perimeter
}

// 30 administrative districts of Odisha with geographical centroids and boundary vectors
export const ODISHA_DISTRICTS: DistrictData[] = [
  {
    id: 'puri',
    name: 'Puri',
    odiaName: 'ପୁରୀ',
    headquarters: 'Puri',
    lat: 19.8135,
    lng: 85.8312,
    region: 'Coastal',
    boundary: [
      [19.72, 85.35], [19.85, 85.65], [20.08, 85.80], [20.15, 86.10],
      [19.98, 86.25], [19.80, 86.05], [19.68, 85.70], [19.72, 85.35]
    ]
  },
  {
    id: 'khordha',
    name: 'Khordha',
    odiaName: 'ଖୋର୍ଦ୍ଧା',
    headquarters: 'Bhubaneswar',
    lat: 20.1900,
    lng: 85.6200,
    region: 'Coastal',
    boundary: [
      [20.00, 85.25], [20.35, 85.30], [20.42, 85.75], [20.25, 85.95],
      [20.05, 85.85], [19.85, 85.55], [20.00, 85.25]
    ]
  },
  {
    id: 'cuttack',
    name: 'Cuttack',
    odiaName: 'କଟକ',
    headquarters: 'Cuttack',
    lat: 20.4625,
    lng: 85.8828,
    region: 'Coastal',
    boundary: [
      [20.30, 85.50], [20.65, 85.60], [20.70, 86.05], [20.40, 86.15],
      [20.28, 85.80], [20.30, 85.50]
    ]
  },
  {
    id: 'mayurbhanj',
    name: 'Mayurbhanj',
    odiaName: 'ମୟୂରଭଞ୍ଜ',
    headquarters: 'Baripada',
    lat: 21.9328,
    lng: 86.7342,
    region: 'Northern',
    boundary: [
      [21.50, 85.80], [22.45, 86.00], [22.55, 86.85], [22.10, 87.05],
      [21.45, 86.60], [21.50, 85.80]
    ]
  },
  {
    id: 'sambalpur',
    name: 'Sambalpur',
    odiaName: 'ସମ୍ବଲପୁର',
    headquarters: 'Sambalpur',
    lat: 21.4669,
    lng: 83.9812,
    region: 'Western',
    boundary: [
      [21.20, 83.70], [21.75, 83.80], [21.85, 84.45], [21.30, 84.60],
      [21.05, 84.10], [21.20, 83.70]
    ]
  },
  {
    id: 'bargarh',
    name: 'Bargarh',
    odiaName: 'ବରଗଡ଼',
    headquarters: 'Bargarh',
    lat: 21.3333,
    lng: 83.6167,
    region: 'Western',
    boundary: [
      [20.90, 83.20], [21.55, 83.25], [21.65, 83.75], [21.15, 83.75],
      [20.90, 83.20]
    ]
  },
  {
    id: 'ganjam',
    name: 'Ganjam',
    odiaName: 'ଗଞ୍ଜାମ',
    headquarters: 'Chhatrapur',
    lat: 19.3800,
    lng: 84.9800,
    region: 'Southern',
    boundary: [
      [19.10, 84.35], [19.80, 84.40], [19.95, 85.15], [19.45, 85.10],
      [19.15, 84.85], [19.10, 84.35]
    ]
  },
  {
    id: 'koraput',
    name: 'Koraput',
    odiaName: 'କୋରାପୁଟ',
    headquarters: 'Koraput',
    lat: 18.8135,
    lng: 82.7123,
    region: 'Southern',
    boundary: [
      [18.30, 82.20], [19.20, 82.35], [19.10, 83.15], [18.45, 83.10],
      [18.30, 82.20]
    ]
  },
  {
    id: 'kendrapara',
    name: 'Kendrapara',
    odiaName: 'କେନ୍ଦ୍ରାପଡ଼ା',
    headquarters: 'Kendrapara',
    lat: 20.5000,
    lng: 86.4200,
    region: 'Coastal',
    boundary: [
      [20.35, 86.25], [20.75, 86.40], [20.85, 87.05], [20.45, 86.95],
      [20.35, 86.25]
    ]
  },
  {
    id: 'jajpur',
    name: 'Jajpur',
    odiaName: 'ଯାଜପୁର',
    headquarters: 'Jajpur',
    lat: 20.8500,
    lng: 86.1500,
    region: 'Coastal',
    boundary: [
      [20.60, 85.80], [21.05, 85.90], [21.00, 86.40], [20.55, 86.35],
      [20.60, 85.80]
    ]
  },
  {
    id: 'angul',
    name: 'Angul',
    odiaName: 'ଅନୁଗୋଳ',
    headquarters: 'Angul',
    lat: 20.8400,
    lng: 85.1000,
    region: 'Central',
    boundary: [
      [20.50, 84.60], [21.20, 84.80], [21.15, 85.40], [20.60, 85.35],
      [20.50, 84.60]
    ]
  },
  {
    id: 'balasore',
    name: 'Balasore',
    odiaName: 'ବାଲେଶ୍ୱର',
    headquarters: 'Balasore',
    lat: 21.4900,
    lng: 86.9300,
    region: 'Coastal',
    boundary: [
      [21.15, 86.55], [21.80, 86.65], [21.85, 87.35], [21.20, 87.05],
      [21.15, 86.55]
    ]
  },
  {
    id: 'sundergarh',
    name: 'Sundargarh',
    odiaName: 'ସୁନ୍ଦରଗଡ଼',
    headquarters: 'Sundargarh',
    lat: 22.1200,
    lng: 84.0300,
    region: 'Northern',
    boundary: [
      [21.75, 83.50], [22.40, 83.70], [22.55, 85.20], [21.90, 85.00],
      [21.75, 83.50]
    ]
  },
  {
    id: 'keonjhar',
    name: 'Keonjhar',
    odiaName: 'କେନ୍ଦୁଝର',
    headquarters: 'Keonjhar',
    lat: 21.6300,
    lng: 85.5800,
    region: 'Northern',
    boundary: [
      [21.10, 85.20], [22.15, 85.25], [21.90, 86.10], [21.15, 85.90],
      [21.10, 85.20]
    ]
  },
  {
    id: 'bhadrak',
    name: 'Bhadrak',
    odiaName: 'ଭଦ୍ରକ',
    headquarters: 'Bhadrak',
    lat: 21.0500,
    lng: 86.5000,
    region: 'Coastal',
    boundary: [
      [20.75, 86.30], [21.20, 86.35], [21.25, 86.85], [20.80, 86.75],
      [20.75, 86.30]
    ]
  },
  {
    id: 'jagatsinghpur',
    name: 'Jagatsinghpur',
    odiaName: 'ଜଗତସିଂହପୁର',
    headquarters: 'Jagatsinghpur',
    lat: 20.2700,
    lng: 86.1700,
    region: 'Coastal',
    boundary: [
      [20.00, 86.05], [20.35, 86.10], [20.40, 86.65], [20.05, 86.55],
      [20.00, 86.05]
    ]
  },
  {
    id: 'dhenkanal',
    name: 'Dhenkanal',
    odiaName: 'ଢେଙ୍କାନାଳ',
    headquarters: 'Dhenkanal',
    lat: 20.6700,
    lng: 85.6000,
    region: 'Central',
    boundary: [
      [20.45, 85.20], [20.95, 85.35], [20.90, 85.95], [20.45, 85.80],
      [20.45, 85.20]
    ]
  },
  {
    id: 'nayagarh',
    name: 'Nayagarh',
    odiaName: 'ନୟାଗଡ଼',
    headquarters: 'Nayagarh',
    lat: 20.1300,
    lng: 85.1000,
    region: 'Central',
    boundary: [
      [19.90, 84.80], [20.35, 84.85], [20.30, 85.40], [19.85, 85.35],
      [19.90, 84.80]
    ]
  },
  {
    id: 'kandhamal',
    name: 'Kandhamal',
    odiaName: 'କନ୍ଧମାଳ',
    headquarters: 'Phulbani',
    lat: 20.4700,
    lng: 84.2300,
    region: 'Southern',
    boundary: [
      [19.80, 83.70], [20.75, 83.85], [20.70, 84.60], [19.90, 84.45],
      [19.80, 83.70]
    ]
  },
  {
    id: 'boudh',
    name: 'Boudh',
    odiaName: 'ବୌଦ୍ଧ',
    headquarters: 'Boudh',
    lat: 20.8400,
    lng: 84.3200,
    region: 'Central',
    boundary: [
      [20.50, 83.85], [20.95, 83.90], [20.90, 84.55], [20.60, 84.45],
      [20.50, 83.85]
    ]
  },
  {
    id: 'bolangir',
    name: 'Bolangir',
    odiaName: 'ବଲାଙ୍ଗୀର',
    headquarters: 'Balangir',
    lat: 20.7200,
    lng: 83.4800,
    region: 'Western',
    boundary: [
      [20.25, 82.90], [21.00, 83.05], [20.95, 83.85], [20.35, 83.65],
      [20.25, 82.90]
    ]
  },
  {
    id: 'subarnapur',
    name: 'Subarnapur',
    odiaName: 'ସୁବର୍ଣ୍ଣପୁର',
    headquarters: 'Sonepur',
    lat: 20.8300,
    lng: 83.9100,
    region: 'Western',
    boundary: [
      [20.65, 83.60], [21.05, 83.70], [21.00, 84.10], [20.60, 84.00],
      [20.65, 83.60]
    ]
  },
  {
    id: 'nuapada',
    name: 'Nuapada',
    odiaName: 'ନୂଆପଡ଼ା',
    headquarters: 'Nuapada',
    lat: 20.8500,
    lng: 82.5300,
    region: 'Western',
    boundary: [
      [20.20, 82.30], [21.10, 82.40], [21.05, 82.80], [20.30, 82.70],
      [20.20, 82.30]
    ]
  },
  {
    id: 'kalahandi',
    name: 'Kalahandi',
    odiaName: 'କଳାହାଣ୍ଡି',
    headquarters: 'Bhawanipatna',
    lat: 19.9100,
    lng: 83.1700,
    region: 'Southern',
    boundary: [
      [19.30, 82.60], [20.40, 82.70], [20.35, 83.50], [19.45, 83.40],
      [19.30, 82.60]
    ]
  },
  {
    id: 'rayagada',
    name: 'Rayagada',
    odiaName: 'ରାୟଗଡ଼ା',
    headquarters: 'Rayagada',
    lat: 19.1700,
    lng: 83.4200,
    region: 'Southern',
    boundary: [
      [18.90, 83.00], [19.70, 83.10], [19.65, 83.90], [18.95, 83.80],
      [18.90, 83.00]
    ]
  },
  {
    id: 'nabarangpur',
    name: 'Nabarangpur',
    odiaName: 'ନବରଙ୍ଗପୁର',
    headquarters: 'Nabarangpur',
    lat: 19.2300,
    lng: 82.5500,
    region: 'Southern',
    boundary: [
      [18.90, 81.90], [19.85, 82.10], [19.75, 82.85], [19.00, 82.75],
      [18.90, 81.90]
    ]
  },
  {
    id: 'malkangiri',
    name: 'Malkangiri',
    odiaName: 'ମାଲକାନଗିରି',
    headquarters: 'Malkangiri',
    lat: 18.3500,
    lng: 81.9000,
    region: 'Southern',
    boundary: [
      [17.80, 81.35], [18.70, 81.50], [18.65, 82.35], [18.00, 82.20],
      [17.80, 81.35]
    ]
  },
  {
    id: 'gajapati',
    name: 'Gajapati',
    odiaName: 'ଗଜପତି',
    headquarters: 'Paralakhemundi',
    lat: 18.9500,
    lng: 84.1000,
    region: 'Southern',
    boundary: [
      [18.70, 83.80], [19.25, 83.90], [19.20, 84.45], [18.75, 84.35],
      [18.70, 83.80]
    ]
  },
  {
    id: 'jharsuguda',
    name: 'Jharsuguda',
    odiaName: 'ଝାରସୁଗୁଡ଼ା',
    headquarters: 'Jharsuguda',
    lat: 21.8500,
    lng: 82.0200,
    region: 'Western',
    boundary: [
      [21.60, 81.75], [22.05, 81.85], [22.00, 82.35], [21.65, 82.25],
      [21.60, 81.75]
    ]
  },
  {
    id: 'deogarh',
    name: 'Deogarh',
    odiaName: 'ଦେବଗଡ଼',
    headquarters: 'Deogarh',
    lat: 21.5300,
    lng: 84.7300,
    region: 'Northern',
    boundary: [
      [21.30, 84.45], [21.75, 84.55], [21.70, 85.05], [21.35, 84.95],
      [21.30, 84.45]
    ]
  }
];
