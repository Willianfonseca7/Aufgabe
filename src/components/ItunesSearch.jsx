import { useEffect, useState } from "react";
import searchItunes from "../exercises/itunes.mjs";

export default function ItunesSearch() {
  const [query, setQuery] = useState("Metallica"); // termo padrão
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Vai rodar sempre que "query" mudar
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await searchItunes(query);
        setResults(data.results);
      } catch (err) {
        console.error("Erro:", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [query]); // <---- O Dependency Array do exercício

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.search.value;
    setQuery(input); // troca o termo da busca
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>iTunes Suche</h2>

      {/* Formulário */}
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          placeholder="Artist / Song..."
          style={{ padding: "8px", width: "200px" }}
        />
        <button style={{ marginLeft: "10px", padding: "8px 12px" }}>
          Buscar
        </button>
      </form>

      {loading && <p>Carregando...</p>}

      {/* Lista de resultados */}
      <div style={{ marginTop: "20px" }}>
        {results.map((item) => (
          <div key={item.trackId} style={{ marginBottom: "10px" }}>
            <strong>{item.trackName}</strong> — {item.artistName}
          </div>
        ))}
      </div>
    </div>
  );
}
