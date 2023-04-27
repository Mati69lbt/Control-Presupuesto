const Filtros = ({ filtros, setFiltros }) => {
  return (
    <div className="filtros sombra contenedor">
      <form action="">
        <div className="campo">
          <label>Filtrar Gastos</label>
          <select value={filtros} onChange={(e) => setFiltros(e.target.value)}>
            <option value="">--- Seleccione Una ---</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Tiempo Libre</option>
            <option value="salud">Salud</option>
            <option value="subcripciones">Subcripciones</option>
            <option value="comida">Verduleria</option>
            <option value="comida">Polleria</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
