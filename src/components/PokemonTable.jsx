export default function PokemonTable({ team }) {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
        <table
          style={{
            margin: "auto",
            width: "60%",
            maxWidth: 600,
            background: "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0.95) 100%)",
            borderCollapse: "collapse",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          }}
        >
          <thead>
            <tr style={{ 
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white"
            }}>
              <th style={{ padding: "15px", textAlign: "left", fontWeight: "600" }}>Nickname</th>
              <th style={{ padding: "15px", textAlign: "center", fontWeight: "600" }}>Count</th>
              <th style={{ padding: "15px", textAlign: "left", fontWeight: "600" }}>Label</th>
            </tr>
          </thead>
    
          <tbody>
            {team.map((p, index) => (
              <tr 
                key={p.id}
                style={{
                  background: index % 2 === 0 ? "rgba(255,255,255,0.8)" : "rgba(240,240,240,0.8)",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(102, 126, 234, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = index % 2 === 0 ? "rgba(255,255,255,0.8)" : "rgba(240,240,240,0.8)";
                }}
              >
                <td style={{ 
                  padding: "15px", 
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  fontWeight: "500",
                  color: "#333"
                }}>
                  {p.name}
                </td>
    
                <td
                  style={{
                    padding: "15px",
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                    color: "#667eea",
                    fontWeight: "700",
                    fontSize: "1.2em",
                    textAlign: "center",
                  }}
                >
                  {p.count}
                </td>
    
                <td style={{ 
                  padding: "15px", 
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  color: "#666"
                }}>
                  Pokémon
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  