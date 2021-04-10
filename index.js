const express = require('express');
const compression = require('compression');

const app = express();

const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(compression());

app.use('/audio', express.static(path.join(__dirname, 'static', 'audio')));
app.use('/', express.static(path.join(__dirname, 'static', 'dist')))

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));