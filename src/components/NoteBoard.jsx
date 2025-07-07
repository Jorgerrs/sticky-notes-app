import { useState } from "react";
import { useNotes } from "../hooks/useNotes";
import { useColor } from "../context/ColorContext";
import Note from "./Note";

export default function NoteBoard() {
  const { notes, addNote, deleteNote } = useNotes();
  const { color } = useColor();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(text, color);
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Escribe tu nota..." />
        <button type="submit">Añadir Nota</button>
      </form>

      <div className="note-board">
  {notes.length === 0 ? (
    <p>No hay notas todavía.</p>
  ) : (
    notes.map((note) => (
      <Note key={note.id} {...note} onDelete={deleteNote} />
    ))
  )}
</div>

    </div>
  );
}