import "./App.css";
import Cards from "./components/Cards";
import pokemons from "./data";

interface Pokemon {
  name: string;
  type: string[];
  id: number;
}

function App() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {pokemons.map((pokemon: Pokemon) => (
        <li key={pokemon.id}>
          <Cards {...pokemon} />
        </li>
      ))}
    </ul>
  );
}

export default App;
