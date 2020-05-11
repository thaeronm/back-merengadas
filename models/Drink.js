'use strict'
const { Schema, model } = require("mongoose");

const DrinkSchema = new Schema({
    name: String,
    fruits:[{type: Schema.ObjectId, ref: 'Fruit'}],
    liquid: {type: Schema.ObjectId, ref: 'Liquid'},
    protein: {type: Schema.ObjectId, ref: 'Protein'},
    taste:  Number
},{ 
    timestamps: { createdAt: 'created_at' }
});

module.exports = model("Drink", DrinkSchema);