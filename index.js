const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use('/test', express.static(path.join(__dirname, 'test')))
app.use('/', express.static(path.join(__dirname, 'static')))

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));