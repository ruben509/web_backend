module.exports= (sequelize, type) =>{
    return sequelize.define('users', {
        name: type.TEXT,
        lastname: type.TEXT,
        age: type.INTEGER,
        profession: type.TEXT
    });

}