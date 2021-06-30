
const express = require('express');
const mysql = require('mysql2');
const Sequelize = require('sequelize');



const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded(false));



const sequelize = new Sequelize('ficha9','root','',{
    dialect:'mysql'
});
    sequelize.authenticate()
        .then(() =>{
            console.log("connection has been established");
        })
        .catch(err =>{
            console.error("unable to connect", err);
        });

const Person = sequelize.define('users',{
    //Attributes
    fristname:{
        type: Sequelize.STRING,
        allowNull: false
        //alloNull defaults to true
    },
    lastname:{
        type: Sequelize.STRING
    
    },
    profession:{
        type: Sequelize.STRING
    
    },
    age:{
        type: Sequelize.INTEGER
    
    },
}) 

sequelize.sync({ force: false})
    .then(()=>{
        console.log('Database & tables created');

    }) .then(function(){
            return Person.findAll();

        }) .then(function(persons){
            console.log(persons);
         });

Persons.bulkCreate([
    {fristname:'Pedro',lastname: 'Jardin', profession: 'IT', age:62},
    {fristname:'Manuel',lastname: 'Matos', profession: 'IT', age:12},
    {fristname:'Maria',lastname: 'Figueira', profession: 'IT', age:32},
    {fristname:'Ana',lastname: 'Duarte', profession: 'IT', age:82},
    {fristname:'Luis',lastname: 'Faria', profession: 'IT', age:42},
   
])

app.get('/persons', (req, res) => {
    Person.findAll() .then(persons=>{
        res.send(persons);
    });
});



app.post('/persons', (req, res) => {
    Person.create(req.body).then(person=>{
            res.send(person.id);
    });
});

app.delete('/persons', (req, res) => {
  Person.destroy({
      where:{
          id: id
      }
    }).then(count=>{
        if(!count){
            return res.status(404).send({error:'No user'});
        }
        res.status(204).send();

    })
});


 app.delete('/persons/:id', (req, res) => {
    
});


app.get('/persons/:id', (req, res) => {
  
});


app.get('/persons/:age/:profession', (req, res) => {
  
});

app.put('/persons/:id', (req, res) => {
   
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});