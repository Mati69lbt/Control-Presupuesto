import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");



  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      setMensaje("Presupuesto Inválido!!!");
      return;
    }
    setMensaje("");
    setIsValidPresupuesto(true);
  };

  const handleCheckboxChange = (valor) => {
    if (presupuesto === valor) {
      setPresupuesto(0); 
    } else {
      setPresupuesto(valor);
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <div className="checkbox-group">
            {[...Array(9)].map((_, index) => {
              const valor = 20000 + index * 10000;
              return (
                <label key={valor} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={presupuesto === valor}
                    onChange={() => handleCheckboxChange(valor)}
                  />
                  {valor.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                  })}
                </label>
              );
            })}
          </div>
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
