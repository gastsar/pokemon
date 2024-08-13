import Pokemon from "../../interface";

// Modal Component
const Modal = ({
  pokemon,
  onClose,
}: {
  pokemon: Pokemon;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div className="flex gap-6">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            width={200}
            height={200}
            className="w-48 h-48 object-cover rounded-lg"
            style={{ aspectRatio: "200/200", objectFit: "cover" }}
          />
          <div className="flex-1 grid gap-4">
            <div>
              <h3 className="text-2xl font-bold">{pokemon.name}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {pokemon.apiTypes.map((type) => (
                  <span
                    key={type.name}
                    className="text-xs text-gray-500 border rounded-xl px-2"
                  >
                    {type.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-muted rounded-lg p-4">
                <div className="text-sm text-muted-foreground">HP</div>
                <div className="text-lg font-bold">{pokemon.stats.HP}</div>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <div className="text-sm text-muted-foreground">Attack</div>
                <div className="text-lg font-bold">{pokemon.stats.attack}</div>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <div className="text-sm text-muted-foreground">Defense</div>
                <div className="text-lg font-bold">{pokemon.stats.defense}</div>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <div className="text-sm text-muted-foreground">Sp. Attack</div>
                <div className="text-lg font-bold">
                  {pokemon.stats.special_attack}
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <div className="text-sm text-muted-foreground">Sp. Defense</div>
                <div className="text-lg font-bold">
                  {pokemon.stats.special_defense}
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <div className="text-sm text-muted-foreground">Speed</div>
                <div className="text-lg font-bold">{pokemon.stats.speed}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
