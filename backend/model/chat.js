const { DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

const Chat = sequelize.define('Chat', {
    name: DataTypes.STRING,
    ownerId: DataTypes.STRING,
    privacy:{
        type: DataTypes.TINYINT,
        defaultValue: 0,
    },
})

module.exports = Chat;

