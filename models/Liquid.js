'use strict'
const { Schema, model } = require("mongoose");

const LiquidSchema = new Schema({
    name: String,
    calories:  Number
},{ 
    timestamps: { createdAt: 'created_at' }
});

module.exports = model("Liquid", LiquidSchema);