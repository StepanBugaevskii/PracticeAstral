import { CssGrid } from "./cssGrid/Grid";
import { Block } from "./myBlock/Block";
import { DateFormat } from "./DateFormat/DateFormat";
import { LockalStorageForm } from "./localStorageForm/LockalStorageForm";
import { FlexGrid } from "./flexbox/FlexGrid";
import { FormatNumber } from "./numberFormater/FormatNumber";

function App() {
	return (
		<>
			<h1>Практика: </h1>
			<h2>Пример media-query</h2>
			<Block />
			<h2>CSS Grid</h2>
			<CssGrid />
			<h2>Форматирование даты</h2>
			<DateFormat />
			<h2>Форма</h2>
			<LockalStorageForm />
			<h2>Flex Grid</h2>
			<FlexGrid />
			<h2>Формат числа</h2>
			<FormatNumber />
			<h2>Обработка статусов запроса на сервер лежит в fetchController</h2>
		</>
	);
}

export default App;
