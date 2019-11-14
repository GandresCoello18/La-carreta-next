const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');


const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();


  server.use(bodyParser.json({extended: false}));
  server.use(cors());
  server.use('/static', express.static(__dirname + '/static'));

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
