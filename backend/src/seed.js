require('dotenv').config();
const logger = require('./logger')
const { mongooseConnect, app } = require('./server');

const port = process.env.PORT || 3000;

const seedDatabase = true
const seedUsers = true

mongooseConnect()
    .then(
        conn => {
            if (conn) {
                if (seedDatabase) {
                    require('./seed/seeder');
                    console.log('Database is seeded!');
                }
                if (seedUsers) {
                    require('./seed/user')
                    console.log('Users created.');
                }
            }
        })

app.listen(port, () => {
    logger.info(`App listening at localhost:${port}`);
});
