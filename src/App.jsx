import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import TeamList from "./components/TeamList";
import PokemonTable from "./components/PokemonTable";
import { pokemonList } from "./data/pokemonList";

export default function App() {
  const [team, setTeam] = useState([]);

  const addPokemonToTeam = (pokemon) => {
    const exists = team.find((p) => p.id === pokemon.id);
    if (exists) {
      incrementPokemonCount(pokemon.id);
    } else {
      setTeam([...team, { ...pokemon, count: 1 }]);
    }
  };

  const deletePokemon = (id) => {
    setTeam(team.filter((p) => p.id !== id));
  };

  const incrementPokemonCount = (id) => {
    setTeam(
      team.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      )
    );
  };

  const decrementPokemonCount = (id) => {
    setTeam(
      team.map((p) =>
        p.id === id && p.count > 1
          ? { ...p, count: p.count - 1 }
          : p
      )
    );
  };

  const totalPokemon = team.reduce((sum, p) => sum + p.count, 0);

  return (
    <div
      style={{
        textAlign: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        minHeight: "100vh",
        padding: "30px 20px",
      }}
    >
      <h1 style={{ 
        color: "white", 
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        marginBottom: "30px",
        fontSize: "2.5em"
      }}>
        ⚡ Pokémon Team Manager ⚡
      </h1>

    
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 25,
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        {pokemonList.map((p) => (
          <PokemonCard
            key={p.id}
            pokemon={p}
            addPokemon={addPokemonToTeam}
          />
        ))}
      </div>

      <h2 style={{ 
        color: "white", 
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        marginTop: "40px",
        marginBottom: "20px"
      }}>
        Your Pokémon Team
      </h2>

      <TeamList
        team={team}
        incrementPokemonCount={incrementPokemonCount}
        decrementPokemonCount={decrementPokemonCount}
        deletePokemon={deletePokemon}
      />

      <h2 style={{ 
        color: "white", 
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        marginTop: "40px",
        marginBottom: "20px",
        fontSize: "1.8em"
      }}>
        Total Pokémon in Team: <span style={{ color: "#ffd700" }}>{totalPokemon}</span>
      </h2>

      <h3 style={{ 
        color: "white", 
        textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        marginTop: "30px",
        marginBottom: "20px"
      }}>
        Individual Pokémon Count
      </h3>

      <PokemonTable team={team} />
    </div>
  );
}
