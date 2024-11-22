// cspell: ignore Swipeable, Subcripciones, subcripciones, categoria, descripcion, gastosFiltrrados
import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  gastosFiltrrados,
  filtros,
}) => {
  const ordenarGastos = (gastos) => {
    return [...gastos].sort((a, b) =>
      a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" })
    );
  };

  const gastosOrdenados = filtros
    ? ordenarGastos(gastosFiltrrados)
    : ordenarGastos(gastos);

  return (
    <div className="listado-gastos contenedor">
      {filtros ? (
        <>
          <h2>{gastosOrdenados.length ? "Gastos" : "No Hay Nada Aquí"}</h2>
          {gastosOrdenados.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastosOrdenados.length ? "Gastos" : "No Hay Gastos, No Hay"}</h2>
          {gastosOrdenados.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
