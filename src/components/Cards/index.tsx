import { FiHeart } from "react-icons/fi";
import { GoHeartFill } from "react-icons/go";

interface PokemonProps {
  name: string;
  type: string[];
  favorite: boolean;
  onToggleFavorite: () => void;
}

const Cards = ({ name, type, favorite, onToggleFavorite }: PokemonProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
      <div className="relative">
        <img
          src="https://placehold.it/200x200"
          alt={name}
          width={200}
          height={200}
          className="w-full h-48 object-cover"
          style={{ aspectRatio: "200/200", objectFit: "cover" }}
        />
        <button
          className="absolute top-2 right-2 text-primary"
          onClick={onToggleFavorite}
        >
          {!favorite ? (
            <FiHeart className="w-6 h-6 hover:text-red-500" />
          ) : (
            <GoHeartFill className="w-6 h-6 text-red-500" />
          )}
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <ul className="flex flex-wrap gap-2 mt-2">
          {type.map((type) => (
            <li
              key={type}
              className="text-sm text-gray-500 border rounded-xl px-2"
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
