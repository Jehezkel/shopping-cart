import NumberFormat from "react-number-format";

interface prop {
  val: number;
}
export const PriceVal = (val: prop) => {
  return (
    <NumberFormat
      value={val.val}
      suffix=" zł"
      decimalSeparator=","
      thousandSeparator=" "
      displayType="text"
      fixedDecimalScale={true}
      decimalScale={2}
    />
  );
};
