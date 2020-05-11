'use strict'
const { Schema, model } = require("mongoose");

const FruitSchema = new Schema({
    name: String,
    calories:  Number
},{ 
    timestamps: { createdAt: 'created_at' }
});

module.exports = model("Fruit", FruitSchema);