'use strict'
const { Schema, model } = require("mongoose");

const ProteinSchema = new Schema({
    name: String,
},{ 
    timestamps: { createdAt: 'created_at' }
});

module.exports = model("Protein", ProteinSchema);