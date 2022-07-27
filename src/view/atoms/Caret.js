import "./Caret.css";
const STYLE = {
  animation: "blinker 1s linear infinite",
  padding: 6,
  margin: 3,
  background: "gray",
};
export default function Caret() {
  return <span style={STYLE}> </span>;
}
