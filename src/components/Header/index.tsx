import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { GoHeartFill } from "react-icons/go";
import { IoFilterCircleOutline } from "react-icons/io5";

interface HeaderProps {
  uniqueTypes: string[];
  selectedType: string;
  searchTerm: string;
  onTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  favorites: Pokemon[];
  onRemoveFavorite: (id: number) => void;
}

interface Pokemon {
  name: string;
  id: number;
  apiTypes: {
    name: string;
    image: string;
  }[];
}

const Header = ({
  uniqueTypes,
  selectedType,
  searchTerm,
  onTypeChange,
  onSearchChange,
  favorites,
  onRemoveFavorite,
}: HeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="mx-auto max-w-7xl px-8 py-2 h-fit mb-6 shadow-lg">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Pokémons</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Rechercher un Pokémon..."
            value={searchTerm}
            onChange={onSearchChange}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <GoHeartFill className="w-6 h-6 text-red-500" />
              <span className="text-sm font-medium">
                Mes favoris ({favorites.length})
              </span>
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                <ul className="p-2">
                  {favorites.length > 0 ? (
                    favorites.map((pokemon) => (
                      <li
                        key={pokemon.id}
                        className="py-2 px-4 flex items-center justify-between hover:bg-gray-100"
                      >
                        <span>{pokemon.name}</span>
                        <FiTrash2
                          className="w-4 h-4 text-gray-500 hover:text-red-500 cursor-pointer"
                          onClick={() => onRemoveFavorite(pokemon.id)}
                        />
                      </li>
                    ))
                  ) : (
                    <li className="py-2 px-4 text-center text-gray-500">
                      Aucun favori
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="filter-select">
              <IoFilterCircleOutline className="w-5 h-5" />
            </label>
            <select
              id="filter-select"
              value={selectedType}
              onChange={onTypeChange}
              className="px-2 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">Tous</option>
              {uniqueTypes.map((unique) => (
                <option key={unique} value={unique}>
                  {unique}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
