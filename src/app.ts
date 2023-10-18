import express from 'express'
import mapRoutes from './routes/mapRoutes'
import leaderboardRoutes from './routes/leaderboardRoutes'
import cors from 'cors'
import corsOptions from './config/corsOptions'

const createServer = () => {

    const app = express()
    
    app.use(cors(corsOptions));
    app.use(express.json())
    
    app.use('/map', mapRoutes)
    app.use('/leaderboard', leaderboardRoutes)
    
    return app
}

export default createServer