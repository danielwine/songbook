require('dotenv').config();
const logger = require('./logger')
const { mongooseConnect, app } = require('./server');

const port = process.env.PORT || 3000;

mongooseConnect(seedDatabase = true)

app.listen(port, () => {
    logger.info(`App listening at localhost:${port}`);
});
