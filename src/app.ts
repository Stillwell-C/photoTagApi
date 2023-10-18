import express from 'express'
import mapRoutes from './routes/mapRoutes'
import leaderboardRoutes from './routes/leaderboardRoutes'
import cors from 'cors'

const createServer = () => {

    const app = express()
    
    app.use(cors);
    app.use(express.json())
    
    app.use('/map', mapRoutes)
    app.use('/leaderboard', leaderboardRoutes)
    
    return app
}

export default createServer