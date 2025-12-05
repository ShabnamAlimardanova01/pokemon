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
        maxWidth: 500,
        background: "white",
        padding: 15,
        borderRadius: 10,
        border: "1px solid #ccc",
      }}
    >

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          width: "40%",
        }}
      >
        <img
          width="50"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padId(
            pokemon.id
          )}.png`}
          alt={pokemon.name}
        />
        <strong>{pokemon.name}</strong>
      </div>

   
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <button
          onClick={handleDecrement}
          style={{
            background: "gold",
            padding: "5px 10px",
            border: "none",
            borderRadius: 5,
            outline: "none",
            cursor: "pointer",
          }}
        >
          -
        </button>

        <span style={{ fontWeight: 600 }}>{pokemon.count}</span>

        <button
          onClick={() => increment(pokemon.id)}
          style={{
            background: "lightgreen",
            padding: "5px 10px",
            border: "none",
            borderRadius: 5,
            outline: "none",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>

      <button
        onClick={() => remove(pokemon.id)}
        style={{
          background: "red",
          color: "white",
          padding: "8px 15px",
          border: "none",
          borderRadius: 8,
          marginLeft: 10,
          cursor: "pointer",
          outline: "none",
          fontWeight: "bold",
        }}
      >
        Remove
      </button>
    </div>
  );
}
