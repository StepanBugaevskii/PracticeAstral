import { useNumberFormat } from "./hooks/useFormatNumber";
import "./style.css";

export const FormatNumber = () => {
	const number = 2000;
	return (
		<>
			<div className="block-formated">{number.toLocaleString("ru-RU")}</div>
			<div className="block-formated">{useNumberFormat(100000)}</div>
            <div className="block-formated">{useNumberFormat(1356.67)}</div>
			<div className="block-formated">
				{useNumberFormat(100000, { style: "currency", currency: "RUB" })}
			</div>
            <div className="block-formated">
				{useNumberFormat(100000, { style: "currency", currency: "USD", currencyDisplay: 'symbol' })}
			</div>
            <div className="block-formated">
				{useNumberFormat(0.56, { style: "percent", minimumFractionDigits: 2 })}
			</div>
            <div className="block-formated">
				{useNumberFormat(15000000, { notation: "compact" })}
			</div>
		</>
	);
};
