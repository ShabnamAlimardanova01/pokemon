import TeamItem from "./TeamItem";

export default function TeamList({
  team,
  incrementPokemonCount,
  decrementPokemonCount,
  deletePokemon,
}) {
  return (
    <div>
      {team.map((p) => (
        <TeamItem
          key={p.id}
          pokemon={p}
          increment={incrementPokemonCount}
          decrement={decrementPokemonCount}
          remove={deletePokemon}
        />
      ))}
    </div>
  );
}
