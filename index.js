const express = require('express');
const compression = require('compression');

const app = express();

const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(compression());

app.use('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "static", 'dist', 'about.html'))
})
app.use('/', express.static(path.join(__dirname, 'static', 'dist')))

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));