import { useState, useMemo } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import pokemons from "./data";

interface Pokemon {
  name: string;
  type: string[];
  id: number;
}

function App() {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [favorites, setFavorites] = useState<number[]>([]); // État pour les favoris

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

  const uniqueTypes = useMemo(() => {
    return Array.from(new Set(pokemons.flatMap((pokemon) => pokemon.type)));
  }, [pokemons]);

  const filteredPokemons = pokemons.filter((pokemon) => {
    const matchesType =
      selectedType === "all" || pokemon.type.includes(selectedType);
    const matchesSearchTerm = pokemon.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesType && matchesSearchTerm;
  });

  const favoritePokemons = pokemons.filter((pokemon) =>
    favorites.includes(pokemon.id)
  );

  const listPokemons = filteredPokemons.map((pokemon: Pokemon) => (
    <li key={pokemon.id}>
      <Cards
        {...pokemon}
        favorite={favorites.includes(pokemon.id)}
        onToggleFavorite={() => toggleFavorite(pokemon.id)}
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
        favorites={favoritePokemons} // Passer les favoris au composant Header
        onRemoveFavorite={removeFavorite} // Ajouter la fonction de suppression des favoris
      />
      <main></main>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listPokemons}
      </ul>
    </>
  );
}

export default App;
