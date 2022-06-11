const config = require('config');
const YAML = require('yamljs');
const logger = require('./logger.js')
const express = require('express');
const morgan = require("morgan");
const mongoose = require('mongoose');

const swaggerUi = require('swagger-ui-express');
try {
    const swaggerDocument = YAML.load('./docs/swagger.yaml');
} catch (err) {
    logger.warn('Missing OpenAPI documentation.')
}

const { username, password, host, database, parameters }
    = config.get('database');

const login = username ? `${username}:${password}@` : ''

const mongooseConnect = (seedDatabase = false) => {
    mongoose
        .connect(`mongodb://${login}${host}/${database}?${parameters}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => logger.info(
            "MongoDB connection has been established successfully"))
        .catch(err => {
            return logger.warn(
                'Cannot connect to MongoDB. All queries will be disabled.')
        })
        .then(
            conn => {
                if (seedDatabase) {
                    require('./seed/seeder');
                    console.log('Database is seeded!');
                }
            })
}

const app = express();
app.use(morgan('tiny', { stream: logger.stream }));

app.use(express.json())

app.use('/song', require('./controller/song/router'));
app.use('/artist', require('./controller/artist/router'));
app.use('/album', require('./controller/album/router'));
app.use('/composer', require('./controller/composer/router'));
app.use('/lyricist', require('./controller/lyricist/router'));
app.use('/genre', require('./controller/genre/router'));
app.use('/', (req, res) => { res.send('api server') });

app.use((err, req, res, next) => {
    logger.error(`ERROR ${err.statusCode}: ${err.message}`);
    statusCode = err.statusCode ? err.statusCode : 500
    res.status(statusCode);
    res.json({
        hasError: true,
        errorCode: statusCode,
        message: err.message
    });
});

module.exports = {
    mongooseConnect,
    app
};
