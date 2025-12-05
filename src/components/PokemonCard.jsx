import { padId } from "../data/pokemonList";

export default function PokemonCard({ pokemon, addPokemon }) {
  return (
    <div
      style={{
        width: 150,
        padding: 15,
        background: "white",
        borderRadius: 10,
        boxShadow: "0 0 10px #ccc",
        textAlign: "center",
      }}
    >
      <img
        width="90"
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padId(
          pokemon.id
        )}.png`}
        alt={pokemon.name}
      />

      <h3>{pokemon.name}</h3>

      <button
        onClick={() => addPokemon(pokemon)}
        style={{
          padding: "6px 10px",
          background: "#007bff",
          color: "white",
          border: "none",
          outline: "none",
          borderRadius: 5,
        }}
      >
        Add to Team
      </button>
    </div>
  );
}
