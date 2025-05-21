import { useEffect, useState } from "react";

export const InputMoneda = ({
  value,
  onChange,
  name = "",
  style = {},
  placeholder = "",
}) => {
  const [texto, setTexto] = useState(value);

  const [modificado, setModificado] = useState(false);

  useEffect(() => {
    if (value === null || value === undefined) {
      setTexto("");
      return;
    }

    const numero = Number(value);
    if (isNaN(numero)) {
      setTexto("");
      return;
    }

    if (numero === 0) {
      setTexto(
        numero.toLocaleString("es-AR", {
          style: "currency",
          currency: "ARS",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      );
    } else {
      setTexto(numero.toString());
    }
  }, [value]);

  const handleChange = (e) => {
    const raw = e.target.value;
    setModificado(true); // 👉 esto marca que hubo edición

    const cleaned = raw.replace(/\D/g, "");
    const numero = Number(cleaned);

    setTexto(raw);
    if (!isNaN(numero)) {
      onChange(numero);
    }
  };

  const handleBlur = () => {
    if (!modificado) return;

    const numero = Number(texto.replace(/\D/g, ""));
    const textoFormateado = numero.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    setTexto(textoFormateado);
    setModificado(false); // Reinicio
  };

  return (
    <input
      type="text"
      name={name}
      value={texto}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={(e) => {
        e.target.select();
        setModificado(false); // Por si viene desde tab sin editar
      }}
    />
  );
};
