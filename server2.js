const server =require('express')()
const port = 5000

let nilai = 90
// let data = {
// nama: 'nia novila',
// npm: 17411030,
// jurusan: 'sistem informasi',
// kuliah: (namamatkul, nama) => {
// console.log('selamat kuliah' + nama + ',dimatakuliah' + namamatkul)
// }
// }
// data.kuliah('pemrograman III', data.nama)
 let listMhs = [
     {
         nama: 'nia',
         npm: 17411030
     },
     {
         nama: 'herni',
         npm: 17411002
     },
     {
         nama: 'wino',
         npm: 17411081
     }
]
 for (let i = 0; i < listMhs.length; i++) {
   console.log(listMhs[i].nama + ' - ' + listMhs[i].npm)
    
}


//if (nilai > 80) {
    //console.log('Nilai Anda A')
    
//} else if (nilai < 70){
    //console.log('Nilai Anda B')
    
//} else{
    //console.log('Nilai Anda C')
//}

server.listen(port, function() {
console.log('Server started on port' + port)
})
