const express = require('express');
const app = express();
const PORT = 5555;
const {
  getCharSheets,
  getCharSheetsById,
  getItemList,
  getItemListById,
} = require('./controllers/controller');
app.use(express.json());

const charEndpoint = '/api/characters';
const itemEndpoint = '/api/items';

// get endpoints for characters, you can request them by using a id param.
app.get(charEndpoint, getCharSheets);

app.get(charEndpoint + '/:id', getCharSheetsById);

// get endpoints for shop item list, you can use a param to search by item or a query to search by name or price.
app.get(itemEndpoint, getItemList);

app.get(itemEndpoint + '/:id', getItemListById);

app.listen(PORT, () => console.log(`Working on port ${PORT}`));
