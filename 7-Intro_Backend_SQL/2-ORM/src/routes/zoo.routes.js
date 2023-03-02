import { Router, application } from 'express'
import { getAllZoo, getOneZoo, getZooBudget, getZooName, createZoo, deleteZoo, getRefugee } from '../controllers/zoo.controller.js'

const router = Router()

router.get('/api/zoo', getAllZoo)
router.get('/api/zoo/id/:id', getOneZoo)
router.get('/api/zoo/budget', getZooBudget)
router.get('/api/zoo/refugee', getRefugee)
router.post('/api/zoo/findByName', getZooName)
router.post('/api/zoo/createZoo', createZoo)
router.delete('/api/zoo/deleteZoo/:id_zoo', deleteZoo)
// router.get('/imagen', getMain)

export default router // Es lo exporta en general, por eso lleva Default. Entonces si otro archivo entra a buscar qué exportar de aquí, es lo que tomará aunque tenga otro nombre..
