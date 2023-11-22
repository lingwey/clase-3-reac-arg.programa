import React from 'react'
export default function Article({nombre, imagen, descripcion, precio, cantidadDisponible}) {

  return (
    //console.log(producto)
   <> 
    <article > 
          <div className='targeta'>
            <div className='caja-imagen'>
              <h4>{nombre}</h4>
              <div className="imagen">
                  <img src= {imagen} alt= {nombre} title= {nombre}  width = "200"/>
              </div>
            </div>
            <div className="caja-descripcion">
                <h5>Descripcion</h5>
                <p className="descripcion">{descripcion}</p>
                <p className="precio">${precio}</p>
                <p className="stok">diponibles: {cantidadDisponible}</p>
                <input type="submit" value= "comprar" className='btn-comprar'/>
            </div>
          </div>
     </article>
    </>
  )
}
