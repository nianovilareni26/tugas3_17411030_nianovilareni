const mahasiswa = require('express')()
const mahasiswaController = require('../controller/mahasiswa')

mahasiswa.post('/insert', (req, res) => {
    mahasiswaController.insertMahasiswa(req.body)
        .then(result => {
            res.json(result)
        }).catch(err =>{
            res.json(err)
        })
})

module.exports = mahasiswa