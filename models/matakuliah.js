const mongoose = require('mongoose')
	const Schema = mongoose.Schema
	
	const MatakuliahSchema = new Schema({
	  kode: {
	    type: String
	  },
	  nama: {
	    type: String
	  },
	  jam: {
	    type: String
	  },
	  hari: {
	    type: String
	  },
	  dosen: {
	    type: String
	  }
	})
	
	module.exports = mongoose.model('matakuliah', MatakuliahSchema)