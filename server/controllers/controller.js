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

// get controllers for items

function getItemList(req, res) {
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
