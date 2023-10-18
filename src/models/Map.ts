import mongoose, {Document} from "mongoose";

export interface Map extends Document {
    mapName: string,
    imgKey: string, 
    coordinates: {
        odlawMaxX: number,
        odlawMaxY: number,
        odlawMinX: number,
        odlawMinY: number,
        waldoMaxX: number,
        waldoMaxY: number,
        waldoMinX: number,
        waldoMinY: number,
        whendaMaxX: number,
        whendaMaxY: number,
        whendaMinX: number,
        whendaMinY: number,
        whitebeardMaxX: number,
        whitebeardMaxY: number,
        whitebeardMinX: number,
        whitebeardMinY: number,
    }
}

const mapSchema = new mongoose.Schema<Map>({
  mapName: {
    type: String,
    required: true,
  },
  imgKey: {
    type: String,
    required: true,
  },
  coordinates: {
    type: {
      odlawMaxX: { type: Number, required: true },
      odlawMaxY: { type: Number, required: true },
      odlawMinX: { type: Number, required: true },
      odlawMinY: { type: Number, required: true },
      waldoMaxX: { type: Number, required: true },
      waldoMaxY: { type: Number, required: true },
      waldoMinX: { type: Number, required: true },
      waldoMinY: { type: Number, required: true },
      whendaMaxX: { type: Number, required: true },
      whendaMaxY: { type: Number, required: true },
      whendaMinX: { type: Number, required: true },
      whendaMinY: { type: Number, required: true },
      whitebeardMaxX: { type: Number, required: true },
      whitebeardMaxY: { type: Number, required: true },
      whitebeardMinX: { type: Number, required: true },
      whitebeardMinY: { type: Number, required: true },
    },
  },
});

export default mongoose.model<Map>("Map", mapSchema);
