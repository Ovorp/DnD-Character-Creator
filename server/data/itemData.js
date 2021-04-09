const shopItems = [
  {
    id: 1,
    name: 'padded armor',
    stats: {
      AC: 11 + 'dexMod',
    },
    cost: 5,
    numberAvailable: 3,
  },
  {
    id: 2,
    name: 'leather armor',
    stats: {
      AC: 11 + 'dexMod',
    },
    cost: 10,
    numberAvailable: 3,
  },
  {
    id: 3,
    name: 'studded leather armor',
    stats: {
      AC: 12 + 'dexMod',
    },
    cost: 45,
    numberAvailable: 1,
  },
  {
    id: 4,
    name: 'hide armor',
    stats: {
      AC: 12 + 'dexMod max 2',
    },
    cost: 10,
    numberAvailable: 3,
  },
  {
    id: 5,
    name: 'scale mail armor',
    stats: {
      AC: 14 + 'dexMod max 2',
    },
    cost: 400,
    numberAvailable: 1,
  },
  {
    id: 6,
    name: 'plate armor',
    stats: {
      AC: 18,
    },
    cost: 1500,
    numberAvailable: 1,
  },
  {
    id: 7,
    name: 'club',
    stats: {
      damage: '1d4',
      properties: 'light',
    },
    cost: 1,
    numberAvailable: 9,
  },
  {
    id: 8,
    name: 'dagger',
    stats: {
      damage: '1d4',
      properties: 'light',
    },
    cost: 2,
    numberAvailable: 5,
  },
  {
    id: 9,
    name: 'mace',
    stats: {
      damage: '1d6',
      properties: null,
    },
    cost: 5,
    numberAvailable: 5,
  },
  {
    id: 10,
    name: 'shortbow',
    stats: {
      damage: '1d6',
      properties: 'ranged',
    },
    cost: 25,
    numberAvailable: 2,
  },
  {
    id: 11,
    name: 'arrows',
    stats: {
      damage: null,
      properties: 'ammunition',
    },
    cost: 1,
    numberAvailable: 999,
  },
  {
    id: 12,
    name: 'battleaxe',
    stats: {
      damage: '1d8',
      properties: 'verstile',
    },
    cost: 110,
    numberAvailable: 4,
  },
  {
    id: 13,
    name: 'longsword',
    stats: {
      damage: '1d8',
      properties: 'versatile',
    },
    cost: 15,
    numberAvailable: 1,
  },
  {
    id: 14,
    name: 'warhammer',
    stats: {
      damage: '1d8',
      properties: 'versatile',
    },
    cost: 15,
    numberAvailable: 1,
  },
  {
    id: 15,
    name: 'greateaxe',
    stats: {
      damage: '1d12',
      properties: 'heavy',
    },
    cost: 50,
    numberAvailable: 1,
  },
  {
    id: 16,
    name: 'greatsword',
    stats: {
      damage: '2d6',
      properties: 'heavy',
    },
    cost: 50,
    numberAvailable: 1,
  },
];

module.exports = {
  shopItems,
};
