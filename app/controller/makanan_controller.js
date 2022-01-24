const model = require('../models/index');

const makanan = {}

makanan.getAll = async (req, res) => {
    try {
        const getAllMakanan = await model.makanan.findAll({
            include: [
                {
                    model: model.kategori
                }
            ],
        });
        if (getAllMakanan.length > 0) {
            res.status(200).json({
                message: 'Data berhasil diambil',
                data: getAllMakanan
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

module.exports = makanan;