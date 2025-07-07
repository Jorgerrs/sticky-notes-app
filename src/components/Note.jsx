export default function Note({ id, text, color, onDelete }) {
  return (
    <div className="note" style={{ backgroundColor: color }}>
      <p>{text}</p>
      <button onClick={() => onDelete(id)}>Eliminar</button>
    </div>
  );
}