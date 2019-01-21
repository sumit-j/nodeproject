let Sequelize = require('sequelize')
let sequelize=new Sequelize('test','sumitjoshi','',{
    host: 'localhost',
    dialect: 'postgres',
})
let db={}

const model = sequelize.import('./model/person')
db.Sequelize=Sequelize
db.sequelize=sequelize
db['Employe']=model

module.exports=db;