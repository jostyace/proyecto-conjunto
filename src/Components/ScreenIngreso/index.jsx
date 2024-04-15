import { Button } from "../Button"
import './NuevaEntrada.css'

export const ScreenIngreso = () => {
  return (
    <div className="nuevaEntrada">
    <input type="number" className="tituloNueva" placeholder="Monto"/>
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
