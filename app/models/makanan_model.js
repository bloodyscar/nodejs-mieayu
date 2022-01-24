const db = require('../config/db')
const Sequelize = require('sequelize');
const kategori = require('./kategori_model')

const makanan = db.define('makanan', {
    // model attribute are define here 
    kategori_id: Sequelize.INTEGER,
    nama: Sequelize.STRING,
    deskripsi: Sequelize.STRING,
    harga: Sequelize.INTEGER,

}, {
    freezeTableName: true,
    timestamps: false,
})

makanan.hasOne(kategori, { foreignKey: 'kategori_id' });
makanan.belongsTo(kategori, { foreignKey: 'kategori_id' });

module.exports = makanan;