const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
var cors = require('cors')
app.use(cors())
app.use('/audio', express.static(path.join(__dirname, 'static', 'audio')));
app.use('/', express.static(path.join(__dirname, 'static', 'dist')))

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));