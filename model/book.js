const Sequelie = require('sequelize');
const sequelie = require('../util/database');
const Book = sequelie.define('books',{
    id:{
        type:Sequelie.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    title:{
        type:Sequelie.STRING,
        allowNull:false,
    },
    author:{
        type:Sequelie.STRING,
        allowNull:false,
    },
    summary:{
        type:Sequelie.STRING,
        allowNull:false,
    }
})

module.exports = Book;