import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import User from "./src/app/core/models/User.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("¡¡¡Conectado a MongoDB!!!"))
  .catch(err => console.log("Error al conectarse a MongoDB :(", err));
  
  mongoose.connection.once("open", () => {
  console.log("DB name:", mongoose.connection.name);
});

//// POST - REGISTER /////
app.post("/api/register", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    console.log("User saved:", newUser);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json({ message:"Error creating user"});
  }
})

/////// GET - LOGIN /////////
app.get("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      res.status(409).json({ message: "Something is wrong"})
    } else {
      res.status(200).json({ message: "Login exitoso", user });
    }
  } catch (error) {
    res.status(400).json({ message:"Error getting user"});
  }
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);