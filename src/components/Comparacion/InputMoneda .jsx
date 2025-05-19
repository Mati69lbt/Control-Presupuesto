import { useEffect, useState } from "react";

export const InputMoneda = ({
  value,
  onChange,
  name = "",
  style = {},
  placeholder = "",
}) => {
  const [texto, setTexto] = useState(value);

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
    const cleaned = raw.replace(/\D/g, "");
    const numero = Number(cleaned);
    setTexto(raw); // mostramos lo que el usuario escribe
    onChange(numero); // pasamos el número limpio
  };

  const handleBlur = () => {
    const numero = Number(texto.replace(/\D/g, "")) || 0;
    const textoFormateado = numero.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    setTexto(textoFormateado);
  };

  return (
    <input
      type="text"
      name={name}
      value={texto}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={(e) => e.target.select()}
    />
  );
};
