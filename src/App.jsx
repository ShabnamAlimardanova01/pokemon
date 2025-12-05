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
        background: "#dff3ff",
        padding: 20,
      }}
    >
      <h1>Pokémon Team Manager</h1>

    
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          flexWrap: "wrap",
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

      <h2>Your Pokémon Team</h2>

      <TeamList
        team={team}
        incrementPokemonCount={incrementPokemonCount}
        decrementPokemonCount={decrementPokemonCount}
        deletePokemon={deletePokemon}
      />

      <h2>Total Pokémon in Team: {totalPokemon}</h2>

      <h3>Individual Pokémon Count</h3>

      <PokemonTable team={team} />
    </div>
  );
}
