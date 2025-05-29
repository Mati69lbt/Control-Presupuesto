import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

export const InputMoneda = ({
  value,
  onChange,
  name = "",
  style = {},
  placeholder = "",
  inputRef = null,
}) => {
  return (
    <NumericFormat
      name={name}
      value={value}
      getInputRef={inputRef}
      onValueChange={({ floatValue }) => onChange(floatValue ?? 0)}
      thousandSeparator="."
      decimalSeparator=","
      prefix="$ "
      allowNegative={false}
      decimalScale={2}
      fixedDecimalScale
      inputMode="decimal"
      placeholder={placeholder}
      style={style}
      onFocus={(e) => e.target.select()}
    />
  );
};
