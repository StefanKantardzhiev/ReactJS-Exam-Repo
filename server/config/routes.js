const authController = require("../controllers/authController");
const offerController = require("../controllers/offerController");



module.exports = (app) => {
    app.use('/', offerController);
    app.use('/auth', authController);
};