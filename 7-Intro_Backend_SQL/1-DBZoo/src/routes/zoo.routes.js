// import {Router} from 'express' ---> esto es usando ES6.

const { Router, application } = require('express') // desde express traeme router y application.

const router = Router()

const { getAllZoo, getOneZoo, getZooBudget, getZooName, createZoo } = require('../controllers/zoo.controller')

router.get('/api/zoo', getAllZoo)
router.get('/api/zoo/id/:id', getOneZoo)
router.get('/api/zoo/budget', getZooBudget)
router.post('/api/zoo/findByName', getZooName)
router.post('/api/zoo/createZoo', createZoo)

module.exports = router
