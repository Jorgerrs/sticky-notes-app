import { useColor } from "../context/ColorContext";

export default function ColorSelector() {
  const { color, setColor } = useColor();

  return (
    <div>
      <label>Color de nota: </label>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
    </div>
  );
}