import { padId } from "../data/pokemonList";

export default function PokemonCard({ pokemon, addPokemon }) {
  return (
    <div
      style={{
        width: 180,
        padding: 20,
        background: "linear-gradient(145deg, #ffffff 0%, #f0f0f0 100%)",
        borderRadius: 20,
        boxShadow: "0 8px 16px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.3), 0 6px 12px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.1)";
      }}
    >
      <img
        width="100"
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padId(
          pokemon.id
        )}.png`}
        alt={pokemon.name}
        style={{
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
          marginBottom: "10px",
        }}
      />

      <h3 style={{ 
        margin: "10px 0", 
        color: "#333",
        fontSize: "1.1em",
        fontWeight: "600"
      }}>
        {pokemon.name}
      </h3>

      <button
        onClick={() => addPokemon(pokemon)}
        style={{
          padding: "10px 20px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          border: "none",
          outline: "none",
          borderRadius: 25,
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "0.9em",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 8px rgba(102, 126, 234, 0.3)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 6px 12px rgba(102, 126, 234, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(102, 126, 234, 0.3)";
        }}
      >
        ➕ Add to Team
      </button>
    </div>
  );
}
