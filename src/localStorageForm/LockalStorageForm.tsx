import "./style.css";
import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

type User = {
	name: string;
	age: number;
	surname: string;
};

export const LockalStorageForm = () => {
    const [value, set] = useLocalStorage("user", {} as User);
	const [user, setUser] = useState<User>({
		name: value.name,
		age: value.age,
		surname: value.surname,
	});

	return (
		<div className="input-fields">
			<form onSubmit={() => set(user)}>
				<input
					className="block1"
					type="text"
					value={user.name}
					onChange={(e) => setUser({ ...user, name: e.target.value })}
				/>
				<input
					className="block1"
					type="text"
					value={user.age}
					onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
				/>
				<input
					className="block1"
					type="text"
					value={user.surname}
					onChange={(e) => setUser({ ...user, surname: e.target.value })}
				/>
                <button type="submit">Записать в localStorage</button>
			</form>
		</div>
	);
};
