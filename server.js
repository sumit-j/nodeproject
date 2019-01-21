const express = require('express')
const app= express()
const bodyParser=require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(bodyParser.json())
app.get('/sayHello',(req,res)=>{
    res.status(200)
    res.send('Hello !!')
})
const db=require('./index')
console.log(db.Person)
db.sequelize.sync({force:true}).then(function () {
    console.log('db created.')
})
app.post('/showData',(req,res)=>{
    console.log('came to the post method.')
    db.Employe.bulkCreate(req.body).then((data)=>{
        let  resData=[];
        db.Employe.findAll().then(data=>{
            data.forEach(element => {
                resData.push(element.dataValues)
            });
            res.status(200)
            res.setHeader('Content-Type','application/json')
            res.send(resData)
        })
    })
})

const server=app.listen('9999',()=>{
    let host=server.address().address
    let port=server.address().port
    console.log("listining to the port no. http://%s:%s",host,port)
})