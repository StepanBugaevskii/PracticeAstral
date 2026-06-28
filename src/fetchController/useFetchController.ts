import { useState } from "react";
export const useFetchController = (url: string) => {
	const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState();
	const fetchData = async () => {
		try {
			setError("");
			setLoading(true);
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const json = await response.json();
			setData(json);
		} catch (e) {
			if (e instanceof Error) {
				setError(e.message);
			}
		} finally {
			setLoading(false);
		}
	};
	fetchData();
	return [data, loading, error] as const;
};
