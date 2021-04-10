const { charSheets } = require('./../data/charData');
const { shopItems } = require('./../data/itemData');
let charId = charSheets.length + 1;
// let itemId = shopItems.length;

// get controllers for characters
function getCharSheets(req, res) {
  res.status(200).json(charSheets);
}

function getCharSheetsById(req, res) {
  const { id } = req.params;
  const data = charSheets.filter((val) => val.id === +id);
  req.body.constructor === Object && Object.keys(req.body).length === 0
    ? res.status(500).send(`Id is not valid`)
    : res.status(200).json(data);
}

// get controllers for items, to get a item by querey please use name= or cost=

function getItemList(req, res) {
  const { name, mincost, maxcost } = req.query;

  if (name) {
    const itemListByName = shopItems.filter((val) =>
      val.name.toLowerCase().includes(name.toLowerCase())
    );
    return res.status(200).json(itemListByName);
  }
  if (mincost) {
    const itemListByMinCost = shopItems.filter((val) => val.cost >= +mincost);
    return res.status(200).json(itemListByMinCost);
  }
  if (maxcost) {
    const itemListByMaxCost = shopItems.filter((val) => val.cost <= +maxcost);
    return res.status(200).json(itemListByMaxCost);
  }
  res.status(200).json(shopItems);
}

function getItemListById(req, res) {
  const { id } = req.params;
  const data = shopItems.filter((val) => val.id === +id);
  req.body.constructor === Object && Object.keys(req.body).length === 0
    ? res.status(500).send(`Id is not valid`)
    : res.status(200).json(data);
}

// post controllers add new character

function addNewChar(req, res) {
  const {
    firstName,
    lastName,
    str,
    dex,
    con,
    int,
    wis,
    cha,
    bio,
    avatar,
  } = req.body;

  const startingGold = Math.floor(Math.random() * 1000);

  const newChar = {
    id: charId,
    firstName,
    lastName,
    str,
    dex,
    con,
    int,
    wis,
    cha,
    bio,
    avatar,
    inventory: [],

    gold: startingGold,
  };
  charId++;

  charSheets.push(newChar);

  res.status(200).json(newChar);
}

// and new item to char inventory

function addItemToInventory(req, res) {
  const { id } = req.params;
  const item = req.body;
  const listOfItemIds = charSheets.map((val) => val.id);
  if (!listOfItemIds.includes(+id)) {
    res.status(500).send('This ID is not valid');
  }

  charSheets.forEach((val, i) => {
    if (val.id === +id) {
      charSheets[i].inventory.push(item);
      res.status(200).json(charSheets[i]);
    }
  });

  if (Object.keys(item) === 0) {
    res.status(500).send('There is no item in the body of the request');
  }

  if (Object.keys(id) === 0) {
    res.status(500).send('There is no id in the params');
  }
}

// edit a current char

function editCharData(req, res) {
  const {
    firstName,
    lastName,
    str,
    dex,
    con,
    int,
    wis,
    cha,
    bio,
    avatar,
    gold,
  } = req.body;

  const { id } = req.params;

  const listOfCharIds = charSheets.map((val) => val.id);
  if (!listOfCharIds.includes(+id)) {
    res.status(500).send('This ID is not valid');
  }

  charSheets.forEach((val, i) => {
    if (val.id === +id) {
      charSheets[i] = {
        id: val.id,
        firstName: firstName || val.firstName,
        lastName: lastName || val.lastName,
        str: str || val.str,
        dex: dex || val.dex,
        con: con || val.con,
        int: int || val.int,
        wis: wis || val.wis,
        cha: cha || val.cha,
        bio: bio || val.bio,
        avatar: avatar || val.avatar,
        inventory: val.inventory,
        gold: gold || val.gold,
      };
      res.status(200).json(charSheets[i]);
    }
  });
  if (Object.keys(id) === 0) {
    res.status(500).send('There is no id in the params');
  }
  if (Object.keys(req.body) === 0) {
    res.status(500).send('There is no data in the body of the request');
  }
}

// the delete controllers for items in inventory, charSheets and from the shop list by id

function deleteItemFromInventory(req, res) {
  const { itemId, charId } = req.params;

  const listOfCharIds = charSheets.map((val) => val.id);
  if (!listOfCharIds.includes(+charId)) {
    res.status(500).send('This ID is not valid');
  }

  charSheets.forEach((val, i) => {
    if (val.id === +charId) {
      charSheets[i].inventory.forEach((ele, j) => {
        if (ele.id === +itemId) {
          charSheets[i].inventory.splice(j, 1);
          res.status(200).json(charSheets[i]);
        }
      });
    }
  });
}

function deleteChar(req, res) {
  const { id } = req.params;

  const listOfCharIds = charSheets.map((val) => val.id);
  if (!listOfCharIds.includes(+id)) {
    res.status(500).send('This ID is not valid');
  }

  charSheets.forEach((val, i) => {
    if (val.id === +id) {
      charSheets.splice(i, 1);
    }
  });

  res.status(200).json(charSheets);
}

function deleteFromShopItems(req, res) {
  const { id } = req.params;

  const listOfItemIds = shopItems.map((val) => val.id);
  if (!listOfItemIds.includes(+id)) {
    res.status(500).send('This ID is not valid');
  }

  shopItems.forEach((val, i) => {
    if (val.id === +id) {
      shopItems.splice(i, 1);
    }
  });

  res.status(200).json(shopItems);
}

module.exports = {
  getCharSheets,
  getCharSheetsById,
  getItemList,
  getItemListById,
  addNewChar,
  addItemToInventory,
  editCharData,
  deleteItemFromInventory,
  deleteChar,
  deleteFromShopItems,
};
