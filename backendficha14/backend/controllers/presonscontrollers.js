const preson = require('../sequelize').presons;

exports.getCars = function (req, res, next) {
    preson.findAll()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(404).send({ "Error: ": err });
        });
}
