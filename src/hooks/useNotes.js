import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (text, color) => {
    if (text.trim() === "") return;

    const newNote = {
      id: uuidv4(),
      text,
      color,
    };
    setNotes((prev) => [...prev, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return { notes, addNote, deleteNote };
};