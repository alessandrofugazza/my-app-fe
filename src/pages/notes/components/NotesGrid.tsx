import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import { IANote } from "../../../types/api/IANote";
import axios from "axios";
import Note from "./Note";

export default function NotesGrid() {
  const [notes, setNotes] = useState<IANote[]>([]);

  const fetchNotes = async () => {
    try {
      const re = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/notes/v1/`);
      setNotes(re.data);
    } catch (error) {
      console.error("There was an error fetching the notes!", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  });

  return (
    <Row className="g-4">
      {notes.map((note) => (
        <Note title={note.title} content={note.content} link={note.link} key={note.id} />
      ))}
    </Row>
  );
}
