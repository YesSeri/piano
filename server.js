const express = require('express');
const app = express();
const compression = require('compression');
const path = require('path');
const os = require('os')
const PORT = process.env.PORT || 3000;

app.use(compression());

app.use('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "static", 'dist', 'about.html'))
})
app.use('/', express.static(path.join(__dirname, 'static', 'dist')))

const { address } = (() => {
  const networkInterfaces = os.networkInterfaces();
  for (netInfo of networkInterfaces['Wi-Fi']) {
    if (netInfo['family'] === 'IPv4') return netInfo
  }
  throw new Error("Could not find wifi info, IPv4")
})();

app.listen(PORT, () => {
  console.log(`Network Information \nWiFi: ${address}:${PORT}\nLocal: 127.0.0.1:${PORT}`);
})