import { padId } from "../data/pokemonList";

export default function TeamItem({ pokemon, increment, decrement, remove }) {
  const handleDecrement = () => {
    if (pokemon.count === 1) {
      remove(pokemon.id);
    } else {
      decrement(pokemon.id);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "15px auto",
        width: "90%",
        maxWidth: 600,
        background: "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
        padding: 20,
        borderRadius: 15,
        boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateX(5px)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateX(0)";
        e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
      }}
    >

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
          width: "40%",
        }}
      >
        <img
          width="60"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padId(
            pokemon.id
          )}.png`}
          alt={pokemon.name}
          style={{
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
          }}
        />
        <strong style={{ fontSize: "1.1em", color: "#333" }}>{pokemon.name}</strong>
      </div>

   
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
        }}
      >
        <button
          onClick={handleDecrement}
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            color: "white",
            padding: "8px 15px",
            border: "none",
            borderRadius: 20,
            outline: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1.1em",
            transition: "all 0.2s ease",
            boxShadow: "0 3px 6px rgba(245, 87, 108, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          ➖
        </button>

        <span style={{ 
          fontWeight: 700, 
          fontSize: "1.3em",
          color: "#667eea",
          minWidth: "30px",
          display: "inline-block"
        }}>
          {pokemon.count}
        </span>

        <button
          onClick={() => increment(pokemon.id)}
          style={{
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            color: "white",
            padding: "8px 15px",
            border: "none",
            borderRadius: 20,
            outline: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1.1em",
            transition: "all 0.2s ease",
            boxShadow: "0 3px 6px rgba(79, 172, 254, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          ➕
        </button>
      </div>

      <button
        onClick={() => remove(pokemon.id)}
        style={{
          background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: 20,
          marginLeft: 10,
          cursor: "pointer",
          outline: "none",
          fontWeight: "bold",
          transition: "all 0.2s ease",
          boxShadow: "0 3px 6px rgba(250, 112, 154, 0.3)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 5px 10px rgba(250, 112, 154, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 3px 6px rgba(250, 112, 154, 0.3)";
        }}
      >
        🗑️ Remove
      </button>
    </div>
  );
}
