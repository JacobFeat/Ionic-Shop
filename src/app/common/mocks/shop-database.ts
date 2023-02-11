import { Shop } from '../defs/shops.defs';

export const shops: Shop[] = [
  {
    name: 'Galeria Galena',
    city: 'Jaworzno',
    postCode: '43-600',
    street: 'Grunwaldzka',
    buildingNumber: 59,
    workHoursWeek: '09:00 - 21:00',
    workHoursSunday: '10:00 - 20:00',
    products: [
      {
        id: 1,
        availableSizes: ['L', 'XL'],
      },
      {
        id: 2,
        availableSizes: ['S'],
      },
      {
        id: 3,
        availableSizes: ['XL', 'XXL'],
      },
    ],
    coordinates: {
      latitude: 50.20375906154616,
      longitude: 19.267883938630483,
    },
  },
  {
    name: 'Galeria Bronowice',
    city: 'Kraków',
    postCode: '30-348',
    street: 'Al. Prymasa Tysiąclecia',
    buildingNumber: 48,
    workHoursWeek: '09:00 - 21:00',
    workHoursSunday: '10:00 - 20:00',
    products: [
      { id: 2, availableSizes: ['M', 'L'] },
      {
        id: 3,
        availableSizes: ['S'],
      },
      {
        id: 6,
        availableSizes: ['M', 'XL'],
      },
    ],
    coordinates: {
      latitude: 51.20375906154616,
      longitude: 18.267883938630483,
    },
  },
  {
    name: 'Galeria Ruczaj',
    city: 'Kraków',
    postCode: '31-920',
    street: 'Ruczaj',
    buildingNumber: 71,
    workHoursWeek: '10:00 - 22:00',
    workHoursSunday: '11:00 - 19:00',
    products: [
      {
        id: 1,
        availableSizes: ['M', 'L'],
      },
      {
        id: 8,
        availableSizes: ['S'],
      },
      {
        id: 9,
        availableSizes: ['S', 'L'],
      },
    ],
    coordinates: {
      latitude: 52.20375906154616,
      longitude: 18.267883938630483,
    },
  },
  {
    name: 'Galeria Kazimierz',
    city: 'Kraków',
    postCode: '31-064',
    street: 'Szeroka',
    buildingNumber: 49,
    workHoursWeek: '09:00 - 21:00',
    workHoursSunday: '10:00 - 20:00',
    products: [
      {
        id: 5,
        availableSizes: ['M', 'L'],
      },
      {
        id: 6,
        availableSizes: ['S'],
      },
      {
        id: 10,
        availableSizes: ['M', 'XL'],
      },
    ],
    coordinates: {
      latitude: 51.23375906154616,
      longitude: 19.3883938630483,
    },
  },
  {
    name: 'Galeria Słoneczna',
    city: 'Tarnów',
    postCode: '33-100',
    street: 'Piłsudskiego',
    buildingNumber: 33,
    workHoursWeek: '09:00 - 21:00',
    workHoursSunday: '10:00 - 20:00',
    products: [
      {
        id: 1,
        availableSizes: ['M', 'L'],
      },
      {
        id: 2,
        availableSizes: ['S'],
      },
      {
        id: 3,
        availableSizes: ['XL', 'XXL'],
      },
    ],
    coordinates: {
      latitude: 51.20375906154616,
      longitude: 18.267883938630483,
    },
  },
  {
    name: 'Galeria Karkonoska',
    city: 'Jelenia Góra',
    postCode: '58-500',
    street: 'Karkonoska',
    buildingNumber: 25,
    workHoursWeek: '09:00 - 21:00',
    workHoursSunday: '10:00 - 20:00',
    products: [
      { id: 1, availableSizes: ['M', 'L'] },
      {
        id: 2,
        availableSizes: ['S'],
      },
      {
        id: 3,
        availableSizes: ['S', 'M'],
      },
    ],
    coordinates: {
      latitude: 50.30375906154616,
      longitude: 19.467883938630483,
    },
  },
  {
    name: 'Galeria Sudety',
    city: 'Legnica',
    postCode: '59-220',
    street: 'Sudety',
    buildingNumber: 15,
    workHoursWeek: '09:00 - 21:00',
    workHoursSunday: '10:00 - 20:00',
    products: [
      {
        id: 1,
        availableSizes: ['M', 'L'],
      },
      {
        id: 2,
        availableSizes: ['S'],
      },
      {
        id: 3,
        availableSizes: ['XL'],
      },
    ],
    coordinates: {
      latitude: 50.50375906154616,
      longitude: 19.067883938630483,
    },
  },
  {
    name: 'Galeria Beskidzka',
    city: 'Bielsko-Biała',
    postCode: '43-300',
    street: 'Beskidzka',
    buildingNumber: 35,
    workHoursWeek: '09:00 - 21:00',
    workHoursSunday: '10:00 - 20:00',
    products: [
      {
        id: 1,
        availableSizes: ['M', 'L'],
      },
      {
        id: 2,
        availableSizes: ['S'],
      },
      {
        id: 3,
        availableSizes: ['XXL'],
      },
    ],
    coordinates: {
      latitude: 50.90375906154616,
      longitude: 19.367883938630483,
    },
  },
];
