import {Router, Request, Response} from 'express'
import Map from '../models/Map'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
    const mapData = await Map.find().sort("mapName").lean().exec()

    if (!mapData) {
        return res.status(400).json({ message: "No map data found."})
    }

    res.status(200).json(mapData)
})

router.get('/frontPage', async (req: Request, res: Response) => {
    const mapData = await Map.find().sort("mapName").select("-coordinates").lean().exec()


    if (!mapData) {
        return res.status(400).json({ message: "No map data found."})
    }

    res.status(200).json(mapData)
})

router.get('/:mapID', async (req: Request, res: Response) => {
    const mapID = req?.params?.mapID

    const mapData = await Map.findById(mapID).lean().exec()

    if (!mapID) {
        return res.status(404).json({ message: "Map not found."})
    }

    res.status(200).json(mapData)
})

export default router