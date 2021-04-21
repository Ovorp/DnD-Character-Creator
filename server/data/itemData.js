const shopItems = [
  {
    id: 1,
    name: 'Padded Armor',
    stats: {
      AC: 11 + 'dexMod',
    },
    cost: 5,
    numberAvailable: 3,
  },
  {
    id: 2,
    name: 'Leather Armor',
    stats: {
      AC: 11 + 'dexMod',
    },
    cost: 10,
    numberAvailable: 3,
  },
  {
    id: 3,
    name: 'Studded Leather Armor',
    stats: {
      AC: 12 + 'dexMod',
    },
    cost: 45,
    numberAvailable: 1,
  },
  {
    id: 4,
    name: 'Hide Armor',
    stats: {
      AC: 12 + 'dexMod max 2',
    },
    cost: 10,
    numberAvailable: 3,
  },
  {
    id: 5,
    name: 'Scale Mail Armor',
    stats: {
      AC: 14 + 'dexMod max 2',
    },
    cost: 400,
    numberAvailable: 1,
  },
  {
    id: 6,
    name: 'Plate Armor',
    stats: {
      AC: 18,
    },
    cost: 1500,
    numberAvailable: 1,
  },
  {
    id: 7,
    name: 'Club',
    stats: {
      damage: '1d4',
      properties: 'light',
    },
    cost: 1,
    numberAvailable: 9,
  },
  {
    id: 8,
    name: 'Dagger',
    stats: {
      damage: '1d4',
      properties: 'light',
    },
    cost: 2,
    numberAvailable: 5,
  },
  {
    id: 9,
    name: 'Mace',
    stats: {
      damage: '1d6',
      properties: null,
    },
    cost: 5,
    numberAvailable: 5,
  },
  {
    id: 10,
    name: 'Shortbow',
    stats: {
      damage: '1d6',
      properties: 'ranged',
    },
    cost: 25,
    numberAvailable: 2,
  },
  {
    id: 11,
    name: 'Arrows',
    stats: {
      damage: null,
      properties: 'ammunition',
    },
    cost: 1,
    numberAvailable: 999,
  },
  {
    id: 12,
    name: 'Battleaxe',
    stats: {
      damage: '1d8',
      properties: 'verstile',
    },
    cost: 110,
    numberAvailable: 4,
  },
  {
    id: 13,
    name: 'Longsword',
    stats: {
      damage: '1d8',
      properties: 'versatile',
    },
    cost: 15,
    numberAvailable: 1,
  },
  {
    id: 14,
    name: 'Warhammer',
    stats: {
      damage: '1d8',
      properties: 'versatile',
    },
    cost: 15,
    numberAvailable: 1,
  },
  {
    id: 15,
    name: 'Greateaxe',
    stats: {
      damage: '1d12',
      properties: 'heavy',
    },
    cost: 50,
    numberAvailable: 1,
  },
  {
    id: 16,
    name: 'Greatsword',
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
