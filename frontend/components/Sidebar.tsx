export default function Sidebar() {
  return (
    <aside
      style={{
        width: "250px",
        background: "#1f2937",
        color: "white",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h2>ExamVerse AI</h2>

      <hr style={{ margin: "20px 0" }} />

      <p>🏠 Dashboard</p>
      <p>📚 Notes</p>
      <p>📝 Quiz</p>
      <p>📄 Previous Papers</p>
      <p>🤖 AI Chat</p>
      <p>👤 Profile</p>
      <p>⚙️ Settings</p>
      <p>🚪 Logout</p>
    </aside>
  );
}
