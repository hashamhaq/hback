const express = require('express');
const app = express();
const port = 5002;

app.get('/', (req, res) => res.send('version 21111'));

app.listen(port, () => console.log(`App 2 listening on port ${port}`));
