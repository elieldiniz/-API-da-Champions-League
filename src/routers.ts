import { Router } from "express"
import * as PlayerControler from "./controllers/players-controllers"

const router =  Router()

router.get('/players',PlayerControler.getPlayer)

router.post("/players" , PlayerControler.postPlayers)

router.delete('/players/:id', PlayerControler.deletePlayer)

router.patch('/players/:id', PlayerControler.patchPlayer)

router.get('/players/:id',PlayerControler.getPlayerById)

export default router

