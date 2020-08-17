const express = require('express');
const app = express();
const port = 2222;

app.listen(port, () => console.log(`Proxy server is listening on port ${port}`));