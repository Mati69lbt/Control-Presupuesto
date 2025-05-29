// cspell: ignore categoria, ListadoComparacion, Comparacion, gastosFiltrrados, setGastosFiltrrados
import { useEffect, useRef, useState } from "react";
import Filtros from "./components/Filtros";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
import { generarId } from "./helpers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import ListadoComparacion from "./components/Comparacion/ListadoComparacion";

function App() {
  const refTablaComparacion = useRef(null);

  const [gastos, setGastos] = useState(
    JSON.parse(localStorage.getItem("gastos")) || []
  );

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastoEditar, setGastoEditar] = useState({});

  const [filtros, setFiltros] = useState("");
  const [gastosFiltrrados, setGastosFiltrrados] = useState([]);

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0);
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? []);
  }, [presupuesto, gastos]);

  useEffect(() => {
    if (filtros) {
      const gastosFiltrados = gastos.filter(
        (gasto) => gasto.categoria === filtros
      );
      setGastosFiltrrados(gastosFiltrados);
    }
  }, [filtros]);

  useEffect(() => {
    const presupuestoLs = Number(localStorage.getItem("presupuesto")) ?? 0;
    if (presupuestoLs > 0) {
      setIsValidPresupuesto(true);
    }
  }, []);

  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      );
      setGastos(gastosActualizados);
      setGastoEditar({});
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosActualizados);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        tablaRef={refTablaComparacion}
      />
      {isValidPresupuesto && (
        <>
          <main>
            {/* <Filtros filtros={filtros} setFiltros={setFiltros} /> */}
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              gastosFiltrrados={gastosFiltrrados}
              filtros={filtros}
              tablaRef={refTablaComparacion}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="IconoNuevoGasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}
      <hr />

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
      <br />
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} - MDelgado (May) - V4</p>
      </div>
    </div>
  );
}

export default App;
