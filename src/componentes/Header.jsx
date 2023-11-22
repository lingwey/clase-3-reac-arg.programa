import React from 'react'
export default function Header() {
    return (  
        <>
            <header className = 'header-container'>
                <div><img src="public/chip.svg" className='icono-chip' /></div>
                <h1>Maxiteclados</h1>
                <div className="carrito-header">
                    <label htmlFor="carrito-open"><img src="public/cart.svg" className="icono-cart" /></label>
                    <input type="checkbox" id='carrito-open'style={{ display: 'none' }}/>
                </div>
                
            </header>
        </>
    );
}

