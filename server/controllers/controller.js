const { charSheets } = require('./../data/charData');
const { shopItems } = require('./../data/itemData');

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

module.exports = {
  getCharSheets,
  getCharSheetsById,
  getItemList,
  getItemListById,
};
