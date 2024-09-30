import { Router } from "express"
import * as PlayerControler from "./controllers/players-controllers"

const router =  Router()

router.get('/players',PlayerControler.getPlayer)

router.get('/players/:id',PlayerControler.getPlayerById)

export default router

