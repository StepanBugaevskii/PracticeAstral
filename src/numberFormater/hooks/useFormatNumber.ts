import { useMemo } from "react";

export const useNumberFormat = (value: number, options?: Intl.NumberFormatOptions) => {
	return useMemo(
		() => new Intl.NumberFormat("ru-RU", options).format(value),
		[value, options],
	);
};
