import mongoose from "mongoose"

const partidoSchema = new mongoose.Schema({
    deporte: { type: String, enum: ['futbol', 'baloncesto', 'volley'], default: 'futbol' },
    equipo1: { type: String },
    equipo2: { type: String },
    fecha: { type: String },
    arbitro: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, //GET arbitro ID from User collection
    ubicacion: { type: String }
});

export default mongoose.model('partidos', partidoSchema);