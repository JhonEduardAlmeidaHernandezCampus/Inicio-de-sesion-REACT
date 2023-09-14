import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Inicio() {
    const location = useLocation()
    return (
        <>
            <h7>{location.state.user.nombre} Bienvenido</h7>
        </>
    )
}
