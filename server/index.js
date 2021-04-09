const express = require('express');
const app = express();
const PORT = 5555;
app.use(express.json());

app.listen(PORT, () => `Working on port ${PORT}`);
