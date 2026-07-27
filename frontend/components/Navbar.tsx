export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#2563eb",
        color: "white",
      }}
    >
      <h2>ExamVerse AI</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/">Home</a>
        <a href="#">Notes</a>
        <a href="#">Quiz</a>
        <a href="#">PYQ</a>
        <a href="#">AI Chat</a>
      </div>
    </nav>
  );
}
