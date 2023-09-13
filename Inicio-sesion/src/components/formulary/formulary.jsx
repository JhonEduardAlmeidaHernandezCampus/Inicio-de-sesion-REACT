import React from "react";
import "./formuly.css"

export default function InicioSesion() {

    const handleSubmit =  async (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target))

        try {
            let config = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            }
            const respuesta = await(await fetch (`http://127.10.10.10:5010/user`, config)).json()

            if (respuesta.success) {
                console.log("Inicio de sesión exitoso");
            } else {
                console.log("Inicio de sesión fallido");
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="container">
                <h1>INICIO DE SESION</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">USER</label> <br />
                        <input type="text" name="usuario" />
                    </div>
                    <div>
                        <label htmlFor="">PASSWORD</label> <br />
                        <input type="password" name="contrasena" />
                    </div>
                    <button type="submit" id="enviar">LOGIN</button>
                </form>
            </div>
        </>
    )
}