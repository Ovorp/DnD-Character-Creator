const charSheets = [
  {
    id: 1,
    firstName: 'Flint',
    lastName: 'Strongjaw',
    str: 18,
    dex: 10,
    con: 16,
    int: 10,
    wis: 13,
    cha: 9,
    inventory: [
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
    ],
    bio:
      'Aute cillum labore nisi est aliquip ipsum in. Aute reprehenderit adipisicing ex aliqua aliquip tempor et eiusmod aliquip laborum veniam culpa nulla. Fugiat aliqua sint ex nisi velit. Fugiat commodo sit est minim nisi non. Lorem voluptate nostrud et id ullamco minim cupidatat dolor labore duis. Irure mollit ullamco in ea ad mollit deserunt.',
    avatar:
      'https://db4sgowjqfwig.cloudfront.net/campaigns/178338/assets/813777/Tortle.png?1514853655',
    gold: 642,
  },
  {
    id: 2,
    firstName: 'Vorn',
    lastName: 'Carsut',
    str: 6,
    dex: 20,
    con: 14,
    int: 13,
    wis: 14,
    cha: 10,
    inventory: [
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
    ],
    bio:
      'Amet nisi dolor laboris deserunt in est. Occaecat quis nulla nisi ad id exercitation. Aute id magna est labore qui velit pariatur sint ullamco qui sit labore non. Culpa id culpa pariatur consequat amet laborum voluptate consequat magna ex excepteur. Aute enim aliquip officia nostrud duis id irure nisi elit cupidatat veniam consequat minim velit. Et officia deserunt officia et mollit id. Officia sit elit occaecat amet consequat minim Lorem eiusmod.',
    avatar: 'https://pbs.twimg.com/media/DkVH93jW0AAzXwP.png',
    gold: 451,
  },
  {
    id: 3,
    firstName: 'Shanise',
    lastName: 'Timeless',
    str: 8,
    dex: 15,
    con: 14,
    int: 13,
    wis: 10,
    cha: 18,
    inventory: [
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
    ],
    bio:
      'Aliquip commodo ut ea eiusmod laborum dolore aliqua aliquip nulla proident officia. Ut voluptate amet qui consequat esse est quis minim. Reprehenderit fugiat duis laboris sit exercitation ad consectetur laborum qui magna aliqua. Tempor labore velit quis enim qui nostrud irure ad aute magna magna ad occaecat cillum. Et dolore proident ipsum cillum velit sunt labore laborum sit laborum pariatur adipisicing exercitation. Proident non id Lorem occaecat velit et tempor.',
    avatar: 'https://pbs.twimg.com/media/DMJbPTJVQAA5u3A.jpg',
    gold: 566,
  },
  {
    id: 4,
    firstName: 'Gar',
    lastName: 'Seahid',
    str: 15,
    dex: 10,
    con: 15,
    int: 8,
    wis: 12,
    cha: 16,
    inventory: [
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
    ],
    bio:
      'Do enim id sit reprehenderit ad aliquip sint deserunt in anim. Ad reprehenderit nisi nulla ipsum qui tempor reprehenderit. Amet magna laborum enim reprehenderit ipsum non ea enim fugiat. Incididunt deserunt minim labore do enim consectetur laboris.',
    avatar:
      'https://64.media.tumblr.com/f2626f1bf3721b1753aa8c428c9434e5/tumblr_oiem29UTd11qkpz2go1_1280.png',
    gold: 200,
  },
];

module.exports = {
  charSheets,
};
