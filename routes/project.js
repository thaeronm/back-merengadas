'use strict'
//Express
const express = require('express');
const router = express.Router();

// Controladores
var LiquidCtrl = require('../controllers/LiquidCtrl');
var ProteinCtrl = require('../controllers/ProteinCtrl');
var DrinkCtrl = require('../controllers/DrinkCtrl');
var FruitCtrl = require('../controllers/FruitCtrl');

router.post('/drink', DrinkCtrl.Create);
router.get('/drink/:id', DrinkCtrl.Read);
router.put('/drink/:id/edit', DrinkCtrl.Update);
router.delete('/drink/:id/delete', DrinkCtrl.Delete);
router.get('/drinks', DrinkCtrl.All);

router.post('/liquid', LiquidCtrl.Create);
router.get('/liquid/:id', LiquidCtrl.Read);
router.put('/liquid/:id/edit', LiquidCtrl.Update);
router.delete('/liquid/:id/delete', LiquidCtrl.Delete);
router.get('/liquids', LiquidCtrl.All);

router.post('/protein', ProteinCtrl.Create);
router.get('/protein/:id', ProteinCtrl.Read);
router.put('/protein/:id/edit', ProteinCtrl.Update);
router.delete('/protein/:id/delete', ProteinCtrl.Delete);
router.get('/proteins', ProteinCtrl.All);

router.post('/fruit', FruitCtrl.Create);
router.get('/fruit/:id', FruitCtrl.Read);
router.put('/fruit/:id/edit', FruitCtrl.Update);
router.delete('/fruit/:id/delete', FruitCtrl.Delete);
router.get('/fruits', FruitCtrl.All);

module.exports = router;