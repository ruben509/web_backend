const Sequelize = require('sequelize');
const presonsModel = require('./models/presons');


//criaçao da ligação à BD
const sequelize = new Sequelize('ficha14', 'user2044920@backend-mysql-2022', 'PAlavrA123', {
    host: 'backend-mysql-2022.mysql.database.azure.com',
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            require: true
        }
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

});
const presons = presonsModel(sequelize, Sequelize)




//Autenticação à BD
sequelize.authenticate()
    .then(() => {
        console.log("Conection has been established");
    })
    .catch(err => {
        console.error("Unable to connect", err)
    });



sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created');
        presons.bulkCreate([
            { fristname: 'Pedro', lastname: 'Jardin', profession: 'IT', age: 62 },
            { fristname: 'Manuel', lastname: 'Matos', profession: 'IT', age: 12 },
            { fristname: 'Maria', lastname: 'Figueira', profession: 'IT', age: 32 },
            { fristname: 'Ana', lastname: 'Duarte', profession: 'IT', age: 82 },
            { fristname: 'Luis', lastname: 'Faria', profession: 'IT', age: 42 },

        ])

    }).then(function () {
        return Person.findAll();

    }).then(function (presons) {
        console.log(presons);
    });


module.exports = {
    presons

}
