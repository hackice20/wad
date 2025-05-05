const express = require('express');
const path = require('path');
app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
  // Use path.join to create an absolute path to index.html
  res.sendFile(path.join(__dirname, 'index.html')); // Serves index.html
});