import './App.css';
import recipes from './recipes';
import { useState } from 'react';

function App() {
	const [randomRecipe, setRandomRecipe] = useState(0);

	const getRandomRecipe = () => {
		const randomInt = Math.floor(Math.random() * recipes.length);
		setRandomRecipe((prevState) => recipes[randomInt]);
	};

	return (
		<div className="App">
			<header className="flex justify-center box-shadow">
				<h1>YumPicks</h1>
			</header>
			<div className="flex flex-column gap-lg align-center justify-center padding-lg">
				<button className="btn" onClick={getRandomRecipe}>
					Spin
				</button>

				<div className="card">
					<div className="padding-md">{recipes[randomRecipe].recipe_name}</div>
				</div>
			</div>
		</div>
	);
}

export default App;
