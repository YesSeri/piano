const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use('/', express.static(path.join(__dirname, 'static')))
app.use('/audio', express.static(path.join(__dirname, 'audio')))

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));