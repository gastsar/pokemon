import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Pokemon from "./interface";

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedType, setSelectedType] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon/");
      const data = await response.json();
      setPokemons(data);
      setLoading(false);
    }
    getData();
  }, []);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  const removeFavorite = (id: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favId) => favId !== id)
    );
  };

  const handlePokemonClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleModalClose = () => {
    setSelectedPokemon(null);
  };

  const uniqueTypes = useMemo(() => {
    const allTypes = pokemons.flatMap((pokemon) =>
      pokemon.apiTypes.map((type) => type.name)
    );
    return Array.from(new Set(allTypes));
  }, [pokemons]);

  const filteredPokemons = pokemons.filter((pokemon) => {
    const matchesType =
      selectedType === "all" ||
      pokemon.apiTypes.some((type) => type.name === selectedType);
    const matchesSearchTerm = pokemon.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesType && matchesSearchTerm;
  });

  const favoritePokemons = pokemons.filter((pokemon) =>
    favorites.includes(pokemon.id)
  );

  const listPokemons = filteredPokemons.map((pokemon: Pokemon) => (
    <li key={pokemon.id} className="cursor-pointer">
      <Cards
        {...pokemon}
        favorite={favorites.includes(pokemon.id)}
        onToggleFavorite={() => toggleFavorite(pokemon.id)}
        onhandlePokemonClick={() => handlePokemonClick(pokemon)}
      />
    </li>
  ));

  return (
    <>
      <Header
        uniqueTypes={uniqueTypes}
        selectedType={selectedType}
        searchTerm={searchTerm}
        onTypeChange={handleTypeChange}
        onSearchChange={handleSearchChange}
        favorites={favoritePokemons}
        onRemoveFavorite={removeFavorite}
      />
      <main className="w-full  h-96 relative">
        {loading ? (
          <p className="loader"></p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {listPokemons}
          </ul>
        )}

        {selectedPokemon && (
          <Modal pokemon={selectedPokemon} onClose={handleModalClose} />
        )}
      </main>
    </>
  );
}

export default App;
