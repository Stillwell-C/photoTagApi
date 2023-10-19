import mongoose, {Document, Types} from "mongoose";

export interface Leaderboard extends Document {
    playerName: string, 
    seconds: number, 
    timer: string, 
    mapID: Types.ObjectId
}

const leaderboardSchema = new mongoose.Schema<Leaderboard>({
    playerName: {type: String, required: true},
    seconds: {type: Number, required: true},
    timer: {type: String, required: true},
    mapID: {type: mongoose.Schema.Types.ObjectId, required: true}
}, {
    timestamps: true
})

export default mongoose.model<Leaderboard>("Leaderboard", leaderboardSchema)