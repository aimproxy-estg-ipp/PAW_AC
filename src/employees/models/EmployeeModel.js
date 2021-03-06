const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Validators
const { CellPhoneValidator, PostalCodeValidar, NIFValidator } = require('../../shared/validators')

// Enums
const { Gender } = require('../../shared/enums')

const employeeSchema = new Schema({
    employee_no: { type: Number, require: true, unique: true },
    password: { type: String, require: true },
    name: { type: String, require: true },
    nif: { type: String, validate: NIFValidator },
    cell_phone: { type: String, validate: CellPhoneValidator },
    birth_date: Date,
    gender: { type: String, enum: Gender },
    nationality: String,
    postal_code: { type: String, validate: PostalCodeValidar },
    address: String,
    created_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Employee', employeeSchema)