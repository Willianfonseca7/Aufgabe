import { useState } from "react";

export default function KontaktFormular() {
  const [file, setFile] = useState(null); // guarda o arquivo selecionado

  // Envio do formulário (simulado)
  function handleSubmit(e) {
    e.preventDefault(); // evita reload da página

    console.log("Name:", e.target.name.value);
    console.log("Message:", e.target.message.value);
    console.log("File:", file);

    alert("Nachricht gesendet! (Simulation) 📨");
  }

  // Atualiza o state quando o usuário escolhe um arquivo
  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-slate-900 text-white rounded-xl flex flex-col gap-3"
    >
      <h2 className="text-2xl font-bold mb-2">
        Kontakt Formular / Contact Form
      </h2>

      {/* Campo de nome */}
      <label className="flex flex-col gap-1">
        Name / Nome
        <input
          type="text"
          name="name"
          className="p-2 rounded bg-slate-800 border border-slate-700"
          required
        />
      </label>

      {/* Campo de mensagem */}
      <label className="flex flex-col gap-1">
        Nachricht / Message
        <textarea
          name="message"
          className="p-2 rounded bg-slate-800 border border-slate-700"
          rows={4}
          required
        />
      </label>

      {/* Campo de upload de arquivo */}
      <label className="flex flex-col gap-1">
        Datei anhängen / Attach file
        <input
          type="file"
          onChange={handleFileChange}
          className="block text-sm text-slate-300"
        />
      </label>

      {/* Mostra o nome do arquivo selecionado */}
      {file && (
        <p className="text-sm text-emerald-400">
          Ausgewählte Datei / File selected:{" "}
          <span className="font-medium">{file.name}</span>
        </p>
      )}

      <button
        type="submit"
        className="mt-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg font-semibold"
      >
        Senden / Send
      </button>
    </form>
  );
}
