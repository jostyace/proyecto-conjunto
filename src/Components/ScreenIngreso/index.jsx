import { Button } from "../Button"
import './NuevaEntrada.css'

export const ScreenIngreso = () => {
  return (
    <div className="nuevaEntrada">
      <label>Monto</label>
      <input type="number" className="tituloNueva" placeholder="0.00"/>
      <label>Descripción</label>
      <textarea className="descripcionNueva" placeholder=""></textarea>
      <div className="optionsClass">
      <Button
        btnTitle='Guardar'
        btnColor='#445566'
        />
      </div>
    </div>
  )
}
