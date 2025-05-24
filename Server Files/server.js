const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cors = require('cors');
const helmet = require("helmet");
// const index = require('./models/Index');
// const db = index.db
const indexRouter = require('./routes/index');
const path = require('path')
const app = express();
const port = process.env.PORT || 3000;

// (async () => {
//     await db.sequelize.sync();
// })();

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet()); // need to add more configurations
app.use(cors());

app.use('/api', indexRouter);

app.get('/', (req, res) => {
    res.status(200).send(`IGO server is running on Node js as reverse proxy on Nginx ¯\\_(ツ)_/¯`);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
