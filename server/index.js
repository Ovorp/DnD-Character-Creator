const express = require('express');
const app = express();
const PORT = 5555;
const {
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
} = require('./controllers/controller');
app.use(express.json());

const charEndpoint = '/api/characters';
const itemEndpoint = '/api/items';

// get endpoints for characters, you can request them by using a id param.
app.get(charEndpoint, getCharSheets);

app.get(charEndpoint + '/:id', getCharSheetsById);

// get endpoints for shop item list, you can use a param to search by item or a query to search by name or maxcost/mincost.
app.get(itemEndpoint, getItemList);

app.get(itemEndpoint + '/:id', getItemListById);

// post request to add new char
app.post(charEndpoint, addNewChar);

// add item to inventory

app.put(charEndpoint + '/additems/:id', addItemToInventory);

// edit char data

app.put(charEndpoint + '/:id', editCharData);

// delete item for character inventory,  need both the character's id and the item's id

app.delete(
  charEndpoint + '/deleteitems/:charId/:itemId',
  deleteItemFromInventory
);

app.delete(charEndpoint + '/:id', deleteChar);

app.delete(itemEndpoint + '/:id', deleteFromShopItems);

app.listen(PORT, () => console.log(`Working on port ${PORT}`));
