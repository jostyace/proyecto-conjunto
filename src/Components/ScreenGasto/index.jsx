import { Button } from "../Button"
import './NuevoGasto.css'

export const ScreenGasto = () => {
  return (
    <div className="nuevaEntrada">
    <input type="number" className="tituloNueva" placeholder="Monto"/>
          <select className="tituloNueva" placeholder="Descripción">
            <option>Opcion 1</option>
            <option>Opcion 2</option>
          </select>
          <textarea className="descripcionNueva" placeholder="Descripción"></textarea>

          <div className="optionsClass">
          <Button
            btnTitle='Guardar'
            btnColor='#445566'
            />
      </div>
    </div>
  )
}
