const db = require('../config/db')
const Sequelize = require('sequelize');

const kategori = db.define('kategori', {
    kategori_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    nama: Sequelize.STRING
}, {
    freezeTableName: true,
    timestamps: false,
})

kategori.removeAttribute('id')
module.exports = kategori;