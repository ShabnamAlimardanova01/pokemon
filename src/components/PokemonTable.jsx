export default function PokemonTable({ team }) {
    return (
      <table
        style={{
          margin: "auto",
          width: "60%",
          background: "white",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr style={{ background: "#eee" }}>
            <th>Nickname</th>
            <th>Count</th>
            <th>Label</th>
          </tr>
        </thead>
  
        <tbody>
          {team.map((p) => (
            <tr key={p.id}>
              <td style={{ padding: 10, border: "1px solid #ccc" }}>
                {p.name}
              </td>
  
              <td
                style={{
                  padding: 10,
                  border: "1px solid #ccc",
                  color: "red",
                }}
              >
                {p.count}
              </td>
  
              <td style={{ padding: 10, border: "1px solid #ccc" }}>
                Pokémon
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  