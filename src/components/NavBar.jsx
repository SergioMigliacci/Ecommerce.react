import React from 'react'
import CartWindget from './CartWindget'

const NavBar = () => {
    return (
        <div>
            <header>
                <div class="logo">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75596e05-3d2b-45f8-90aa-2f76a7931b56/d26k573-769c8747-5d31-4d6d-b613-d4556321a44a.jpg/v1/fill/w_446,h_358,q_75,strp/simpsons_la_caja_misteriosa_by_miguel21_d26k573-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU4IiwicGF0aCI6IlwvZlwvNzU1OTZlMDUtM2QyYi00NWY4LTkwYWEtMmY3NmE3OTMxYjU2XC9kMjZrNTczLTc2OWM4NzQ3LTVkMzEtNGQ2ZC1iNjEzLWQ0NTU2MzIxYTQ0YS5qcGciLCJ3aWR0aCI6Ijw9NDQ2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.RZXLSoNwYZpS4JLm1bGbcn9boIjW364upXM0qeYU2zY"></img>
                <h1 className="titulo">Tienda Random</h1>
                <form className="botonCategorias">
                    Seleccione una categoria:
                    <select >
                        <option>Mostrar todo</option>
                        <option>Autos</option>
                        <option>Motos</option>
                        <option>Celulares</option>
                    </select>
                </form>


                <CartWindget />
                </div>
               
            </header>

        </div>
    )
}

export default NavBar