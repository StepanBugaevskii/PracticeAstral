import { useMemo } from "react";

export const useFormatData = (date: Date, options?: Intl.DateTimeFormatOptions) => {
	return useMemo(
		() => new Intl.DateTimeFormat("ru-RU", options).format(date),
		[date, options],
	);
};
