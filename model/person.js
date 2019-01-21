module.exports=(sequelize,datatype)=>{
    let Employe=sequelize.define('Employe',{
        id:{
            type:datatype.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement: true
        },
        name:{
            type:datatype.STRING,
            allowNull:true
        },
        contactNo:{
            type:datatype.STRING,
            allowNull:false
        },
        emailAddress:{
            type:datatype.STRING,
            allowNull:false
        }
    })
    return Employe;
}

