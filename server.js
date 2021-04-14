const express = require('express');
const app = express();
const compression = require('compression');
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(compression());

app.use('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "static", 'dist', 'about.html'))
})
app.use('/', express.static(path.join(__dirname, 'static', 'dist')))

app.listen(PORT, () => {
   console.log(`Network Information \nLocal: 127.0.0.1:${PORT}`);
})
