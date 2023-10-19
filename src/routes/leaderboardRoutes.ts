import {Router, Request, Response} from 'express'
import Map from '../models/Map'
import Leaderboard from '../models/Leaderboard'

interface Player {
    playerName: string, 
    seconds: number, 
    timer: string, 
    mapName: string
}

interface LeaderDataObj {
    [key: string] : Player[] | any
}

const router = Router()

router.get('/', async (req: Request, res: Response) => {
    const maps = await Map.find().sort("mapName").select('mapName').lean().exec()

    const leaderData: LeaderDataObj = {}
    for (const singleMap of maps) {
        const mapLeaderData = await Leaderboard.find({mapID: singleMap._id}).sort({'seconds': 1, 'createdAt': 1}).limit(5).exec()

        leaderData[singleMap.mapName] = mapLeaderData
    }
    
    res.status(200).json(leaderData)
})

router.post('/', async (req: Request, res: Response) => {
    const {playerName, seconds, timer, mapID} = req?.body

    if (!playerName || !seconds || !timer || !mapID) {
        return res.status(400).json({message: "Request must include a playerName, seconds, timer, and mapID."})
    }

    await Leaderboard.create({playerName, seconds, timer, mapID})

    res.status(201).json({message: "Entry successfully created."})
})


export default router