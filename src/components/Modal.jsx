//cspell: ignore  categoria, subcripciones, categorias, soloNumeros, valorNumerico, esEdicion
import { useEffect, useState, useRef } from "react";
import { NumericFormat } from "react-number-format";
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

  const inputRef = useRef(null);
  const cantidadRef = useRef(null);

  const seleccionarTexto = (ref) => {
    if (ref.current) {
      ref.current.select();
    }
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
          <label htmlFor="precio">Precio del Producto</label>
          <NumericFormat
            placeholder="Ej: $3.309"
            id="precio"
            value={cantidad}
            thousandSeparator="."
            decimalSeparator=","
            prefix="$ "
            allowNegative={false}
            decimalScale={2}
            fixedDecimalScale
            inputMode="decimal"
            getInputRef={inputRef}
            onClick={() => seleccionarTexto(inputRef)}
            onValueChange={({ floatValue }) => {
              setCantidad(floatValue ?? 0);
            }}
            style={{ width: "100%" }}
          />
        </div>
        <div className="campo">
          <label htmlFor="unidades">Cantidad</label>
          <NumericFormat
            placeholder="¿Cuántos vas a comprar?"
            id="unidades"
            value={unidades}
            thousandSeparator="."
            decimalSeparator=","
            allowNegative={false}
            decimalScale={0}
            inputMode="numeric"
            getInputRef={cantidadRef}
            onClick={() => seleccionarTexto(cantidadRef)}
            onValueChange={({ floatValue }) => {
              setUnidades(floatValue ?? 0);
            }}
            style={{ width: "100%" }}
          />
        </div>
        <div className="campo">
          <label htmlFor="subTotal">Sub Total</label>
          <h3 className="subTotal">
            {(cantidad * unidades || 0).toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </h3>
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
