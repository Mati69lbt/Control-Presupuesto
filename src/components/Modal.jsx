//cspell: ignore  categoria, subcripciones, categorias, soloNumeros, valorNumerico, esEdicion
import { useEffect, useState } from "react";
import cerrarBTN from "../img/cerrar.svg";
import Mensaje from "./Mensaje";
import { InputMoneda } from "./Comparacion/InputMoneda ";

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

  // const [cantidad, setCantidad] = useState(0);
  const [cantidadTexto, setCantidadTexto] = useState("");

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

  /* ************************************ */

  const handleCantidadChange = (e) => {
    const valorTexto = e.target.value;

    const valorNumerico = Number(valorTexto.replace(/\D/g, ""));

    // Actualizamos ambos estados
    setCantidad(valorNumerico);
    setCantidadTexto(
      valorNumerico.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  };

  const formatearNumero = (valor) => {
    if (!valor) return "";
    return valor.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    });
  };

  /* ************************************ */

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

    const esEdicion = !!gastoEditar.nombre;
    const fechaActual = esEdicion ? fecha : new Date().toISOString();

    guardarGasto({
      nombre,
      cantidad,
      categoria: categoriaRandom.value,
      unidades,
      id,
      fecha: fechaActual,
      subTotal,
    });

    console.log("🧾 Gasto guardado:", {
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
            style={{ width: "100%" }}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Precio Unitario</label>
          <input
            type="text"
            id="cantidad"
            placeholder="Ej: 3000"
            value={formatearNumero(cantidad)}
            onChange={handleCantidadChange}
            style={{ width: "100%" }}
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
          <h3 className="subTotal">{formatearNumero(subTotal)}</h3>
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
