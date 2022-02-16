// DO YOUR MAGIC
const express = require('express');

const Cars = require('./cars-model')
const router = express.Router()

const { checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique } = require('./cars-middleware');

router.get('/', async (req, res, next) => {
    try{
        const result = await Cars.getAll()
        res.json(result);
    } catch(err) {
        next(err);
    }
})
router.get('/:id', checkCarId, async (req, res, next) => {
    res.json(req.car);
})
router.post('/', checkCarPayload, checkVinNumberValid, 
checkVinNumberUnique, async (req, res, next) => {
    try{
        let result = await Cars.create(req.body)
        res.status(201).json(result);
    } catch(err) {
        next(err);
    }
})

module.exports = router;
