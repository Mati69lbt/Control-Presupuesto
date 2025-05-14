//cspell: ignore  categoria, subcripciones, categorias
import { useEffect, useState } from "react";
import cerrarBTN from "../img/cerrar.svg";
import Mensaje from "./Mensaje";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar,
}) => {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [unidades, setUnidades] = useState(1);
  const [id, setId] = useState("");
  const [fecha, setFecha] = useState("");

  const categorias_nombre = [
    { value: "ahorro" },
    { value: "gastos" },
    { value: "comida" },
    { value: "casa" },
    { value: "salud" },
    { value: "ocio" },
    { value: "subcripciones" },
  ];

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setUnidades(gastoEditar.unidades);
      setId(gastoEditar.id);
      setFecha(gastoEditar.fecha);
    }
  }, [gastoEditar]);

  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({});
    setTimeout(() => {
      setModal(false);
    }, 1000);
  };

  const subTotal = cantidad * unidades;

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, cantidad].includes("")) {
      setMensaje("Todos los Campos son Obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }
    const categoriaRandom =
      categorias_nombre[Math.floor(Math.random() * categorias_nombre.length)];
    guardarGasto({
      nombre,
      cantidad,
      categoria: categoriaRandom.value,
      unidades,
      id,
      fecha,
      subTotal,
    });
    
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrarBTN} alt="cerrarBtn" onClick={ocultarModal} />
      </div>
      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend>{gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            id="nombre"
            placeholder="Añade el Nombre del Gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Precio Unitario</label>
          <input
            type="number"
            id="cantidad"
            placeholder="Añade la cantidad del Gasto, ej: $300"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="unidades">Cantidad</label>
          <input
            type="number"
            id="unidades"
            placeholder="¿Cuantos vas a comprar?"
            value={unidades}
            onChange={(e) => setUnidades(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="subTotal">Sub Total</label>
          <h3 className="subTotal">$ {subTotal}</h3>
        </div>

        <input
          type="submit"
          value={gastoEditar.nombre ? "Actualizar Gasto" : "Añadir Gasto"}
        />
        <br />
        <br />
        <button onClick={ocultarModal}>Cerrar</button>
      </form>
    </div>
  );
};

export default Modal;
