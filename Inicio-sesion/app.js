import express from "express";
import { my_config } from "./backend/helpers/variables/variables.js";
import { con } from "./backend/helpers/connect/connect.js";
import cors from 'cors'

let db = await con()

let app = express()
app.use(express.json())

const corsOptions = {
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
};
  
app.use(cors(corsOptions));

app.post("/user", async (req, res) => {
    try {
        let { usuario, contrasena } = req.body
        let contrasena1 = parseInt(contrasena)

        let tabla = db.collection("users")

        const comparar = await tabla.findOne(
            {
                usuario: usuario, contrasena: contrasena1
            }
        )

        if (comparar) {
            res.json({ success: true });
        } else {
            res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
        }
        
    } catch (error) {
        res.send(error)
    }
})

app.listen(my_config, () => console.log(`http://${my_config.hostname}:${my_config.port}`))