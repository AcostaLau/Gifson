import React from 'react'
import { Link } from 'react-router-dom'

export const Error404 = () => {
  return (
    <div className='bsod container'>
        <h1 className="neg title"><span className="bg">Error - 404</span></h1>
        <p>Ocurrio un error, para continuar:</p>
        <p>* Volve a la pagina principal.</p>
        <nav className="nav">
            <Link to='/' className="link">HOME</Link>
        </nav>
    </div>
  )
}
