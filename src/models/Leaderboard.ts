import mongoose, {Document} from "mongoose";

export interface Leaderboard extends Document {
    playerName: string, 
    seconds: number, 
    timer: string, 
    mapName: string
}

const leaderboardSchema = new mongoose.Schema<Leaderboard>({
    playerName: {type: String, required: true},
    seconds: {type: Number, required: true},
    timer: {type: String, required: true},
    mapName: {type: String, required: true}
}, {
    timestamps: true
})

export default mongoose.model<Leaderboard>("Leaderboard", leaderboardSchema)